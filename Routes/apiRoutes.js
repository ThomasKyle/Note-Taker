const fs = require('fs');
const express = require('express');
const router = express.Router();

router.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
        dbData = JSON.parse(data)
        res.send(dbData);
        if(err) throw err;
    });
});

router.post('api/notes', (req, res) => {
    let addNote = req.body;
    let noteId = (data.length).toString();

    addNote.id = noteId;
    data.push(addNote);

    fs.writeFile('./db/db.json', JSON.stringify(data))

    res.json(data);
});

module.exports = router;