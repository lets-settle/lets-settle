const express = require('express');
let app = express();
let db = require('../database/index');
let bodyParser = require('body-parser');
let axios = require('axios');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  res.send("this is the get server speaking")
});

let port = 3000;

app.listen(port, function() {

  console.log(`listening on port ${port}`);
});

