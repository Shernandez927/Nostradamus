// Imports express and the modular router for /notes
const express = require("express");
const notesRouter = require("./notes");

const app = express();

app.use("/notes", notesRouter);

module.exports = app;