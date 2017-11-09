const express = require('express');
let app = express();
// let db = require('../database/index');
let bodyParser = require('body-parser');
let axios = require('axios');
let model = require('../database/models/model.js');
//let routes = require('./routes/routes.js');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())

app.use(express.static(__dirname + '/../client/dist'));

app.post('/signup', function(req, res) {
  var name = req.body.name;
  var username = req.body.username;
  var password = req.body.password;
  var email = req.body.email; 
 
  model.User.create({
    name: name,
    username: username,
    password: password,
    email: email
  }).then(function(user) {
    console.log(user)
    res.send('user inserted into database!')
  })
}) 

let port = 1128;

app.listen(port, function() {

  console.log(`listening on port ${port}`);
});