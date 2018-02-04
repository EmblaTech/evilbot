const handleMessage = require('./__handle_message').ref;

exports.ref = function (app, flow, hookname) {
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
              handleMessage(event, flow);
            }
            
            if (event.message.quick_reply) {
              handleMessage(event, flow);
            }
          } else if (event.postback) {
            if ()
            handleMessage(event, flow);
            // TODO: ^^^ check what to do with this
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