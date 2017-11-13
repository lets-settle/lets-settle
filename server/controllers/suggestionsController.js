var yelpRequest = require('./helpers.js')
var model = require('../../database/models/model.js')
var db = require('../../database/index.js')
var key = require('../config.js')
var server = require('../index')
//var changeGroup = require('../index');

//console.log("this is changeGroup updated!! +++++++======", changeGroup.changeGroup)

  
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
    var username = req.body.username;
    //find all the group this user is in and send those groups back to client
    model.User.findOne({where: {username: username}}).then(function(user){
      console.log('====================groupHandler is being invloked!! ==========================')
      model.UserGroup.findAll({where: {userid: user.id}}).then(function(usergroups) {
        
        var groupids = usergroups.map(function(usergroup) {
          return usergroup.groupid
        })

        model.Group.findAll({where: {id: groupids}}).then(function(groups){
          res.json(groups);
        })
      })  
    })
  }

  module.exports.selectionHandler = function(req, res) {
    var params = {};
    params.location = req.body.location;
    params.term = req.body.term;
    params.price = req.body.price;
    params.limit = 5
    yelpRequest(params, key, function(response) {
      res.json(response.data.businesses);
    })
  }

  var groupname = "";
  var memberCount = 0;
  

  module.exports.selectGroup = function(req, res) {
    groupname = req.body.group_name
    console.log('this is your groupname =========', req.body)

    //server.activateSocket()
    //find out how many are in this group and store it in a memberCount
    model.Group.findOne({where: {group_name: groupname}}).then(function(group){
      model.UserGroup.findAndCountAll({where: {groupid: group.id}}).then(function(usersInGroup) {
        memberCount = usersInGroup.count;
      }) 
    })
    res.send("group selected!")
    
  }


  var restaurants = [];
  module.exports.handleSuggestion = function(req, res) {
    //check if restaurants.length === group.length
    //console.log('this is restaurant ==========', restaurants)
    

    // model.Group.findOne({where: {group_name: groupname}}).then(function(group){
    //   model.UserGroup.findAndCountAll({where: {groupid: group.id}}).then(function(usersInGroup) {
    //     memberCount = usersInGroup.count;
    //     console.log('this is menmberCount ==========', memberCount)
    //   }) 
    // })
    console.log('member count =============', memberCount)
    console.log('RESTURANT =============', restaurants);

    if(restaurants.length === memberCount) {
    
      console.log('RESSSTTTT ==== COUNTTTTT')
      var random = Math.floor(Math.random() * memberCount);
      //res.json(restaurants[random]);
      //io.emit(restaurants[random]);
      console.log('this is restaurant inside of handlesuggestion!!! =========', restaurants[random]);
      server.emitSender(restaurants[random])


    } else {
      res.send('suggestion received');
    }
  }


  

  module.exports.restaurants = restaurants;


  module.exports.groupname = groupname;






