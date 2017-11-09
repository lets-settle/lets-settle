const express = require('express');
let app = express();
// let db = require('../database/index');
let bodyParser = require('body-parser');
let axios = require('axios');
let model = require('../database/models/model.js');
let key = require('./config.js')
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
});


//========================================handleing solo post request========================================


app.post('/solo', function(req, res) {
  var params = {};
  params.loction = req.body.location;
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
})


//========================================yelp request helper function========================================

var yelpRequest = function(params, key, callback) {
  console.log("it's inside of yelpRequesr now!!!!!")
  axios.get(`https://api.yelp.com/v3/businesses/search?location="${params.location}"&term="${params.term}"&limit=${params.limit}&price=${params.price}`,
    { headers: {'Authorization': 'bearer ' + key} }
  )
  .then(function (response) {
    callback(response)
    
    //console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

}



// params: {
//   location:
//   radius: 5000,
//   term: 'spicy',
//   limit: 5,
//   price:
// }












//========================================server setting========================================


let port = 1128;

app.listen(port, function() {

  console.log(`listening on port ${port}`);
});