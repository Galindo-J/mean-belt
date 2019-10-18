const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/client/dist/client')));
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, '/client/views'));


//THIS LINKS MODEL.JS TO SERVER.JS
require('./server/config/database');

// THIS LINKS ROUTES.JS TO SERVER.JS
require('./server/config/routes')(app);

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./client/dist/client/index.html"))
  });

// tell your server which port to run on
app.listen(8000, () => console.log("MEAN-BELTING on port 8000"));


