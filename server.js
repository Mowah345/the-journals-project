const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Connect to SQLite database
const db = new sqlite3.Database("./journals.db", (err) => {
    if (err) console.error(err.message);
    console.log("Connected to SQLite database.");
});

// Create table if not exists
db.run("CREATE TABLE IF NOT EXISTS journals (id INTEGER PRIMARY KEY, entry TEXT)");

// Root route
app.get("/", (req, res) => {
    res.send("Welcome to the Journal API!");
});


// Save journal entry
app.post("/save-entry", (req, res) => {
    const { entry } = req.body;
    db.run("INSERT INTO journals (entry) VALUES (?)", [entry], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ success: true, id: this.lastID });
    });
});

// Get all journal entries
app.get("/get-entries", (req, res) => {
    db.all("SELECT * FROM journals", [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// Edit a journal entry
app.put("/edit-entry/:id", (req, res) => {
    const { id } = req.params;
    const { entry } = req.body;
    db.run("UPDATE journals SET entry = ? WHERE id = ?", [entry, id], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ success: true });
    });
});

// Delete a journal entry
app.delete("/delete-entry/:id", (req, res) => {
    const { id } = req.params;
    db.run("DELETE FROM journals WHERE id = ?", [id], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ success: true });
    });
});

// Start server on Port 5000
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});







