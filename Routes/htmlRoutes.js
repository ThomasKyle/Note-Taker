const fs = require('fs');
const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(_dirname, '../public/notes.html'));  
});

router.get('/notes', (req, res) => {
    res.sendFile(path.join(_dirname, '../public/notes.html'));
});

router.get 

module.exports = router;
