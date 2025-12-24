/**
 * Shared Utilities for Incremental Sync
 * Used by both background.js and script.js
 */

const SYNC_CONFIG = {
    FOLDER_NAME: 'SaveLinkManager_Updates', // Dedicated folder for updates
    UPDATE_PREFIX: 'update_',
    ALARM_NAME: 'INCREMENTAL_SYNC_ALARM',
    SYNC_INTERVAL_MINUTES: 5
};

// Generate a random ID for update tracking
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

/**
 * Creates a Delta Object representing a change
 * @param {string} type - 'ADD', 'UPDATE', 'DELETE', 'BULK_DELETE'
 * @param {object} payload - The data involved (e.g. the link object, or ID)
 * @param {object} [metadata] - Optional extra info (e.g. old value for verifying conflicts)
 */
function createSyncAction(type, payload, metadata = {}) {
    return {
        id: generateUUID(),
        timestamp: Date.now(),
        type: type,
        payload: payload,
        metadata: metadata,
        source: 'extension_loc_' + Math.floor(Math.random() * 1000) // Random session ID to help debug
    };
}

// Ensure the functions are available globally in both contexts
if (typeof self !== 'undefined') {
    self.SYNC_CONFIG = SYNC_CONFIG;
    self.generateUUID = generateUUID;
    self.createSyncAction = createSyncAction;
} else if (typeof window !== 'undefined') {
    window.SYNC_CONFIG = SYNC_CONFIG;
    window.generateUUID = generateUUID;
    window.createSyncAction = createSyncAction;
}
