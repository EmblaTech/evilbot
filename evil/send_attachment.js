const sendToAPI = require('./__api_send').ref;

exports.ref = function (recipientId, type, payload, on_success, on_error) {
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
  
  return sendToAPI(msgData, on_success, on_error);
}