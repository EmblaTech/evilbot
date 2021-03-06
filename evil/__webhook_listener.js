const handleMessage = require('./__handle_message').ref;

exports.ref = function (app, flow, hookname, configs) {
  app.post('/'+hookname, function (req, res) {
    var data = req.body;

    if (data.object === 'page') {

      data.entry.forEach(function(entry) {
        var pageID = entry.id;
        var timeOfEvent = entry.time;

        // Iterate over each messaging event
        entry.messaging.forEach(function(event) {
          console.log('HANDLING A USER MASSAGE.', event);
          
          if (event.message) {
            if (event.message.is_echo || event.read) {
              console.log(`Reply "${event.message.text}" was READ by the user ${event.sender.id}`);
            } else {
              handleMessage(event, flow, configs);
            }
            
            if (event.message.quick_reply) {
              handleMessage(event, flow, configs);
            }
          } else if (event.postback) {
            handleMessage(event, flow, configs);
          } else if (event.delivery) {
            console.log(`A reply was DELIVERED to the user ${event.sender.id}`);
          } else {
            console.log("Webhook received unknown event: ", event);
          }
        });
      });

      res.sendStatus(200); // Request will timeout in 20s and Fb will keep trying to resend
    }
  });
}