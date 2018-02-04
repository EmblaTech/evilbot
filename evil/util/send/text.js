const sendToAPI = require('../../fb-api/send').ref;

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