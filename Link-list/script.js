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

// === DOM Elements ===
const tableBodyEl = document.getElementById("links-tbody");
const totalCountEl = document.getElementById("total-count");
const dataCountInfo = document.getElementById("data-count-info");

// Sidebar Elements
const navAll = document.getElementById("nav-all");
const navFavorites = document.getElementById("nav-favorites");
const sidebarLabelsContainer = document.getElementById("sidebar-labels");
const manualInputBtn = document.getElementById("manual-input-btn");
const addLabelBtn = document.getElementById("add-label-btn");
const manageLabelBtn = document.getElementById("manage-label-btn");
const deleteBtn = document.getElementById("delete-btn");
const searchBtn = document.getElementById("search-btn");
const syncBtn = document.getElementById("sync-btn");

const navbarCollapseBtn = document.getElementById("navbar-collapse-btn");
const openNewTabBtn = document.getElementById("open-new-tab-btn");

// Header & Settings Elements
const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");
const settingsBtn = document.getElementById("settings-btn");
const autoSaveToggle = document.getElementById("auto-save-toggle");
const youtubeLabelToggle = document.getElementById("youtube-label-toggle");
const downloadBtn = document.getElementById("download-btn");
const downloadCsvBtn = document.getElementById("download-csv-btn");
const loadBtn = document.getElementById("load-btn");
const openSelectedBtn = document.getElementById("open-selected-btn");

// Modals
const manualInputModal = document.getElementById("manual-input-modal");
const labelModal = document.getElementById("label-modal");
const manageLabelModal = document.getElementById("manage-label-modal");
const deleteModal = document.getElementById("delete-modal");
const filterModal = document.getElementById("filter-modal");
const moveModal = document.getElementById("move-modal");
const aboutModal = document.getElementById("about-modal");
const tagsModal = document.getElementById("tags-modal");
const labelPickerModal = document.getElementById("label-picker-modal");
const editLinkModal = document.getElementById("edit-link-modal");
const searchModal = document.getElementById("search-modal");
const searchModalInput = document.getElementById("search-modal-input");
const searchModalCancel = document.getElementById("search-modal-cancel");
const quickLabelsModal = document.getElementById("quick-labels-modal");
const quickLabelsBtn = document.getElementById("labels-quick-btn");
const quickLabelsList = document.getElementById("quick-labels-list");
const quickLabelsCreate = document.getElementById("quick-labels-create");
const quickLabelsManage = document.getElementById("quick-labels-manage");
const quickLabelsClose = document.getElementById("quick-labels-close");

// Sidebar State
let isLabelsExpanded = false;

// Modal Inputs/Buttons
const modalInputEl = document.getElementById("modal-input-el");
const modalSaveBtn = document.getElementById("modal-save-btn");
const modalCancelBtn = document.getElementById("modal-cancel-btn");

const labelInputEl = document.getElementById("label-input-el");
const labelSaveBtn = document.getElementById("label-save-btn");
const labelCancelBtn = document.getElementById("label-cancel-btn");

const manageLabelList = document.getElementById("manage-label-list");
const manageLabelCloseBtn = document.getElementById("manage-label-close-btn");

const confirmDeleteBtn = document.getElementById("confirm-delete-btn");
const cancelDeleteBtn = document.getElementById("cancel-delete-btn");

const filterLabelSelect = document.getElementById("filter-label");
const filterSortSelect = document.getElementById("filter-sort");
const filterApplyBtn = document.getElementById("filter-apply-btn");
const filterCancelBtn = document.getElementById("filter-cancel-btn");

const moveLabelSelect = document.getElementById("move-label-select");
const moveConfirmBtn = document.getElementById("move-confirm-btn");
const moveCancelBtn = document.getElementById("move-cancel-btn");

const aboutBtn = document.getElementById("about-btn");
const aboutCloseBtn = document.getElementById("about-close-btn");

const tagsModalInput = document.getElementById("tags-modal-input");
const tagsModalDisplay = document.getElementById("tags-modal-display");
const tagsSuggestions = document.getElementById("tags-suggestions");
const tagsSuggestionsGroup = document.getElementById("tags-suggestions-group");
const tagsModalClose = document.getElementById("tags-modal-close");

// Label Picker Modal Elements
const labelPickerSelect = document.getElementById("label-picker-select");
const labelPickerConfirmBtn = document.getElementById("label-picker-confirm-btn");
const labelPickerCancelBtn = document.getElementById("label-picker-cancel-btn");
const labelPickerCreateBtn = document.getElementById("label-picker-create-btn");

// Edit Link Modal Elements
const editLinkTitle = document.getElementById("edit-link-title");
const editLinkUrl = document.getElementById("edit-link-url");
const editLinkLabel = document.getElementById("edit-link-label");
const editLinkTagsInput = document.getElementById("edit-link-tags-input");
const editLinkTagsDisplay = document.getElementById("edit-link-tags-display");
const editLinkTagsSuggestions = document.getElementById("edit-link-tags-suggestions");
const editLinkTagsSuggestionsGroup = document.getElementById("edit-link-tags-suggestions-group");
const editLinkClose = document.getElementById("edit-link-close");
const editLinkOpenUrl = document.getElementById("edit-link-open-url");
const editLinkCreateLabel = document.getElementById("edit-link-create-label");
const autoSaveIndicator = document.getElementById("auto-save-indicator");

// Export Modal Elements
const exportModal = document.getElementById("export-modal");
const exportCheckboxContainer = document.getElementById("export-checkbox-container");
const exportFormatSelect = document.getElementById("export-format-select");
const exportTriggerBtn = document.getElementById("export-trigger-btn");
const exportConfirmBtn = document.getElementById("export-confirm-btn");
const exportCloseBtn = document.getElementById("export-close-btn");

// Confirmation Modal Elements
const confirmationModal = document.getElementById("confirmation-modal");
const confirmModalTitle = document.getElementById("confirm-modal-title");
const confirmModalMessage = document.getElementById("confirm-modal-message");
const confirmModalActions = document.getElementById("modal-actions-container");





// Pagination & Toolbar
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const sortDropdownBtn = document.getElementById("sort-dropdown-btn");
const sortDropdownMenu = document.getElementById("sort-dropdown-menu");
const selectAllBtn = document.getElementById("select-all-btn");
const selectCheckboxIcon = document.getElementById("select-checkbox-icon");
const selectDropdownMenu = document.getElementById("select-dropdown-menu");
const moveSelectedBtn = document.getElementById("move-selected-btn");
const restoreSelectedBtn = document.getElementById("restore-selected-btn");
const deleteSelectedBtn = document.getElementById("delete-selected-btn");

// Details Panel Elements
const detailsPanel = document.getElementById("details-panel");
const detailsTitle = document.getElementById("details-title");
const detailsUrl = document.getElementById("details-url");
const detailsLabel = document.getElementById("details-label");
const detailsSaveBtn = document.getElementById("details-save-btn");
const detailsCloseBtn = document.getElementById("details-close-btn");

// State
let myLinks = [];
let trashLinks = [];
let customLabels = [];
let selectedLinks = new Set();
let manualInputTargetLabel = null; // Global to track target label for manual input
let itemsToShow = 15;
const itemsPerLoad = 15;
let isLoadingMore = false;
let searchQuery = "";
let activeFilterLabel = "all";
let activeFilterSort = "date-desc";
let currentEditingIndex = -1;
let draggedItemIndex = null;
let tabListAutoClose = true; // Default ON
let pinnedRowIndex = -1; // Track which row is currently pinned
let labelYoutubeAsSong = false;
let currentTagsModalIndex = -1;
let currentTagsModalTags = [];
let currentLabelPickerIndex = -1;
let currentEditingLinkIndex = -1;
let currentEditingLinkTags = [];
let autoSaveTimeout = null;
let hiddenTabs = []; // Track which tabs are hidden/closed
let tabOrder = []; // Track the order tabs were opened
// Track collapse state of unlabeled container
let isUnlabeledContainerCollapsed = false; // Track collapse state of unlabeled container
let pinnedLabels = []; // Track pinned labels in sidebar
let forceShowAllTags = false; // Toggle to show all tags even when filtered


// Unlabeled Selection Mode State
let selectedUnlabeledLinks = new Set();
let isUnlabeledSelectionMode = false;
let isSyncing = false;

// === Initialization ===
document.addEventListener("DOMContentLoaded", () => {
  setupEventListeners();
  loadData();
  checkAndClearCachedToken();

  // Listen for background auth success (if popup stays open)
  // Listen for background auth success (if popup stays open)
  // Removed global listener to prevent race conditions. getAuthToken handles this.

  // Auto-run Initial Sync if we have a token but haven't synced yet
  chrome.storage.local.get(["google_token", "hasInitialSyncRun"], (res) => {
    if (res.google_token && !res.hasInitialSyncRun) {
      console.log("Auto-starting initial sync...");
      handleSyncClick();
    }
  });

  // Initialize Theme
  chrome.storage.local.get("theme", (res) => {
    if (res.theme === "light") {
      document.body.classList.add("light-theme");
      updateThemeIcon(true);
    }
  });

  // Listen for storage changes (for theme sync across multiple tabs/overlays)
  chrome.storage.onChanged.addListener((changes, namespace) => {
    if (namespace === 'local' && changes.theme) {
      if (changes.theme.newValue === 'light') {
        document.body.classList.add('light-theme');
        updateThemeIcon(true);
      } else {
        document.body.classList.remove('light-theme');
        updateThemeIcon(false);
      }
    }
  });
  // Listen for messages from parent (overlay wrapper)
  let debounceTimer;
  window.addEventListener('message', (event) => {
    if (event.data.type === 'OVERLAY_EXPANDED') {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        // console.log('Overlay expanded, triggering auto-sync...');
        triggerSmartSync();
      }, 1000);
    }
  });
});

// === Global Auto-Sync Logic ===
let autoSyncTimer;
let syncPending = false;

function triggerSmartSync() {
  // Mark that a sync is needed
  syncPending = true;
  updateSyncButtonStatus(); // Updates UI to show "Unsaved"

  clearTimeout(autoSyncTimer);
  // Debounce: Wait 3 seconds of inactivity before syncing
  // This handles the "Challenge" of rapid changes.
  autoSyncTimer = setTimeout(() => {
    handleSyncClick({ silent: true });
  }, 3000);
}

/**
 * Shows a custom confirmation modal and returns a Promise.
 * @param {string} message - The message to display.
 * @param {string} [title="Confirm"] - The title of the modal.
 * @param {Array<{text: string, value: any, class?: string}>} [customButtons] - Optional custom buttons.
 * @returns {Promise<any>} - Resolves with true/false (default) or button value (custom).
 */
function showConfirm(message, title = "Confirm", customButtons = null) {
  return new Promise((resolve) => {
    if (!confirmationModal) {
      console.error("Confirmation modal not found!");
      resolve(confirm(message));
      return;
    }

    confirmModalTitle.textContent = title;
    confirmModalMessage.textContent = message;

    // Clear and rebuild actions
    confirmModalActions.innerHTML = "";

    const cleanup = () => {
      confirmationModal.style.display = "none";
      window.removeEventListener("click", handleOutsideClick);
    };

    const handleOutsideClick = (e) => {
      if (e.target === confirmationModal) {
        cleanup();
        resolve(null); // Treat click outside as cancel (null)
      }
    };

    if (customButtons && customButtons.length > 0) {
      customButtons.forEach(btn => {
        const buttonEl = document.createElement("button");
        buttonEl.textContent = btn.text;
        buttonEl.className = btn.class || "text-btn";
        buttonEl.addEventListener("click", () => {
          cleanup();
          resolve(btn.value);
        });
        confirmModalActions.appendChild(buttonEl);
      });
    } else {
      // Default buttons
      const cancelBtn = document.createElement("button");
      cancelBtn.textContent = "Cancel";
      cancelBtn.className = "text-btn";
      cancelBtn.addEventListener("click", () => {
        cleanup();
        resolve(false);
      });

      const okBtn = document.createElement("button");
      okBtn.textContent = "Confirm";
      okBtn.className = "primary-btn";
      okBtn.addEventListener("click", () => {
        cleanup();
        resolve(true);
      });

      confirmModalActions.appendChild(cancelBtn);
      confirmModalActions.appendChild(okBtn);
    }

    confirmationModal.style.display = "flex";
    window.addEventListener("click", handleOutsideClick);
  });
}

function setupEventListeners() {
  const themeBtn = document.getElementById("theme-btn");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("light-theme");
      const isLight = document.body.classList.contains("light-theme");
      updateThemeIcon(isLight);

      const theme = isLight ? "light" : "dark";
      chrome.storage.local.set({ theme }, () => {
        showToast(`Theme changed to ${theme} mode`, "info");
      });
    });
  }

  // Global Click Listener for Dropdowns
  document.addEventListener("click", (e) => {
    // Close link action dropdowns if clicking outside
    if (!e.target.closest('.action-menu-btn')) {
      document.querySelectorAll('.link-action-dropdown.active').forEach(d => {
        d.classList.remove('active');
      });
    }
  });

  setupTagsInput();
  // Sidebar Navigation
  if (deleteBtn) deleteBtn.addEventListener("click", () => {
    // Auto-Close Logic for Trash
    closeAllOtherTabs("trash");

    // If trash tab is hidden, unhide it first
    if (hiddenTabs.includes("trash")) {
      const index = hiddenTabs.indexOf("trash");
      if (index > -1) {
        hiddenTabs.splice(index, 1);
        addToTabOrder("trash"); // Track tab order
        chrome.storage.local.set({ hiddenTabs }, () => {
          renderTabsBar();
          setFilterLabel("trash");
          showToast('Tab "Trash" opened');
        });
      }
    } else {
      addToTabOrder("trash"); // Track tab order
      renderTabsBar();
      setFilterLabel("trash");
    }

    // Collapse container (Unlabeled/Sidebar) to verify user request
    /* toggleUnlabeledContainer removed */
  });

  // Open in New Tab Button
  if (openNewTabBtn) {
    openNewTabBtn.addEventListener("click", () => {
      chrome.tabs.create({ url: chrome.runtime.getURL("index.html") });
    });
  }



  // Search Button - opens modal
  if (searchBtn) {
    searchBtn.addEventListener("click", () => {
      closeAllModals();
      searchModal.style.display = "flex";
      searchModalInput.value = "";
      searchModalInput.focus();
    });
  }

  // Search Modal - Enter key to perform search
  if (searchModalInput) {
    searchModalInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const query = searchModalInput.value.trim();
        if (query) {
          performSearch(query);
          // Collapse sidebar on search to give more space for results
          /* toggleUnlabeledContainer removed */
        }
      }
    });
  }

  // Search Modal Cancel
  // Button removed from DOM
  if (searchModalCancel) {
    searchModalCancel.addEventListener("click", () => {
      searchModal.style.display = "none";
    });
  }

  // Quick Labels Button - opens modal in collapsed sidebar mode
  if (quickLabelsBtn) {
    quickLabelsBtn.addEventListener("click", () => {
      // If container is collapsed, expand it
      if (isUnlabeledContainerCollapsed) {
        /* toggleUnlabeledContainer removed */
        // Also ensure labels section is visible
        const labelsSection = document.getElementById("labels-section");
        if (labelsSection && labelsSection.classList.contains("hidden")) {
          labelsSection.classList.remove("hidden");
          quickLabelsBtn.classList.add("active");
          chrome.storage.local.set({ labelsSectionHidden: false });
        }
        return;
      }

      const labelsSection = document.getElementById("labels-section");
      if (labelsSection) {
        const isHidden = labelsSection.classList.contains("hidden");

        if (isHidden) {
          // Show labels section
          labelsSection.classList.remove("hidden");
          quickLabelsBtn.classList.add("active");
          chrome.storage.local.set({ labelsSectionHidden: false });
        } else {
          // Hide labels section
          labelsSection.classList.add("hidden");
          quickLabelsBtn.classList.remove("active");
          chrome.storage.local.set({ labelsSectionHidden: true });
        }
      }
    });


  }

  // Quick Labels Modal Actions
  if (quickLabelsClose) {
    quickLabelsClose.addEventListener("click", () => {
      quickLabelsModal.style.display = "none";
    });
  }

  if (quickLabelsCreate) {
    quickLabelsCreate.addEventListener("click", () => {
      quickLabelsModal.style.display = "none";
      labelModal.style.display = "flex";
      labelInputEl.value = "";
      labelInputEl.focus();
    });
  }

  if (quickLabelsManage) {
    quickLabelsManage.addEventListener("click", () => {
      quickLabelsModal.style.display = "none";
      manageLabelModal.style.display = "flex";
      renderManageLabels();
    });
  }

  // Labels Close Button
  const labelsCloseBtn = document.getElementById("labels-close-btn");
  if (labelsCloseBtn) {
    labelsCloseBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const labelsSection = document.getElementById("labels-section");
      if (labelsSection) {
        labelsSection.classList.add("hidden");
        if (quickLabelsBtn) quickLabelsBtn.classList.remove("active");
        chrome.storage.local.set({ labelsSectionHidden: true });
      }
    });
  }

  // Settings Menu Toggle - now opens modal
  const settingsModal = document.getElementById("settings-modal");
  const settingsModalClose = document.getElementById("settings-modal-close");

  if (settingsBtn) {
    settingsBtn.addEventListener("click", () => {
      closeAllModals();
      settingsModal.style.display = "flex";
    });
  }

  if (settingsModalClose) {
    settingsModalClose.addEventListener("click", () => {
      settingsModal.style.display = "none";
    });
  }

  if (autoSaveToggle) {
    autoSaveToggle.addEventListener("change", (e) => {
      const autoSaveEnabled = e.target.checked;
      chrome.storage.local.set({ autoSaveEnabled });
      showToast(`Auto-save YT link ${autoSaveEnabled ? "enabled" : "disabled"}`);
    });
  }

  if (youtubeLabelToggle) {
    youtubeLabelToggle.addEventListener("change", (e) => {
      labelYoutubeAsSong = e.target.checked;
      chrome.storage.local.set({ labelYoutubeAsSong });
      showToast(`YT links labeled to song ${labelYoutubeAsSong ? "enabled" : "disabled"}`);
    });
  }

  // Overlay Mode Toggle
  const overlayModeToggle = document.getElementById('overlay-mode-toggle');
  if (overlayModeToggle) {
    // Load saved setting
    chrome.storage.local.get(['overlayModeEnabled'], (result) => {
      overlayModeToggle.checked = result.overlayModeEnabled !== undefined ? result.overlayModeEnabled : true;
    });

    // Save when changed and notify background script
    overlayModeToggle.addEventListener('change', (e) => {
      const enabled = e.target.checked;
      chrome.storage.local.set({ overlayModeEnabled: enabled }, () => {
        showToast(`Overlay mode ${enabled ? "enabled" : "disabled"}`);
        // Notify background script to inject/remove overlay from all tabs
        chrome.runtime.sendMessage({
          type: 'OVERLAY_MODE_CHANGED',
          enabled: enabled
        });
      });
    });
  }
}

// Tab-List Auto Close Toggle
const tabListAutoCloseToggle = document.getElementById('tab-list-auto-close-toggle');
if (tabListAutoCloseToggle) {
  tabListAutoCloseToggle.addEventListener('change', (e) => {
    const enabled = e.target.checked;
    tabListAutoClose = enabled; // Update global
    chrome.storage.local.set({ tabListAutoClose: enabled });
    showToast(`Tab-List Auto Close ${enabled ? "enabled" : "disabled"}`);
  });
}

// Settings Actions
if (exportTriggerBtn) exportTriggerBtn.addEventListener("click", () => openExportModal());

if (syncBtn) syncBtn.addEventListener("click", handleSyncClick);

if (openSelectedBtn) openSelectedBtn.addEventListener("click", openSelectedLinks);
if (openSelectedBtn) openSelectedBtn.addEventListener("click", openSelectedLinks);
if (loadBtn) loadBtn.addEventListener("click", () => {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.txt,.csv,.json';
  input.onchange = e => importFile(e.target.files[0]);
  input.click();
});

// Modals
setupModal(manualInputBtn, manualInputModal, modalInputEl);
if (manualInputBtn) {
  manualInputBtn.addEventListener("click", () => {
    // If activeFilterLabel is a real label (not a special view), use it as target
    const prohibited = ["all", "trash", "starred"];
    const isSpecial = !activeFilterLabel ||
      prohibited.includes(activeFilterLabel) ||
      activeFilterLabel.startsWith("search:") ||
      activeFilterLabel.startsWith("tag:");

    if (!isSpecial) {
      manualInputTargetLabel = activeFilterLabel;
    } else {
      manualInputTargetLabel = null;
    }
  });
}

// Paste Button Logic
const pasteBtn = document.getElementById("paste-btn");
if (pasteBtn) {
  pasteBtn.addEventListener("click", async () => {
    modalInputEl.focus(); // Ensure focus is inside the extension popup
    try {
      let hasPermission = true;
      // Check permissions if supported (Brave/Chrome)
      if (navigator.permissions && navigator.permissions.query) {
        try {
          const permissionStatus = await navigator.permissions.query({ name: "clipboard-read" });
          if (permissionStatus.state === "denied") {
            hasPermission = false;
            // console.warn("Clipboard permission denied by policy.");
          }
        } catch (e) {
          // Some browsers (like Firefox) might not support this query name, ignore
        }
      }

      let text = "";
      if (hasPermission) {
        text = await navigator.clipboard.readText();
      } else {
        throw new Error("Permission denied");
      }

      const url = text ? text.trim() : "";

      // Simple URL validation
      const isUrl = /^(https?:\/\/[^\s]+)/i.test(url) || /^(www\.[^\s]+)/i.test(url);

      if (url && isUrl) {
        modalInputEl.value = url;
        // Trigger save immediately
        handleManualSave();
      } else {
        showToast("Clipboard does not contain a valid URL", "warning");
      }
    } catch (err) {
      // console.warn("Async Clipboard API failed, trying execCommand fallback...", err);

      try {
        modalInputEl.value = "";
        modalInputEl.focus();
        const success = document.execCommand('paste');
        const val = modalInputEl.value.trim();

        if (success && val) {
          const isUrl = /^(https?:\/\/[^\s]+)/i.test(val) || /^(www\.[^\s]+)/i.test(val);
          if (isUrl) {
            handleManualSave();
            return;
          } else {
            showToast("Clipboard does not contain a valid URL", "warning");
            return;
          }
        }
      } catch (fallbackErr) {
        console.error("Fallback failed", fallbackErr);
      }

      // Only show red toast if it's NOT a permission error that we potentially handled?
      // Or keep showing it but maybe cleaner. 
      // User asked to whitelist/hide error. 
      // We will just show "Paste Error" if fallback also fails.
      // showToast(`Paste Error: ${err.name} - ${err.message}`, "error");

      // If fallback worked (success && val) we returned. 
      // If we are here, fallback failed or empty. 
      showToast("Could not paste from clipboard. Please ensure permission is granted.", "error");
    }
  });
}

// Custom handling for Add Label to ensure it clears
if (addLabelBtn) {
  addLabelBtn.addEventListener("click", () => {
    labelInputEl.value = "";
    labelModal.style.display = "flex";
    setTimeout(() => labelInputEl.focus(), 50);
  });
  // Close on click outside
  window.addEventListener("click", (e) => {
    if (e.target === labelModal) labelModal.style.display = "none";
  });
}

// setupModal(addLabelBtn, labelModal, labelInputEl); // Removed standard setup to use custom one above
setupModal(manageLabelBtn, manageLabelModal, null, renderManageLabels);
setupModal(null, moveModal, null, populateMoveOptions); // Triggered manually
setupModal(null, labelPickerModal, null, populateLabelPickerOptions); // Triggered manually
setupModal(null, editLinkModal); // Triggered manually

// Close manage label modal on click outside
if (manageLabelModal) {
  window.addEventListener("click", (e) => {
    if (e.target === manageLabelModal) manageLabelModal.style.display = "none";
  });
}

// Manual Input Enter Key Handler
if (modalInputEl) {
  modalInputEl.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleManualSave();
    }
  });
}

// Modal Actions
if (modalSaveBtn) modalSaveBtn.addEventListener("click", handleManualSave);
if (modalCancelBtn) modalCancelBtn.addEventListener("click", () => manualInputModal.style.display = "none");
if (confirmDeleteBtn) confirmDeleteBtn.addEventListener("click", handleDeleteAll);
if (filterApplyBtn) filterApplyBtn.addEventListener("click", applyAdvancedFilter);

// Move Modal Actions
if (moveConfirmBtn) moveConfirmBtn.addEventListener("click", handleMoveSelected);
if (moveCancelBtn) moveCancelBtn.addEventListener("click", () => {
  moveModal.style.display = "none";
});

