/*
 * Copyright 2025 Dwi Rachmat Putra
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// === BACKGROUND.JS (Artist - Song Title FIX) ===
importScripts('oauth.js');
importScripts('sync-utils.js');

// === INCREMENTAL SYNC LOGIC ===

// 1. Setup Alarm
chrome.runtime.onInstalled.addListener(() => {
  chrome.alarms.create(SYNC_CONFIG.ALARM_NAME, {
    periodInMinutes: SYNC_CONFIG.SYNC_INTERVAL_MINUTES
  });
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === SYNC_CONFIG.ALARM_NAME) {
    console.log("[Background] Sync Alarm Triggered");
    startSequentialSync();
  }
});

// 2. Listen for Trigger Messages
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'TRIGGER_SYNC') {
    console.log("[Background] Manual Sync Triggered");
    startSequentialSync().then(res => {
      sendResponse({ status: 'started' });
    });
    return true; // Keep channel open
  }
});

// 3. Locking Mechanism
let isSyncing = false;

async function startSequentialSync() {
  if (isSyncing) {
    console.log("[Sync] Skip: Lock held");
    return;
  }

  // Also check Web Locks API for cross-instance safety
  // Note: background service works are singletons in MV3 usually, 
  // but navigator.locks is good practice if we ever have multiple contexts
  if (navigator.locks) {
    await navigator.locks.request('link_list_sync_lock', { ifAvailable: true }, async (lock) => {
      if (!lock) {
        console.log("[Sync] Skip: WebLock held by another instance");
        return;
      }
      isSyncing = true;
      try {
        await performIncrementalSync();
      } finally {
        isSyncing = false;
      }
    });
  } else {
    // Fallback if no Web Locks
    isSyncing = true;
    try {
      await performIncrementalSync();
    } finally {
      isSyncing = false;
    }
  }
}

async function performIncrementalSync() {
  console.log("[Sync] Starting...");

  try {
    // A. Get Token
    const token = await getAuthTokenBG();
    if (!token) return console.log("[Sync] No auth token");

    // B. Get Local State
    const localData = await chrome.storage.local.get(['pendingUpdates', 'lastAppliedUpdate', 'driveFolderId']);
    const pendingUpdates = localData.pendingUpdates || [];
    let lastAppliedUpdate = localData.lastAppliedUpdate || 0;
    let driveFolderId = localData.driveFolderId;

    // C. Get Folder ID (or create if missing)
    if (!driveFolderId) {
      driveFolderId = await getClassroomFolderId(token, SYNC_CONFIG.FOLDER_NAME);
      if (!driveFolderId) {
        driveFolderId = await createFolder(token, SYNC_CONFIG.FOLDER_NAME);
      }
      await chrome.storage.local.set({ driveFolderId });
    }

    // D. PUSH: Upload Pending Updates
    if (pendingUpdates.length > 0) {
      console.log(`[Sync] Pushing ${pendingUpdates.length} updates...`);
      for (const update of pendingUpdates) {
        // Filename: update_<timestamp>_<uuid>.json
        const filename = `${SYNC_CONFIG.UPDATE_PREFIX}${update.timestamp}_${update.id}.json`;
        await uploadFile(token, JSON.stringify(update), filename, driveFolderId);
      }
      // Clear queue after successful upload 
      // (Risk: if crash here, we re-upload duplicates. De-duping on ID handles this on read side)
      await chrome.storage.local.set({ pendingUpdates: [] });
    }

    // E. PULL: Download New Updates
    const files = await listUpdateFiles(token, driveFolderId, lastAppliedUpdate);

    if (files.length > 0) {
      console.log(`[Sync] Found ${files.length} new remote updates.`);
      // Sort by name (timestamp is in name and sortable) 
      // update_1700000000000_id.json
      files.sort((a, b) => a.name.localeCompare(b.name));

      for (const file of files) {
        const content = await downloadFile(token, file.id);
        if (content) {
          const action = typeof content === 'string' ? JSON.parse(content) : content;

          // Apply to Local Storage
          await applyUpdateAction(action);

          // Update checkpoint
          // We use file.createdTime or just the timestamp from filename 
          // Ideally we track the file's ID or unique timestamp to avoid reprocessing
          // Simple way: track the timestamp of the last applied file
          const match = file.name.match(/update_(\d+)_/);
          if (match) {
            lastAppliedUpdate = Math.max(lastAppliedUpdate, parseInt(match[1]));
          }
        }
      }
      await chrome.storage.local.set({ lastAppliedUpdate });
      // Notify UI to refresh
      chrome.runtime.sendMessage({ type: "LINKS_UPDATED" });
    }

    console.log("[Sync] Completed.");

  } catch (err) {
    console.error("[Sync] Failed:", err);
  }
}

// === HELPER FUNCTIONS (API Calls) ===

function getAuthTokenBG() {
  return new Promise(resolve => {
    chrome.storage.local.get(['google_token'], (res) => resolve(res.google_token));
  });
}

// Note: Using fetch directly as we are in Worker
async function getClassroomFolderId(token, folderName) {
  const q = `mimeType='application/vnd.google-apps.folder' and name='${folderName}' and trashed=false`;
  const res = await fetch(`https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(q)}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  const data = await res.json();
  return (data.files && data.files.length > 0) ? data.files[0].id : null;
}

async function createFolder(token, folderName) {
  const metadata = {
    name: folderName,
    mimeType: 'application/vnd.google-apps.folder'
  };
  const res = await fetch('https://www.googleapis.com/drive/v3/files', {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(metadata)
  });
  const data = await res.json();
  return data.id;
}

async function uploadFile(token, content, filename, parentId) {
  const metadata = { name: filename, parents: [parentId] };
  const form = new FormData();
  form.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
  form.append('file', new Blob([content], { type: 'application/json' }));

  const res = await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart', {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
    body: form
  });
  return res.json();
}

async function listUpdateFiles(token, parentId, minTimestamp) {
  // Query: name contains 'update_' and name > 'update_TIMESTAMP' (lexicographical sort works for fixed length timestamps, but simpler to filter post-fetch if not huge)
  // Actually, we can't easily do string comparison on filenames securely in query for timestamps
  // We will fetch all updates created after a certain Modified Time if possible, or just list recent ones.
  // Best bet: "name contains 'update_'" and then filter in memory for simplicity unless thousands.

  const q = `'${parentId}' in parents and name contains '${SYNC_CONFIG.UPDATE_PREFIX}' and trashed=false`;
  let files = [];
  let pageToken = null;

  do {
    const url = `https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(q)}&fields=nextPageToken,files(id,name,createdTime)&pageSize=100` + (pageToken ? `&pageToken=${pageToken}` : '');
    const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
    const data = await res.json();
    if (data.files) files = files.concat(data.files);
    pageToken = data.nextPageToken;
  } while (pageToken);

  // Filter newer than lastAppliedUpdate
  return files.filter(f => {
    const match = f.name.match(/update_(\d+)_/);
    return match && parseInt(match[1]) > minTimestamp;
  });
}

async function downloadFile(token, fileId) {
  const res = await fetch(`https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.text();
}

async function applyUpdateAction(action) {
  // This needs to safely modify myLinks
  const currentStore = await chrome.storage.local.get(['myLinks', 'customLabels', 'pinnedLabels']);
  let myLinks = currentStore.myLinks || [];

  switch (action.type) {
    case 'ADD':
      // payload = full link object
      // Check duplicate by ID or URL
      if (!myLinks.some(l => l.url === action.payload.url)) { // Simplified dup check
        myLinks.push(action.payload);
      }
      break;
    case 'UPDATE':
      // payload = { url (key), changes } or full object
      const idx = myLinks.findIndex(l => l.url === action.payload.url);
      if (idx !== -1) {
        myLinks[idx] = { ...myLinks[idx], ...action.payload };
      }
      break;
    case 'DELETE':
      // payload = { url } or index
      myLinks = myLinks.filter(l => l.url !== action.payload.url);
      break;
  }

  await chrome.storage.local.set({ myLinks });
}




chrome.action.onClicked.addListener(async (tab) => {
  if (!tab || !tab.id || !tab.url) return;

  let pageTitle = tab.title || tab.url;

  const isMusic = tab.url.includes("music.youtube.com");
  const isYouTube = tab.url.includes("youtube.com") && !isMusic;
  if (isMusic) {
    try {
      const [result] = await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: getYouTubeMusicInfoEnhanced
      });
      if (result && result.result) {
        pageTitle = result.result;
      }
      enableAutoMusicWatcher(tab.id);
    } catch (err) {
    }
  } else if (isYouTube) {
    try {
      const [result] = await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: getYouTubeVideoTitle
      });
      pageTitle = result?.result || tab.title || tab.url;
      enableAutoVideoWatcher(tab.id);
    } catch (err) {
    }
  } else {
    try {
      const [result] = await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => document.title
      });
      pageTitle = result?.result || tab.title || tab.url;
    } catch (err) {
    }
  }

  saveLink(tab.url, pageTitle);
});

// === Function to get song info (enhanced) ===
function getYouTubeMusicInfoEnhanced() {
  const getInfo = () => {
    // YouTube Music player bar elements
    const titleEl =
      document.querySelector("yt-formatted-string.title.ytmusic-player-bar") ||
      document.querySelector("ytmusic-player-bar yt-formatted-string.title");

    // Different UI versions use different selectors for artist
    const artistEl =
      document.querySelector("ytmusic-player-bar a.yt-simple-endpoint[href^='channel/']") ||
      document.querySelector("ytmusic-player-bar .byline a") ||
      document.querySelector("ytmusic-player-bar .subtitle a");

    const title = titleEl?.textContent?.trim() || "";
    const artist = artistEl?.textContent?.trim() || "";

    if (artist && title) return `${artist} - ${title}`;
    if (title) return title;
    return document.title;
  };

  // Sometimes elements haven't loaded yet, retry 5 times
  let attempts = 0;
  return new Promise((resolve) => {
    const tryGet = () => {
      const result = getInfo();
      if ((result && result !== document.title) || attempts >= 5) {
        resolve(result);
      } else {
        attempts++;
        setTimeout(tryGet, 400);
      }
    };
    tryGet();
  });
}

// === Function to get YouTube video info ===
function getYouTubeVideoTitle() {
  const title = document.title;
  return title.replace(" - YouTube", "").trim();
}

// === Save link to storage ===
function saveLink(url, titleInfo) {
  chrome.storage.local.get(["myLinks", "labelYoutubeAsSong"], (res) => {
    let myLinks = res.myLinks || [];
    const labelYoutubeAsSong = res.labelYoutubeAsSong === true;

    if (typeof myLinks[0] === "string") {
      myLinks = myLinks.map((u) => ({ title: u, url: u, label: getAutoLabel(u, labelYoutubeAsSong) }));
    }

    const existingIndex = myLinks.findIndex((item) => item.url === url);
    if (existingIndex !== -1) {
      // Update existing link title and keep/update label
      myLinks[existingIndex].title = titleInfo || url;
      if (!myLinks[existingIndex].label || myLinks[existingIndex].label === "no label") {
        const newLabel = getAutoLabel(url, labelYoutubeAsSong);
        myLinks[existingIndex].label = newLabel;
      }
      chrome.storage.local.set({ myLinks }, () => {
        injectToastWithRetry("Already on the list!");
        // Notify other pages to refresh
        chrome.runtime.sendMessage({ type: "LINKS_UPDATED" });
      });
      return;
    }

    const label = getAutoLabel(url, labelYoutubeAsSong);

    myLinks.push({ title: titleInfo || url, url, label });
    chrome.storage.local.set({ myLinks }, () => {
      injectToastWithRetry("Saved!");
      // Notify other pages to refresh
      chrome.runtime.sendMessage({ type: "LINKS_UPDATED" });
    });
  });
}

// Auto-detect label based on URL
function getAutoLabel(url, labelYoutubeAsSong) {
  try {
    const urlObj = new URL(url);
    const hostname = urlObj.hostname;

    // 1. Music Check (Always Song)
    if (hostname === "music.youtube.com") {
      return "song";
    }

    // 2. YouTube Check (Conditional)
    // Check for standard YouTube domains
    const isYouTube = hostname === "www.youtube.com" ||
      hostname === "youtube.com" ||
      hostname === "m.youtube.com";

    if (isYouTube) {
      if (labelYoutubeAsSong === true) {
        return "song";
      } else {
        return "Unlabeled";
      }
    }

    return "Unlabeled";
  } catch (e) {
    return "Unlabeled";
  }
}

// === Toast ===
function injectToastWithRetry(message, attempt = 0) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];
    if (!tab || !tab.id) return;

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: showToastInPage,
      args: [message],
    }).catch(() => { });
  });
}

function showToastInPage(message) {
  const prev = document.getElementById("saved-links-toast");
  if (prev) prev.remove();

  const toast = document.createElement("div");
  toast.id = "saved-links-toast";
  toast.textContent = message;
  Object.assign(toast.style, {
    position: "fixed",
    bottom: "25px",
    right: "25px",
    background: "#F59E0B",
    color: "white",
    padding: "10px 16px",
    borderRadius: "20px",
    fontFamily: "Inter, sans-serif",
    fontSize: "14px",
    zIndex: 9999999,
    opacity: 0,
    transition: "opacity 0.3s ease",
  });
  document.body.appendChild(toast);
  requestAnimationFrame(() => (toast.style.opacity = "1"));
  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 300);
  }, 2000);
}

// === Context menu ===
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "openLinkList",
    title: "📋 View saved list",
    contexts: ["action"],
  });
  // Inject overlay into all tabs immediately on install/update
  injectOverlayIntoAllTabs();
});

chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === "openLinkList") {
    chrome.tabs.create({ url: chrome.runtime.getURL("index.html") });
  }
});

// === Auto-refresh for songs ===
function enableAutoMusicWatcher(tabId) {
  chrome.scripting.executeScript({
    target: { tabId },
    func: setupMusicObserverEnhanced,
  });
}

// === Auto-refresh for videos ===
function enableAutoVideoWatcher(tabId) {
  chrome.scripting.executeScript({
    target: { tabId },
    func: setupVideoObserver,
  });
}

// === Content script on Music page ===
function setupMusicObserverEnhanced() {
  if (window.__musicWatcherActive) return;
  window.__musicWatcherActive = true;

  let lastSong = "";

  const getInfo = () => {
    const titleEl =
      document.querySelector("ytmusic-player-bar yt-formatted-string.title") ||
      document.querySelector("yt-formatted-string.title.ytmusic-player-bar");

    const artistEl =
      document.querySelector("ytmusic-player-bar a.yt-simple-endpoint[href^='channel/']") ||
      document.querySelector("ytmusic-player-bar .byline a") ||
      document.querySelector("ytmusic-player-bar .subtitle a");

    const title = titleEl?.textContent?.trim() || "";
    const artist = artistEl?.textContent?.trim() || "";
    return artist && title ? `${artist} - ${title}` : title;
  };

  const checkNow = () => {
    const song = getInfo();
    if (song && song !== lastSong) {
      lastSong = song;
      chrome.runtime.sendMessage({ type: "SONG_CHANGED", song, url: location.href });
    }
  };

  setInterval(checkNow, 2000);
}

// === Content script on YouTube video page ===
function setupVideoObserver() {
  if (window.__videoWatcherActive) return;
  window.__videoWatcherActive = true;

  let lastVideoTitle = "";

  const getVideoTitle = () => {
    return document.title.replace(" - YouTube", "").trim();
  };

  // Use MutationObserver for instant detection
  const titleEl = document.querySelector('title');
  if (titleEl) {
    const observer = new MutationObserver(() => {
      const title = getVideoTitle();
      if (title && title !== lastVideoTitle && title !== "YouTube") {
        lastVideoTitle = title;
        chrome.runtime.sendMessage({ type: "VIDEO_CHANGED", title, url: location.href });
      }
    });
    observer.observe(titleEl, { childList: true });
  }

  // Fallback interval check
  const checkNow = () => {
    const title = getVideoTitle();
    if (title && title !== lastVideoTitle && title !== "YouTube") {
      lastVideoTitle = title;
      chrome.runtime.sendMessage({ type: "VIDEO_CHANGED", title, url: location.href });
    }
  };

  setInterval(checkNow, 2000);
}

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type === "SONG_CHANGED") {
    chrome.storage.local.get(["autoSaveEnabled"], (res) => {
      const enabled = res.autoSaveEnabled ?? false; // default OFF
      if (enabled) {
        saveLink(msg.url, msg.song);
      }
    });
  } else if (msg.type === "VIDEO_CHANGED") {
    chrome.storage.local.get(["autoSaveEnabled"], (res) => {
      const enabled = res.autoSaveEnabled ?? false; // default OFF
      if (enabled) {
        saveLink(msg.url, msg.song);
      }
    });
  }
});

// === OVERLAY MODE HANDLERS ===

// Listen for overlay mode changes
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'OVERLAY_MODE_CHANGED') {
    if (message.enabled) {
      // Inject overlay into all existing tabs
      injectOverlayIntoAllTabs();
    } else {
      // Send message to all tabs to remove overlay
      notifyAllTabsToRemoveOverlay();
    }
    // Open extension in new tab with specific action
    const url = chrome.runtime.getURL('index.html');
    chrome.tabs.create({ url });
  } else if (message.type === 'SWITCH_LABEL') {
    handleSwitchLabelMessage(message, sender);
  }
});

async function handleSwitchLabelMessage(message, sender) {
  const { urls, windowId } = message;
  // Use windowId from request or sender
  let targetWindowId = windowId;
  if (!targetWindowId && sender && sender.tab) {
    targetWindowId = sender.tab.windowId;
  }
  if (!targetWindowId) {
    const w = await chrome.windows.getCurrent();
    targetWindowId = w.id;
  }

  // 1. Get all current tabs to remove later
  const currentTabs = await chrome.tabs.query({ windowId: targetWindowId });
  const tabIdsToRemove = currentTabs.map(t => t.id);

  // 2. Create new tabs
  // We'll activate the first one
  for (let i = 0; i < urls.length; i++) {
    await chrome.tabs.create({
      windowId: targetWindowId,
      url: urls[i],
      active: i === 0 // Activate first tab
    });
  }

  // 3. Remove old tabs
  if (tabIdsToRemove.length > 0) {
    await chrome.tabs.remove(tabIdsToRemove);
  }
}

// Inject overlay into all existing tabs
async function injectOverlayIntoAllTabs() {
  try {
    const tabs = await chrome.tabs.query({});
    for (const tab of tabs) {
      await injectOverlayIntoTab(tab.id, tab.url);
    }
  } catch (err) {
  }
}

// Inject overlay into a specific tab
async function injectOverlayIntoTab(tabId, url) {
  // Skip chrome:// and edge:// and other restricted URLs
  if (!url || url.startsWith('chrome://') || url.startsWith('edge://') ||
    url.startsWith('about:') || url.startsWith('chrome-extension://')) {
    return;
  }

  try {
    // Inject CSS first
    await chrome.scripting.insertCSS({
      target: { tabId },
      files: ['overlay-styles.css']
    });

    // Then inject script
    await chrome.scripting.executeScript({
      target: { tabId },
      files: ['overlay-content.js']
    });
  } catch (err) {
    // Silently fail - likely a permissions or restricted page issue
  }
}

// Notify all tabs to remove overlay
async function notifyAllTabsToRemoveOverlay() {
  try {
    const tabs = await chrome.tabs.query({});
    for (const tab of tabs) {
      try {
        await chrome.tabs.sendMessage(tab.id, { type: 'REMOVE_OVERLAY' });
      } catch (err) {
        // Tab might not have content script, ignore
      }
    }
  } catch (err) {
  }
}

// Auto-inject into new tabs when overlay mode is enabled
chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url) {
    const { overlayModeEnabled } = await chrome.storage.local.get(['overlayModeEnabled']);
    // Default to true if not set
    if (overlayModeEnabled !== false) {
      await injectOverlayIntoTab(tabId, tab.url);
    }
  }
});

// === AUTHENTICATION HANDLERS ===
// Constants imported from oauth.js (CLIENT_ID, REDIRECT_URI, SCOPES)

let authWindowId = null;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "START_AUTH") {
    const authParams = new URLSearchParams({
      client_id: CLIENT_ID,
      redirect_uri: REDIRECT_URI,
      response_type: "token",
      scope: SCOPES.join(" "),
      include_granted_scopes: "true",
      state: "extension_auth"
    });

    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?${authParams.toString()}`;

    chrome.windows.create({
      url: authUrl,
      type: 'popup',
      width: 600,
      height: 700
    }, (window) => {
      authWindowId = window.id;
    });

    sendResponse({ started: true });
    return true; // Keep channel open
  }
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (authWindowId && tab.windowId === authWindowId && changeInfo.url) {
    if (changeInfo.url.startsWith(REDIRECT_URI)) {
      try {
        const url = new URL(changeInfo.url);
        const hashParams = new URLSearchParams(url.hash.substring(1));
        const token = hashParams.get("access_token");

        if (token) {
          chrome.storage.local.set({ google_token: token }, () => {
            chrome.windows.remove(authWindowId);
            authWindowId = null;
            chrome.runtime.sendMessage({ type: "AUTH_SUCCESS" }).catch(() => { });
          });
        }
      } catch (e) {
        console.error("Error parsing auth redirect:", e);
      }
    }
  }
});

// Clean up if window closed manually
chrome.windows.onRemoved.addListener((windowId) => {
  if (windowId === authWindowId) {
    authWindowId = null;
  }
});

