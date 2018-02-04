const sendToAPI = require('./__api_send').ref;

exports.ref = function (recipientId, template_type, elements, on_success, on_error) {
  var msgData = {
    recipient: {
      id: recipientId
    },
    message: {
      attachment: {
        type: 'template',
        payload: {
          template_type: template_type,
          elements: elements,
        }
      }
    }
  }
  
  sendToAPI(msgData, on_success, on_error);
}