// Label Picker Modal Actions
if (labelPickerConfirmBtn) labelPickerConfirmBtn.addEventListener("click", handleLabelPickerConfirm);
if (labelPickerCancelBtn) labelPickerCancelBtn.addEventListener("click", () => {
  currentLabelPickerIndex = -1;
  labelPickerModal.style.display = "none";
});
if (labelPickerCreateBtn) labelPickerCreateBtn.addEventListener("click", () => {
  // Save the current index before closing
  const savedIndex = currentLabelPickerIndex;
  labelPickerModal.style.display = "none";

  // Restore the index and open label creation modal
  currentLabelPickerIndex = savedIndex;
  labelModal.style.display = "flex";
  labelInputEl.value = "";
  labelInputEl.focus();
});

// Close/Cancel Buttons
// Close/Cancel Buttons
if (modalCancelBtn) modalCancelBtn.addEventListener("click", closeAllModals);
if (labelCancelBtn) labelCancelBtn.addEventListener("click", closeAllModals);
if (manageLabelCloseBtn) manageLabelCloseBtn.addEventListener("click", closeAllModals);
if (filterCancelBtn) filterCancelBtn.addEventListener("click", closeAllModals);
if (aboutCloseBtn) aboutCloseBtn.addEventListener("click", closeAllModals);
if (editLinkClose) editLinkClose.addEventListener("click", closeAllModals);

// Edit Link Modal Actions
if (editLinkTagsInput) {
  editLinkTagsInput.addEventListener("input", handleEditLinkTagsInputChange);
  editLinkTagsInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const tag = editLinkTagsInput.value.trim();
      if (tag) {
        addEditLinkTag(tag);
        editLinkTagsInput.value = "";
        updateEditLinkTagsSuggestions();
      }
    }
  });
}

// Tags Modal
if (tagsModalClose) tagsModalClose.addEventListener("click", closeAllModals);
if (tagsModalInput) {
  tagsModalInput.addEventListener("input", handleTagsInputChange);
  tagsModalInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const tag = tagsModalInput.value.trim();
      if (tag) {
        addTagFromModal(tag);
        tagsModalInput.value = "";
        updateTagsSuggestions();
        autoSaveTags(); // Auto-save after adding tag
      }
    }
  });
}
if (cancelDeleteBtn) cancelDeleteBtn.addEventListener("click", closeAllModals);

// Export Modal
if (exportConfirmBtn) exportConfirmBtn.addEventListener("click", handleExportConfirm);
if (exportCloseBtn) exportCloseBtn.addEventListener("click", closeAllModals);



// Enter Key Support
if (modalInputEl) {
  modalInputEl.addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleManualSave();
  });
}
if (labelInputEl) {
  labelInputEl.addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleLabelSave();
  });
}
if (detailsTitle) {
  detailsTitle.addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleDetailsSave();
  });
}
if (detailsUrl) {
  detailsUrl.addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleDetailsSave();
  });
}

// Details Panel
if (detailsSaveBtn) detailsSaveBtn.addEventListener("click", handleDetailsSave);
if (detailsCloseBtn) detailsCloseBtn.addEventListener("click", closeDetailsPanel);

// Pagination
if (prevBtn) prevBtn.addEventListener("click", () => changePage(-1));
if (nextBtn) nextBtn.addEventListener("click", () => changePage(1));

// Sort Dropdown Menu
if (sortDropdownBtn && sortDropdownMenu) {
  sortDropdownBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isVisible = sortDropdownMenu.style.display === "block";
    sortDropdownMenu.style.display = isVisible ? "none" : "block";
  });

  // Handle dropdown item clicks
  sortDropdownMenu.addEventListener("click", (e) => {
    const item = e.target.closest(".sort-dropdown-item");
    if (!item) return;

    const sortOption = item.dataset.sort;
    activeFilterSort = sortOption;
    sortDropdownMenu.style.display = "none";
    render();

    // Update active state
    updateSortDropdownActiveState();

    const sortNames = {
      "date-desc": "Date (Newest First)",
      "date-asc": "Date (Oldest First)",
      "title-asc": "Title (A-Z)",
      "title-desc": "Title (Z-A)"
    };
    showToast(`Sorted by ${sortNames[sortOption]}`);
  });
}

// Infinite Scroll
const linkListContainer = document.querySelector('.link-list-container');
if (linkListContainer) {
  linkListContainer.addEventListener('scroll', () => {
    const scrollTop = linkListContainer.scrollTop;
    const scrollHeight = linkListContainer.scrollHeight;
    const clientHeight = linkListContainer.clientHeight;

    // If within 100px of bottom and not already loading
    if (scrollHeight - scrollTop - clientHeight < 100 && !isLoadingMore) {
      loadMoreItems();
    }
  });
}
// Selection Actions & Dropdown Menu
if (selectAllBtn && selectDropdownMenu) {
  // Click on checkbox area - toggle selection
  selectAllBtn.addEventListener("click", (e) => {
    // If clicking the dropdown arrow, open menu
    if (e.target.classList.contains('dropdown-arrow')) {
      e.stopPropagation();
      const isVisible = selectDropdownMenu.style.display === "block";
      selectDropdownMenu.style.display = isVisible ? "none" : "block";
      return;
    }

    // Otherwise, toggle selection
    toggleAllSelection();
  });

  // Handle dropdown item clicks
  selectDropdownMenu.addEventListener("click", (e) => {
    const item = e.target.closest(".select-dropdown-item");
    if (!item) return;

    const action = item.dataset.action;
    handleSelectionAction(action);
    selectDropdownMenu.style.display = "none";
  });
}

if (moveSelectedBtn) moveSelectedBtn.addEventListener("click", () => {
  if (selectedLinks.size === 0) return showToast("No links selected", "warning");
  moveModal.style.display = "flex";
  populateMoveOptions();
});
if (restoreSelectedBtn) restoreSelectedBtn.addEventListener("click", restoreSelectedLinks);
if (deleteSelectedBtn) deleteSelectedBtn.addEventListener("click", deleteSelectedLinks);

// Cancel Selection Button
const cancelSelectionBtn = document.getElementById("cancel-selection-btn");
if (cancelSelectionBtn) {
  cancelSelectionBtn.addEventListener("click", () => {
    selectedLinks.clear();
    render();
    updateSelectionUI();
    showToast("Selection cleared");
  });
}

// Unlabeled Selection Toolbar Event Listeners
const unlabeledSelectAllBtn = document.getElementById("unlabeled-select-all-btn");
const unlabeledSelectDropdown = document.getElementById("unlabeled-select-dropdown-menu");
const unlabeledMoveBtn = document.getElementById("unlabeled-move-btn");
const unlabeledDeleteBtn = document.getElementById("unlabeled-delete-btn");
const unlabeledCancelBtn = document.getElementById("unlabeled-cancel-btn");

// Checkbox dropdown for unlabeled selection
if (unlabeledSelectAllBtn && unlabeledSelectDropdown) {
  unlabeledSelectAllBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isVisible = unlabeledSelectDropdown.style.display === "block";
    unlabeledSelectDropdown.style.display = isVisible ? "none" : "block";
  });

  unlabeledSelectDropdown.addEventListener("click", (e) => {
    const item = e.target.closest(".select-dropdown-item");
    if (!item) return;

    const action = item.dataset.action;
    if (action === "all") {
      selectAllUnlabeled();
    } else if (action === "none") {
      selectedUnlabeledLinks.clear();
      isUnlabeledSelectionMode = false;
      renderUnlabeledContainer();
      updateUnlabeledSelectionUI();
    }
    unlabeledSelectDropdown.style.display = "none";
  });
}

if (unlabeledMoveBtn) {
  unlabeledMoveBtn.addEventListener("click", () => {
    if (selectedUnlabeledLinks.size === 0) {
      showToast("No links selected");
      return;
    }
    openMoveModalForUnlabeled();
  });
}

if (unlabeledDeleteBtn) {
  unlabeledDeleteBtn.addEventListener("click", () => {
    if (selectedUnlabeledLinks.size === 0) {
      showToast("No links selected");
      return;
    }
    deleteUnlabeledSelection();
  });
}

if (unlabeledCancelBtn) {
  unlabeledCancelBtn.addEventListener("click", () => {
    selectedUnlabeledLinks.clear();
    isUnlabeledSelectionMode = false;
    renderUnlabeledContainer();
    updateUnlabeledSelectionUI();
    showToast("Selection cleared");
  });
}

// Close Modals on Outside Click
window.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    closeAllModals();
  }

  // Close select dropdown when clicking outside
  if (selectDropdownMenu &&
    !selectAllBtn?.contains(e.target) &&
    !selectDropdownMenu.contains(e.target)) {
    selectDropdownMenu.style.display = "none";
  }
  // Close sort dropdown when clicking outside
  if (sortDropdownMenu &&
    !sortDropdownBtn?.contains(e.target) &&
    !sortDropdownMenu.contains(e.target)) {
    sortDropdownMenu.style.display = "none";
  }
  // Close unlabeled select dropdown when clicking outside
  if (unlabeledSelectDropdown &&
    !unlabeledSelectAllBtn?.contains(e.target) &&
    !unlabeledSelectDropdown.contains(e.target)) {
    unlabeledSelectDropdown.style.display = "none";
  }
});
// Tags Section Toggle
const tagsSection = document.getElementById("tags-section");
const tagsCloseBtn = document.getElementById("tags-close-btn");
const tagsBtn = document.getElementById("tags-btn");
const tagsShowAllBtn = document.getElementById("tags-show-all-btn");

if (tagsCloseBtn && tagsSection) {
  tagsCloseBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    tagsSection.classList.add("hidden");
    if (tagsBtn) tagsBtn.classList.remove("active");
    chrome.storage.local.set({ tagsSectionHidden: true });
  });
}

if (tagsShowAllBtn) {
  tagsShowAllBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    forceShowAllTags = !forceShowAllTags;

    if (forceShowAllTags) {
      tagsShowAllBtn.classList.add("active");
      tagsShowAllBtn.style.color = "var(--accent-color)";
      tagsShowAllBtn.textContent = "All"; // Showing All tags, button says All
      showToast("Showing all tags");
    } else {
      tagsShowAllBtn.classList.remove("active");
      tagsShowAllBtn.style.color = "";
      tagsShowAllBtn.textContent = "Rel"; // Showing Relevant tags, button says Rel
      showToast("Showing relevant tags");
    }
    renderTagsSection();
  });
}

if (tagsBtn && tagsSection) {
  tagsBtn.addEventListener("click", () => {
    const isHidden = tagsSection.classList.contains("hidden");
    if (isHidden) {
      tagsSection.classList.remove("hidden");
      tagsBtn.classList.add("active");
      chrome.storage.local.set({ tagsSectionHidden: false });
    } else {
      tagsSection.classList.add("hidden");
      tagsBtn.classList.remove("active");
      chrome.storage.local.set({ tagsSectionHidden: true });
    }
  });
}

// Ensure initial state
if (tagsSection && !tagsSection.classList.contains("hidden") && tagsBtn) {
  tagsBtn.classList.add("active");
}

// Resizable Container
const resizeHandle = document.getElementById("resize-handle");
const resizableContainer = document.getElementById("resizable-container");

if (resizeHandle && resizableContainer) {
  let isResizing = false;
  let startX = 0;
  let startWidth = 0;

  resizeHandle.addEventListener("mousedown", (e) => {
    isResizing = true;
    startX = e.clientX;
    startWidth = resizableContainer.offsetWidth;
    resizeHandle.classList.add("resizing");
    resizableContainer.classList.add("resizing"); // Disable transition during drag
    document.body.style.cursor = "ew-resize";
    document.body.style.userSelect = "none";
    e.preventDefault();
  });

  document.addEventListener("mousemove", (e) => {
    if (!isResizing) return;

    const deltaX = e.clientX - startX;
    const newWidth = startWidth + deltaX;

    // Constrain width between min and max
    const minWidth = 150;
    const maxWidth = 600;
    const constrainedWidth = Math.max(minWidth, Math.min(maxWidth, newWidth));

    resizableContainer.style.width = constrainedWidth + "px";
  });

  document.addEventListener("mouseup", () => {
    if (isResizing) {
      isResizing = false;
      resizeHandle.classList.remove("resizing");
      resizableContainer.classList.remove("resizing"); // Re-enable transition
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    }
  });
}

// Collapse Toggle Button Action
const collapseToggleBtn = document.getElementById("collapse-toggle-btn");
if (collapseToggleBtn) {
  /* collapseToggleBtn listener removed */
}


// Navbar Toggle Button Action (same as collapse toggle)
if (navbarCollapseBtn) {
  /* navbarCollapseBtn listener removed */
}

// LL About Button Action
const aboutLlBtn = document.getElementById("about-ll-btn");
if (aboutLlBtn) {
  aboutLlBtn.addEventListener("click", () => {
    const aboutModal = document.getElementById("about-modal");
    if (aboutModal) aboutModal.style.display = "flex";
  });
}

// Tab Navigation Arrows
const tabsNavLeft = document.getElementById('tabs-nav-left');
const tabsNavRight = document.getElementById('tabs-nav-right');
const tabsBar = document.getElementById('tabs-bar');

if (tabsNavLeft && tabsBar) {
  tabsNavLeft.addEventListener('click', () => {
    tabsBar.scrollBy({ left: -200, behavior: 'smooth' });
  });
}

if (tabsNavRight && tabsBar) {
  tabsNavRight.addEventListener('click', () => {
    tabsBar.scrollBy({ left: 200, behavior: 'smooth' });
  });
}

if (tabsBar) {
  tabsBar.addEventListener('scroll', updateTabsNavButtons);
}

window.addEventListener('resize', updateTabsNavButtons);

// Hover Expand Logic
const hoverTrigger = document.getElementById("hover-expand-trigger");
if (hoverTrigger && resizableContainer) {
  let collapseTimeout;
  let expandTimeout;
  let isHoverExpanded = false;

  hoverTrigger.addEventListener("mouseenter", () => {
    // Clear any pending collapse
    if (collapseTimeout) {
      clearTimeout(collapseTimeout);
      collapseTimeout = null;
    }

    // Schedule expansion if currently collapsed
    if (resizableContainer.classList.contains("collapsed")) {
      // Clear any existing expand timer
      if (expandTimeout) clearTimeout(expandTimeout);

      expandTimeout = setTimeout(() => {
        resizableContainer.classList.remove("collapsed");
        isHoverExpanded = true;
        expandTimeout = null;
      }, 200); // 200ms delay to prevent accidental swipes
    }
  });

  resizableContainer.addEventListener("mouseleave", () => {
    // Cancel pending expansion if user leaves before delay triggers
    if (expandTimeout) {
      clearTimeout(expandTimeout);
      expandTimeout = null;
    }

    if (isHoverExpanded) {
      // Add delay before collapsing to prevent flickering
      collapseTimeout = setTimeout(() => {
        // Double check we are still logically collapsed before re-collapsing
        if (isUnlabeledContainerCollapsed) {
          resizableContainer.classList.add("collapsed");
        }
        isHoverExpanded = false;
      }, 100); // 100ms grace period
    }
  });
}


// Listen for storage changes to auto-refresh
let isEditingNote = false;
chrome.storage.onChanged.addListener((changes, namespace) => {
  if (namespace === "local" && changes.myLinks && !isEditingNote) {

    // Preserve current state
    const currentlyEditingIndex = currentEditingLinkIndex;
    const wasModalOpen = editLinkModal.style.display === "flex";

    loadData();

    // Restore modal state if it was open
    if (wasModalOpen && currentlyEditingIndex !== -1) {
      setTimeout(() => {
        currentEditingLinkIndex = currentlyEditingIndex;
      }, 100);
    }
  }
});

// Listen for messages from background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "LINKS_UPDATED") {

    // Force reload regardless of editing state
    const currentlyEditingIndex = currentEditingLinkIndex;
    const wasModalOpen = editLinkModal.style.display === "flex";

    // Reset pagination to show new items
    itemsToShow = itemsPerLoad;

    loadData();

    // Restore modal state if it was open
    if (wasModalOpen && currentlyEditingIndex !== -1) {
      setTimeout(() => {
        currentEditingLinkIndex = currentlyEditingIndex;
      }, 100);
    }
  }
});
function setupModal(triggerBtn, modalEl, focusInput = null, onOpen = null) {
  if (triggerBtn && modalEl) {
    triggerBtn.addEventListener("click", () => {
      closeAllModals();
      modalEl.style.display = "flex";
      if (focusInput) {
        focusInput.value = "";
        focusInput.focus();
      }
      if (onOpen) onOpen();
    });
  }
}


function closeAllModals() {
  // Clear inputs when closing
  if (labelInputEl) labelInputEl.value = "";
  if (modalInputEl) modalInputEl.value = "";

  // Close all modals EXCEPT grab-tabs-modal (preserve it during label creation)
  document.querySelectorAll(".modal").forEach(m => {
    if (m.id !== 'grab-tabs-modal') {
      m.style.display = "none";
    }
  });

  // Reset all modal state variables when closing ANY modal
  // But preserve if we're transitioning between related modals
  setTimeout(() => {
    // Only reset if no modal is open
    const anyModalOpen = Array.from(document.querySelectorAll(".modal"))
      .some(m => m.style.display === "flex");

    if (!anyModalOpen) {
      // Reset all state variables
      if (currentLabelPickerIndex === -1) {
        currentEditingLinkIndex = -1;
        currentEditingLinkTags = [];
        currentTagsModalIndex = -1;
        currentTagsModalTags = [];
      }
    }
  }, 50);
}

// Helper to update theme icon
function updateThemeIcon(isLight) {
  const themeBtn = document.getElementById("theme-btn");
  if (themeBtn) {
    const icon = themeBtn.querySelector(".material-icons-outlined");
    const label = themeBtn.querySelector(".nav-label");
    if (isLight) {
      icon.textContent = "light_mode";
      label.textContent = "Light Mode";
    } else {
      icon.textContent = "dark_mode";
      label.textContent = "Dark Mode";
    }
  }
}

function loadData() {
  chrome.storage.local.get(["myLinks", "customLabels", "trashLinks", "labelYoutubeAsSong", "autoSaveEnabled", "sidebarCollapsed", "tagsSectionHidden", "labelsSectionHidden", "hiddenTabs", "tabOrder", "unlabeledContainerCollapsed", "activeFilterLabel", "pinnedLabels", "tabListAutoClose"], (res) => {
    myLinks = (res.myLinks || []).filter(l => l);
    trashLinks = (res.trashLinks || []).filter(l => l);
    customLabels = res.customLabels || [];
    // Initialize hiddenTabs - hide all tabs on first install
    if (res.hiddenTabs === undefined) {
      // First install: hide Unlabeled and Trash by default
      hiddenTabs = ["Unlabeled", "trash"];
      tabOrder = [];
      chrome.storage.local.set({ hiddenTabs, tabOrder });
    } else {
      hiddenTabs = res.hiddenTabs || [];
      tabOrder = res.tabOrder || [];
    }
    pinnedLabels = res.pinnedLabels || [];
    labelYoutubeAsSong = res.labelYoutubeAsSong === true; // Strict check
    const autoSaveEnabled = res.autoSaveEnabled ?? false; // Default to false if not set
    tabListAutoClose = res.tabListAutoClose ?? true; // Default to true if not set (Global update)
    const sidebarCollapsed = res.sidebarCollapsed === true;
    isUnlabeledContainerCollapsed = res.unlabeledContainerCollapsed === true;

    // Update Toggles
    if (autoSaveToggle) autoSaveToggle.checked = autoSaveEnabled;
    if (youtubeLabelToggle) youtubeLabelToggle.checked = labelYoutubeAsSong;
    const tabListAutoCloseToggle = document.getElementById('tab-list-auto-close-toggle');
    if (tabListAutoCloseToggle) tabListAutoCloseToggle.checked = tabListAutoClose;
    const tagsSectionHidden = res.tagsSectionHidden === true;
    const labelsSectionHidden = res.labelsSectionHidden === true;

    // Apply Tags Section State
    const tagsSection = document.getElementById("tags-section");
    const tagsBtn = document.getElementById("tags-btn");

    if (tagsSection) {
      if (tagsSectionHidden) {
        tagsSection.classList.add("hidden");
        if (tagsBtn) tagsBtn.classList.remove("active");
      } else {
        tagsSection.classList.remove("hidden");
        if (tagsBtn) tagsBtn.classList.add("active");
      }
    }

    // Apply Labels Section State
    const labelsSection = document.getElementById("labels-section");
    const quickLabelsBtn = document.getElementById("labels-quick-btn");

    if (labelsSection) {
      if (labelsSectionHidden) {
        labelsSection.classList.add("hidden");
        if (quickLabelsBtn) quickLabelsBtn.classList.remove("active");
      } else {
        labelsSection.classList.remove("hidden");
        if (quickLabelsBtn) {
          if (isUnlabeledContainerCollapsed) {
            quickLabelsBtn.classList.remove("active");
          } else {
            quickLabelsBtn.classList.add("active");
          }
        }
      }
    }

    // Apply collapse state immediately
    const navbarCollapseBtn = document.getElementById("navbar-collapse-btn");

    if (isUnlabeledContainerCollapsed) {
      const container = document.getElementById('resizable-container');
      const collapseBtn = document.getElementById('collapse-toggle-btn');
      if (container) container.classList.add('collapsed');
      if (collapseBtn) {
        collapseBtn.innerHTML = '<span class="material-icons-outlined">chevron_right</span>';
        collapseBtn.title = 'Expand panel';
      }
      if (navbarCollapseBtn) navbarCollapseBtn.classList.remove("active");
    } else {
      // Default state (expanded) - ensure button is active
      if (navbarCollapseBtn) navbarCollapseBtn.classList.add("active");
    }

    // Restore active filter label - default to empty on first install
    let savedFilter = res.activeFilterLabel;

    // On first install (no saved filter), set to empty
    if (savedFilter === undefined) {
      activeFilterLabel = "";
      chrome.storage.local.set({ activeFilterLabel: "" });
    } else if (!savedFilter || savedFilter === "all" || savedFilter === "trash") {
      activeFilterLabel = "";
    } else {
      activeFilterLabel = savedFilter;
    }

    if (youtubeLabelToggle) youtubeLabelToggle.checked = labelYoutubeAsSong;
    if (autoSaveToggle) autoSaveToggle.checked = autoSaveEnabled;

    // Always set sidebar to collapsed since we removed the toggle button
    if (sidebar) {
      sidebar.classList.add("collapsed");
    }

    // Remove loading class to show UI
    document.body.classList.remove("loading");

    // Ensure itemsToShow is set to at least the default value
    if (itemsToShow === 0 || itemsToShow < itemsPerLoad) {
      itemsToShow = itemsPerLoad;
    }

    renderSidebarLabels();
    renderTabsBar(); // Render tabs FIRST before render() checks for them
    render();
    render();
    renderUnlabeledContainer();
    updateSyncButtonStatus();
  });
}




