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

io.on('connection', (client)=>{
  client.on('aSuggestion', function(data){
    console.log('SOCKETTTT', data);
    client.emit('showSuggestion', {'received': data});
    client.broadcast.emit('showSuggestion', {'received': data});
  });
  client.on('disconnect', () => console.log('disconnected'))
})

const port = 1128;

server.listen(port, function() {
  console.log(`listening on port ${port}`);
});

