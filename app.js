/*jshint node:true*/

//------------------------------------------------------------------------------
// node.js requirements
//------------------------------------------------------------------------------

// This application uses express as it's web server
// for more info, see: http://expressjs.com
var express 		    = require('express');


// create a new express server
var app = express();

// serve the files out of ./public as our main files && use bodyParser to read json
app.use(express.static(__dirname + '/'));

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});

