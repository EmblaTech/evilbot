const request = require('request');

var sendMessage = (messageData, on_success, on_error) => {
  
  // const subscribers = []
  // const errorHandlers = []
  
  request({
    uri: 'https://graph.facebook.com/v2.6/me/messages',
    qs: { access_token: process.env.PAGE_ACCESS_TOKEN, method: 'POST' },
    method: 'POST',
    json: messageData

  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      
      var recipientId = body.recipient_id;
      var messageId = body.message_id;
      
      console.log("Successfully SENT generic message with id %s to recipient %s", messageId, recipientId);
      
      if (on_success) on_success(body, response);
      
      // subscribers.forEach(_ => _(body,response))
      // subscribers = null
      // errorHandlers = null
      
    } else {
      console.error("Unable to send message.");
      console.error(error, response.statusCode);
      
      if (on_error) on_error(error, body, response);
    
      // errorHandlers.forEach(_ => _(error, response.statusCode))
      // subscribers = null
      // errorHandlers = null
    }
  });
  
  // return {
  //   bind: (_) => subscribers.push(_),
  //   error: (_) => errorHandlers.push(_)
  // }
}

exports.ref = sendMessage;