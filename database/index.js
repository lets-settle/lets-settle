const Sequelize = require('sequelize');


const sequelize = new Sequelize('postgres://vhqwwvao:AJGKf_dXDkbDEebQS46mLMYrAbeGs_H9@baasu.db.elephantsql.com:5432/vhqwwvao');

var User = sequelize.define('users', {
  name: Sequelize.STRING,
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  email: Sequelize.STRING,
});


var Group = sequelize.define('groups', {
  group_name: Sequelize.STRING
});

User.belongsToMany(Group, {through: 'UserProject'});
Group.belongsToMany(User, {through: 'UserProject'});


User.sync().then(function () {  
  return User.create({
    name: 'Jerry',
    username: 'Tang',
    password: 'jt111588',
    email: 'jerica0722@gmail.com'
  });
});

Group.sync().then(function () { 
  return User.create({
   group_name: 'JerryByHimSelf'
  });
});



// var sequelize = new Sequelize('catsList', 'vhqwwvao', 'AJGKf_dXDkbDEebQS46mLMYrAbeGs_H9', {
//   host: 'postgres://vhqwwvao:AJGKf_dXDkbDEebQS46mLMYrAbeGs_H9@baasu.db.elephantsql.com:5432/vhqwwvao',
//   dialect: 'postgres'
// });