const request = require('request');
const Observable = require('rxjs/Observable').Observable

var sendMessage = (messageData, on_success, on_error) => {
  
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
      
    } else {
      console.error("Unable to send message.");
      console.error(error, response.statusCode);
      
      if (on_error) on_error(error, body, response);
    
    }
  });
  
}

exports.ref = sendMessage;

exports.refObservable = (messageData) => Observable.create((observer) => {
  console.log('observing:', messageData)
  sendMessage(messageData, (...args) => {
    observer.next(...args)
    observer.complete()
    // console.log('--complete')
  }, (...args) => {
    observer.error(...args)
  })
  
  return () => {
    // console.log('--teardown')
    messageData = null
  } // <-- cleanup stuff goes in here
})