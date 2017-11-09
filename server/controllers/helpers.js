var key = require('../config.js')
var axios = require('axios')

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

module.exports = yelpRequest;