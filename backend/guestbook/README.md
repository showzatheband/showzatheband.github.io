Guestbook backend (archived)

This folder contains the preserved guestbook backend and frontend. The feature has been removed from the main site but the code is kept here if you want to run or re-enable it.

Quick start (in this folder):

```powershell
npm install
npm start
```

API endpoints:

- GET /guestbook/entries
- POST /guestbook/entries  (JSON { "name": "...", "message": "..." })

Data file: `guestbook.json` (created on first POST). To create an empty file now:

```powershell
echo [] > guestbook.json
```

Security: This is a demo backend. Add spam protection and rate-limiting before exposing publicly.