function renderSidebarLabels() {
  if (!sidebarLabelsContainer) return;
  sidebarLabelsContainer.innerHTML = "";

  const allLabels = [...customLabels];

  // Calculate counts and check for used labels
  const usedLabels = new Set();
  const labelCounts = {};

  myLinks.forEach(l => {
    const n = normalizeLinkItem(l); // Ensure we get the normalized label (handling "no label")
    const label = n.label;
    usedLabels.add(label);
    labelCounts[label] = (labelCounts[label] || 0) + 1;
  });

  // Include "Unlabeled" in sidebar (Only if > 0)
  if ((labelCounts["Unlabeled"] || 0) > 0) {
    allLabels.push("Unlabeled");
  }
  if (usedLabels.has("song")) allLabels.push("song");

  const uniqueLabels = [...new Set(allLabels)];

  // Sort labels: Pinned first, then others (alphabetical)
  uniqueLabels.sort((a, b) => {
    const isPinnedA = pinnedLabels.includes(a);
    const isPinnedB = pinnedLabels.includes(b);
    if (isPinnedA && !isPinnedB) return -1;
    if (!isPinnedA && isPinnedB) return 1;
    return a.localeCompare(b);
  });

  // Limit to 7 if not expanded
  const visibleLabels = isLabelsExpanded ? uniqueLabels : uniqueLabels.slice(0, 7);

  visibleLabels.forEach(label => {
    // Skip "Unlabeled" - it's in the resizable container
    const count = labelCounts[label] || 0;
    const isPinned = pinnedLabels.includes(label);

    const div = document.createElement("div");
    div.className = "nav-item";
    if (isPinned) {
      div.classList.add("pinned-item");
    }
    if (activeFilterLabel === label) {
      div.classList.add("active");
    }

    div.innerHTML = `
      <span class="material-icons-outlined" style="${isPinned ? 'color: #FDD663 !important;' : ''}">label</span>
      <span class="nav-label">${escapeHtml(label)}</span>
      <span class="nav-pin-btn material-icons-outlined ${isPinned ? 'pinned' : ''}" 
            style="${isPinned ? 'color: #FDD663 !important; opacity: 1;' : ''}"
            title="${isPinned ? 'Unpin label' : 'Pin label'}">
        push_pin
      </span>
      <span class="nav-count">${count}</span>
    `;

    // Pin Button Event
    const pinBtn = div.querySelector(".nav-pin-btn");
    pinBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (pinnedLabels.includes(label)) {
        pinnedLabels = pinnedLabels.filter(l => l !== label);
      } else {
        pinnedLabels.push(label);
      }
      chrome.storage.local.set({ pinnedLabels, lastModificationTime: Date.now() }, () => {
        renderSidebarLabels();
        updateSyncButtonStatus();
      });
    });

    div.addEventListener("click", () => {
      // Debug removed

      // Auto-Close Logic
      closeAllOtherTabs(label);

      setFilterLabel(label);

      // Collapse sidebar on label click (if not already collapsed)
      /* toggleUnlabeledContainer removed */
    });
    sidebarLabelsContainer.appendChild(div);
  });

  // Show More / Show Less Button
  if (uniqueLabels.length > 7) {
    const toggleDiv = document.createElement("div");
    toggleDiv.className = "nav-item toggle-labels-btn";
    toggleDiv.style.cursor = "pointer";
    toggleDiv.style.color = "var(--primary-color)";

    toggleDiv.innerHTML = `
      <span class="material-icons-outlined">${isLabelsExpanded ? "expand_less" : "expand_more"}</span>
      <span class="nav-label">${isLabelsExpanded ? "Show less" : "Show more"}</span>
    `;

    toggleDiv.addEventListener("click", () => {
      isLabelsExpanded = !isLabelsExpanded;
      renderSidebarLabels();
    });

    sidebarLabelsContainer.appendChild(toggleDiv);
  }

  // Update active state for static nav items
  if (deleteBtn) deleteBtn.classList.toggle("active", activeFilterLabel === "trash");

  // Update total count
  if (totalCountEl) totalCountEl.textContent = myLinks.length;
}

// Render Unlabeled links and Labels list in the resizable container
function renderUnlabeledContainer() {
  // const unlabeledList = document.getElementById("unlabeled-list");
  const unlabeledCount = document.getElementById("unlabeled-count");
  const labelsListContainer = document.getElementById("labels-list-container");

  // Only check for labels container
  if (!labelsListContainer) return;

  // === Unlabeled List Rendering Removed (Section Removed) ===

  // Update count (if element still exists for some reason, though likely removed)
  if (unlabeledCount) {
    const hiddenUnlabeledCount = myLinks.filter(l => normalizeLinkItem(l).label === "Unlabeled").length;
    unlabeledCount.textContent = hiddenUnlabeledCount;
  }

  // === Render Labels List (Bottom Section) ===
  // Calculate label counts
  const labelCounts = {};
  myLinks.forEach(link => {
    const n = normalizeLinkItem(link);
    labelCounts[n.label] = (labelCounts[n.label] || 0) + 1;
  });

  // Get all labels with counts (including 0)
  const allDisplayLabels = [...customLabels];
  // Include "Unlabeled" if > 0
  if (!allDisplayLabels.includes("Unlabeled") && (labelCounts["Unlabeled"] || 0) > 0) {
    allDisplayLabels.push("Unlabeled");
  }
  if (labelCounts["song"] > 0 && !allDisplayLabels.includes("song")) {
    allDisplayLabels.push("song");
  }

  const labelsWithCounts = allDisplayLabels
    .map(label => ({ name: label, count: labelCounts[label] || 0 }));

  // Sort labels: Pinned first
  labelsWithCounts.sort((a, b) => {
    const isPinnedA = pinnedLabels.includes(a.name);
    const isPinnedB = pinnedLabels.includes(b.name);
    if (isPinnedA && !isPinnedB) return -1;
    if (!isPinnedA && isPinnedB) return 1;
    return a.name.localeCompare(b.name);
  });

  // Populate labels list
  labelsListContainer.innerHTML = "";
  if (labelsWithCounts.length === 0) {
    labelsListContainer.innerHTML = `<div style="text-align:center; padding: 20px; color: var(--text-secondary); font-size: 12px;">No labels yet.</div>`;
  } else {
    labelsWithCounts.forEach(({ name, count }) => {
      const labelItem = document.createElement("div");
      labelItem.className = "label-item";
      if (activeFilterLabel === name) {
        labelItem.classList.add("active");
      }

      const isPinned = pinnedLabels.includes(name);

      labelItem.innerHTML = `
        <span class="label-item-name">${name}</span>
        <div class="label-item-right">
             <button class="icon-btn-small pin-label-btn ${isPinned ? 'pinned' : ''}" 
                     style="${isPinned ? 'transform: rotate(45deg);' : ''}"
                     title="${isPinned ? 'Unpin' : 'Pin'}">
                <span class="material-icons-outlined" style="font-size: 16px; ${isPinned ? 'color: #FDD663 !important;' : ''}">push_pin</span>
            </button>
             <button class="icon-btn-small switch-label-btn" title="Switch to this label (Close other tabs)">
                <span class="material-icons-outlined" style="font-size: 16px;">swap_horiz</span>
            </button>
             <button class="icon-btn-small open-all-links-btn" title="Open all links">
                <span class="material-icons-outlined" style="font-size: 16px;">open_in_new</span>
            </button>
            <span class="label-item-count">${count}</span>
        </div>
      `;

      // Pin Button Event
      const pinBtn = labelItem.querySelector(".pin-label-btn");
      if (pinBtn) {
        // Add specific style for pinned state here if needed, or rely on generalized CSS
        if (isPinned) {
          pinBtn.style.color = "var(--text-primary)";
          pinBtn.style.transform = "rotate(45deg)";
        }

        pinBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          if (pinnedLabels.includes(name)) {
            pinnedLabels = pinnedLabels.filter(l => l !== name);
          } else {
            pinnedLabels.push(name);
          }
          chrome.storage.local.set({ pinnedLabels, lastModificationTime: Date.now() }, () => {
            renderUnlabeledContainer();
            renderSidebarLabels(); // Update sidebar too
            updateSyncButtonStatus();
          });
        });
      }

      // Event listener for the "Switch" button
      const switchBtn = labelItem.querySelector(".switch-label-btn");
      if (switchBtn) {
        switchBtn.addEventListener("click", async (e) => {
          e.stopPropagation();

          if (await showConfirm(`Switch to "${name}"? This will close all other tabs and open ${count} links.`)) {
            // 1. Get links to open (URLs only)
            const linksToOpen = myLinks.filter(l => {
              const n = normalizeLinkItem(l);
              return n.label === name;
            });
            const urls = linksToOpen.map(l => normalizeLinkItem(l).url);

            // 2. Delegate to background script to ensure reliable tab switching (closing current tab)
            chrome.runtime.sendMessage({ type: 'SWITCH_LABEL', urls: urls });
          }
        });
      }

      // Event listener for the "Open All" button
      const openAllBtn = labelItem.querySelector(".open-all-links-btn");
      if (openAllBtn) {
        openAllBtn.addEventListener("click", async (e) => {
          e.stopPropagation(); // Prevent opening the label tab logic

          if (await showConfirm(`Open all ${count} links in "${name}"?`)) {
            const linksToOpen = myLinks.filter(l => {
              const n = normalizeLinkItem(l);
              return n.label === name;
            });

            linksToOpen.forEach(l => {
              window.open(normalizeLinkItem(l).url, "_blank");
            });
          }
        });
      }

      labelItem.addEventListener("click", (e) => {
        // Prevent if clicking on the open button
        if (e.target.closest(".open-all-links-btn") || e.target.closest(".switch-label-btn") || e.target.closest(".pin-label-btn")) return;

        // Debug removed

        // Auto-Close Logic
        closeAllOtherTabs(name);
        setFilterLabel(name);

        // Collapse sidebar on label click (if not already collapsed)
        /* toggleUnlabeledContainer removed */
      });

      labelsListContainer.appendChild(labelItem);
    });
  }
  renderTagsSection();
}

function renderTagsSection() {
  const tagsListContainer = document.getElementById("tags-list-container");
  if (!tagsListContainer) return;

  tagsListContainer.innerHTML = "";

  const tagCounts = {};
  let relevantLinks = [];

  // Determine which links to aggregate tags from
  // If active filter is a real label (not "all", "trash", "starred", "tag:...", "search:..."), use it.
  // Otherwise use all myLinks (except trash).

  const isSpecificLabel = activeFilterLabel &&
    activeFilterLabel !== "all" &&
    activeFilterLabel !== "starred" &&
    activeFilterLabel !== "trash" &&
    !activeFilterLabel.startsWith("tag:") &&
    !activeFilterLabel.startsWith("search:");

  if (isSpecificLabel && !forceShowAllTags) {
    relevantLinks = myLinks.filter(l => {
      const n = normalizeLinkItem(l);
      return n.label === activeFilterLabel;
    });
  } else {
    relevantLinks = myLinks;
  }

  // Count tags
  relevantLinks.forEach(link => {
    const n = normalizeLinkItem(link);
    if (n.tags && n.tags.length > 0) {
      n.tags.forEach(tag => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1;
      });
    }
  });

  const uniqueTags = Object.keys(tagCounts).sort();

  if (uniqueTags.length === 0) {
    tagsListContainer.innerHTML = `<div style="text-align:center; padding: 20px; color: var(--text-secondary); font-size: 12px;">No tags found.</div>`;
    return;
  }

  uniqueTags.forEach(tag => {
    const count = tagCounts[tag];
    const div = document.createElement("div");
    div.className = "tag-list-item";
    if (activeFilterLabel === `tag:${tag}`) {
      div.style.backgroundColor = "rgba(138, 180, 248, 0.16)"; // Active style manual for now or add class
      div.style.color = "var(--accent-color)";
    }

    div.innerHTML = `
          <span class="material-icons-outlined" style="font-size: 16px; margin-right: 8px; color: var(--text-secondary);">tag</span>
          <span class="tag-name">${escapeHtml(tag)}</span>
          <span class="tag-count">${count}</span>
      `;

    div.addEventListener("click", () => {
      setFilterLabel(`tag:${tag}`);
    });

    tagsListContainer.appendChild(div);
  });
}

// Create a link row with full functionality (hover details, drag & drop, etc.)
// Create a link row with full functionality (hover details, drag & drop, etc.)
function createLinkRow(link, originalIndex, isTrash, context = 'main') {
  const n = normalizeLinkItem(link);

  let isSelected = false;
  if (context === 'main') {
    isSelected = selectedLinks.has(originalIndex);
  } else if (context === 'unlabeled') {
    isSelected = selectedUnlabeledLinks.has(originalIndex);
  }

  const sourceList = isTrash ? trashLinks : myLinks;

  const tr = document.createElement("tr");
  tr.className = "link-row";
  if (isSelected) tr.classList.add("selected");
  tr.dataset.linkIndex = originalIndex; // Track original index for highlighting

  // Hover logic - show only action buttons
  tr.addEventListener("mouseenter", () => {
    if (!tr.classList.contains('pinned')) {
      tr.classList.add("show-actions-only");
    }
  });

  tr.addEventListener("mouseleave", () => {
    if (!tr.classList.contains('pinned')) {
      tr.classList.remove("show-actions-only");
    }
  });

  // Long press and drag functionality
  let longPressTimer = null;
  let isDraggable = false;
  let isLongPress = false;
  let isDragMode = false;
  let startX = 0;
  let startY = 0;
  const longPressDuration = 500;

  tr.addEventListener("mousedown", (e) => {
    // Determine allowed selection based on context
    const selectionEnabled = (context === 'main' || context === 'unlabeled');
    if (!selectionEnabled) return;

    // For main list, check if we should allow drag start (if no selection exists)
    if (context === 'main' && !isTrash && selectedLinks.size === 0) {
      if (e.target.closest('.link-drag-cell')) {
        isDragMode = true;
        isDraggable = true;
        tr.draggable = true;
        tr.classList.add('drag-ready');
        return;
      }
    }

    if (e.target.closest('.link-check-cell') ||
      e.target.closest('.link-star-cell') ||
      e.target.closest('.link-action-cell') ||
      e.target.closest('.link-open-caption') ||
      e.target.closest('.link-label-chip') ||
      e.target.closest('.link-add-label-chip') ||
      e.target.closest('.link-tag-pill') ||
      e.target.closest('.link-add-tags-chip') ||
      e.target.closest('.chip-remove-btn') ||
      e.target.closest('.star-icon-inline')) return;

    isDragMode = false;
    isLongPress = false;
    startX = e.clientX;
    startY = e.clientY;

    longPressTimer = setTimeout(() => {
      isLongPress = true;
      // Only enable drag on long press for main list and if no selection
      if (context === 'main' && !isTrash && selectedLinks.size === 0) {
        isDraggable = true;
        tr.draggable = true;
      }
      tr.classList.add('long-pressed');
      const checkbox = tr.querySelector('.link-check-cell input[type="checkbox"]');
      if (checkbox && !checkbox.checked) {
        checkbox.checked = true;
        if (context === 'main') {
          toggleSelection(originalIndex, true);
        } else if (context === 'unlabeled') {
          toggleUnlabeledSelection(originalIndex, true);
        }
      }
      showToast("Selection mode - Click to select more");
    }, longPressDuration);
  });

  tr.addEventListener("mousemove", (e) => {
    if (longPressTimer && !isDragMode) {
      const moveX = Math.abs(e.clientX - startX);
      const moveY = Math.abs(e.clientY - startY);
      if (moveX > 10 || moveY > 10) {
        clearTimeout(longPressTimer);
        longPressTimer = null;
      }
    }
  });

  tr.addEventListener("mouseup", (e) => {
    clearTimeout(longPressTimer);
    longPressTimer = null;
    if (!tr.classList.contains('dragging')) {
      isDragMode = false;
      tr.classList.remove('drag-ready');
    }
    setTimeout(() => {
      if (!tr.classList.contains('dragging')) {
        tr.draggable = false;
        isDraggable = false;
        tr.classList.remove('long-pressed', 'drag-ready');
      }
    }, 100);
  });

  tr.addEventListener("mouseleave", () => {
    if (!tr.classList.contains('dragging')) {
      clearTimeout(longPressTimer);
      longPressTimer = null;
      if (!isDragMode) {
        tr.classList.remove('drag-ready');
      }
    }
  });

  if (!isTrash) {
    tr.addEventListener("dragstart", (e) => {
      // Prevent drag if there is an active selection in MAIN context
      if (context === 'main' && selectedLinks.size > 0) {
        e.preventDefault();
        tr.draggable = false;
        return;
      }
      // Unlabeled links are not draggable for reordering (yet)
      if (context === 'unlabeled') {
        e.preventDefault();
        tr.draggable = false;
        return;
      }
      if (isDraggable) {
        handleDragStart(e, originalIndex);
      } else {
        e.preventDefault();
      }
    });
    tr.addEventListener("dragend", (e) => {
      tr.classList.remove('long-pressed', 'dragging', 'drag-ready');
      tr.draggable = false;
      isDraggable = false;
      isDragMode = false;
    });
    tr.addEventListener("dragover", handleDragOver);
    tr.addEventListener("drop", (e) => handleDrop(e, originalIndex));
    tr.addEventListener("dragenter", handleDragEnter);
    tr.addEventListener("dragleave", handleDragLeave);
  }

  if (!isTrash) {
    tr.addEventListener("click", (e) => {
      if (isLongPress) {
        isLongPress = false;
        return;
      }
      if (e.target.closest('.link-check-cell') ||
        e.target.closest('.link-star-cell') ||
        e.target.closest('.link-action-cell') ||
        e.target.closest('.link-drag-cell') ||
        e.target.closest('.link-open-caption') ||
        e.target.closest('.link-label-chip') ||
        e.target.closest('.link-add-label-chip') ||
        e.target.closest('.link-tag-pill') ||
        e.target.closest('.link-add-tags-chip') ||
        e.target.closest('.chip-remove-btn') ||
        e.target.closest('.star-icon-inline')) return;

      if (selectedLinks.size > 0 && context === 'main') {
        const checkbox = tr.querySelector('.link-check-cell input[type="checkbox"]');
        if (checkbox) {
          checkbox.checked = !checkbox.checked;
          toggleSelection(originalIndex, checkbox.checked);
        }
      } else if (selectedUnlabeledLinks.size > 0 && context === 'unlabeled') {
        const checkbox = tr.querySelector('.link-check-cell input[type="checkbox"]');
        if (checkbox) {
          checkbox.checked = !checkbox.checked;
          toggleUnlabeledSelection(originalIndex, checkbox.checked);
        }
      } else {
        // Show link details removed
        // showLinkDetails(originalIndex, link);
      }
    });


    tr.addEventListener("dblclick", (e) => {
      if (e.target.closest('.link-check-cell') ||
        e.target.closest('.link-star-cell') ||
        e.target.closest('.link-action-cell') ||
        e.target.closest('.link-drag-cell')) return;

      // Open the link on double-click
      openLink(encodeURIComponent(n.url));
    });
  }

  // 1. Drag Handle Cell
  const dragTd = document.createElement("td");
  dragTd.className = "link-drag-cell";
  // Only show drag handle in MAIN context when allowed
  if (!isTrash && context === 'main') {
    dragTd.innerHTML = '<span class="material-icons-outlined drag-handle">drag_indicator</span>';
  }
  tr.appendChild(dragTd);

  // 2. Checkbox Cell
  const checkTd = document.createElement("td");
  checkTd.className = "link-check-cell";
  // Allow checkbox if context permits
  if (context === 'main' || context === 'unlabeled') {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = isSelected;
    checkbox.addEventListener("change", (e) => {
      e.stopPropagation();
      if (context === 'main') {
        toggleSelection(originalIndex, e.target.checked);
      } else if (context === 'unlabeled') {
        toggleUnlabeledSelection(originalIndex, e.target.checked);
      }
    });
    checkTd.appendChild(checkbox);
  }
  tr.appendChild(checkTd);

  // 3. Title Cell
  const titleTd = document.createElement("td");
  titleTd.className = "link-title-cell";
  const titleWrapper = document.createElement("div");
  titleWrapper.className = "link-title-wrapper";
  if (n.note && n.note.trim()) {
    titleWrapper.title = `${n.title}\n\nNote: ${n.note}`;
  } else {
    titleWrapper.title = n.title;
  }

  const titleText = document.createElement("span");
  titleText.textContent = n.title;
  titleWrapper.appendChild(titleText);

  // Hover details
  const hoverDetails = document.createElement("div");
  hoverDetails.className = "link-hover-details";

  // Star chip
  const starChip = document.createElement("span");
  if (link.starred) {
    starChip.className = "link-star-chip starred";
    const starIcon = document.createElement("span");
    starIcon.className = "material-icons-outlined";
    starIcon.textContent = "star";
    const starText = document.createElement("span");
    starText.textContent = "Unstar";
    const removeBtn = document.createElement("span");
    removeBtn.className = "chip-remove-btn";
    removeBtn.innerHTML = "×";
    removeBtn.title = "Remove from starred";
    removeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleStar(originalIndex);
    });
    starChip.appendChild(starIcon);
    starChip.appendChild(starText);
    starChip.appendChild(removeBtn);
  } else {
    starChip.className = "link-star-chip";
    const starIcon = document.createElement("span");
    starIcon.className = "material-icons-outlined";
    starIcon.textContent = "star_border";
    const starText = document.createElement("span");
    starText.textContent = "Star";
    starChip.appendChild(starIcon);
    starChip.appendChild(starText);
    starChip.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleStar(originalIndex);
    });
  }
  hoverDetails.appendChild(starChip);



  // Label chip
  if (n.label && n.label !== "Unlabeled" && n.label.trim() !== "") {
    const labelChip = document.createElement("span");
    labelChip.className = "link-label-chip";
    const labelText = document.createElement("span");
    labelText.textContent = n.label;
    labelText.title = `Filter by: ${n.label}`;
    labelText.addEventListener("click", (e) => {
      e.stopPropagation();
      setFilterLabel(n.label);
    });
    const removeLabel = document.createElement("span");
    removeLabel.className = "chip-remove-btn";
    removeLabel.innerHTML = "×";
    removeLabel.title = "Remove label";
    removeLabel.addEventListener("click", (e) => {
      e.stopPropagation();
      removeLabelFromLink(originalIndex);
    });
    labelChip.appendChild(labelText);
    labelChip.appendChild(removeLabel);
    hoverDetails.appendChild(labelChip);
  } else {
    const addLabelChip = document.createElement("span");
    addLabelChip.className = "link-add-label-chip";
    addLabelChip.innerHTML = '<span class="material-icons-outlined">label</span><span>Add label</span>';
    addLabelChip.title = "Add a label to this link";
    addLabelChip.addEventListener("click", (e) => {
      e.stopPropagation();
      openLabelPickerModal(originalIndex);
    });
    hoverDetails.appendChild(addLabelChip);
  }

  // Tags display
  if (n.tags && n.tags.length > 0) {
    const tagsDisplay = document.createElement("div");
    tagsDisplay.className = "link-tags-display";
    n.tags.forEach(tag => {
      const tagPill = document.createElement("span");
      tagPill.className = "link-tag-pill";
      const tagText = document.createElement("span");
      tagText.textContent = tag;
      tagText.addEventListener("click", (e) => {
        e.stopPropagation();
        setFilterLabel(`tag:${tag}`);
      });
      const removeTag = document.createElement("span");
      removeTag.className = "chip-remove-btn";
      removeTag.innerHTML = "×";
      removeTag.title = "Remove tag";
      removeTag.addEventListener("click", (e) => {
        e.stopPropagation();
        removeTagFromLink(originalIndex, tag);
      });
      tagPill.appendChild(tagText);
      tagPill.appendChild(removeTag);
      tagsDisplay.appendChild(tagPill);
    });
    hoverDetails.appendChild(tagsDisplay);
  }

  // Add tags chip
  const addTagsChip = document.createElement("div");
  addTagsChip.className = "link-add-tags-chip";
  addTagsChip.innerHTML = `<span class="material-icons-outlined">add</span><span>Add tags</span>`;
  addTagsChip.addEventListener("click", (e) => {
    e.stopPropagation();
    openEditLinkModal(originalIndex);
    setTimeout(() => {
      if (editLinkTagsInput) editLinkTagsInput.focus();
    }, 200);
  });
  hoverDetails.appendChild(addTagsChip);

  titleWrapper.appendChild(hoverDetails);

  // Add Note Icon if note exists
  if (n.note && n.note.trim()) {
    const noteIconEl = document.createElement("span");
    noteIconEl.className = "material-icons-outlined link-note-icon";
    noteIconEl.textContent = "description";
    noteIconEl.title = n.note;
    // Prepend to title wrapper
    titleWrapper.insertBefore(noteIconEl, titleWrapper.firstChild);
  }

  titleTd.appendChild(titleWrapper);
  tr.appendChild(titleTd);

  // 4. Action Cell
  const actionTd = document.createElement("td");
  actionTd.className = "link-action-cell";
  const actionDiv = document.createElement("div");
  actionDiv.className = "action-buttons";

  if (isTrash) {
    const restoreBtn = document.createElement("button");
    restoreBtn.className = "action-icon-btn";
    restoreBtn.title = "Restore";
    restoreBtn.innerHTML = '<span class="material-icons-outlined">restore_from_trash</span>';
    restoreBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      restoreLink(originalIndex);
    });
    actionDiv.appendChild(restoreBtn);

    const deleteForeverBtn = document.createElement("button");
    deleteForeverBtn.className = "action-icon-btn delete-btn";
    deleteForeverBtn.title = "Delete Forever";
    deleteForeverBtn.innerHTML = '<span class="material-icons-outlined">delete_forever</span>';
    deleteForeverBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      deleteForever(originalIndex);
    });
    actionDiv.appendChild(deleteForeverBtn);
  } else {
    // 1. Copy Button
    const copyBtn = document.createElement("button");
    copyBtn.className = "action-icon-btn";
    copyBtn.title = "Copy to Clipboard";
    copyBtn.innerHTML = '<span class="material-icons-outlined">content_copy</span>';
    copyBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      copyLinkToClipboard(originalIndex);
    });
    actionDiv.appendChild(copyBtn);

    // 2. Move Button
    const moveToLabelBtn = document.createElement("button");
    moveToLabelBtn.className = "action-icon-btn move-to-label-icon";
    moveToLabelBtn.title = "Move to Label";
    moveToLabelBtn.innerHTML = '<span class="material-icons-outlined">drive_file_move</span>';
    moveToLabelBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      currentLabelPickerIndex = originalIndex;
      labelPickerModal.style.display = "flex";
      populateLabelPickerOptions();
    });
    actionDiv.appendChild(moveToLabelBtn);

    // 3. Pin Button
    const pinBtn = document.createElement("button");
    pinBtn.className = "action-icon-btn";
    if (link.starred) pinBtn.classList.add("starred"); // Add starred class if initially starred
    pinBtn.title = link.starred ? "Unstar" : "Star";
    pinBtn.innerHTML = `<span class="material-icons-outlined">${link.starred ? 'star' : 'star_border'}</span>`;
    pinBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (myLinks[originalIndex]) {
        // Toggle state
        const isNowStarred = !myLinks[originalIndex].starred;
        myLinks[originalIndex].starred = isNowStarred;

        // Update UI immediately (optimistic update)
        if (isNowStarred) {
          pinBtn.classList.add("starred");
          pinBtn.innerHTML = '<span class="material-icons-outlined">star</span>';
          pinBtn.title = "Unstar";
        } else {
          pinBtn.classList.remove("starred");
          pinBtn.innerHTML = '<span class="material-icons-outlined">star_border</span>';
          pinBtn.title = "Star";
        }

        saveLinks(isNowStarred ? "Link starred" : "Link unstarred");
      }
    });
    actionDiv.appendChild(pinBtn);

    // 4. More Menu Button (Dropdown Trigger)
    const menuContainer = document.createElement("div");
    menuContainer.className = "action-menu-container";
    menuContainer.style.position = "relative";
    menuContainer.style.display = "flex";
    menuContainer.style.alignItems = "center";

    const menuBtn = document.createElement("button");
    menuBtn.className = "action-icon-btn action-menu-btn";
    menuBtn.title = "More Actions";
    menuBtn.innerHTML = '<span class="material-icons-outlined">more_vert</span>';

    // Create Dropdown Menu
    const dropdownMenu = document.createElement("div");
    dropdownMenu.className = "link-action-dropdown";



    // Item 2: Add/Edit Note
    const noteItem = document.createElement("div");
    noteItem.className = "link-action-dropdown-item";
    noteItem.textContent = (n.note && n.note.trim()) ? "Edit note" : "Add note";
    noteItem.addEventListener("click", (e) => {
      e.stopPropagation();
      openNoteModal(originalIndex); // Use new modal
      dropdownMenu.classList.remove("active");
    });
    dropdownMenu.appendChild(noteItem);

    // Item 3: Add Tags
    const tagsItem = document.createElement("div");
    tagsItem.className = "link-action-dropdown-item";
    tagsItem.textContent = "Add tags";
    tagsItem.addEventListener("click", (e) => {
      e.stopPropagation();
      openEditLinkModal(originalIndex);
      dropdownMenu.classList.remove("active");
    });
    dropdownMenu.appendChild(tagsItem);

    // Item 4: Delete
    const deleteItem = document.createElement("div");
    deleteItem.className = "link-action-dropdown-item delete-item";
    deleteItem.textContent = "Delete";
    deleteItem.addEventListener("click", (e) => {
      e.stopPropagation();
      deleteLink(originalIndex);
      dropdownMenu.classList.remove("active");
    });
    dropdownMenu.appendChild(deleteItem);

    // Toggle logic
    menuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      // Close other open dropdowns first
      document.querySelectorAll('.link-action-dropdown.active').forEach(d => {
        if (d !== dropdownMenu) d.classList.remove('active');
      });
      dropdownMenu.classList.toggle("active");
    });

    menuContainer.appendChild(menuBtn);
    menuContainer.appendChild(dropdownMenu);
    actionDiv.appendChild(menuContainer);
  }

  actionTd.appendChild(actionDiv);
  tr.appendChild(actionTd);

  // Restore pinned state if this row was pinned before re-render
  if (originalIndex === pinnedRowIndex) {
    tr.classList.add('pinned', 'show-details');
    tr.classList.remove('show-actions-only');
  }

  return tr;
}


