// Imports express, the file sytem, path and the index router
const express = require("express");
const path = require("path");
const fs = require("fs");
const api = require("./routes/index");

// Uses port 3001 if no other envrionment variable is present
const PORT = process.env.port || 8080;

const app = express();

// Parses JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", api);

app.use(express.static("public"));

// GET route established for "home" page
app.get("/", (req, res) => 
    res.sendFile(path.join(__dirname, "/public/index.html"))
);

// GET route established for Notes page
app.get("/notes", (req, res) =>
    res.sendFile(path.join(__dirname, "/public/notes.html"))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);