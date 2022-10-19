// Imports express, the fsUtils file, and uniqid npm
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
    console.log(req.body);

    const { title, text, } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            note_id: uuid(),
        };

        readAndAppend(newNote, "./db/db.json");
        res.json("Successfully added note! ✅");
    } else {
        res.error("Error adding note ⚠️");
    }

});

// DELETE's note based on the id and rewrites the other notes back to db.json file with readFromFile and writeToFile method from fsUtils
notes.delete("/:id", (req, res) => {
    const { id } = req.params;
    console.log(req.params);
    
    if(req.params) {
        writeToFile("./db/db.json", )
    } else {
        res.error("Error in deleting this note ⚠️");
    }

   

   
});

module.exports = notes;