const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const DATA = path.join(__dirname, 'guestbook.json');
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname));

app.get('/guestbook/entries', (req, res) => {
  fs.readFile(DATA, 'utf8', (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') return res.json([]);
      return res.status(500).json({ error: 'read error' });
    }
    try { res.json(JSON.parse(data)); } catch (e) { res.json([]); }
  });
});

app.post('/guestbook/entries', (req, res) => {
  const name = String(req.body.name || 'Anon').slice(0, 100);
  const message = String(req.body.message || '').slice(0, 1000);
  const entry = { name, message, time: new Date().toISOString() };
  fs.readFile(DATA, 'utf8', (err, data) => {
    let arr = [];
    if (!err) {
      try { arr = JSON.parse(data); } catch (e) { arr = []; }
    }
    arr.unshift(entry);
    fs.writeFile(DATA, JSON.stringify(arr, null, 2), (err2) => {
      if (err2) return res.status(500).json({ error: 'write error' });
      res.json(entry);
    });
  });
});

app.listen(PORT, () => console.log(`Guestbook server running on http://localhost:${PORT}`));
