const express = require("express");
const bodyParser = require("body-parser");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const PORT = process.env.PORT || 3000;

const db = new sqlite3.Database("visits.db");

db.run(`CREATE TABLE IF NOT EXISTS visits (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ip TEXT,
    city TEXT,
    device TEXT,
    visit_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`);

app.use(bodyParser.json());

app.post("/saveVisitData", (req, res) => {
  const { ip, city, device } = req.body;

  db.run(
    `INSERT INTO visits (ip, city, device) VALUES (?, ?, ?)`,
    [ip, city, device],
    (err) => {
      if (err) {
        console.error("Error saving visit data:", err);
        res.status(500).send("Error saving visit data");
      } else {
        res.status(200).send("Visit data saved successfully");
      }
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
