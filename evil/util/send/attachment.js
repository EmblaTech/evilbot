const sendToAPI = require('./send-to-api').ref;

exports.ref = function (recipientId, payload) {
  var msgData = {
    recipient: {
      id: recipientId
    },
    message: {
      attachment: {
        payload: payload
      }
    }
  }
  
  sendToAPI.sendToAPI(msgData);
}