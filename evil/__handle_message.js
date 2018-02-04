exports.ref = function (event, flow) {
  var senderID = event.sender.id;
  var recipientID = event.recipient.id;
  var timeOfMessage = event.timestamp;
  
  var message = event.message;
  var postback = event.postback;
  var get_started = event.get_started;
  var messageId = message.mid;
  var messageText = message.text;
  var messageAttachments = message.attachments;
  
  var payload;
  if (message.quick_reply) {
    payload = message.quick_reply.payload
  } else if (get_started) {
    payload = {get_started: get_started};
  } else {
    payload = postback;
  }
  
  // console.log("Received message for user %d and page %d at %d with message:", 
  //   senderID, recipientID, timeOfMessage);
  // console.log(JSON.stringify(message));
  
  if (!payload && messageText) {
    if (flow.on_message)
      flow.on_message({
        message: messageText, //text
        user_id: senderID,
        event: event,
      });
    console.log(`- ${senderID}: "${messageText}" @${timeOfMessage}`);
  } else if (payload) {
    if (flow.on_get_started && payload.get_started) {
      flow.on_get_started({
        user_id: senderID,
        event: event,
      });
    }
    if (flow.on_payload) {
      flow.on_payload({
        payload: payload, //text
        user_id: senderID,
        event: event,
      });
    }
    console.log(`- ${senderID}: payload=${payload} @${timeOfMessage}`);
  } else if (messageAttachments) {
    if (flow.on_attachment)
      flow.on_attachment({
        attachment: messageAttachments, // ?
        user_id: senderID,
        event: event,
      });
    console.log(`- ${senderID}: {attachment} @${timeOfMessage}`);
  } else {
    if (flow.on_other)
      flow.on_other({
        user_id: senderID,
        event: event,
      });
    console.log(`- ${senderID}: {unknown} @${timeOfMessage}`);
  }

}
