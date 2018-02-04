const sendToAPI = require('./__api_send').ref;

exports.ref = function (recipientId, type, payload) {
  var msgData = {
    recipient: {
      id: recipientId
    },
    message: {
      attachment: {
        type: type,
        payload: payload // { 'url', !!is_reusable }
      }
    }
  }
  
  sendToAPI(msgData);
}