const sendToAPI = require('../../__api_send').ref;

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