// Helper function to add a tab to tabOrder if not already present
function addToTabOrder(filter) {
  if (!tabOrder.includes(filter)) {
    tabOrder.push(filter);
    chrome.storage.local.set({ tabOrder });
  }
}

// Helper to auto-close other tabs
// Helper to auto-close other tabs
function closeAllOtherTabs(keepFilter) {
  // 1. Always ensure our target tab is OPEN (unhidden and in tabOrder)
  let newHiddenTabs = hiddenTabs.filter(t => t !== keepFilter);
  let newTabOrder = [...tabOrder];

  if (!newTabOrder.includes(keepFilter)) {
    newTabOrder.push(keepFilter);
  }

  // 2. If Auto-Close is ENABLED, close everything else
  if (tabListAutoClose) {
    const filtersToHide = new Set([...newHiddenTabs]);

    // Add all known labels and trash to hidden
    const allKnownFilters = new Set(["Unlabeled", "trash", ...customLabels, "song"]);

    // Scan used labels from myLinks ensuring we catch everything
    myLinks.forEach(l => {
      const n = normalizeLinkItem(l);
      if (n.label) allKnownFilters.add(n.label);
    });

    allKnownFilters.forEach(f => {
      if (f !== keepFilter) filtersToHide.add(f);
    });

    // Also hide anything currently in tabOrder (search results, tags, etc)
    newTabOrder.forEach(t => {
      if (t !== keepFilter) filtersToHide.add(t);
    });

    // Ensure keepFilter is definitely NOT hidden
    filtersToHide.delete(keepFilter);

    newHiddenTabs = Array.from(filtersToHide);
    newTabOrder = [keepFilter];
  }

  // 3. Update global state and persist
  hiddenTabs = newHiddenTabs;
  tabOrder = newTabOrder;

  chrome.storage.local.set({ hiddenTabs, tabOrder });
}

function setFilterLabel(label) {
  activeFilterLabel = label;
  itemsToShow = itemsPerLoad;
  selectedLinks.clear(); // Clear selection on view change

  // Save active filter label to storage
  chrome.storage.local.set({ activeFilterLabel: label });

  renderSidebarLabels(); // Update active class
  renderTabsBar(); // Check hiddenTabs and update bar
  render();
  updateSelectionUI();
  renderUnlabeledContainer(); // Update active state in resizable container
}

function render() {
  if (!tableBodyEl) return;

  // Check if there are any visible tabs (tabs that aren't hidden)
  const tabsBar = document.getElementById("tabs-bar");
  const toolbar = document.querySelector(".toolbar");
  const hasVisibleTabs = tabsBar && tabsBar.querySelectorAll('.tab').length > 0;

  // If no tabs are opened, hide toolbar, clear the table body and return early
  if (!hasVisibleTabs) {
    if (toolbar) toolbar.style.display = "none";
    tableBodyEl.innerHTML = "";
    if (dataCountInfo) dataCountInfo.textContent = "";
    return;
  }

  // Show toolbar if there are visible tabs
  if (toolbar) toolbar.style.display = "";

  const isTrash = activeFilterLabel === "trash";
  const sourceList = isTrash ? trashLinks : myLinks;

  // Check if we're filtering by tag
  const isTagFilter = activeFilterLabel.startsWith("tag:");
  const tagName = isTagFilter ? activeFilterLabel.replace("tag:", "") : null;
  const parentLabel = tabsBar?.dataset.lastLabelFilter;

  // 1. Filter - Group by label when filtering by tag
  let filteredByLabel = {};
  let mainFiltered = [];

  if (isTagFilter && parentLabel) {
    // Separate filtering: main label and other labels
    sourceList.forEach(link => {
      if (!link) return;
      const n = normalizeLinkItem(link);
      const title = (n.title || "").toLowerCase();
      const url = (n.url || "").toLowerCase();
      const label = (n.label || "Unlabeled");
      const tags = n.tags || [];

      const matchesSearch = !searchQuery || title.includes(searchQuery) || url.includes(searchQuery);
      const hasTag = tags.includes(tagName);

      if (matchesSearch && hasTag) {
        if (label === parentLabel) {
          mainFiltered.push(link);
        } else {
          if (!filteredByLabel[label]) {
            filteredByLabel[label] = [];
          }
          filteredByLabel[label].push(link);
        }
      }
    });
  } else {
    // Normal filtering
    mainFiltered = sourceList.filter(link => {
      if (!link) return false;
      const n = normalizeLinkItem(link);
      const title = (n.title || "").toLowerCase();
      const url = (n.url || "").toLowerCase();
      const label = (n.label || "Unlabeled");
      const isStarred = !!n.starred;
      const tags = n.tags || [];

      const matchesSearch = !searchQuery || title.includes(searchQuery) || url.includes(searchQuery);

      let matchesFilter = true;

      if (activeFilterLabel.startsWith("search:")) {
        // Handle search results
        const searchTerm = activeFilterLabel.replace("search:", "").toLowerCase();
        matchesFilter = title.includes(searchTerm) || url.includes(searchTerm);
      } else if (activeFilterLabel.startsWith("tag:")) {
        const tagName = activeFilterLabel.replace("tag:", "");
        matchesFilter = tags.includes(tagName);
      } else if (isTrash) {
        matchesFilter = true;
      } else if (activeFilterLabel === "starred") {
        matchesFilter = isStarred;
      } else {
        matchesFilter = label === activeFilterLabel;
      }

      return matchesSearch && matchesFilter;
    });
  }

  // Combine for sorting
  let filtered = [...mainFiltered];

  // 2. Sort
  const sortComparator = (a, b) => {
    // 1. Starred priority (always on top)
    const nA = normalizeLinkItem(a);
    const nB = normalizeLinkItem(b);

    if (nA.starred && !nB.starred) return -1;
    if (!nA.starred && nB.starred) return 1;

    // 2. Selected Sort Order
    switch (activeFilterSort) {
      case "title-asc": return (nA.title || "").localeCompare(nB.title || "");
      case "title-desc": return (nB.title || "").localeCompare(nA.title || "");
      case "date-asc": return sourceList.indexOf(a) - sourceList.indexOf(b);
      case "date-desc": default: return sourceList.indexOf(b) - sourceList.indexOf(a);
    }
  };

  filtered.sort(sortComparator);

  // Sort other labels too
  Object.keys(filteredByLabel).forEach(label => {
    filteredByLabel[label].sort(sortComparator);
  });

  // 3. Infinite Scroll
  const totalItems = filtered.length;

  // Calculate total for other labels
  const totalOtherLabels = Object.values(filteredByLabel).reduce((sum, arr) => sum + arr.length, 0);
  const grandTotal = totalItems + totalOtherLabels;

  // Limit items to show to available items
  if (itemsToShow > totalItems) itemsToShow = totalItems;

  const paged = filtered.slice(0, itemsToShow);

  // Update Controls
  const showing = Math.min(itemsToShow, totalItems);
  if (dataCountInfo) {
    if (totalOtherLabels > 0) {
      dataCountInfo.textContent = `Showing ${showing} of ${totalItems} (${grandTotal} total including other labels)`;
    } else {
      dataCountInfo.textContent = `Showing ${showing} of ${totalItems}`;
    }
  }

  // Hide pagination buttons (we'll use scroll instead)
  if (prevBtn) prevBtn.style.display = 'none';
  if (nextBtn) nextBtn.style.display = 'none';

  // 4. Render Rows
  tableBodyEl.innerHTML = "";
  if (totalItems === 0) {
    tableBodyEl.innerHTML = `<tr><td colspan="5" style="text-align:center; padding: 20px; color: var(--text-secondary);">${isTrash ? "Trash is empty." : "No links found."}</td></tr>`;
  } else {
    paged.forEach((link, index) => {
      const originalIndex = sourceList.indexOf(link);
      const tr = createLinkRow(link, originalIndex, isTrash, 'main');
      tableBodyEl.appendChild(tr);
    });


    // Render items from other labels (if tag filter with specific parent label)
    if (isTagFilter && parentLabel && parentLabel !== "all" && Object.keys(filteredByLabel).length > 0) {
      Object.keys(filteredByLabel).sort().forEach(label => {
        const linksInLabel = filteredByLabel[label];
        if (linksInLabel.length === 0) return;

        // Add separator row
        const separatorTr = document.createElement("tr");
        separatorTr.className = "label-separator-row";
        const separatorTd = document.createElement("td");
        separatorTd.colSpan = 4;
        separatorTd.innerHTML = `
          <div class="label-separator">
            <div class="label-separator-line"></div>
            <div class="label-separator-text">
              <span class="material-icons-outlined">label</span>
              <span>See tag "${tagName}" from label "${label}" (${linksInLabel.length})</span>
            </div>
            <div class="label-separator-line"></div>
          </div>
        `;
        separatorTr.appendChild(separatorTd);
        tableBodyEl.appendChild(separatorTr);

        // Render links from this label
        linksInLabel.forEach((link, index) => {
          const originalIndex = sourceList.indexOf(link);
          const tr = createLinkRow(link, originalIndex, isTrash, 'main');
          tr.classList.add("other-label-row");
          tableBodyEl.appendChild(tr);
        });
      });
    }
  }
  updateSelectionUI();
  renderTabsBar();
  updateSortDropdownActiveState();
}

// === Drag & Drop Logic ===
function handleDragStart(e, index) {
  draggedItemIndex = index;
  e.dataTransfer.effectAllowed = "move";
  e.target.classList.add("dragging");
}

function handleDragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = "move";
  return false;
}

function handleDragEnter(e) {
  e.target.closest("tr").classList.add("drag-over");
}

function handleDragLeave(e) {
  e.target.closest("tr").classList.remove("drag-over");
}

function handleDrop(e, targetIndex) {
  e.stopPropagation();
  e.preventDefault();
  const tr = e.target.closest("tr");
  if (tr) tr.classList.remove("drag-over");

  // Remove dragging class from all rows
  document.querySelectorAll(".link-row").forEach(row => row.classList.remove("dragging"));

  if (draggedItemIndex !== null && draggedItemIndex !== targetIndex) {
    // Reorder myLinks
    const item = myLinks[draggedItemIndex];
    myLinks.splice(draggedItemIndex, 1);
    myLinks.splice(targetIndex, 0, item);
    saveLinks("Link reordered");
  }
  draggedItemIndex = null;
}

// === Selection & Star Logic ===
function toggleSelection(index, isChecked) {
  if (isChecked) {
    selectedLinks.add(index);
  } else {
    selectedLinks.delete(index);
  }
  updateSelectionUI();
}

function updateSelectionUI() {
  const selectionActions = document.getElementById("selection-actions");
  const selectionCount = document.getElementById("selection-count");
  const selectAllBtn = document.getElementById("select-all-btn");
  const moveSelectedBtn = document.getElementById("move-selected-btn");
  const restoreSelectedBtn = document.getElementById("restore-selected-btn");
  const deleteSelectedBtn = document.getElementById("delete-selected-btn");
  const cancelSelectionBtn = document.getElementById("cancel-selection-btn");

  if (selectedLinks.size > 0) {
    // Enter selection mode
    document.body.classList.add("selection-mode");

    if (selectionActions) selectionActions.style.display = "flex";
    if (selectionCount) selectionCount.textContent = `${selectedLinks.size} selected`;
    if (selectCheckboxIcon) selectCheckboxIcon.textContent = "check_box";
    if (cancelSelectionBtn) cancelSelectionBtn.style.display = "inline-flex";

    // Toggle buttons based on context (Trash vs My Links)
    if (activeFilterLabel === "trash") {
      if (moveSelectedBtn) moveSelectedBtn.style.display = "none";
      if (restoreSelectedBtn) restoreSelectedBtn.style.display = "inline-flex";
      if (deleteSelectedBtn) deleteSelectedBtn.title = "Delete Forever";
    } else {
      if (moveSelectedBtn) moveSelectedBtn.style.display = "inline-flex";
      if (restoreSelectedBtn) restoreSelectedBtn.style.display = "none";
      if (deleteSelectedBtn) deleteSelectedBtn.title = "Move to Trash";
    }

  } else {
    // Exit selection mode
    document.body.classList.remove("selection-mode");

    if (selectionActions) selectionActions.style.display = "none";
    if (selectCheckboxIcon) selectCheckboxIcon.textContent = "check_box_outline_blank";
    if (cancelSelectionBtn) cancelSelectionBtn.style.display = "none";

    // Always remove toolbar-visible class when exiting selection mode
    const toolbar = document.querySelector(".toolbar");
    if (toolbar) {
      toolbar.classList.remove("toolbar-visible");
    }
  }
}

// === Unlabeled Selection Mode Functions ===
function toggleUnlabeledSelection(index, isChecked) {
  if (isChecked) {
    selectedUnlabeledLinks.add(index);
  } else {
    selectedUnlabeledLinks.delete(index);
  }
  isUnlabeledSelectionMode = selectedUnlabeledLinks.size > 0;
  updateUnlabeledSelectionUI();
}

function updateUnlabeledSelectionUI() {
  const toolbar = document.getElementById("unlabeled-selection-toolbar");
  const selectionCountEl = document.getElementById("unlabeled-selection-count");
  const unlabeledActions = document.querySelector(".unlabeled-actions");
  const checkboxIcon = document.getElementById("unlabeled-select-checkbox-icon");

  if (selectedUnlabeledLinks.size > 0) {
    // Show toolbar
    if (toolbar) toolbar.style.display = "flex";
    if (selectionCountEl) selectionCountEl.textContent = `${selectedUnlabeledLinks.size} selected`;
    if (checkboxIcon) checkboxIcon.textContent = "check_box";
    // Hide normal actions when in selection mode
    if (unlabeledActions) unlabeledActions.style.display = "none";
  } else {
    // Hide toolbar
    if (toolbar) toolbar.style.display = "none";
    if (checkboxIcon) checkboxIcon.textContent = "check_box_outline_blank";
    // Show normal actions
    if (unlabeledActions) unlabeledActions.style.display = "flex";
  }
}

function selectAllUnlabeled() {
  // Get all unlabeled link indices
  const unlabeledIndices = [];
  myLinks.forEach((link, index) => {
    const n = normalizeLinkItem(link);
    if (n.label === "Unlabeled") {
      unlabeledIndices.push(index);
    }
  });

  // Add all to selection
  unlabeledIndices.forEach(index => selectedUnlabeledLinks.add(index));
  isUnlabeledSelectionMode = selectedUnlabeledLinks.size > 0;

  // Re-render to show checkboxes checked
  renderUnlabeledContainer();
  updateUnlabeledSelectionUI();
  showToast(`Selected ${unlabeledIndices.length} link(s)`);
}

function openMoveModalForUnlabeled() {
  // Populate label select
  if (moveLabelSelect) {
    moveLabelSelect.innerHTML = "";

    // Add all available labels
    const allLabels = [...customLabels];

    allLabels.forEach(label => {
      const option = document.createElement("option");
      option.value = label;
      option.textContent = label;
      moveLabelSelect.appendChild(option);
    });
  }

  // Show modal
  closeAllModals();
  if (moveModal) moveModal.style.display = "flex";

  // Update confirm button handler
  if (moveConfirmBtn) {
    moveConfirmBtn.onclick = () => {
      const targetLabel = moveLabelSelect.value;
      if (!targetLabel) {
        showToast("Please select a label");
        return;
      }

      // Move selected unlabeled links to target label
      const indicesToMove = Array.from(selectedUnlabeledLinks);
      indicesToMove.forEach(index => {
        if (myLinks[index]) {
          const normalized = normalizeLinkItem(myLinks[index]);
          normalized.label = targetLabel;
          myLinks[index] = normalized;
        }
      });

      // Save and refresh
      chrome.storage.local.set({ myLinks }, () => {
        selectedUnlabeledLinks.clear();
        isUnlabeledSelectionMode = false;
        closeAllModals();
        loadData();
        showToast(`Moved ${indicesToMove.length} link(s) to "${targetLabel}"`);
        triggerSmartSync();
      });
    };
  }
}

async function deleteUnlabeledSelection() {
  const count = selectedUnlabeledLinks.size;
  if (count === 0) return;

  if (!await showConfirm(`Move ${count} link(s) to trash?`)) return;

  const indicesToDelete = Array.from(selectedUnlabeledLinks).sort((a, b) => b - a);

  indicesToDelete.forEach(index => {
    if (myLinks[index]) {
      trashLinks.push(myLinks[index]);
      myLinks.splice(index, 1);
    }
  });

  chrome.storage.local.set({ myLinks, trashLinks }, () => {
    selectedUnlabeledLinks.clear();
    isUnlabeledSelectionMode = false;
    loadData();
    showToast(`Moved ${count} link(s) to trash`);
  });
}

function toggleAllSelection() {
  const isTrash = activeFilterLabel === "trash";
  const sourceList = isTrash ? trashLinks : myLinks;

  // Get indices of currently RENDERED items (respecting pagination)
  const visibleIndices = [];

  // First, filter to get all matching items
  const filtered = sourceList.filter((link, index) => {
    if (!link) return false;
    const n = normalizeLinkItem(link);
    const title = (n.title || "").toLowerCase();
    const url = (n.url || "").toLowerCase();
    const label = (n.label || "Unlabeled");
    const isStarred = !!link.starred;
    const tags = n.tags || [];

    // Search Filter
    const matchesSearch = !searchQuery || title.includes(searchQuery) || url.includes(searchQuery);

    // Label/Tag Filter
    let matchesFilter = true;
    if (activeFilterLabel.startsWith("tag:")) {
      const tagName = activeFilterLabel.replace("tag:", "");
      matchesFilter = tags.includes(tagName);
    } else if (activeFilterLabel === "all" || isTrash) {
      matchesFilter = true;
    } else if (activeFilterLabel === "starred") {
      matchesFilter = isStarred;
    } else {
      matchesFilter = label === activeFilterLabel;
    }

    if (matchesSearch && matchesFilter) {
      visibleIndices.push(index);
      return true;
    }
    return false;
  });

  if (filtered.length === 0) return;

  // Sort to match current sort order
  const sortedIndices = [...visibleIndices];
  sortedIndices.sort((a, b) => {
    const nA = normalizeLinkItem(sourceList[a]);
    const nB = normalizeLinkItem(sourceList[b]);

    switch (activeFilterSort) {
      case "title-asc": return (nA.title || "").localeCompare(nB.title || "");
      case "title-desc": return (nB.title || "").localeCompare(nA.title || "");
      case "date-asc": return a - b;
      case "date-desc": default: return b - a;
    }
  });

  // Only select items currently visible (infinite scroll)
  const currentPageIndices = sortedIndices.slice(0, itemsToShow);

  if (currentPageIndices.length === 0) return;

  // Check if all items on current page are already selected
  const allCurrentPageSelected = currentPageIndices.every(i => selectedLinks.has(i));

  if (allCurrentPageSelected) {
    // Deselect all items on current page
    currentPageIndices.forEach(i => selectedLinks.delete(i));
  } else {
    // Select all items on current page
    currentPageIndices.forEach(i => selectedLinks.add(i));
  }

  render();
  updateSelectionUI();
}

