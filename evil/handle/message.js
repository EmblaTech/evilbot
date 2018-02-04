exports.ref = function (event, flow) {
  var senderID = event.sender.id;
  var recipientID = event.recipient.id;
  var timeOfMessage = event.timestamp;
  
  var message = event.message;
  var messageId = message.mid;
  var messageText = message.text;
  var payload = (message.quick_reply)?message.quick_reply.payload:null;
  var messageAttachments = message.attachments;
  
  console.log("Received message for user %d and page %d at %d with message:", 
    senderID, recipientID, timeOfMessage);
  console.log(JSON.stringify(message));
  
  if (!payload && messageText) {
    flow.on_message({
      message: messageText, //text
      user_id: senderID,
      _message: message,
    });
  } else if (payload) {
    flow.on_payload({
      payload: payload, //text
      user_id: senderID,
      _message: message,
    });
  } else if (messageAttachments) {
    flow.on_attachment({
      attachment: {}, // ?
      user_id: senderID,
      _message: message,
    });
  } else {
    flow.on_other({
      data: {}, // ?
      user_id: senderID,
      _message: message,
    });
  }

}
