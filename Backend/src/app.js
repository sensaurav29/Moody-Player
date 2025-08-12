const express = require('express');
const SongRoutes = require('./routes/song.routes.js');
const cors = require('cors');

const app = express();
app.use(express.json());    
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/', SongRoutes);


module.exports = app;