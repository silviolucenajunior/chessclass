var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.writeHead(200, {
      'Content-Type': 'text/html'
   });
   res.end('Congratulations, this page is the socket server running!');
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('move', function(msg){
    console.log('move: ' + msg);
    io.emit('move', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
