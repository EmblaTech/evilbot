const request = require('request');

var sendMessage = (messageData, on_success, on_error) => {
  return request({
    uri: 'https://graph.facebook.com/v2.6/me/messages',
    qs: { access_token: process.env.PAGE_ACCESS_TOKEN, method: 'POST' },
    method: 'POST',
    json: messageData

  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      
      var recipientId = body.recipient_id;
      var messageId = body.message_id;
      
      if (on_success) on_success(response, body);
      
      console.log("Successfully SENT generic message with id %s to recipient %s", messageId, recipientId);
      
    } else {
      
      if (on_error) on_error(error, response, body);
      
      console.error("Unable to send message.");
      console.error(error, response.statusCode);
    
    }
  });  
}

exports.ref = sendMessage;