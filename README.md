Showza (retro) — local dev

Guestbook/server:

- Install dependencies:

```powershell
npm install
```

- Start server (serves static files and guestbook API):

```powershell
npm start
```

Open http://localhost:3000/index.html in your browser.

The guestbook feature has been archived to `backend/guestbook/`. If you want to run the guestbook backend, change into that folder and follow the instructions in `backend/guestbook/README.md`.

Guestbook data is stored in `backend/guestbook/guestbook.json` when the backend is run.

If `guestbook.json` does not exist yet you can create an empty one so the server has a file to read:

```powershell
echo [] > guestbook.json
```

Troubleshooting / Windows notes:

- If `npm` is not recognized, install Node.js LTS from https://nodejs.org and then run the commands above.
- If `npm install` fails on older Windows PowerShell, try using the Node.js Command Prompt or Git Bash.
- To run the server in the background on Windows you can use a tool like `pm2` or run it inside a terminal window you keep open.

API endpoints (served from the same origin when you run `npm start`):

- `GET /guestbook/entries` — returns an array of entries (newest first)
- `POST /guestbook/entries` — JSON body `{ "name": "Your name", "message": "Your message" }` — returns the saved entry

Security note:

- This is a simple demo backend and stores data in a plain JSON file. If you expose it to the public internet consider adding spam protection (CAPTCHA), rate-limiting, and input sanitization on the server side.


Deploying to GoDaddy (shared / cPanel hosting)

- Upload all files and folders from this repository into your GoDaddy account's `public_html` or site folder (use File Manager or SFTP). The static site will work as-is.
- The included `.htaccess` enables clean URLs so `/music` will serve `music.html`.

If your GoDaddy plan supports Node apps and you want the guestbook backend running on their platform:

1. Use GoDaddy's App Manager or your hosting control panel to create a Node.js app.
2. Set the application root to this repository folder and the start command to `npm start`.
3. Run `npm install` in GoDaddy's terminal or via the control panel so `express` is installed.

If you don't have Node on GoDaddy, consider either:
- Using a separate small Node host (Heroku, Railway, Render, Fly, etc.) to run `server.js` and point `guestbook.html` fetches to that backend, or
- Replace the guestbook with a static form service (Formspree, Netlify Forms, Staticman) which requires only static hosting.

Quick local commands (Windows PowerShell):
```powershell
npm install
npm start
```

Repository setup (create a git repo and push to remote)

Run the included script for your platform to initialize a local git repository and make the initial commit.

Linux / macOS / Git Bash:
```bash
./init-repo.sh
```

Windows PowerShell:
```powershell
.\init-repo.ps1
```

After running, add your remote and push:
```bash
git remote add origin git@github.com:youruser/yourrepo.git
git push -u origin main
```

If you plan to host the static site on GoDaddy, upload the repository contents (or the `public` set of files) to the `public_html` folder via SFTP or the File Manager.

