// Imports express, destructured methods from the fsUtils file, and uniqid npm
const notes = require("express").Router();
const { readFromFile, writeToFile, readAndAppend } = require("../helpers/fsUtils");
const uuid = require("uniqid");
const fs = require("fs");

// GET's previous notes from the db.json file using the readFomFile method in the fsUtils file
notes.get("/", (req, res) => {
    readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data))); 
});

// POST's note to the db.json file using the readAndAppend method from the fsUtils file
notes.post("/", (req, res) => {

    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuid(),
        };

        readAndAppend(newNote, "./db/db.json");
        res.json(newNote);
    } else {
        res.error("Error adding note ⚠️");
    }

});

// DELETE's note based on the id and rewrites the other notes back to db.json file with readFileSync method and writeToFile method from fsUtils file
notes.delete("/:id", (req, res) => {
    // Destructures note id
    const { id } = req.params;
    // Reads db.json file and parses json data
    const rawData = fs.readFileSync("./db/db.json");
    const savedNotes = JSON.parse(rawData);
    // Filters through parsed data and "returns" data not strictly equal to the request parameter
    const filteredNotes = savedNotes.filter((data) => data.id !== req.params.id);
    // Rewrites db.json file
    writeToFile("./db/db.json", filteredNotes);
    // "Returns" filtered data
    res.json(filteredNotes);
   
});

module.exports = notes;