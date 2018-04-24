var sfdx = require('sfdx-node');
var express = require('express');
var Promise = require('promise');
var path = require('path');
var socketIO =  require('socket.io');

const PORT = process.env.PORT || 3000;

const server = express()
  .use((req, res) => res.sendFile(__dirname + '/index.html'));
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

const io = socketIO(server);
  
io.on('connection', (socket) => {
  console.log('Client connected');
   socket.on('AuthMyOrg', function()
      {
              sfdx.auth.webLogin({  
          })
      });

});  
  
