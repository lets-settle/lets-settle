const express = require('express');
let app = express();
let routes = require('./routes/routes.js');
let db = require('../database/index.js');
let model = require('../database/models/model.js')
let bodyParser = require('body-parser')

app.use(express.static(__dirname + '/../client/dist'), bodyParser());

app.use('/api', routes)


const port = 1128;

app.listen(port, function() {

  console.log(`listening on port ${port}`);
});

