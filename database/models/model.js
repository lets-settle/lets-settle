var db = require('../index.js')
const Sequelize = require('sequelize');

//define tables here 
//index.js is for connecting to database
var User = db.define('user', {
  name: Sequelize.STRING,
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  email: Sequelize.STRING,
});

var Group = db.define('group', {
  group_name: Sequelize.STRING
});

var UserGroup = db.define('usergroup', {
  userid: Sequelize.INTEGER,
  groupid: Sequelize.INTEGER
});


db.sync().then(function() {
    return User.create({
      name: 'Erica',
      username: 'ericakim',
      password: 'jt111588',
      email: 'jerica0722@gmail.com'
    })
  }).then(function() {
    // return Group.create({
    //   group_name: 'theTestGroup'
    // });
  }).then(function() {
    // return UserGroup.create({
    //   userid:1,
    //   groupid:1
    // })
  })
  
exports.User = User;
exports.Group = Group;
exports.UserGroup = UserGroup;
