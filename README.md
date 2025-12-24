# Link-List
Save your favorite links and manage them in one place and do backup online (self-hosted) free.

This is a browser extension that helps you store and manage links in one place, especially if you switch between browsers often and want quick access to your saved links.

It works similarly to **Workona** or **Toby Links**, but it is **completely free and open-source** — a small gift if you're looking for a simple link manager.

It’s far from perfect, but I hope it’s useful for you and that you enjoy using it.

---

# Setup

## 1. Download the Extension
1. Download the code from the **Releases** page.
2. Unzip the file.

---

## 2. (Optional) Enable Google Drive Backup

### Step 1 — Create the Redirect URI
1. Log in or sign up at **https://app.netlify.com**
2. Download `oauth2callback.html` from the `netllify` folder in this repo.
3. Create a new folder named **redirect**, place `oauth2callback.html` inside it.
4. Upload the folder to Netlify.
5. You now have a site link — append `oauth2callback.html` to the end:
https://(your-site).netlify.app/oauth2callback.html
6. Replace the `REDIRECT_URI` value in `oauth.js` with the link above.

---

### Step 2 — Get Your CLIENT_ID
1. Log in or sign up at **https://console.cloud.google.com/**
2. In the search bar, type **Google Drive API** → enable it.
3. Go to **API & Services** → click **+ Create Credentials**.
4. Choose **OAuth Client ID**  
- If the consent screen isn't configured, complete the form.
5. Create a **Web Application** OAuth Client.
6. In **Authorized redirect URIs**, enter:
https://(your-site).netlify.app/oauth2callback.html
7. Click **Create** and copy your **CLIENT_ID**.
8. Paste the CLIENT_ID into:
- `oauth.js`
- `manifest.json`
9. Save all files.
10. In Google Cloud Console → **OAuth consent screen** → click **Publish App**.
11. Done.

---

## 3. Install the Extension
1. Open your browser’s **Extensions** page.
2. Enable **Developer mode**.
3. Click **Load Unpacked**.
4. Select the extension folder.

---

# Usage

- Open any website (the extension does not show on a blank tab).  
After the page loads, hover your cursor on the **left side** of the screen and the overlay menu will appear.

- To save a link quickly, **pin the extension** in your browser toolbar and click the **LL icon**.

- To use the cloud backup feature, make sure you completed all steps above.  
Press the **Sync** button to upload your backup to Google Drive.

- In your Google Drive, you will find:
Link list / backup_data.json
This is where your saved links are stored.

---

# Disclaimer
This app does not save or send any data to any server except your local device and your own Google Drive.
