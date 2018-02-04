const sendAttachment = require("./../util/send-attachment");

exports.send = function (recipientId) {
  sendAttachment(recipientId, {
    "template_type":"button",
    "text":"Need further assistance? Talk to a representative",
    "buttons":[
      {
        "type":"phone_number",
        "title":"Call us at 0770601922",
        "payload":"+94770601922"
      }
    ]
  });
}