function updateSortDropdownActiveState() {
  if (!sortDropdownMenu) return;

  const items = sortDropdownMenu.querySelectorAll(".sort-dropdown-item");
  items.forEach(item => {
    if (item.dataset.sort === activeFilterSort) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

function handleSelectionAction(action) {
  const isTrash = activeFilterLabel === "trash";
  const sourceList = isTrash ? trashLinks : myLinks;

  switch (action) {
    case "all":
      // Select ALL items (not just rendered)
      sourceList.forEach((link, index) => {
        if (!link) return;
        const n = normalizeLinkItem(link);
        const title = (n.title || "").toLowerCase();
        const url = (n.url || "").toLowerCase();
        const label = (n.label || "Unlabeled");
        const isStarred = !!link.starred;
        const tags = n.tags || [];

        const matchesSearch = !searchQuery || title.includes(searchQuery) || url.includes(searchQuery);

        let matchesFilter = true;
        if (activeFilterLabel.startsWith("tag:")) {
          const tagName = activeFilterLabel.replace("tag:", "");
          matchesFilter = tags.includes(tagName);
        } else if (activeFilterLabel === "all" || isTrash) {
          matchesFilter = true;
        } else if (activeFilterLabel === "starred") {
          matchesFilter = isStarred;
        } else {
          matchesFilter = label === activeFilterLabel;
        }

        if (matchesSearch && matchesFilter) {
          selectedLinks.add(index);
        }
      });
      showToast(`Selected all ${selectedLinks.size} items`);
      break;

    case "none":
      // Deselect all
      selectedLinks.clear();
      showToast("Selection cleared");
      break;

  }

  render();
  updateSelectionUI();
}

function toggleStar(index) {
  if (myLinks[index]) {
    myLinks[index].starred = !myLinks[index].starred;
    saveLinks(myLinks[index].starred ? "Link starred" : "Link unstarred");
  } else if (trashLinks[index]) {
    trashLinks[index].starred = !trashLinks[index].starred;
    saveLinks("Trash item updated");
  }
}
// Remove note from link
function removeNoteFromLink(index) {
  if (myLinks[index]) {
    myLinks[index].note = "";
    saveLinks("Note removed");
  }
}

// Hide all note input sections except the specified one
function hideAllNoteInputs(exceptRow) {
  document.querySelectorAll('.link-note-section').forEach(section => {
    if (exceptRow && section.closest('.link-row') === exceptRow) {
      // Skip this one
      return;
    }

    // Don't hide if actively being edited
    if (section.dataset.activeEditing === "true") {
      return;
    }

    // Check if this link actually has a saved note by looking at the data
    const linkIndex = parseInt(section.dataset.linkIndex);
    if (!isNaN(linkIndex) && myLinks[linkIndex]) {
      const link = myLinks[linkIndex];
      const hasNote = link.note && link.note.trim();

      // Only hide if there's no saved note
      if (!hasNote) {
        section.classList.remove('active');
      }
    } else {
      // If we can't determine, just hide it
      section.classList.remove('active');
    }
  });
}

function updateSelectionAfterDelete(deletedIndex) {
  const newSelection = new Set();
  selectedLinks.forEach(i => {
    if (i < deletedIndex) {
      newSelection.add(i);
    } else if (i > deletedIndex) {
      newSelection.add(i - 1);
    }
  });
  selectedLinks = newSelection;
  updateSelectionUI();
}

async function deleteSelectedLinks() {
  if (selectedLinks.size === 0) return;

  if (await showConfirm(`Delete ${selectedLinks.size} links?`)) {
    // Sort indices descending to remove without shifting issues
    const indices = Array.from(selectedLinks).sort((a, b) => b - a);

    indices.forEach(index => {
      if (activeFilterLabel === "trash") {
        trashLinks.splice(index, 1);
      } else {
        const item = myLinks[index];
        if (item) {
          myLinks.splice(index, 1);
          trashLinks.push(item);
        }
      }
    });

    selectedLinks.clear();
    saveLinks(activeFilterLabel === "trash" ? "Links deleted forever" : "Links moved to Trash");
    updateSelectionUI();
  }
};

function restoreSelectedLinks() {
  if (selectedLinks.size === 0) return;

  const indices = Array.from(selectedLinks).sort((a, b) => b - a);
  let count = 0;

  indices.forEach(index => {
    const item = trashLinks[index];
    if (item) {
      trashLinks.splice(index, 1);
      myLinks.push(item);
      count++;
    }
  });

  if (count > 0) {
    selectedLinks.clear();
    saveLinks(`Restored ${count} links`);
    updateSelectionUI();
  }
};

function populateMoveOptions() {
  moveLabelSelect.innerHTML = "";
  const allLabels = ["Unlabeled", ...customLabels];

  // Determine default label
  let defaultLabel = "Unlabeled";

  // Use appropriate selection set
  const isUnlabeledMode = typeof selectedUnlabeledLinks !== 'undefined' && selectedUnlabeledLinks.size > 0;
  const activeSet = isUnlabeledMode ? selectedUnlabeledLinks : selectedLinks;

  if (activeSet.size > 0) {
    const indices = Array.from(activeSet);
    const firstItem = myLinks[indices[0]];
    if (firstItem) {
      const firstLabel = normalizeLinkItem(firstItem).label;
      // Check if all selected items have the same label
      const allSame = indices.every(i => {
        const item = myLinks[i];
        return item && normalizeLinkItem(item).label === firstLabel;
      });

      if (allSame) {
        defaultLabel = firstLabel;
      }
    }
  }

  [...new Set(allLabels)].forEach(l => {
    const opt = document.createElement("option");
    opt.value = l;
    opt.textContent = l;
    if (l === defaultLabel) opt.selected = true;
    moveLabelSelect.appendChild(opt);
  });
};

function handleMoveSelected() {
  const targetLabel = moveLabelSelect.value;
  if (!targetLabel) return;

  const isUnlabeledMode = typeof selectedUnlabeledLinks !== 'undefined' && selectedUnlabeledLinks.size > 0;
  const activeSet = isUnlabeledMode ? selectedUnlabeledLinks : selectedLinks;

  const indices = Array.from(activeSet);
  let count = 0;

  indices.forEach(index => {
    const item = myLinks[index];
    if (item) {
      // If moving to "Unlabeled", we can just set label to null or "Unlabeled"
      // The normalize function handles "Unlabeled" string as a valid label if we want, 
      // but usually we might want to clear it. 
      // However, based on existing logic, "Unlabeled" is treated as a label string in some places.
      // Let's stick to the value from the select.
      item.label = targetLabel;
      count++;
    }
  });

  if (count > 0) {
    saveLinks(`Moved ${count} links to "${targetLabel}"`);

    if (isUnlabeledMode) {
      selectedUnlabeledLinks.clear();
      updateUnlabeledSelectionUI();
      renderUnlabeledContainer();
      render(); // Update main list too 
    } else {
      selectedLinks.clear();
      updateSelectionUI();
      render();
    }

    closeAllModals();
    renderSidebarLabels(); // Update counts
  }
};
// === Copy Link to Clipboard Function ===
function copyLinkToClipboard(index) {
  const link = myLinks[index];
  if (!link) return;

  const n = normalizeLinkItem(link);
  const textToCopy = n.url;

  // Ensure window has focus for clipboard API
  if (!document.hasFocus()) window.focus();

  navigator.clipboard.writeText(textToCopy).then(() => {
    showToast("Copied to clipboard!");
  }).catch(err => {
    console.warn("Clipboard API failed, trying fallback...", err);
    fallbackCopyTextToClipboard(textToCopy);
  });
}

function fallbackCopyTextToClipboard(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;

  // Ensure it's not visible but part of the DOM
  textArea.style.position = "fixed";
  textArea.style.left = "-9999px";
  textArea.style.top = "0";
  document.body.appendChild(textArea);

  textArea.focus();
  textArea.select();

  try {
    const successful = document.execCommand('copy');
    if (successful) {
      showToast("Copied to clipboard!");
    } else {
      showToast("Failed to copy", "warning");
    }
  } catch (err) {
    console.error("Fallback copy failed:", err);
    showToast("Failed to copy", "warning");
  }

  document.body.removeChild(textArea);
}

// === Actions ===
window.openDetailsPanel = function (index) {
  currentEditingIndex = index;
  const link = myLinks[index];
  if (!link) return;

  const n = normalizeLinkItem(link);
  detailsTitle.value = n.title;
  detailsUrl.value = n.url;

  // Set current tags
  currentEditingTags = [...(n.tags || [])];
  renderTagsInput();

  // Populate labels dropdown
  detailsLabel.innerHTML = "";
  const allLabels = ["Unlabeled", ...customLabels, "song"];
  const uniqueLabels = [...new Set(allLabels)];

  uniqueLabels.forEach(l => {
    const opt = document.createElement("option");
    opt.value = l;
    opt.textContent = l;
    if (l === n.label) opt.selected = true;
    detailsLabel.appendChild(opt);
  });

  detailsPanel.classList.add("open");
};

function closeDetailsPanel() {
  detailsPanel.classList.remove("open");
  currentEditingIndex = -1;
}

function handleDetailsSave() {
  if (currentEditingIndex === -1 || !myLinks[currentEditingIndex]) return;

  const newTitle = detailsTitle.value.trim();
  const newUrl = detailsUrl.value.trim();
  const newLabel = detailsLabel.value;

  if (!newUrl) return showToast("URL cannot be empty", "warning");

  const n = normalizeLinkItem(myLinks[currentEditingIndex]);
  n.title = newTitle || newUrl;
  n.url = newUrl;
  n.label = newLabel;
  n.tags = [...currentEditingTags]; // Save tags

  myLinks[currentEditingIndex] = n;

  // Queue 'UPDATE' action
  queueAction('UPDATE', n);

  chrome.storage.local.set({ myLinks, lastModificationTime: Date.now() }, () => {
    showToast("Link updated");
    closeDetailsPanel();
    loadData(); // Refresh immediately
    updateSyncButtonStatus();
  });
}

window.deleteLink = async function (index) {
  if (activeFilterLabel === "trash") {
    if (await showConfirm("Delete this link permanently?")) {
      trashLinks.splice(index, 1);
      updateSelectionAfterDelete(index);
      saveLinks("Link deleted permanently");
    }
  } else {
    // Move to trash
    const link = myLinks[index];
    myLinks.splice(index, 1);
    trashLinks.push(link);

    updateSelectionAfterDelete(index);

    // Queue 'DELETE' action -- assuming URL is unique ID for now
    queueAction('DELETE', { url: link.url });

    saveLinks("Moved to Trash");
    if (currentEditingIndex === index) {
      closeDetailsPanel();
    }
  }
};

window.restoreLink = function (index) {
  const link = trashLinks[index];
  trashLinks.splice(index, 1);
  myLinks.push(link);
  updateSelectionAfterDelete(index);
  saveLinks("Link restored");
};

window.deleteForever = async function (index) {
  if (await showConfirm("Delete this link permanently?")) {
    trashLinks.splice(index, 1);
    updateSelectionAfterDelete(index);
    saveLinks("Link deleted permanently");
  }
};

window.openLink = function (encodedUrl) {
  const url = decodeURIComponent(encodedUrl);
  window.open(url, "_blank");
};

function handleManualSave() {
  const url = modalInputEl.value.trim();
  if (!url) return showToast("Please enter a URL", "warning");

  let normalizedUrl = url.match(/^https?:\/\//) ? url : `https://${url}`;

  // Check duplicate
  if (myLinks.some(l => normalizeLinkItem(l).url === normalizedUrl)) {
    return showToast("URL already exists", "warning");
  }

  let label;
  if (manualInputTargetLabel) {
    label = manualInputTargetLabel;
    manualInputTargetLabel = null; // Reset after use check
  } else {
    label = getAutoLabel(normalizedUrl);
  }
  myLinks.push({
    url: normalizedUrl,
    title: normalizedUrl,
    label,
    starred: false,
    tags: [],
    date: new Date().toISOString()
  });

  // Ensure tab is visible
  if (hiddenTabs.includes(label)) {
    hiddenTabs = hiddenTabs.filter(t => t !== label);
  }
  // Ensure tab is in order
  if (!tabOrder.includes(label)) {
    tabOrder.push(label);
  }

  const storageUpdate = {
    myLinks,
    lastModificationTime: Date.now(),
    activeFilterLabel: label,
    hiddenTabs,
    tabOrder
  };

  chrome.storage.local.set(storageUpdate, () => {
    showToast("Link saved");
    closeAllModals();
    loadData(); // Refresh immediately
    updateSyncButtonStatus();
    triggerSmartSync();
  });
}

// Perform search and create search results tab
function performSearch(query) {
  const lowerQuery = query.toLowerCase();

  // Count matching results
  const matchingCount = myLinks.filter(link => {
    const n = normalizeLinkItem(link);
    const title = (n.title || "").toLowerCase();
    const url = (n.url || "").toLowerCase();
    return title.includes(lowerQuery) || url.includes(lowerQuery);
  }).length;

  // Create search filter identifier
  const searchFilter = `search:${query}`;

  // Close modal
  searchModal.style.display = "none";

  // Auto-Close Logic for Search
  closeAllOtherTabs(searchFilter);

  // Unhide search tab if it was hidden
  if (hiddenTabs.includes(searchFilter)) {
    hiddenTabs = hiddenTabs.filter(l => l !== searchFilter);
  }

  // Add search to tabOrder if not present
  if (!tabOrder.includes(searchFilter)) {
    tabOrder.push(searchFilter);
  }

  // Save updated state
  chrome.storage.local.set({ hiddenTabs, tabOrder });

  // Set active filter label first so renderTabsBar sees it as a search
  activeFilterLabel = searchFilter;

  // Render tabs first to include the search tab
  renderTabsBar();

  // Switch to search results (will update storage and other UI elements)
  setFilterLabel(searchFilter);

  showToast(`Found ${matchingCount} result${matchingCount !== 1 ? 's' : ''}`);
}

function handleLabelSave() {
  const name = labelInputEl.value.trim();
  if (!name) return showToast("Enter label name", "warning");

  if (customLabels.includes(name)) return showToast("Label exists", "warning");

  customLabels.push(name);
  chrome.storage.local.set({ customLabels, lastModificationTime: Date.now() }, () => {
    showToast("Label created");
    closeAllModals();
    updateSyncButtonStatus();
    triggerSmartSync();

    // If we came from the label picker modal, apply the new label to the link
    if (currentLabelPickerIndex !== -1 && myLinks[currentLabelPickerIndex]) {
      const linkIndex = currentLabelPickerIndex;
      myLinks[linkIndex].label = name;

      // Clear the state BEFORE saving
      currentLabelPickerIndex = -1;

      chrome.storage.local.set({ myLinks, lastModificationTime: Date.now() }, () => {
        showToast(`Label "${name}" applied`);
        // Make sure to unhide the tab if it was hidden
        if (hiddenTabs.includes(name)) {
          const index = hiddenTabs.indexOf(name);
          if (index > -1) {
            hiddenTabs.splice(index, 1);
            chrome.storage.local.set({ hiddenTabs });
          }
        }
        // Switch to the newly created label's tab to show correct data
        loadData();
        updateSyncButtonStatus();
        // Use setTimeout to ensure loadData completes before switching tabs
        setTimeout(() => {
          setFilterLabel(name);
        }, 100);
      });
    } else {
      // Just reload if not from label picker
      loadData();
    }
  });
}

function renderManageLabels() {
  manageLabelList.innerHTML = "";
  if (customLabels.length === 0) {
    manageLabelList.innerHTML = '<p style="text-align:center; color: var(--text-secondary); padding: 20px;">No custom labels.</p>';
    return;
  }

  customLabels.forEach(label => {
    const div = document.createElement("div");
    div.className = "manage-label-item";

    const nameSpan = document.createElement("span");
    nameSpan.className = "manage-label-name";
    nameSpan.textContent = label;

    const actionsDiv = document.createElement("div");
    actionsDiv.className = "manage-label-actions";

    const editBtn = document.createElement("button");
    editBtn.className = "manage-label-action-btn";
    editBtn.innerHTML = '<span class="material-icons-outlined" style="font-size: 18px;">edit</span>';
    editBtn.title = "Rename";
    editBtn.addEventListener("click", () => handleEditLabel(label));

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "manage-label-action-btn delete";
    deleteBtn.innerHTML = '<span class="material-icons-outlined" style="font-size: 18px;">delete</span>';
    deleteBtn.title = "Delete";
    deleteBtn.addEventListener("click", () => handleDeleteLabel(label));

    actionsDiv.appendChild(editBtn);
    actionsDiv.appendChild(deleteBtn);

    div.appendChild(nameSpan);
    div.appendChild(actionsDiv);
    manageLabelList.appendChild(div);
  });
}

// Populate Quick Labels Modal for collapsed sidebar
function populateQuickLabelsModal() {
  if (!quickLabelsList) return;

  quickLabelsList.innerHTML = "";

  // Calculate label counts
  const labelCounts = {};
  myLinks.forEach(l => {
    const n = normalizeLinkItem(l);
    const label = n.label;
    labelCounts[label] = (labelCounts[label] || 0) + 1;
  });

  // Create list of all labels (custom + song + unlabeled)
  const allLabels = [...customLabels];
  if (labelCounts["song"] > 0) allLabels.push("song");
  if (labelCounts["Unlabeled"] > 0) allLabels.push("Unlabeled");

  const uniqueLabels = [...new Set(allLabels)];

  if (uniqueLabels.length === 0) {
    quickLabelsList.innerHTML = '<p style="text-align:center; color: var(--text-secondary); padding: 20px;">No labels available.</p>';
    return;
  }

  uniqueLabels.forEach(label => {
    const count = labelCounts[label] || 0;
    const div = document.createElement("div");
    div.className = "quick-label-item";

    div.innerHTML = `
      <span class="label-name">${escapeHtml(label)}</span>
      <span class="label-count">${count}</span>
    `;

    div.addEventListener("click", () => {
      // Debug removed

      // Close modal
      quickLabelsModal.style.display = "none";

      // Auto-Close Logic
      closeAllOtherTabs(label);
      setFilterLabel(label);
    });

    quickLabelsList.appendChild(div);
  });
}

function handleEditLabel(oldName) {
  const newName = prompt("Enter new label name:", oldName);
  if (newName === null) return; // Cancelled
  const trimmed = newName.trim();
  if (!trimmed) return showToast("Label name cannot be empty", "warning");
  if (trimmed === oldName) return;
  if (customLabels.includes(trimmed)) return showToast("Label already exists", "warning");

  // Update customLabels
  const index = customLabels.indexOf(oldName);
  if (index !== -1) {
    customLabels[index] = trimmed;
  }

  // Update links
  let updatedCount = 0;
  [myLinks, trashLinks].forEach(list => {
    list.forEach(link => {
      if (link.label === oldName) {
        link.label = trimmed;
        updatedCount++;
      }
    });
  });

  chrome.storage.local.set({ customLabels, myLinks, trashLinks, lastModificationTime: Date.now() }, () => {
    showToast(`Label renamed. ${updatedCount} links updated.`);
    renderManageLabels(); // Re-render list
    loadData(); // Re-render sidebar and main view
    updateSyncButtonStatus();
  });
}

async function handleDeleteLabel(labelName) {
  const result = await showConfirm(
    `Delete label "${labelName}"?`,
    "Delete Label",
    [
      { text: "Label Only", value: "label-only", class: "primary-btn delete-btn" }, // Keep links, reset label
      { text: "Label & Links", value: "label-and-links", class: "primary-btn delete-btn" } // Delete links
    ]
  );

  if (!result) return;

  // Remove from customLabels
  customLabels = customLabels.filter(l => l !== labelName);

  let updatedCount = 0;
  let deletedCount = 0;

  if (result === "label-only") {
    // Reset links to Unlabeled
    [myLinks, trashLinks].forEach(list => {
      list.forEach(link => {
        if (link.label === labelName) {
          link.label = "Unlabeled";
          updatedCount++;
        }
      });
    });
    showToast(`Label deleted. ${updatedCount} links moved to Unlabeled.`);
  } else if (result === "label-and-links") {
    // Move to Trash (or permanently delete if in trash)
    // 1. Move active links to trash
    const newMyLinks = [];
    myLinks.forEach(link => {
      if (link.label === labelName) {
        trashLinks.push(link);
        deletedCount++;
      } else {
        newMyLinks.push(link);
      }
    });
    myLinks = newMyLinks;

    // 2. Trash links with this label are effectively already in trash, but we might want to unlabel them or leave them?
    // "Delete Label + Links" usually implies destroying the organization. 
    // If they are already in trash, let's just unlabel them so they don't ghost?
    // Or just leave them in trash with the old label text (which is now gone from options). 
    // Let's set them to Unlabeled in trash so they don't point to a non-existent label.
    trashLinks.forEach(link => {
      if (link.label === labelName) {
        link.label = "Unlabeled";
      }
    });

    showToast(`Label and ${deletedCount} links moved to Trash.`);
  }

  chrome.storage.local.set({ customLabels, myLinks, trashLinks, lastModificationTime: Date.now() }, () => {
    renderManageLabels();
    loadData();
    updateSyncButtonStatus();
    triggerSmartSync();
  });
}

async function handleDeleteAll() {
  if (!await showConfirm("Delete all links permanently?")) return;

  myLinks = [];
  saveLinks("All links deleted");
  closeAllModals();
}

// === Mutation Helper ===
function queueAction(type, payload) {
  chrome.storage.local.get(['pendingUpdates'], (res) => {
    const pending = res.pendingUpdates || [];
    pending.push(createSyncAction(type, payload));
    chrome.storage.local.set({ pendingUpdates: pending }, () => {
      // Trigger optimized sync (debounced via background msg if needed, 
      // but for now we just let the background alarm pick it up OR trigger manually if urgent)
      // The user requested "Immediate sync on overlay hover", which calls handleSyncClick
      // We should also trigger background sync here for "near real-time"
      chrome.runtime.sendMessage({ type: 'TRIGGER_SYNC' });
    });
  });
}

function saveLinks(msg) {
  const now = Date.now();
  // Legacy saveLinks just saves the whole file locally. 
  // We need to keep this for local state persistence.
  // BUT the *Sync* part needs to know WHAT changed.
  // Since saveLinks is called by many functions, determining the specific delta here is hard.
  // Strategy: We must update the CALLERS of saveLinks to queue the specific action.

  chrome.storage.local.set({ myLinks, trashLinks, lastModificationTime: now }, () => {
    if (msg) showToast(msg);
    loadData();
    triggerSmartSync();
  });
}

// === Search & Filter Helpers ===
function handleSearchInput(query) {
  query = query.trim().toLowerCase();
  if (!query) {
    searchSuggestions.style.display = "none";
    searchQuery = "";
    render();
    return;
  }

  const matches = myLinks.filter(l => {
    const n = normalizeLinkItem(l);
    return (n.title || "").toLowerCase().includes(query) || (n.url || "").toLowerCase().includes(query);
  }).slice(0, 5);

  if (matches.length === 0) {
    searchSuggestions.style.display = "none";
    return;
  }

  searchSuggestions.innerHTML = "";
  matches.forEach(l => {
    const n = normalizeLinkItem(l);
    const li = document.createElement("li");
    li.className = "suggestion-item";
    li.textContent = n.title || n.url;

    li.addEventListener("click", () => {
      selectSuggestion(encodeURIComponent(n.url));
    });

    searchSuggestions.appendChild(li);
  });

  searchSuggestions.style.display = "block";
}

window.selectSuggestion = function (encodedUrl) {
  const url = decodeURIComponent(encodedUrl);
  const link = myLinks.find(l => normalizeLinkItem(l).url === url);
  if (link) {
    searchInput.value = normalizeLinkItem(link).title;
    searchQuery = searchInput.value.toLowerCase();
    searchSuggestions.style.display = "none";
    render();
  }
};

function populateFilterOptions() {
  filterLabelSelect.innerHTML = '<option value="all">All Labels</option>';

  const usedLabels = new Set();
  [...myLinks, ...trashLinks].forEach(l => usedLabels.add(l.label || "Unlabeled"));

  const allLabels = [...customLabels];
  if (usedLabels.has("Unlabeled")) allLabels.unshift("Unlabeled");
  if (usedLabels.has("song")) allLabels.push("song");

  [...new Set(allLabels)].forEach(l => {
    const opt = document.createElement("option");
    opt.value = l;
    opt.textContent = l;
    if (l === activeFilterLabel) opt.selected = true;
    filterLabelSelect.appendChild(opt);
  });
  filterSortSelect.value = activeFilterSort;
}

function applyAdvancedFilter() {
  activeFilterLabel = filterLabelSelect.value;
  activeFilterSort = filterSortSelect.value;
  closeAllModals();
  renderSidebarLabels(); // Update active sidebar item
  render();
  showToast("Filter applied");
}

function changePage(delta) {
  currentPage += delta;
  render();
}

function loadMoreItems() {
  if (isLoadingMore) return;

  isLoadingMore = true;

  // Increase items to show by 15
  itemsToShow += itemsPerLoad;

  // Re-render with more items
  render();

  // Reset loading flag
  setTimeout(() => {
    isLoadingMore = false;
  }, 100);
}

// === Utils ===
function normalizeLinkItem(item) {
  if (!item) return { title: "", url: "", label: "Unlabeled", starred: false, tags: [], note: "" };
  let label = item.label || "Unlabeled";
  if (label === "no label") label = "Unlabeled";
  // Handle tags
  let tags = [];
  if (Array.isArray(item.tags)) {
    tags = item.tags;
  } else if (typeof item.tags === 'string' && item.tags.trim()) {
    tags = item.tags.split(',').map(t => t.trim()).filter(t => t);
  }
  // Handle note
  let note = item.note || "";
  let date = item.date || "";
  return {
    title: item.title || item.url,
    url: item.url || item.title || "",
    label: label,
    starred: !!item.starred,
    tags: tags,
    note: note,
    date: date
  };
}

function getAutoLabel(url) {
  try {
    const urlObj = new URL(url);
    const hostname = urlObj.hostname;

    if (hostname === "music.youtube.com") return "song";

    const isYouTube = hostname === "www.youtube.com" ||
      hostname === "youtube.com" ||
      hostname === "m.youtube.com";

    if (isYouTube && labelYoutubeAsSong === true) return "song";

    return "Unlabeled";
  } catch (e) {
    return "Unlabeled";
  }
}

function escapeHtml(text) {
  if (!text) return "";
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function showToast(message, type = "success", duration = 3000) {
  const existing = document.getElementById("toast");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.id = "toast";
  toast.textContent = message;
  Object.assign(toast.style, {
    position: "fixed",
    bottom: "24px",
    left: "24px", /* Gmail style: bottom left */
    backgroundColor: "#303134",
    color: "#E8EAED",
    padding: "12px 24px",
    borderRadius: "4px",
    boxShadow: "0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12)",
    zIndex: 10000,
    fontSize: "14px",
    opacity: 0,
    transition: "opacity 0.3s"
  });

  document.body.append(toast);
  requestAnimationFrame(() => toast.style.opacity = 1);

  if (duration > 0) {
    setTimeout(() => {
      toast.style.opacity = 0;
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }

  return toast;
}

// === Sync Status Logic ===
function updateSyncButtonStatus() {
  chrome.storage.local.get(["lastModificationTime", "lastBackupTime", "google_token"], (res) => {
    const lastMod = res.lastModificationTime || 0;
    const lastBackup = res.lastBackupTime || 0;
    const hasToken = !!res.google_token;
    const syncBtn = document.getElementById("sync-btn");

    if (!syncBtn) return;

    // Reset content
    syncBtn.innerHTML = "";
    syncBtn.className = "nav-item"; // Reset classes

    // 1. Not Logged In
    if (!hasToken) {
      const textSpan = document.createElement("span");
      textSpan.className = "sync-signin-text";
      textSpan.innerHTML = "sign<br>in";
      syncBtn.appendChild(textSpan);

      const labelSpan = document.createElement("span");
      labelSpan.className = "nav-label";
      labelSpan.textContent = "Backup Sync";
      syncBtn.appendChild(labelSpan);

      syncBtn.title = "Sign in to Sync";
      return;
    }

    // 2. Processing (Syncing)
    if (typeof isSyncing !== 'undefined' && isSyncing) {
      const iconSpan = document.createElement("span");
      iconSpan.className = "material-icons-outlined sync-icon-rotating";
      iconSpan.textContent = "cached";
      syncBtn.appendChild(iconSpan);

      const labelSpan = document.createElement("span");
      labelSpan.className = "nav-label";
      labelSpan.textContent = "Syncing...";
      syncBtn.appendChild(labelSpan);

      syncBtn.title = "Sync in progress...";
      return;
    }

    // 3. Unsaved Changes vs Synced (Done)
    if (lastMod > lastBackup) {
      // Unsaved
      const iconSpan = document.createElement("span");
      iconSpan.className = "material-icons-outlined";
      iconSpan.textContent = "cloud_upload";
      iconSpan.style.color = "var(--warning-color)";
      syncBtn.appendChild(iconSpan);

      const labelSpan = document.createElement("span");
      labelSpan.className = "nav-label";
      labelSpan.textContent = "Backup Sync";
      syncBtn.appendChild(labelSpan);

      syncBtn.classList.add("sync-status-unsaved");
      syncBtn.title = "Unsaved changes (Click to Sync)";
    } else {
      // Synced (Done) -> Green Checklist
      const iconSpan = document.createElement("span");
      iconSpan.className = "material-icons-outlined";
      iconSpan.textContent = "check_circle";
      iconSpan.style.color = "var(--success-color)";
      syncBtn.appendChild(iconSpan);

      const labelSpan = document.createElement("span");
      labelSpan.className = "nav-label";
      labelSpan.textContent = "Backup Sync";
      syncBtn.appendChild(labelSpan);

      syncBtn.classList.add("sync-status-success");
      syncBtn.title = "Synced with Google Drive";
    }
  });
}

// === Export/Import Functions ===

// === Export Logic with Checkboxes ===
function openExportModal() {
  if (!exportModal) return;

  // Clear previous checkboxes
  exportCheckboxContainer.innerHTML = "";

  // Helper to create checkbox
  const createCheckbox = (label, value, checked = false) => {
    const div = document.createElement("div");
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.marginBottom = "8px";

    const chk = document.createElement("input");
    chk.type = "checkbox";
    chk.value = value;
    chk.checked = checked;
    chk.id = `export-chk-${value}`;
    chk.style.marginRight = "10px";
    chk.style.cursor = "pointer";

    const lbl = document.createElement("label");
    lbl.textContent = label;
    lbl.htmlFor = `export-chk-${value}`;
    lbl.style.cursor = "pointer";
    lbl.style.color = "var(--text-primary)"; // Dynamic color

    div.appendChild(chk);
    div.appendChild(lbl);
    exportCheckboxContainer.appendChild(div);
  };

  // 1. All Links (Default Checked)
  createCheckbox("All Links (Everyone)", "all", true);

  // 2. Starred (Default unchecked)
  createCheckbox("Starred Links", "starred", false);

  // 3. Trash (Default unchecked)
  createCheckbox("Trash", "trash", false);

  // 4. Custom Labels
  if (customLabels.length > 0) {
    const labelHeader = document.createElement("div");
    labelHeader.textContent = "Labels:";
    labelHeader.style.marginTop = "12px";
    labelHeader.style.marginBottom = "8px";
    labelHeader.style.fontWeight = "bold";
    labelHeader.style.color = "var(--text-secondary)";
    labelHeader.style.fontSize = "12px";
    exportCheckboxContainer.appendChild(labelHeader);

    customLabels.forEach(label => {
      createCheckbox(label, `label:${label}`, false);
    });
  }

  // Calculate label counts locally
  const localLabelCounts = {};
  myLinks.forEach(l => {
    const n = normalizeLinkItem(l);
    const label = n.label || "Unlabeled";
    localLabelCounts[label] = (localLabelCounts[label] || 0) + 1;
  });

  // 5. Song
  if (localLabelCounts["song"] > 0) {
    createCheckbox("song", "label:song", false);
  }

  // 6. Unlabeled (if any)
  if (localLabelCounts["Unlabeled"] > 0) {
    createCheckbox("Unlabeled", "label:Unlabeled", false);
  }

  // Restore format selection if needed
  const defaultFormat = localStorage.getItem("lastExportFormat");
  if (exportFormatSelect) {
    exportFormatSelect.value = defaultFormat || "txt";
  }

  exportModal.style.display = "flex";
}

// Handle Confirmed Export
async function handleExportConfirm() {
  // Gather selected scopes
  const checkboxes = exportCheckboxContainer.querySelectorAll("input[type='checkbox']:checked");
  if (checkboxes.length === 0) return showToast("Please select at least one option", "warning");

  const format = exportFormatSelect.value;
  localStorage.setItem("lastExportFormat", format);

  const nowStr = new Date().toISOString().slice(0, 10);
  let exportCount = 0;

  for (const cb of checkboxes) {
    const scope = cb.value;
    let linksToExport = [];
    let filenameBase = "";
    let includeConfig = false;

    if (scope === "all") {
      linksToExport = [...myLinks];
      filenameBase = `all_links_${nowStr}`;
      includeConfig = true;
    } else if (scope === "trash") {
      linksToExport = [...trashLinks];
      filenameBase = `trash_${nowStr}`;
    } else if (scope === "starred") {
      linksToExport = myLinks.filter(l => l.starred);
      filenameBase = `starred_${nowStr}`;
    } else if (scope.startsWith("label:")) {
      const labelName = scope.replace("label:", "");
      linksToExport = myLinks.filter(l => normalizeLinkItem(l).label === labelName);
      filenameBase = `${labelName}_${nowStr}`;
    }

    if (linksToExport.length === 0) continue;

    if (format === "txt") {
      exportTxt(linksToExport, `${filenameBase}.txt`);
    } else if (format === "csv") {
      exportCsv(linksToExport, `${filenameBase}.csv`);
    } else {
      exportJson(linksToExport, `${filenameBase}.json`, includeConfig);
    }

    exportCount++;
    // Small delay to help browser handle multiple downloads if necessary
    await new Promise(r => setTimeout(r, 500));
  }

  if (exportCount === 0) return showToast("No links matched your selections", "warning");

  closeAllModals();
  showToast(`Initiated ${exportCount} downloads`);
}

function exportTxt(links = myLinks, filename = "links.txt") {
  if (links.length === 0) return showToast("No links to export", "warning");
  const text = links.map(l => l.url).join("\n");
  downloadFile(text, filename, "text/plain");
}

function exportCsv(links = myLinks, filename = "links.csv") {
  if (links.length === 0) return showToast("No links to export", "warning");

  // Header with new columns
  const header = "Title,URL,Label,Starred,Tags,Note,Pinned,CreationDate\n";

  const csv = header + links.map(l => {
    const n = normalizeLinkItem(l);
    const tags = (n.tags || []).join(";");
    const note = (n.note || "").replace(/"/g, '""').replace(/\n/g, '\\n'); // Escape newlines in notes
    const pinned = n.pinned ? "true" : "false";
    const date = n.date || "";

    return `"${(n.title || "").replace(/"/g, '""')}","${(n.url || "").replace(/"/g, '""')}","${(n.label || "").replace(/"/g, '""')}","${l.starred ? "true" : "false"}","${tags.replace(/"/g, '""')}","${note}","${pinned}","${date}"`;
  }).join("\n");

  // Append Metadata Row for Full Config Backup (Embedding JSON in an extra row)
  // Format: #METADATA#,Version,JSON_String
  if (customLabels.length > 0 || pinnedLabels.length > 0) {
    const config = {
      labels: customLabels,
      pinned: pinnedLabels
    };
    const configJson = JSON.stringify(config).replace(/"/g, '""'); // Escape inner quotes for CSV
    const metadataRow = `\n"#METADATA#","1","${configJson}"`;
    downloadFile(csv + metadataRow, filename, "text/csv");
  } else {
    downloadFile(csv, filename, "text/csv");
  }
}

function exportJson(links = myLinks, filename = "links.json", includeConfig = false) {
  if (links.length === 0 && customLabels.length === 0) return showToast("No data to export", "warning");

  // Export full config object
  const exportData = {
    version: 1,
    savedAt: new Date().toISOString(),
    links: links,
    labels: customLabels,
    pinned: pinnedLabels
  };

  const jsonStr = JSON.stringify(exportData, null, 2);
  downloadFile(jsonStr, filename, "application/json");
}

function downloadFile(content, filename, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// === Google Drive Sync ===

async function handleSyncClick(arg) {
  // Determine if this is an auto-sync (silent) or manual click (Event object)
  const options = (arg && arg.silent) ? arg : { silent: false };

  // Use Web Locks API to prevent multiple tabs/windows from syncing simultaneously
  if (navigator.locks) {
    await navigator.locks.request('save_link_manager_sync', { ifAvailable: true }, async (lock) => {
      if (!lock) {
        // console.warn("Sync already in progress (lock held by another instance).");
        return;
      }
      await performSync(options);
    });
  } else {
    // Fallback for environments without Web Locks (unlikely in modern Chrome)
    await performSync(options);
  }
}

async function performSync(options = {}) {
  if (isSyncing) return;
  isSyncing = true;
  updateSyncButtonStatus();
  syncPending = false; // Clear pending flag as we are starting to process them
  try {
    // Toast removed

    // 1. Get Auth Token
    // 1. Get Auth Token
    const token = await getAuthToken(options);
    if (!token) {
      return; // User cancelled, error, or silent mode skipped auth
    }

    // 2. Check if Initial Sync has run
    const { hasInitialSyncRun, driveFolderId } = await chrome.storage.local.get(["hasInitialSyncRun", "driveFolderId"]);


    // === UNIFIED SETTINGS & LINKS SYNC (Folder-Based) ===

    // 1. Get/Create Folder "Link list"
    let folderId = driveFolderId;

    // Validate cached folderId if it exists
    if (folderId) {
      try {
        const checkUrl = `https://www.googleapis.com/drive/v3/files/${folderId}?fields=id,trashed`;
        const checkRes = await fetch(checkUrl, { headers: { Authorization: `Bearer ${token}` } });
        if (!checkRes.ok) {
          folderId = null; // Invalid/Deleted, need to search again
        } else {
          const checkData = await checkRes.json();
          if (checkData.trashed) folderId = null;
        }
      } catch (e) {
        folderId = null;
      }
    }

    if (!folderId) {
      folderId = await getOrCreateFolder(token);
      // Cache the valid folder ID
      await chrome.storage.local.set({ driveFolderId: folderId });
    }

    // 2. Find Backup File inside Folder
    // OPTIMIZATION: Check cache first
    let { backupFileId, lastSyncedRemoteTime } = await chrome.storage.local.get(["backupFileId", "lastSyncedRemoteTime"]);

    // Verify cached ID validity only if it exists (Lightweight check)
    // Actually, trust cache until 404. searching every time defeats the purpose.

    let existingFileId = backupFileId;
    let remoteModifiedTime = null;

    if (existingFileId) {
      // Check metadata to see if it's still valid (and get modifiedTime)
      try {
        const metadataUrl = `https://www.googleapis.com/drive/v3/files/${existingFileId}?fields=modifiedTime,trashed`;
        const metaRes = await fetch(metadataUrl, { headers: { Authorization: `Bearer ${token}` } });

        if (metaRes.ok) {
          const meta = await metaRes.json();
          if (meta.trashed) {
            existingFileId = null; // Was trashed
          } else {
            remoteModifiedTime = new Date(meta.modifiedTime).getTime();
          }
        } else {
          existingFileId = null; // 404 or other error
        }
      } catch (e) {
        existingFileId = null;
      }
    }

    // If cache failed or missing, do full search
    if (!existingFileId) {
      existingFileId = await findBackupFile(token, folderId);
      if (existingFileId) {
        // Cache it for next time
        await chrome.storage.local.set({ backupFileId: existingFileId });

        // Get its time for the logic below
        try {
          const metaRes = await fetch(`https://www.googleapis.com/drive/v3/files/${existingFileId}?fields=modifiedTime`, {
            headers: { Authorization: `Bearer ${token}` }
          });
          if (metaRes.ok) {
            const meta = await metaRes.json();
            remoteModifiedTime = new Date(meta.modifiedTime).getTime();
          }
        } catch (e) { }
      }
    }

    let shouldPush = true;

    // 3. PULL SATEGY (If file exists)
    // ALWAYS pull/merge first to ensure we don't overwrite remote changes with stale local state
    if (existingFileId) {
      try {
        let remoteData = null;

        // CHECK: If remote time matches what we last synced with, SKIP download
        const lastSyncedNum = lastSyncedRemoteTime || 0;
        const currentRemoteNum = remoteModifiedTime || 0;

        // If we know the remote time, and it matches our last sync state, and we are not forcing a pull...
        if (currentRemoteNum > 0 && Math.abs(currentRemoteNum - lastSyncedNum) < 1000) {
          // console.log("Remote content unchanged since last sync. Skipping download.");
          // We don't download. existingFileId implies remote exists.
          // We proceed to Push logic if we have local changes (handled by performSync logic usually, 
          // but here performSync assumes we pull first.
          // Effectively, remoteData is null, so the merge block below is skipped.
        } else {
          // Remote is newer or unknown state -> Download
          // console.log("Downloading remote backup...", { currentRemoteNum, lastSyncedNum });
          remoteData = await downloadBackupFile(token, existingFileId);
        }

        if (remoteData) {
          // CHECK: Only merge if remote is NEWER than our last sync time
          // If remote is older or same age, it means our local deletion is newer -> Ignore remote
          const lastBackupTime = (await chrome.storage.local.get("lastBackupTime")).lastBackupTime || 0;
          const remoteTime = remoteData.updatedAt || 0; // Internal app timestamp

          if (remoteTime <= lastBackupTime) {
            // console.log("Remote data is old (likely from before local deletion). Skipping merge to preserve local changes.");
          } else {
            // Remote is NEWER. We must accept its state (including deletions), 
            // BUT we must preserve our own NEW links created since last sync.

            // 1. Identify New Local Links (created after last sync)
            const newLocalLinks = myLinks.filter(l => {
              if (!l.date) return false; // If no date, assume old -> delete if not in remote
              return new Date(l.date).getTime() > lastBackupTime;
            });

            // console.log(`Smart Merge: Found ${newLocalLinks.length} new local links to preserve.`);

            // 2. Base = Remote Links
            // Ensure remote items are normalized
            const remoteLinks = (remoteData.links || []).map(l => normalizeLinkItem(l));

            // 3. Merge: Remote + New Local (avoid duplicates if remote already has them)
            const remoteUrls = new Set(remoteLinks.map(l => l.url));

            newLocalLinks.forEach(l => {
              if (!remoteUrls.has(l.url)) {
                remoteLinks.push(l);
                remoteUrls.add(l.url);
              }
            });

            // 4. Overwrite Local with Result
            myLinks = remoteLinks;

            // Merge Settings (Additive is fine for labels/pinned usually, unless we want strict sync)
            // For now, let's keep additive for labels to be safe/less destructive
            if (remoteData.labels && Array.isArray(remoteData.labels)) {
              const labelSet = new Set(customLabels);
              remoteData.labels.forEach(lbl => {
                if (!labelSet.has(lbl)) {
                  customLabels.push(lbl);
                  labelSet.add(lbl);
                }
              });
            }
            if (remoteData.pinned && Array.isArray(remoteData.pinned)) {
              const pinnedSet = new Set(pinnedLabels);
              remoteData.pinned.forEach(lbl => {
                if (!pinnedSet.has(lbl)) {
                  pinnedLabels.push(lbl);
                  pinnedSet.add(lbl);
                }
              });
            }

            // Merge Trash (Basic Overwrite if remote has it, to ensure availability)
            // Ideally we would do a smart merge here too, but trash is simpler.
            if (remoteData.trash && Array.isArray(remoteData.trash)) {
              trashLinks = remoteData.trash.map(l => normalizeLinkItem(l));
            }

            // Save merged state locally
            const updates = { myLinks, trashLinks, customLabels, pinnedLabels, lastSyncedRemoteTime: remoteModifiedTime };

            if (remoteData.theme) {
              updates.theme = remoteData.theme;
              const isLight = remoteData.theme === 'light';
              if (isLight) {
                document.body.classList.add('light-theme');
              } else {
                document.body.classList.remove('light-theme');
              }
              if (typeof updateThemeIcon === 'function') updateThemeIcon(isLight);
            }
            chrome.storage.local.set(updates);
            renderSidebarLabels();
            renderUnlabeledContainer();
            // Force re-render of the main list/tabs
            renderTabsBar();
            render();
          } // End of else block (remote is newer)
        } // End of check if remoteData exists
      } catch (e) {
        console.error("Error pulling remote data:", e);
        showToast("Failed to pull remote data", "error");
        shouldPush = false; // Prevent overwriting if pull failed
      }
    }

    // 4. PUSH STRATEGY
    if (shouldPush) {
      // Generate Full Backup Object
      const backupData = {
        version: 2,
        updatedAt: Date.now(),
        links: myLinks.map(normalizeLinkItem),
        trash: trashLinks.map(normalizeLinkItem),
        labels: customLabels,
        pinned: pinnedLabels,
        theme: document.body.classList.contains('light-theme') ? 'light' : 'dark'
      };
      const content = JSON.stringify(backupData);

      if (existingFileId) {
        // Update existing (Check response for new modifiedTime)
        // Note: updateBackupFile implementation needs to change to return response
        const newMeta = await updateBackupFile(token, existingFileId, content);
        if (newMeta && newMeta.modifiedTime) {
          await chrome.storage.local.set({ lastSyncedRemoteTime: new Date(newMeta.modifiedTime).getTime() });
        }
      } else {
        // Create new
        const newFile = await createBackupFile(token, content, folderId);
        if (newFile && newFile.id) {
          await chrome.storage.local.set({ backupFileId: newFile.id });
          // If create returns modifiedTime, save it too
          // The createBackupFile implementation returns the whole file object
          if (newFile.modifiedTime || newFile.createdTime) {
            const t = newFile.modifiedTime || newFile.createdTime;
            await chrome.storage.local.set({ lastSyncedRemoteTime: new Date(t).getTime() });
          }
        }
      }

      // Update local tracking
      await chrome.storage.local.set({ lastBackupTime: Date.now() });
      if (!hasInitialSyncRun) {
        await chrome.storage.local.set({ hasInitialSyncRun: true });
      }

      updateSyncButtonStatus();

      // Complete Toast removed

    }

  } catch (error) {
    console.error("Sync Error:", error);
    const t = document.getElementById("toast");
    if (t) t.remove();
    showToast("Failed to sync", "error");
  } finally {
    isSyncing = false;
    updateSyncButtonStatus();


    // Check if new changes happened while we were syncing
    if (syncPending) {
      console.log("Pending changes detected during sync. Retrying...");
      syncPending = false; // Reset flag to avoid infinite loop if this trigger fails
      triggerSmartSync();
    }
  }
}

// Force re-login on reinstall by clearing stale token
function checkAndClearCachedToken() {
  chrome.storage.local.get("auth_purged", (res) => {
    if (!res.auth_purged) {
      // Fresh install: Check for existing token
      chrome.identity.getAuthToken({ interactive: false }, (token) => {
        if (chrome.runtime.lastError || !token) {
          // No token or error -> All good, mark as purged
          chrome.storage.local.set({ auth_purged: true });
        } else {
          // Token exists -> Revoke access to force full re-login
          const revokeUrl = 'https://accounts.google.com/o/oauth2/revoke?token=' + token;
          fetch(revokeUrl).finally(() => {
            // Remove from cache regardless of revocation success
            chrome.identity.removeCachedAuthToken({ token: token }, () => {
              chrome.storage.local.set({ auth_purged: true });
              console.log("Token revoked and cleared on fresh install.");
            });
          });
        }
      });
    }
  });
}

// Auth Constants imported from oauth.js

function getAuthToken(options = {}) {
  return new Promise((resolve) => {
    // 1. Check if we already have a token
    chrome.storage.local.get("google_token", async (result) => {
      if (result.google_token) {
        // Validate Token
        try {
          const validation = await fetch(`https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=${result.google_token}`);
          if (validation.ok) {
            resolve(result.google_token);
            return;
          }
          // If invalid, clear and fall through to re-auth
          console.warn("Token expired or invalid, clearing...");
          await chrome.storage.local.remove("google_token");
        } catch (e) {
          // Network error or other issue, assume invalid to be safe
          console.warn("Token validation failed, clearing...");
          await chrome.storage.local.remove("google_token");
        }
      }

      // 1.5. If silent mode (auto-sync) and no token, abort
      if (options.silent) {
        console.log("Auto-sync skipped: No valid token available.");
        resolve(null);
        return;
      }

      // 2. If no token, trigger background auth flow and WAIT
      chrome.runtime.sendMessage({ type: "START_AUTH" }, (response) => {
        if (chrome.runtime.lastError) {
          showToast("Error starting login: " + chrome.runtime.lastError.message, "error");
          resolve(null);
          return;
        }

        // 3. User needs to login in the new window
        showToast("Please login in the new window...", "info");

        // CRITICAL FIX: Do not resolve(null) here. Wait for AUTH_SUCCESS.
        // This keeps isSyncing = true, blocking other triggers.

        // ADDED: Timeout to prevent infinite lock
        let authResolved = false;
        const authTimeout = setTimeout(() => {
          if (!authResolved) {
            console.warn("Auth Timed Out");
            chrome.runtime.onMessage.removeListener(authListener);
            showToast("Login timed out.", "error");
            resolve(null);
          }
        }, 120000); // 2 minutes timeout

        const authListener = (msg) => {
          if (msg.type === "AUTH_SUCCESS") {
            authResolved = true;
            clearTimeout(authTimeout);
            chrome.runtime.onMessage.removeListener(authListener);
            // Token is already saved by background.js, retrieve it
            chrome.storage.local.get("google_token", (res) => {
              resolve(res.google_token); // resolve with new token
            });
          }
        };
        chrome.runtime.onMessage.addListener(authListener);
      });
    });
  });
}

async function getOrCreateFolder(token) {
  const folderName = "Link list";
  // Relaxed query: find ANY folder with this name, not just in root
  const query = `name = '${folderName}' and mimeType = 'application/vnd.google-apps.folder' and trashed = false`;
  const url = `https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(query)}&fields=files(id,name,createdTime)`;

  const response = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
  if (!response.ok) throw new Error("Failed to search folder");

  const data = await response.json();
  if (data.files && data.files.length > 0) {
    // Smart Selection: Prefer the folder that actually contains data
    for (const file of data.files) {
      try {
        // Check if this folder has the backup file
        const hasBackup = await findBackupFile(token, file.id);
        if (hasBackup) {
          // console.log("Found existing folder with backup:", file.id);
          return file.id;
        }
      } catch (e) {
        console.warn("Error checking folder content:", e);
      }
    }
    // If no folder has data, just return the first one (reuse it) to avoid creating duplicates
    console.log("No folder had backup, reusing first found:", data.files[0].id);
    return data.files[0].id;
  }

  // Create folder if absolutely none exist
  console.log("Creating NEW Link list folder...");
  const metadata = {
    name: folderName,
    mimeType: "application/vnd.google-apps.folder",
  };
  const createUrl = "https://www.googleapis.com/drive/v3/files";
  const createRes = await fetch(createUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(metadata),
  });

  if (!createRes.ok) throw new Error("Failed to create folder");
  const folderData = await createRes.json();
  return folderData.id;
}

async function findBackupFile(token, folderId) {
  const filename = "backup_data.json";
  const query = `name = '${filename}' and trashed = false and '${folderId}' in parents`;
  const url = `https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(query)}&fields=files(id,name)`;

  const response = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
  if (!response.ok) throw new Error("Failed to search file");

  const data = await response.json();
  if (data.files && data.files.length > 0) {
    return data.files[0].id;
  }
  return null;
}

async function createBackupFile(token, content, folderId) {
  const metadata = {
    name: "backup_data.json",
    mimeType: "application/json",
    parents: [folderId],
  };

  const form = new FormData();
  form.append("metadata", new Blob([JSON.stringify(metadata)], { type: "application/json" }));
  form.append("file", new Blob([content], { type: "application/json" }));

  const url = "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id,name,modifiedTime";
  const response = await fetch(url, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: form,
  });

  if (!response.ok) throw new Error("Failed to upload file");
  return await response.json();
}

async function updateBackupFile(token, fileId, content) {
  const metadata = { mimeType: "application/json" };
  // Add response fields to get modifiedTime
  const url = `https://www.googleapis.com/upload/drive/v3/files/${fileId}?uploadType=multipart&fields=id,modifiedTime`;

  const form = new FormData();
  form.append("metadata", new Blob([JSON.stringify(metadata)], { type: "application/json" }));
  form.append("file", new Blob([content], { type: "application/json" }));

  const response = await fetch(url, {
    method: "PATCH",
    headers: { Authorization: `Bearer ${token}` },
    body: form,
  });

  if (!response.ok) throw new Error("Failed to update file");
  return await response.json(); // Return metadata
}

async function downloadBackupFile(token, fileId) {
  const url = `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`;
  const response = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
  if (!response.ok) throw new Error("Failed to download file");
  return await response.json();
}

async function openSelectedLinks() {
  if (selectedLinks.size === 0) return showToast("No links selected", "warning");
  if (selectedLinks.size > 10 && !await showConfirm(`Open ${selectedLinks.size} tabs?`)) return;

  selectedLinks.forEach(index => {
    const link = myLinks[index];
    if (link) {
      window.open(normalizeLinkItem(link).url, "_blank");
    }
  });
}

function importFile(file) {
  if (!file) return;
  const reader = new FileReader();

  reader.onload = (e => {
    const content = e.target.result;
    let count = 0;

    // === JSON Import ===
    if (file.name.toLowerCase().endsWith(".json")) {
      try {
        const parsed = JSON.parse(content);
        let linksToImport = [];
        let importedLabels = [];
        let importedPinned = [];

        // Distinguish between old Format (Array) and new Format (Object)
        if (Array.isArray(parsed)) {
          linksToImport = parsed.map(l => ({
            ...l,
            date: l.date || new Date().toISOString() // Ensure date exists
          }));
        } else if (parsed && typeof parsed === 'object') {
          linksToImport = Array.isArray(parsed.links) ? parsed.links.map(l => ({
            ...l,
            date: l.date || new Date().toISOString()
          })) : [];
          importedLabels = Array.isArray(parsed.labels) ? parsed.labels : [];
          importedPinned = Array.isArray(parsed.pinned) ? parsed.pinned : [];
        }

        if (linksToImport.length > 0 || importedLabels.length > 0) {
          // 1. Import Links
          linksToImport.forEach(l => {
            if (l.url) {
              // Ensure critical fields exist
              const link = {
                title: l.title || l.url,
                url: l.url,
                label: l.label || "Unlabeled",
                starred: !!l.starred,
                pinned: !!l.pinned, // Link-level pinned status
                tags: Array.isArray(l.tags) ? l.tags : [],
                note: l.note || "",
                date: l.date || new Date().toISOString()
              };
              myLinks.push(link);
              count++;
            }
          });

          // 2. Import Labels (Empty Labels)
          if (importedLabels.length > 0) {
            const labelSet = new Set(customLabels);
            let labelsAdded = 0;
            importedLabels.forEach(lbl => {
              if (!labelSet.has(lbl)) {
                customLabels.push(lbl);
                labelSet.add(lbl);
                labelsAdded++;
              }
            });
            if (labelsAdded > 0) chrome.storage.local.set({ customLabels });
          }

          // 3. Import Pinned Labels
          if (importedPinned.length > 0) {
            const pinnedSet = new Set(pinnedLabels);
            let pinnedAdded = 0;
            importedPinned.forEach(lbl => {
              // Only pin if it's a valid label
              if (customLabels.includes(lbl) && !pinnedSet.has(lbl)) {
                pinnedLabels.push(lbl);
                pinnedSet.add(lbl);
                pinnedAdded++;
              }
            });
            if (pinnedAdded > 0) chrome.storage.local.set({ pinnedLabels });
          }

          chrome.storage.local.set({ customLabels, pinnedLabels, myLinks }); // Save all
          renderSidebarLabels(); // Refresh UI
          saveLinks(`Imported ${count} links & Config`);

        } else {
          showToast("Invalid JSON: No links or configuration found.", "error");
        }
      } catch (err) {
        showToast("Failed to parse JSON file.", "error");
        console.error(err);
      }
      closeAllModals();
      return;
    }

    // === CSV Import ===
    if (file.name.toLowerCase().endsWith(".csv")) {
      const lines = content.split(/\r?\n/);

      const parseCSVLine = (text) => {
        const result = [];
        let cur = "";
        let inQuote = false;
        for (let i = 0; i < text.length; i++) {
          const char = text[i];
          if (char === '"') {
            if (inQuote && text[i + 1] === '"') {
              cur += '"';
              i++;
            } else {
              inQuote = !inQuote;
            }
          } else if (char === ',' && !inQuote) {
            result.push(cur);
            cur = "";
          } else {
            cur += char;
          }
        }
        result.push(cur);
        return result;
      };

      const header = lines[0] ? lines[0].toLowerCase() : "";

      // Heuristic to detect extended format
      // Standard: Title, URL, Label, Starred, Tags, Note, Pinned, CreationDate
      const isExtended = header.includes("note") && header.includes("pinned");
      const isNewFormat = header.includes("starred") && header.includes("tags"); // The 5-col format

      const startIdx = 1;

      for (let i = startIdx; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;

        const cols = parseCSVLine(line);
        if (cols.length < 2) continue;

        // Check for Metadata Row
        if (cols[0] === "#METADATA#" && cols[2]) {
          try {
            const config = JSON.parse(cols[2]);
            if (config) {
              // Import Labels
              if (Array.isArray(config.labels)) {
                const labelSet = new Set(customLabels);
                config.labels.forEach(lbl => {
                  if (!labelSet.has(lbl)) {
                    customLabels.push(lbl);
                    labelSet.add(lbl);
                  }
                });
              }
              // Import Pinned
              if (Array.isArray(config.pinned)) {
                const pinnedSet = new Set(pinnedLabels);
                config.pinned.forEach(lbl => {
                  if (customLabels.includes(lbl) && !pinnedSet.has(lbl)) {
                    pinnedLabels.push(lbl);
                    pinnedSet.add(lbl);
                  }
                });
              }
              chrome.storage.local.set({ customLabels, pinnedLabels });
              renderSidebarLabels();
              showToast("Config restored from CSV", "success");
            }
          } catch (e) {
            console.warn("Failed to parse CSV metadata", e);
          }
          continue;
        }

        let title = cols[0] || "";
        let url = cols[1] || "";
        let label = cols[2] || "Unlabeled";
        let starred = false;
        let tags = [];
        let note = "";
        let pinned = false;
        let date = "";

        // Handle various columns based on available data
        if (cols.length >= 4 && (isNewFormat || isExtended)) {
          starred = (cols[3] || "").toLowerCase() === "true";
        }
        if (cols.length >= 5 && (isNewFormat || isExtended)) {
          if (cols[4]) tags = cols[4].split(";").map(t => t.trim()).filter(t => t);
        }

        // Extended columns
        if (cols.length >= 6) {
          note = (cols[5] || "").replace(/\\n/g, '\n'); // Unescape newlines
        }
        if (cols.length >= 7) {
          pinned = (cols[6] || "").toLowerCase() === "true";
        }
        if (cols.length >= 8) {
          date = cols[7] || "";
        }

        if (url) {
          myLinks.push({ title, url, label, starred, tags, note, pinned, date });
          count++;
        }
      }

    } else {
      // TXT Import
      const lines = content.split(/\r?\n/);
      lines.forEach(line => {
        const url = line.trim();
        if (url) {
          myLinks.push({
            url,
            title: url,
            label: getAutoLabel(url),
            starred: false,
            tags: [],
            note: "",
            pinned: false,
            date: new Date().toISOString()
          });
          count++;
        }
      });
    }
    // === Sync Labels from Imported Data ===
    const uniqueLabels = new Set(customLabels);
    let newLabelsFound = 0;

    myLinks.forEach(link => {
      const n = normalizeLinkItem(link);
      if (n.label && n.label !== "Unlabeled" && !uniqueLabels.has(n.label)) {
        uniqueLabels.add(n.label);
        newLabelsFound++;
      }
    });

    if (newLabelsFound > 0) {
      customLabels = Array.from(uniqueLabels);
      chrome.storage.local.set({ customLabels });
      renderSidebarLabels();
    }

    saveLinks(`Imported ${count} links`);
    closeAllModals();
  });
  reader.readAsText(file);
}
function renderTabsBar() {
  const tabsBar = document.getElementById("tabs-bar");
  const tagsFilterBar = document.getElementById("tags-filter-bar");
  const tagsFilterList = document.getElementById("tags-filter-list");
  const toolbar = document.querySelector(".toolbar");

  if (!tabsBar) return;

  // Clear tabs
  tabsBar.innerHTML = "";

  // Prepare tabs data
  const tabsData = [];

  // Label tabs (removed "All Links" tab)
  const allLabels = [...customLabels];
  allLabels.unshift("Unlabeled"); // Add Unlabeled to tabs
  const usedLabels = new Set();
  const labelCounts = {};

  myLinks.forEach(l => {
    const n = normalizeLinkItem(l);
    const label = n.label;
    usedLabels.add(label);
    labelCounts[label] = (labelCounts[label] || 0) + 1;
  });

  // Exclude "Unlabeled" from tabs - it will be in resizable container
  if (usedLabels.has("song")) allLabels.push("song");
  if (usedLabels.has("Unlabeled")) allLabels.push("Unlabeled");

  const uniqueLabels = [...new Set(allLabels)];

  uniqueLabels.forEach(label => {
    const count = labelCounts[label] || 0;
    // Always add tab even if count is 0
    tabsData.push({ filter: label, text: label, count: count });
  });

  // Add trash tab
  const trashCount = trashLinks.length;
  tabsData.push({ filter: "trash", text: "Trash", count: trashCount });

  // Add search result tab if active filter is a search
  if (activeFilterLabel.startsWith("search:")) {
    const query = activeFilterLabel.replace("search:", "");
    const lowerQuery = query.toLowerCase();

    // Count matching results
    const matchingCount = myLinks.filter(link => {
      const n = normalizeLinkItem(link);
      const title = (n.title || "").toLowerCase();
      const url = (n.url || "").toLowerCase();
      return title.includes(lowerQuery) || url.includes(lowerQuery);
    }).length;

    tabsData.push({
      filter: activeFilterLabel,
      text: `result : ${query}`,
      count: matchingCount,
      isSearch: true
    });
  } else if (activeFilterLabel.startsWith("tag:")) {
    const tagName = activeFilterLabel.replace("tag:", "");
    // Count items with this tag
    const count = myLinks.filter(link => {
      const n = normalizeLinkItem(link);
      return (n.tags || []).includes(tagName);
    }).length;

    tabsData.push({
      filter: activeFilterLabel,
      text: `Tag: ${tagName}`,
      count: count
    });
  }

  // Sort tabsData based on tabOrder (tabs appear in the order they were opened)
  tabsData.sort((a, b) => {
    const indexA = tabOrder.indexOf(a.filter);
    const indexB = tabOrder.indexOf(b.filter);

    // If both are in tabOrder, sort by their position
    if (indexA !== -1 && indexB !== -1) {
      return indexA - indexB;
    }
    // If only A is in tabOrder, it comes first
    if (indexA !== -1) return -1;
    // If only B is in tabOrder, it comes first
    if (indexB !== -1) return 1;
    // If neither is in tabOrder, maintain current order
    return 0;
  });

  // Create tabs (skip hidden ones)
  tabsData.forEach(tabData => {
    if (!hiddenTabs.includes(tabData.filter)) {
      const tab = createTab(tabData.filter, tabData.text, tabData.count, tabData.isSearch);
      tabsBar.appendChild(tab);
    }
  });

  updateTabsActiveState();

  // Handle tags display
  const shouldShowTags = activeFilterLabel !== "trash" && !activeFilterLabel.startsWith("tag:");

  if (shouldShowTags && tagsFilterBar && tagsFilterList) {
    let tagsForLabel;

    // Get tags for the active label (no more "all" option)
    tagsForLabel = getTagsForLabel(activeFilterLabel);

    if (tagsForLabel.length === 0) {
      tagsFilterBar.style.display = "none";
    } else {
      tagsFilterBar.style.display = "flex";
      tagsFilterList.innerHTML = "";

      tagsForLabel.forEach(tagData => {
        const tagChip = createTagFilterChip(tagData.tag, tagData.count);
        tagsFilterList.appendChild(tagChip);
      });
    }
  } else if (tagsFilterBar) {
    tagsFilterBar.style.display = "none";
  }

  // Update navigation button states
  updateTabsNavButtons();
}

// Update tab navigation button states based on scroll position
function updateTabsNavButtons() {
  const tabsBar = document.getElementById("tabs-bar");
  const tabsNavLeft = document.getElementById("tabs-nav-left");
  const tabsNavRight = document.getElementById("tabs-nav-right");

  if (!tabsBar || !tabsNavLeft || !tabsNavRight) return;

  const isAtStart = tabsBar.scrollLeft === 0;
  const isAtEnd = tabsBar.scrollLeft + tabsBar.clientWidth >= tabsBar.scrollWidth - 1;

  tabsNavLeft.disabled = isAtStart;
  tabsNavRight.disabled = isAtEnd;
}

function createTab(filter, text, count, isSearch = false) {
  const tab = document.createElement("div");
  tab.className = "tab";
  tab.dataset.filter = filter;

  // Add search icon for search tabs
  if (isSearch || filter.startsWith("search:")) {
    const iconEl = document.createElement("span");
    iconEl.className = "material-icons-outlined";
    iconEl.style.fontSize = "16px";
    iconEl.style.marginRight = "6px";
    iconEl.textContent = "search";
    tab.appendChild(iconEl);
  }

  const textEl = document.createElement("span");
  textEl.className = "tab-text";
  textEl.textContent = text;
  tab.appendChild(textEl);

  if (count !== null) {
    const countEl = document.createElement("span");
    countEl.className = "tab-count";
    countEl.textContent = count;
    tab.appendChild(countEl);
  }



  // All tabs can be closed
  {
    const closeBtn = document.createElement("span");
    closeBtn.className = "tab-close";
    closeBtn.innerHTML = "×";
    closeBtn.title = "Close tab";

    closeBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent tab click event

      // Add to hidden tabs
      hiddenTabs.push(filter);

      // Store the position BEFORE removing from tabOrder so we know which tab to switch to
      const closedTabOrderIndex = tabOrder.indexOf(filter);

      // Remove from tabOrder
      if (closedTabOrderIndex > -1) {
        tabOrder.splice(closedTabOrderIndex, 1);
      }

      // Save to storage
      chrome.storage.local.set({ hiddenTabs, tabOrder }, () => {
        // Render tabs first to rebuild the DOM without the hidden tab
        renderTabsBar();

        // NOW check if we need to switch tabs (after tabs are re-rendered)
        if (activeFilterLabel === filter) {
          // Query the newly rendered tabs
          const tabsBar = document.getElementById("tabs-bar");
          if (tabsBar) {
            const visibleTabs = Array.from(tabsBar.querySelectorAll('.tab'));

            if (visibleTabs.length > 0) {
              // Find which tab to switch to based on where the closed tab was
              // We want to switch to the tab that was to the left of the closed tab
              let newActiveFilter = null;

              // If the closed tab was in tabOrder and there's a tab to the left, use it
              if (closedTabOrderIndex > 0 && tabOrder.length >= closedTabOrderIndex) {
                // Switch to the previous tab in order (to the left)
                // Since we already removed the closed tab, the index is now correct
                newActiveFilter = tabOrder[closedTabOrderIndex - 1];
              } else if (tabOrder.length > 0) {
                // If it was the first tab, switch to the new first tab
                newActiveFilter = tabOrder[0];
              } else {
                // Fallback to first visible tab
                newActiveFilter = visibleTabs[0].dataset.filter;
              }

              // Use setFilterLabel() to properly switch to the selected tab
              // This handles all the initialization: itemsToShow, selections, storage, renders
              if (newActiveFilter) {
                setFilterLabel(newActiveFilter);
              }
            } else {
              // No tabs left, clear active filter and hide toolbar
              activeFilterLabel = "";
              chrome.storage.local.set({ activeFilterLabel: "" });
              renderSidebarLabels(); // Update sidebar to remove active states
              const toolbar = document.querySelector(".toolbar");
              if (toolbar) toolbar.style.display = "none";
              const tableBodyEl = document.getElementById("links-tbody");
              if (tableBodyEl) tableBodyEl.innerHTML = "";
            }
          } else {
            activeFilterLabel = "";
          }
        } else {
          // If we're not viewing the closed tab, just update the UI
          renderSidebarLabels();
          render();
        }

        showToast(`Tab "${text}" closed`);
      });
    });

    tab.appendChild(closeBtn);
  }

  // Tab click handler - on entire tab
  tab.addEventListener("click", () => {
    setFilterLabel(filter);
    updateTabsActiveState();
  });

  return tab;
}

function createTagFilterChip(tag, count) {
  const chip = document.createElement("div");
  chip.className = "tag-filter-chip";
  chip.dataset.tag = tag;

  const text = document.createElement("span");
  text.textContent = tag;
  chip.appendChild(text);

  const countEl = document.createElement("span");
  countEl.className = "tab-count";
  countEl.textContent = count;
  chip.appendChild(countEl);

  chip.addEventListener("click", () => {
    const tabsBar = document.getElementById("tabs-bar");
    if (tabsBar) {
      tabsBar.dataset.lastLabelFilter = activeFilterLabel;
    }

    // Auto-Close Logic for Tags
    // Auto-Close Logic for Tags
    const tagFilter = `tag:${tag}`;
    closeAllOtherTabs(tagFilter);

    // Unhide if hidden (handled by closeAllOtherTabs? No, closeAllOtherTabs assumes we're keeping it, but maybe doesn't unhide it if it was hidden?)
    // closeAllOtherTabs REWRITES hiddenTabs to include everything EXCEPT tagFilter.
    // So tagFilter is NOT in hiddenTabs.
    // So we don't need manual unhide.
    // And it sets tabOrder to [tagFilter].
    // So we don't need manual push.

    setFilterLabel(`tag:${tag}`);
    updateTagFilterActiveState();

    // Collapse sidebar (left container)
    const sidebar = document.getElementById("sidebar");
    if (sidebar) sidebar.classList.add("collapsed");
  });

  return chip;
}

function updateTabsActiveState() {
  const tabsBar = document.getElementById("tabs-bar");
  if (!tabsBar) return;


  const tabs = tabsBar.querySelectorAll(".tab");


  const isTagFilter = activeFilterLabel.startsWith("tag:");

  tabs.forEach(tab => {
    const tabFilter = tab.dataset.filter;


    if (isTagFilter) {
      const parentLabel = tabsBar.dataset.lastLabelFilter;
      if (tabFilter === parentLabel || tabFilter === "all") {
        tab.classList.add("active");
      } else {
        tab.classList.remove("active");
      }
    } else {
      if (tabFilter === activeFilterLabel) {
        tab.classList.add("active");
      } else {
        tab.classList.remove("active");
      }
    }
  });

  updateTagFilterActiveState();
}

function updateTagFilterActiveState() {
  const tagsFilterList = document.getElementById("tags-filter-list");
  if (!tagsFilterList) return;

  const chips = tagsFilterList.querySelectorAll(".tag-filter-chip");
  const isTagFilter = activeFilterLabel.startsWith("tag:");
  const activeTag = isTagFilter ? activeFilterLabel.replace("tag:", "") : null;

  chips.forEach(chip => {
    const chipTag = chip.dataset.tag;
    if (chipTag === activeTag) {
      chip.classList.add("active");
    } else {
      chip.classList.remove("active");
    }
  });
}

function getAllTagsWithCounts() {
  const tagsMap = new Map();

  myLinks.forEach(link => {
    const n = normalizeLinkItem(link);
    if (n.tags && n.tags.length > 0) {
      n.tags.forEach(tag => {
        if (tagsMap.has(tag)) {
          tagsMap.set(tag, tagsMap.get(tag) + 1);
        } else {
          tagsMap.set(tag, 1);
        }
      });
    }
  });

  // Convert to array and sort by count (descending)
  return Array.from(tagsMap.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}

function getTagsForLabel(label) {
  const tagsMap = new Map();

  myLinks.forEach(link => {
    const n = normalizeLinkItem(link);
    if (n.label === label && n.tags && n.tags.length > 0) {
      n.tags.forEach(tag => {
        if (tagsMap.has(tag)) {
          tagsMap.set(tag, tagsMap.get(tag) + 1);
        } else {
          tagsMap.set(tag, 1);
        }
      });
    }
  });

  // Convert to array and sort by count (descending)
  return Array.from(tagsMap.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}

// === Tags Management Functions ===
let currentEditingTags = [];

function renderTagsInput() {
  const tagsDisplay = document.getElementById("details-tags-display");
  const tagsInput = document.getElementById("details-tags-input");

  if (!tagsDisplay) return;

  tagsDisplay.innerHTML = "";

  currentEditingTags.forEach((tag, index) => {
    const tagPill = document.createElement("div");
    tagPill.className = "tag-pill";

    const tagText = document.createElement("span");
    tagText.textContent = tag;

    const removeBtn = document.createElement("span");
    removeBtn.className = "tag-remove";
    removeBtn.textContent = "×";
    removeBtn.addEventListener("click", () => {
      currentEditingTags.splice(index, 1);
      renderTagsInput();
    });

    tagPill.appendChild(tagText);
    tagPill.appendChild(removeBtn);
    tagsDisplay.appendChild(tagPill);
  });
}

function setupTagsInput() {
  const tagsInput = document.getElementById("details-tags-input");
  if (!tagsInput) return;

  tagsInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const tag = tagsInput.value.trim();

      if (tag && !currentEditingTags.includes(tag)) {
        currentEditingTags.push(tag);
        renderTagsInput();
        tagsInput.value = "";
      } else if (currentEditingTags.includes(tag)) {
        showToast("Tag already added", "warning");
      }
    }
  });
}

function getAllUniqueTags() {
  const tagsSet = new Set();
  myLinks.forEach(link => {
    const n = normalizeLinkItem(link);
    n.tags.forEach(tag => tagsSet.add(tag));
  });
  return Array.from(tagsSet).sort();
}

// === Tags Modal Functions ===
function openTagsModal(index) {
  currentTagsModalIndex = index;
  const link = myLinks[index];
  if (!link) return;

  const n = normalizeLinkItem(link);
  currentTagsModalTags = [...(n.tags || [])];

  renderTagsModalDisplay();
  updateTagsSuggestions();

  tagsModal.style.display = "flex";
  tagsModalInput.value = "";
  setTimeout(() => tagsModalInput.focus(), 100);
}

function renderTagsModalDisplay() {
  if (!tagsModalDisplay) return;
  tagsModalDisplay.innerHTML = "";

  currentTagsModalTags.forEach((tag, index) => {
    const tagPill = document.createElement("div");
    tagPill.className = "tag-pill";

    const tagText = document.createElement("span");
    tagText.textContent = tag;

    const removeBtn = document.createElement("span");
    removeBtn.className = "tag-remove";
    removeBtn.textContent = "×";
    removeBtn.addEventListener("click", () => {
      currentTagsModalTags.splice(index, 1);
      renderTagsModalDisplay();
      updateTagsSuggestions();
      autoSaveTags(); // Auto-save after removing tag
    });

    tagPill.appendChild(tagText);
    tagPill.appendChild(removeBtn);
    tagsModalDisplay.appendChild(tagPill);
  });
}

function updateTagsSuggestions() {
  if (!tagsSuggestions || !tagsSuggestionsGroup) return;

  const allTags = getAllUniqueTags();
  const availableTags = allTags.filter(tag => !currentTagsModalTags.includes(tag));

  if (availableTags.length === 0) {
    tagsSuggestionsGroup.style.display = "none";
    return;
  }

  tagsSuggestionsGroup.style.display = "block";
  tagsSuggestions.innerHTML = "";

  availableTags.forEach(tag => {
    const suggestion = document.createElement("div");
    suggestion.className = "tag-suggestion";
    suggestion.innerHTML = `<span class="material-icons-outlined">add</span><span>${tag}</span>`;
    suggestion.addEventListener("click", () => {
      addTagFromModal(tag);
      autoSaveTags(); // Auto-save after adding from suggestion
    });
    tagsSuggestions.appendChild(suggestion);
  });
}

function handleTagsInputChange(e) {
  const value = e.target.value.trim();
  if (!value) {
    updateTagsSuggestions();
    return;
  }

  // Filter suggestions based on input
  const allTags = getAllUniqueTags();
  const availableTags = allTags.filter(tag =>
    !currentTagsModalTags.includes(tag) &&
    tag.toLowerCase().includes(value.toLowerCase())
  );

  if (availableTags.length === 0) {
    tagsSuggestionsGroup.style.display = "none";
    return;
  }

  tagsSuggestionsGroup.style.display = "block";
  tagsSuggestions.innerHTML = "";

  availableTags.forEach(tag => {
    const suggestion = document.createElement("div");
    suggestion.className = "tag-suggestion";
    suggestion.innerHTML = `<span class="material-icons-outlined">add</span><span>${tag}</span>`;
    suggestion.addEventListener("click", () => {
      addTagFromModal(tag);
      tagsModalInput.value = "";
      updateTagsSuggestions();
      autoSaveTags(); // Auto-save after adding from filtered suggestion
    });
    tagsSuggestions.appendChild(suggestion);
  });
}

function addTagFromModal(tag) {
  if (!tag) return;

  if (currentTagsModalTags.includes(tag)) {
    showToast("Tag already added", "warning");
    return;
  }

  currentTagsModalTags.push(tag);
  renderTagsModalDisplay();
  updateTagsSuggestions();
}

function autoSaveTags() {
  if (currentTagsModalIndex === -1 || !myLinks[currentTagsModalIndex]) return;

  const link = myLinks[currentTagsModalIndex];
  link.tags = [...currentTagsModalTags];

  // Save and trigger refresh
  chrome.storage.local.set({ myLinks }, () => {
    // Refresh the view to show updated tags
    render();
    renderTabsBar();
    renderSidebarLabels();
    triggerSmartSync();
  });

  // Update last modification time to trigger sync button
  chrome.storage.local.set({ lastModificationTime: Date.now() }, () => {
    updateSyncButtonStatus();
  });
}
// === Label Picker Modal Functions ===
function openLabelPickerModal(index) {
  currentLabelPickerIndex = index;
  populateLabelPickerOptions();
  labelPickerModal.style.display = "flex";
}

function populateLabelPickerOptions() {
  if (!labelPickerSelect) return;

  labelPickerSelect.innerHTML = "";

  // Add all available labels
  const allLabels = ["Unlabeled", ...customLabels];
  const uniqueLabels = [...new Set(allLabels)];

  uniqueLabels.forEach(label => {
    const opt = document.createElement("option");
    opt.value = label;
    opt.textContent = label;
    labelPickerSelect.appendChild(opt);
  });

  // Set current label if link exists
  if (currentLabelPickerIndex !== -1 && myLinks[currentLabelPickerIndex]) {
    const currentLabel = normalizeLinkItem(myLinks[currentLabelPickerIndex]).label;
    labelPickerSelect.value = currentLabel;
  }
}

function handleLabelPickerConfirm() {
  if (currentLabelPickerIndex === -1 || !myLinks[currentLabelPickerIndex]) return;

  const selectedLabel = labelPickerSelect.value;
  const linkIndex = currentLabelPickerIndex;

  // Clear state BEFORE making changes
  currentLabelPickerIndex = -1;
  closeAllModals();

  myLinks[linkIndex].label = selectedLabel;

  chrome.storage.local.set({ myLinks }, () => {
    showToast(`Label changed to "${selectedLabel}"`);
    loadData();
  });
}
// === Edit Link Modal Functions ===
function openEditLinkModal(index) {
  currentEditingLinkIndex = index;
  const link = myLinks[index];
  if (!link) return;

  const n = normalizeLinkItem(link);

  // Set current tags
  currentEditingLinkTags = [...(n.tags || [])];
  renderEditLinkTags();

  updateEditLinkTagsSuggestions();
  editLinkModal.style.display = "flex";

  // Focus on tags input
  setTimeout(() => editLinkTagsInput.focus(), 100);
}

function renderEditLinkTags() {
  if (!editLinkTagsDisplay) return;
  editLinkTagsDisplay.innerHTML = "";

  if (currentEditingLinkTags.length === 0) {
    const emptyMsg = document.createElement("div");
    emptyMsg.className = "tags-empty-message";
    emptyMsg.textContent = "No tags yet. Add tags below.";
    editLinkTagsDisplay.appendChild(emptyMsg);
    return;
  }

  currentEditingLinkTags.forEach((tag, index) => {
    const tagPill = document.createElement("div");
    tagPill.className = "tag-pill";

    const tagText = document.createElement("span");
    tagText.textContent = tag;

    const removeBtn = document.createElement("span");
    removeBtn.className = "tag-remove";
    removeBtn.textContent = "×";
    removeBtn.addEventListener("click", () => {
      currentEditingLinkTags.splice(index, 1);
      renderEditLinkTags();
      updateEditLinkTagsSuggestions();
      handleEditLinkAutoSave(); // Auto-save after removing tag
    });

    tagPill.appendChild(tagText);
    tagPill.appendChild(removeBtn);
    editLinkTagsDisplay.appendChild(tagPill);
  });
}

function updateEditLinkTagsSuggestions() {
  if (!editLinkTagsSuggestions || !editLinkTagsSuggestionsGroup) return;

  const allTags = getAllUniqueTags();
  const availableTags = allTags.filter(tag => !currentEditingLinkTags.includes(tag));

  if (availableTags.length === 0) {
    editLinkTagsSuggestionsGroup.style.display = "none";
    return;
  }

  editLinkTagsSuggestionsGroup.style.display = "block";
  editLinkTagsSuggestions.innerHTML = "";

  availableTags.slice(0, 10).forEach(tag => {
    const suggestion = document.createElement("div");
    suggestion.className = "tag-suggestion";
    suggestion.innerHTML = `<span class="material-icons-outlined">add</span><span>${tag}</span>`;
    suggestion.addEventListener("click", () => {
      addEditLinkTag(tag);
      editLinkTagsInput.value = "";
      updateEditLinkTagsSuggestions();
    });
    editLinkTagsSuggestions.appendChild(suggestion);
  });
}

function handleEditLinkTagsInputChange(e) {
  const value = e.target.value.trim();
  if (!value) {
    updateEditLinkTagsSuggestions();
    return;
  }

  // Filter suggestions based on input
  const allTags = getAllUniqueTags();
  const availableTags = allTags.filter(tag =>
    !currentEditingLinkTags.includes(tag) &&
    tag.toLowerCase().includes(value.toLowerCase())
  );

  if (availableTags.length === 0) {
    editLinkTagsSuggestionsGroup.style.display = "none";
    return;
  }

  editLinkTagsSuggestionsGroup.style.display = "block";
  editLinkTagsSuggestions.innerHTML = "";

  availableTags.slice(0, 10).forEach(tag => {
    const suggestion = document.createElement("div");
    suggestion.className = "tag-suggestion";
    suggestion.innerHTML = `<span class="material-icons-outlined">add</span><span>${tag}</span>`;
    suggestion.addEventListener("click", () => {
      addEditLinkTag(tag);
      editLinkTagsInput.value = "";
      updateEditLinkTagsSuggestions();
    });
    editLinkTagsSuggestions.appendChild(suggestion);
  });
}

function addEditLinkTag(tag) {
  if (!tag) return;

  if (currentEditingLinkTags.includes(tag)) {
    showToast("Tag already added", "warning");
    return;
  }

  currentEditingLinkTags.push(tag);
  renderEditLinkTags();
  updateEditLinkTagsSuggestions();
  handleEditLinkAutoSave(); // Auto-save after adding tag
}

function handleEditLinkAutoSave() {
  if (currentEditingLinkIndex === -1 || !myLinks[currentEditingLinkIndex]) return;

  // Clear existing timeout
  if (autoSaveTimeout) clearTimeout(autoSaveTimeout);

  // Show saving indicator
  showAutoSaveIndicator("saving");

  // Debounce: wait 800ms after last change
  autoSaveTimeout = setTimeout(() => {
    const link = myLinks[currentEditingLinkIndex];

    link.tags = [...currentEditingLinkTags];

    // Queue 'UPDATE' for tags
    queueAction('UPDATE', link);

    chrome.storage.local.set({ myLinks, lastModificationTime: Date.now() }, () => {
      showAutoSaveIndicator("saved");
      // Refresh view silently (without closing modal)
      const currentIndex = currentEditingLinkIndex; // Store current index
      loadData();
      currentEditingLinkIndex = currentIndex; // Restore after reload
    });
  }, 800);
}

function showAutoSaveIndicator(status) {
  if (!autoSaveIndicator) return;

  autoSaveIndicator.classList.remove("saving", "saved");

  if (status === "saving") {
    autoSaveIndicator.classList.add("saving");
    autoSaveIndicator.innerHTML = '<span class="material-icons-outlined spin">sync</span><span>Saving...</span>';
  } else if (status === "saved") {
    autoSaveIndicator.classList.add("saved");
    autoSaveIndicator.innerHTML = '<span class="material-icons-outlined">cloud_done</span><span>All changes saved</span>';
  }
}
// === Remove Label from Link ===
function removeLabelFromLink(index) {
  if (!myLinks[index]) return;

  myLinks[index].label = "Unlabeled";

  chrome.storage.local.set({ myLinks, lastModificationTime: Date.now() }, () => {
    showToast("Label removed");
    render(); // Use render() instead of loadData() to preserve pinned state
    updateSyncButtonStatus();
    triggerSmartSync();
  });
}

// === Remove Tag from Link ===
function removeTagFromLink(index, tagToRemove) {
  if (!myLinks[index]) return;

  const n = normalizeLinkItem(myLinks[index]);
  n.tags = n.tags.filter(tag => tag !== tagToRemove);
  myLinks[index].tags = n.tags;

  chrome.storage.local.set({ myLinks, lastModificationTime: Date.now() }, () => {
    showToast(`Tag "${tagToRemove}" removed`);
    render(); // Use render() instead of loadData() to preserve pinned state
    updateSyncButtonStatus();
    triggerSmartSync();
  });
}

// Toggle unlabeled container collapse/expand
// function toggleUnlabeledContainer() { ... } Removed

// Bottom Resizable Container
// Bottom Resizable Container Logic Removed

// Show Link Details in Bottom Container
let currentDetailLink = null;
let currentDetailIndex = -1;

// showLinkDetails Removed
// Detail Action Buttons Removed

// Labels section action buttons
const addLabelFromListBtn = document.getElementById("add-label-from-list");
const manageLabelFromListBtn = document.getElementById("manage-label-from-list");

if (addLabelFromListBtn) {
  addLabelFromListBtn.addEventListener("click", () => {
    labelModal.style.display = "flex";
    setTimeout(() => labelInputEl.focus(), 100);
  });
}

if (manageLabelFromListBtn) {
  manageLabelFromListBtn.addEventListener("click", () => {
    renderManageLabels();
    manageLabelModal.style.display = "flex";
  });
}






// === Local Search Functionality ===

// Toggle Search Input Visibility
// Toggle Search Input Visibility
function toggleSectionSearch(elementId) {
  const element = document.getElementById(elementId);
  if (!element) return;

  // Determine input element inside (if wrapper) or self
  const input = element.querySelector('input') || (element.tagName === 'INPUT' ? element : null);

  if (element.style.display === 'none' || !element.style.display) {
    element.style.display = 'flex'; // Wrapper uses flex
    if (input) input.focus();
  } else {
    element.style.display = 'none';
    if (input) {
      input.value = '';
      // Trigger clear filter
      input.dispatchEvent(new Event('input'));
    }
  }
}

// Event Listeners for Search Buttons
// Unlabeled Search Button Removed
// const unlabeledSearchBtn = document.getElementById('unlabeled-search-btn');
// if (unlabeledSearchBtn) {
//   unlabeledSearchBtn.addEventListener('click', (e) => {
//     e.stopPropagation();
//     toggleSectionSearch('unlabeled-search-wrapper');
//   });
// }

const labelsSearchBtn = document.getElementById('labels-search-btn');
if (labelsSearchBtn) {
  labelsSearchBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleSectionSearch('labels-search-wrapper');
  });
}

const tagsSearchBtn = document.getElementById('tags-search-btn');
if (tagsSearchBtn) {
  tagsSearchBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleSectionSearch('tags-search-wrapper');
  });
}

// Event Listeners for Search Close Buttons
// const unlabeledSearchCloseBtn = document.getElementById('unlabeled-search-close');
// if (unlabeledSearchCloseBtn) {
//   unlabeledSearchCloseBtn.addEventListener('click', (e) => {
//     e.stopPropagation();
//     toggleSectionSearch('unlabeled-search-wrapper'); // Toggles off
//   });
// }

const labelsSearchCloseBtn = document.getElementById('labels-search-close');
if (labelsSearchCloseBtn) {
  labelsSearchCloseBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleSectionSearch('labels-search-wrapper');
  });
}

