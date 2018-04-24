var sfdx = require('sfdx-node');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var Promise = require('promise');
var path = require('path');

const PORT = process.env.PORT || 3000;

app.get('/', function(req, res) {
   res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) { 

	 console.log('Client connected...');
	  
      socket.on('AuthMyOrg', function()
      {
              sfdx.auth.webLogin({  
          })
          .then(function(Authmyorg){
              console.log('Authorized org');
              io.emit('Authmyorg',Authmyorg);
          });
      });


});

http.listen(3000, function() {
   console.log('listening on *:3000');
});