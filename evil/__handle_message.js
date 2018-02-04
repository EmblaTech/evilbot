exports.ref = function (event, flow, config) {
  var senderID = event.sender.id;
  var recipientID = event.recipient.id;
  var timeOfMessage = event.timestamp;
  
  var message = event.message || {};
  var quick_reply = message.quick_reply || {};
  var postback = event.postback || {};
  var messageId = message.mid;
  var messageText = message.text;
  var messageAttachments = message.attachments;
  
  var payload = quick_reply.payload || postback.payload;
  
  // console.log("Received message for user %d and page %d at %d with message:", 
  //   senderID, recipientID, timeOfMessage);
  
  if (config.log_events) {
    console.log('RECEIVED', JSON.stringify(message));
  }
  
  if (!payload && messageText) {
    if (flow.on_message)
      var context = {
        message: messageText, //text
        user_id: senderID,
        event: event,
      };
      if (config.enable_nlp) {
          context.meaning = message.nlp.entities || {};
      }
      flow.on_message(context);
    console.log(`- ${senderID}: "${messageText}" @${timeOfMessage}`);
  } else if (payload) {
    if (flow.on_get_started && payload==config.get_started_payload) {
      flow.on_get_started({
        user_id: senderID,
        event: event,
      });
    } else if (flow.on_postback) {
      flow.on_postback({
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
