const express = require('express');
const http = require("http");
let app = express();
let routes = require('./routes/routes.js');
let db = require('../database/index.js');
let model = require('../database/models/model.js')
let bodyParser = require('body-parser')
const server = http.createServer(app);
const io = require('socket.io')(server);

app.use(express.static(__dirname + '/../client/dist'), bodyParser());

app.use('/api', routes)

let groupName = "";

function changeGroup(newGroupName) {
  groupName = newGroupName;
}

module.exports = changeGroup;

session = io.of(`/${groupName}`); 

//var nsp = io.of('/my-namespace');
//connet socket io session

session.on('connection', (client)=>{
  client.on('aSuggestion', function(data){
    console.log('SOCKETTTT', data);
    //below was client instead of session before 
    session.emit('showSuggestion', {'received': data});
    client.broadcast.emit('showSuggestion', {'received': data});
  });
  client.on('disconnect', () => console.log('disconnected'))
})

const port = 1128;

server.listen(port, function() {
  console.log(`listening on port ${port}`);
});