const tagsSearchCloseBtn = document.getElementById('tags-search-close');
if (tagsSearchCloseBtn) {
  tagsSearchCloseBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleSectionSearch('tags-search-wrapper');
  });
}

// Filtering Logic

// Unlabeled Links Filter
// const unlabeledSearchInput = document.getElementById('unlabeled-search-input');
// if (unlabeledSearchInput) {
//   unlabeledSearchInput.addEventListener('input', (e) => {
//     const query = e.target.value.toLowerCase();
//     const rows = document.querySelectorAll('#unlabeled-list .unlabeled-link-table .link-row');

//     rows.forEach(row => {
//       const title = row.querySelector('.link-title-cell .link-title-wrapper')?.title.toLowerCase() || '';
//       const url = row.dataset.url || ''; // Assuming dataset or content
//       // Re-query content if dataset not robust
//       const titleText = row.querySelector('.link-title-cell')?.textContent.toLowerCase() || '';

//       if (title.includes(query) || titleText.includes(query)) {
//         row.style.display = '';
//       } else {
//         row.style.display = 'none';
//       }
//     });
//   });
// }

// Labels Filter
const labelsSearchInput = document.getElementById('labels-search-input');
if (labelsSearchInput) {
  labelsSearchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const items = document.querySelectorAll('#labels-list-container .label-item');

    items.forEach(item => {
      const name = item.querySelector('.label-item-name')?.textContent.toLowerCase() || '';

      if (name.includes(query)) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  });
}

