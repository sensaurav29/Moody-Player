const express = require('express');
const SongRoutes = require('./routes/song.routes.js');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(express.json());    
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')))
app.use(cors());

app.use('/', SongRoutes);

app.get("*name", (req, res) =>{
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = app;