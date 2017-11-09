var yelpRequest = require('./helpers.js')
var model = require('../../database/models/model.js')
var db = require('../../database/index.js')
var key = require('../config.js')

  
  exports.signupHandler = function (req, res) {
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
  }

  exports.soloHandler = function(req, res) {
    console.log('this is req.body==================', req.body)    
    var params = {};
    params.location = req.body.location;
    params.term = req.body.term;
    params.price = req.body.price;
    params.limit = 5
    yelpRequest(params, key, function(response) {
      console.log(response)
      var random = Math.floor(Math.random() * 5)
      var resp = response.data.businesses[random]
      //res.send('request successufl');
      res.json(resp)
    })
  }














