exports.ref = function(options) {
  
  var flow = options.flow || {};
  var static_path = static_path || __dirname + '/views/index.html';
  var port = port || process.env.PORT || 3000;
  var hookname = options.hookname;
  var configs = options.config;
  
  // default configs
  
  if (!configs) {
    configs = {};
  }
  
  configs = {
    get_started_payload: configs.get_started_payload || 'GET_STARTED',
  };
      
  // Express
  
  var express = require('express');
  var app = express();
  
  // static stuff
  
  if (static_path)
  {
    app.use(express.static('public'));

    app.get("/", function (request, response) {
      response.sendFile(static_path);
    });
  }

  // dynamic stuff

  var bodyParser = require('body-parser');

  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())

  const registerWebhook = require('./__webhook_register').ref;
  const listenToWebhook = require('./__webhook_listener').ref;
  
  registerWebhook(app, hookname||'webhook');
  listenToWebhook(app, flow, hookname||'webhook', configs);

  // up the server

  var listener = app.listen(port, function () {
    console.log('Your app is listening on port ' + listener.address().port);
  });
  
}