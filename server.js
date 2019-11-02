const express = require("express")
const app = express()
var http = require('http').createServer(app);
var io = require('socket.io')(http);
const port = 3000

app.use(express.static('public'))

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
      io.emit('chat message', msg);
    });
  });

http.listen(port, ()=> {
    console.log("You are now connected to Port " + port)
})