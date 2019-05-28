const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const expressValidator = require('express-validator');
const config = require('./config/database');

mongoose.connect(config.database, { useNewUrlParser: true });

let db = mongoose.connection;
//Check connection
db.once('open', () => {
    console.log('Connected to MongoDB')
});

//Check for database errors
db.on('error', (err) => {
    console.log(err);
});

//Init App
const app = express();

app.use(expressValidator());
app.use(express.static(__dirname + '/dist'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

//Start Server 
app.listen(5010, () => {
    console.log('Server started on port 5010...')
});