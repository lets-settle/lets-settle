const express = require('express');
let app = express();
// let db = require('../database/index');
let bodyParser = require('body-parser');
let axios = require('axios');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(express.static(__dirname + '/../client/dist'));


let port = 1128;

app.listen(port, function() {

  console.log(`listening on port ${port}`);
});

