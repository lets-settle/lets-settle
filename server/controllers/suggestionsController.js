var yelpRequest = require('./helpers.js')
var model = require('../../database/models/model.js')
var db = require('../../database/index.js')
var key = require('../config.js')

  
  module.exports.signupHandler = function (req, res) {
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

  module.exports.soloHandler = function(req, res) {
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

  module.exports.addNewGroup = function(req, res) {
    var users = req.body.users
    var group_name = req.body.group_name; 
    //takes the group and create the group instanly
    model.Group.create({
      group_name: group_name
    //after the group is created, then 
    }).then(function(newGroup) {
      //find each user in the arr in our database
      users.forEach(function(user) {
        model.User.findOne({where: {username: user}}).then(function(targetUser) {
          if(targetUser) {
            model.UserGroup.create({
              userid: targetUser.id,
              groupid: newGroup.id
            })
          } else {
            newGroup.destroy();
            res.send("user does not exist!")
          }
        }).then(function() {
          console.log('user and group relationship created!')
          res.send('user and group relationship created!')
        })
      })  
    })
  
  }

  module.exports.loginHandler = function(req, res) {
    var email = req.body.email
    model.User.findOne({where: {email: email}}).then(function(user) {
      if(user) {
        res.send(user.username);
      } else {
        res.send('invalid email')
      }  
    })
  }

  module.exports.groupHandler = function(req, res) {
    var params = {};
    params.location = req.body.location;
    params.term = req.body.term;
    params.price = req.body.price;
    params.limit = 5
    yelpRequest(params, key, function(response) {
      res.json(response.data.businesses);
    })
  }








