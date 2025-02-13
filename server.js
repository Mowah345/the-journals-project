const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to SQLite database
const db = new sqlite3.Database("./journals.db", (err) => {
    if (err) {
        console.error("Database connection failed:", err.message);
        process.exit(1); // Exit if database connection fails
    }
    console.log("Connected to SQLite database.");
});

// Create table if not exists
db.run(
    `CREATE TABLE IF NOT EXISTS journals (
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        entry TEXT NOT NULL
    )`
);

// Root route
app.get("/", (req, res) => {
    res.send("Welcome to the Journal API!");
});

// Save journal entry with validation
app.post("/save-entry", (req, res) => {
    const { entry } = req.body;

    if (!entry || typeof entry !== "string" || entry.trim().length === 0) {
        return res.status(400).json({ error: "Invalid journal entry" });
    }

    db.run("INSERT INTO journals (entry) VALUES (?)", [entry.trim()], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ success: true, id: this.lastID });
    });
});

// Get all journal entries
app.get("/get-entries", (req, res) => {
    db.all("SELECT * FROM journals", [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// Gracefully close the database on exit
process.on("SIGINT", () => {
    db.close((err) => {
        if (err) console.error("Error closing database:", err.message);
        console.log("Database connection closed.");
        process.exit(0);
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
