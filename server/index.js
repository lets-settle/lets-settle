const express = require('express');
const http = require("http");
let app = express();
let routes = require('./routes/routes.js');
let db = require('../database/index.js');
let model = require('../database/models/model.js')
let bodyParser = require('body-parser')
const server = http.createServer(app);
// const socketio = require('socket.io');
const controllers = require('./controllers/suggestionsController')
// let io = socketio.listen(server);
const io = require('socket.io')(server);

app.use(express.static(__dirname + '/../client/dist'), bodyParser());

app.use('/api', routes)


//module.exports.activateSocket = function() {
  io.on('connection', (client)=>{
  client.on('aSuggestion', function(data){
    console.log('SOCKETTTT', data);
    controllers.restaurants.push(data)
    //below was client instead of session before 
    io.emit('showSuggestion', {'received': data});
    // client.broadcast.emit('showSuggestion', {'received': data});
  });
  client.on('disconnect', () => console.log('disconnected'))
})
//}

module.exports.emitSender = function(data) {
  console.log("this is data inside of emitsender!! =====================", data)
  io.emit('finalSuggestion', data);
}

//CODE TESTING 
// io.on('connection', (client)=>{ 
//   console.log('SOCKETGROUPPPPPP',controllers.groupname)

//   client.on(controllers.groupname, function(data){
//     console.log('SOCKETTTT', data);
//     //below was client instead of session before 
//     client.emit(controllers.groupname, {'received': data});
//     // client.broadcast.to(controllers.groupName).emit('showSuggestion', {'received': data});
//   });
//   client.on('disconnect', () => console.log('disconnected'))
// })

const port = 1128;

server.listen(port, function() {
  console.log(`listening on port ${port}`);
});

