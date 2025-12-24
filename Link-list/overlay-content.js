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

// === OVERLAY CONTENT SCRIPT (IFRAME APPROACH) ===
// This script creates an overlay by embedding index.html in an iframe

// Prevent multiple injections
if (window.__slmOverlayInjected) {
    // Already injected, skip
} else {
    window.__slmOverlayInjected = true;

    // Create and inject the overlay
    function createOverlay() {
        // Check if overlay already exists
        if (document.getElementById('slm-overlay-wrapper')) {
            return;
        }

        // Create overlay wrapper
        const overlayWrapper = document.createElement('div');
        overlayWrapper.id = 'slm-overlay-wrapper';
        overlayWrapper.className = 'slm-overlay-wrapper';

        // Create iframe that loads index.html
        const iframe = document.createElement('iframe');
        iframe.id = 'slm-overlay-iframe';
        iframe.src = chrome.runtime.getURL('index.html');
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.border = 'none';
        iframe.style.display = 'block';

        overlayWrapper.appendChild(iframe);

        // Inject overlay-specific CSS
        const cssLink = document.createElement('link');
        cssLink.rel = 'stylesheet';
        cssLink.href = chrome.runtime.getURL('overlay-styles.css');
        document.head.appendChild(cssLink);

        // Inject overlay into page
        document.body.appendChild(overlayWrapper);

        // Initialize resize/collapse functionality for the overlay wrapper
        initializeOverlayControls();
    }

    // Add resize and collapse controls to the overlay wrapper
    function initializeOverlayControls() {
        const overlayWrapper = document.getElementById('slm-overlay-wrapper');
        if (!overlayWrapper) return;

        // Add Material Icons if not already loaded
        if (!document.querySelector('link[href*="Material+Icons"]')) {
            const iconLink = document.createElement('link');
            iconLink.rel = 'stylesheet';
            iconLink.href = 'https://fonts.googleapis.com/icon?family=Material+Icons+Outlined';
            document.head.appendChild(iconLink);
        }

        // Create hover trigger line (vertical line at left edge)
        const hoverTrigger = document.createElement('div');
        hoverTrigger.id = 'slm-overlay-hover-trigger';
        hoverTrigger.className = 'slm-overlay-hover-trigger';
        document.body.appendChild(hoverTrigger);

        // Collapse/Expand functionality
        // Always start collapsed on every tab
        let isCollapsed = true;
        let isHovering = false;

        // Set initial width
        let currentWidth = parseInt(localStorage.getItem('slm-overlay-width')) || 301;
        overlayWrapper.style.width = currentWidth + 'px';

        // Always apply collapsed state
        overlayWrapper.classList.add('collapsed');

        // Hover to expand
        hoverTrigger.addEventListener('mouseenter', () => {
            isHovering = true;
            if (isCollapsed) {
                overlayWrapper.classList.remove('collapsed');
                isCollapsed = false;
                
                // Notify iframe that overlay has expanded
                const iframe = document.getElementById('slm-overlay-iframe');
                if (iframe && iframe.contentWindow) {
                    iframe.contentWindow.postMessage({ type: 'OVERLAY_EXPANDED' }, '*');
                }
            }
        });

        // Collapse when mouse leaves the overlay
        overlayWrapper.addEventListener('mouseleave', () => {
            if (isHovering) {
                isHovering = false;
                overlayWrapper.classList.add('collapsed');
                isCollapsed = true;
            }
        });

        // Resize functionality
        const resizeHandle = document.createElement('div');
        resizeHandle.id = 'slm-overlay-resize';
        resizeHandle.className = 'slm-overlay-resize';
        overlayWrapper.appendChild(resizeHandle);

        let isResizing = false;

        resizeHandle.addEventListener('mousedown', (e) => {
            isResizing = true;
            document.body.style.cursor = 'ew-resize';
            document.body.style.userSelect = 'none';
            e.preventDefault();
        });

        document.addEventListener('mousemove', (e) => {
            if (!isResizing) return;
            const newWidth = e.clientX;
            if (newWidth >= 300 && newWidth <= 1200) {
                overlayWrapper.style.width = newWidth + 'px';
                currentWidth = newWidth;
            }
        });

        document.addEventListener('mouseup', () => {
            if (isResizing) {
                isResizing = false;
                document.body.style.cursor = '';
                document.body.style.userSelect = '';
                localStorage.setItem('slm-overlay-width', currentWidth);
            }
        });
    }

    // Remove overlay
    function removeOverlay() {
        const overlay = document.getElementById('slm-overlay-wrapper');
        if (overlay) {
            overlay.remove();
        }
        const hoverTrigger = document.getElementById('slm-overlay-hover-trigger');
        if (hoverTrigger) {
            hoverTrigger.remove();
        }
    }

    // Listen for storage changes
    chrome.storage.onChanged.addListener((changes, namespace) => {
        if (namespace === 'local' && changes.overlayModeEnabled) {
            if (changes.overlayModeEnabled.newValue === false) {
                removeOverlay();
            }
        }
    });

    // Listen for messages from background script
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        if (message.type === 'REMOVE_OVERLAY') {
            removeOverlay();
        }
    });

    // Create overlay on load
    createOverlay();

    // === ORPHAN DETECTION ===
    // Periodically check if the extension context is still valid.
    // If chrome.runtime.id becomes undefined, it means the extension was removed/reloaded/disabled.
    // In that case, we must clean up the overlay to prevent it from getting stuck.
    const cleanupInterval = setInterval(() => {
        try {
            // Accessing chrome.runtime.id will throw or return undefined if invalid
            if (!chrome.runtime || !chrome.runtime.id) {
                throw new Error("Extension context invalidated");
            }
            // Also try sending a ping (optional but more robust for some edge cases)
            // chrome.runtime.sendMessage({ type: "PING" }, () => {
            //     if (chrome.runtime.lastError) {
            //         // This might happen if background script is unloading, but strictly
            //         // catching the context invalidation is usually enough.
            //     }
            // });
        } catch (e) {
            // Extension is gone!
            console.log("Extension context invalidated. Removing overlay.");
            clearInterval(cleanupInterval);
            removeOverlay();
            window.__slmOverlayInjected = false; // Reset flag just in case
        }
    }, 2000); // Check every 2 seconds
}
