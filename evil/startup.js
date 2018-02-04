exports.ref = function(flow) {
// static stuff
  var express = require('express');
  var app = express();

  app.use(express.static('public'));

  app.get("/", function (request, response) {
    response.sendFile(__dirname + '/views/index.html');
  });

  // dynamic stuff

  var bodyParser = require('body-parser');

  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())

  const registerWebhook = require('./__webhook_register').ref;
  const listenToWebhook = require('./__webhook_listener').ref;
  
  registerWebhook(app,);
  listenToWebhook(app, flow);

  // up the server

  var listener = app.listen(process.env.PORT || 3000, function () {
    console.log('Your app is listening on port ' + listener.address().port);
  });
}