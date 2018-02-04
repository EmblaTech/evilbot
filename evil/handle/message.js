const sendText = require('../util/send/text').ref;

const case_get_started = require('./logic/case-get_started');

exports.ref = function (event) {
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
    var msg = messageText.toLowerCase();
    // sendText(senderID, `Thanks for saying "${msg}"`);
    if (msg.toLowerCase()==='hi') {
      case_get_started.handle(senderID);
    }
  } else if (payload) {
    if (payload==='CUSTOMER_INTRO') {
      sendText(senderID, "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.");
      sendText(senderID, "Lorem ipsum dolor sit amet. Customer intro.");
    } else if (payload==='MERCHANT_INTRO') {
      sendText(senderID, "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.");
      sendText(senderID, "Lorem ipsum dolor sit amet. Merchant intro.");
    // } else if (payload==='CONFUSED_INTRO') {
    } 
    // else if (payload==='CALL_US') {
    //   case_call_us.send(senderID);
    // }
  } else if (messageAttachments) {
    sendText(senderID, `Thanks for sending that attachment`);
  } else {
    sendText(senderID, `Thanks for doing *that thing*`);
  }

}
