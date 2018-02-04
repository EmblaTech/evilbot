const sendToAPI = require('./__api_send').ref;

exports.ref = function (recipientId, messageText, on_success, on_error) {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: messageText
    }
  };
  
  console.log(messageData);

  sendToAPI(messageData, on_success, on_error);
}