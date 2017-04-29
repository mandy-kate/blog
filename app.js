var express = require('express');
var path = require('path');
var app = express();

// Define the port to run on
app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname, 'public')));

// Listen for requests
// var server = app.listen(app.get('port'), function() {
//   var port = server.address().port;
//   console.log('Magic happens on port ' + port);
// });

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});