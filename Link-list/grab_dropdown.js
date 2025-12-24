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

// Grab Tabs Dropdown Auto-Refresh and Auto-Select
(function () {

    function refreshGrabDropdown(selectLabel) {
        const select = document.getElementById('grab-tabs-label-select');
        if (!select) return;

        chrome.storage.local.get(['customLabels'], (data) => {
            const labels = data.customLabels || [];

            // Clear existing options except first one
            while (select.options.length > 1) {
                select.remove(1);
            }

            // Add all labels
            labels.forEach(label => {
                const opt = document.createElement('option');
                opt.value = label;
                opt.textContent = label;
                select.appendChild(opt);
            });

            // Auto-select if specified
            if (selectLabel && labels.includes(selectLabel)) {
                select.value = selectLabel;
            }
        });
    }

    // Refresh when grab modal opens
    const grabModal = document.getElementById('grab-tabs-modal');
    if (grabModal) {
        new MutationObserver(() => {
            if (grabModal.style.display === 'flex') {
                refreshGrabDropdown();
            }
        }).observe(grabModal, { attributes: true, attributeFilter: ['style'] });
    }

    // Listen for label changes and auto-select
    chrome.storage.onChanged.addListener((changes) => {
        if (changes.customLabels && grabModal && grabModal.style.display === 'flex') {
            const newLabels = changes.customLabels.newValue || [];
            const oldLabels = changes.customLabels.oldValue || [];
            const added = newLabels.filter(l => !oldLabels.includes(l));
            if (added.length > 0) {
                setTimeout(() => refreshGrabDropdown(added[0]), 200);
            }
        }
    });

    // Allow modal to close when clicking outside (same as other modals)
    // Add explicit handler for grab-tabs-modal backdrop
    if (grabModal) {
        grabModal.addEventListener('click', (e) => {
            // Only close if clicking the modal backdrop itself, not the content
            if (e.target === grabModal) {
                grabModal.style.display = 'none';
            }
        });
    }
})();
