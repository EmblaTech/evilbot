const sendToAPI = require('../../__api_send').ref;

exports.ref = function (recipientId, messageText) {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: messageText
    }
  };
  
  console.log(messageData);

  sendToAPI(messageData);
}