// Tags Filter
const tagsSearchInput = document.getElementById('tags-search-input');
if (tagsSearchInput) {
  tagsSearchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const items = document.querySelectorAll('#tags-list-container .tag-list-item');

    items.forEach(item => {
      const text = item.querySelector('.tag-name')?.textContent.toLowerCase() || '';
      if (text.includes(query)) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  });
}

// === Grab All Links Feature ===

// Elements
const grabTabsBtn = document.getElementById("grab-tabs-btn");
const grabTabsModal = document.getElementById("grab-tabs-modal");
const grabTabsCloseBtn = document.getElementById("grab-tabs-close-btn");
const grabTabsList = document.getElementById("grab-tabs-list");
const grabTabsLabelSelect = document.getElementById("grab-tabs-label-select");
const saveGrabbedTabsBtn = document.getElementById("save-grabbed-tabs-btn");
const grabTabsCount = document.getElementById("grab-tabs-count");

// Open Modal
if (grabTabsBtn) {
  grabTabsBtn.addEventListener("click", () => {
    renderGrabbedTabs();
    populateGrabTabsLabelSelect();
    if (grabTabsModal) {
      grabTabsModal.style.display = "flex";
    }
  });
}

// Close Modal
if (grabTabsCloseBtn) {
  grabTabsCloseBtn.addEventListener("click", () => {
    if (grabTabsModal) grabTabsModal.style.display = "none";
  });
}

// Populate Label Select
function populateGrabTabsLabelSelect() {
  if (!grabTabsLabelSelect) return;
  grabTabsLabelSelect.innerHTML = '<option value="">No Label (Unlabeled)</option>';

  if (typeof customLabels !== 'undefined' && Array.isArray(customLabels)) {
    customLabels.forEach(label => {
      const option = document.createElement("option");
      option.value = label;
      option.textContent = label;
      grabTabsLabelSelect.appendChild(option);
    });
  }
}

// Render Tabs
function renderGrabbedTabs() {
  if (!grabTabsList) return;
  grabTabsList.innerHTML = '<div style="padding: 20px; text-align: center;">Loading tabs...</div>';

  chrome.tabs.query({ currentWindow: true }, (tabs) => {
    if (chrome.runtime.lastError) {
      console.error('Chrome tabs query error:', chrome.runtime.lastError);
      grabTabsList.innerHTML = '<div style="padding: 20px; text-align: center; color: red;">Error: ' + chrome.runtime.lastError.message + '</div>';
      return;
    }

    grabTabsList.innerHTML = "";
    if (tabs.length === 0) {
      grabTabsList.innerHTML = '<div style="padding: 20px; text-align: center;">No open tabs found.</div>';
      updateGrabTabsCount();
      return;
    }
    let count = 0;

    tabs.forEach(tab => {
      const item = document.createElement("div");
      item.className = "grab-tab-item";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "grab-tab-checkbox";
      checkbox.checked = true; // Default to checked
      checkbox.dataset.title = tab.title;
      checkbox.dataset.url = tab.url;
      checkbox.dataset.favIconUrl = tab.favIconUrl || "";

      // Update count on change
      checkbox.addEventListener("change", updateGrabTabsCount);

      const info = document.createElement("div");
      info.className = "grab-tab-info";

      const title = document.createElement("div");
      title.className = "grab-tab-title";
      title.textContent = tab.title;

      const url = document.createElement("div");
      url.className = "grab-tab-url";
      url.textContent = tab.url;

      info.appendChild(title);
      info.appendChild(url);

      item.appendChild(checkbox);
      item.appendChild(info);

      grabTabsList.appendChild(item);
      count++;
    });

    updateGrabTabsCount();
  });
}

function updateGrabTabsCount() {
  if (!grabTabsCount) return;
  const checked = document.querySelectorAll(".grab-tab-checkbox:checked").length;
  grabTabsCount.textContent = `${checked} tabs selected`;
}

// Save Logic
if (saveGrabbedTabsBtn) {
  saveGrabbedTabsBtn.addEventListener("click", () => {
    const selectedCheckboxes = document.querySelectorAll(".grab-tab-checkbox:checked");
    if (selectedCheckboxes.length === 0) {
      alert("Please select at least one tab to save.");
      return;
    }

    const labelName = grabTabsLabelSelect ? grabTabsLabelSelect.value : "Unlabeled";
    const finalLabel = labelName || "Unlabeled";

    let addedCount = 0;
    const now = new Date().toISOString();

    selectedCheckboxes.forEach(cb => {
      const newLink = {
        id: Date.now() + Math.random().toString(36).substr(2, 9),
        title: cb.dataset.title,
        url: cb.dataset.url,
        label: finalLabel,
        tags: [],
        note: "",
        dateAdded: now
      };

      myLinks.unshift(newLink);
      addedCount++;
    });

    // Close the modal immediately
    if (grabTabsModal) grabTabsModal.style.display = "none";

    // IMPORTANT: Set the active filter BEFORE saving
    activeFilterLabel = finalLabel;

    // Create a fresh hiddenTabs array - start with all possible tabs hidden
    const allPossibleTabs = [...customLabels, "song", "Unlabeled", "trash"];

    // Hide all tabs EXCEPT the one we're saving to
    hiddenTabs = allPossibleTabs.filter(tab => tab !== finalLabel);

    // Add to tab order only if not already there
    if (!tabOrder.includes(finalLabel)) {
      tabOrder.push(finalLabel);
    }

    // Reset pagination
    itemsToShow = itemsPerLoad;
    selectedLinks.clear();

    // Save everything to storage
    chrome.storage.local.set({
      myLinks,
      hiddenTabs,
      tabOrder,
      activeFilterLabel: finalLabel,
      lastModificationTime: Date.now()
    }, () => {
      // Render everything
      renderSidebarLabels();
      renderTabsBar();
      render();
      renderUnlabeledContainer();
      updateSelectionUI();
      updateSyncButtonStatus();
      triggerSmartSync();

      // Show success message
      showToast(`${addedCount} tabs saved to "${finalLabel}"`);
    });
  });
}

// === Unlabeled Selection Logic ===

function toggleUnlabeledSelection(index, isChecked) {
  if (isChecked) {
    selectedUnlabeledLinks.add(index);
  } else {
    selectedUnlabeledLinks.delete(index);
  }
  updateUnlabeledSelectionUI();
}

function updateUnlabeledSelectionUI() {
  const toolbar = document.getElementById("unlabeled-selection-toolbar");
  const countSpan = document.getElementById("unlabeled-selection-count");

  if (selectedUnlabeledLinks.size > 0) {
    document.body.classList.add("unlabeled-selection-mode");
    if (toolbar) toolbar.style.display = "flex";
    if (countSpan) countSpan.textContent = `${selectedUnlabeledLinks.size} selected`;

    // Hide normal actions
    const normalActions = document.querySelector(".unlabeled-header .unlabeled-actions");
    if (normalActions) normalActions.style.display = "none";
  } else {
    document.body.classList.remove("unlabeled-selection-mode");
    if (toolbar) toolbar.style.display = "none";

    // Show normal actions
    const normalActions = document.querySelector(".unlabeled-header .unlabeled-actions");
    if (normalActions) normalActions.style.display = "flex";
  }
}


// === Grab Tabs Add Label Button ===
const grabTabsAddLabelBtn = document.getElementById('grab-tabs-add-label-btn');
if (grabTabsAddLabelBtn) {
  grabTabsAddLabelBtn.addEventListener('click', () => {
    const labelModal = document.getElementById('label-modal');
    const labelInput = document.getElementById('label-input-el');
    if (labelModal && labelInput) {
      labelModal.style.display = 'flex';
      labelInput.value = '';
      labelInput.focus();
    }
  });
}
// === Note Modal Logic ===
const noteModal = document.getElementById("note-modal");
const noteModalInput = document.getElementById("note-modal-input");
const noteModalClose = document.getElementById("note-modal-close");
const noteAutosaveStatus = document.getElementById("note-autosave-status");

let activeNoteIndex = -1;
let noteAutosaveTimeout = null;

function openNoteModal(index) {
  if (!myLinks[index]) return;
  activeNoteIndex = index;

  // Populate
  const n = normalizeLinkItem(myLinks[index]);
  if (noteModalInput) {
    noteModalInput.value = n.note || "";
  }

  closeAllModals();
  if (noteModal) {
    noteModal.style.display = "flex";
    if (noteModalInput) noteModalInput.focus();
  }
}

function closeNoteModal() {
  if (noteModal) noteModal.style.display = "none";
  activeNoteIndex = -1;
}

if (noteModalClose) {
  noteModalClose.addEventListener("click", closeNoteModal);
}

// Close on outside click
if (noteModal) {
  noteModal.addEventListener("click", (e) => {
    if (e.target === noteModal) closeNoteModal();
  });
}

// Autosave Logic
if (noteModalInput) {
  noteModalInput.addEventListener("input", () => {
    if (activeNoteIndex === -1 || !myLinks[activeNoteIndex]) return;

    // Show "Saving..." state (optional, or just wait for saved)
    if (noteAutosaveStatus) {
      noteAutosaveStatus.textContent = "Saving...";
      noteAutosaveStatus.classList.add("visible");
    }

    if (noteAutosaveTimeout) clearTimeout(noteAutosaveTimeout);

    noteAutosaveTimeout = setTimeout(() => {
      const link = myLinks[activeNoteIndex];
      link.note = noteModalInput.value;

      chrome.storage.local.set({ myLinks, lastModificationTime: Date.now() }, () => {
        if (noteAutosaveStatus) {
          noteAutosaveStatus.textContent = "Saved";
          // Hide after delay
          setTimeout(() => {
            noteAutosaveStatus.classList.remove("visible");
          }, 2000);
        }
        updateSyncButtonStatus();
        triggerSmartSync(); // Auto-sync after saving note

        // Update row if visible involved note icon? 
        // For now just data is saved.
      });
    }, 500); // 500ms debounce
  });
}
