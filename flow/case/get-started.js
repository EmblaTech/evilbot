const callSendAPI = require('../util/send-to-api');
const sendText = require('../../evil/util/send-text');

function handle (senderID) {
  
  sendText.send(senderID, 'Welcome to OnGoing!');
  sendText.send(senderID, 'OnGoing helps you find the best offers on restaurents, movies and events!');
  
  var messageData = {
    recipient: {
      id: senderID
    },
    message: {
      quick_replies:[
        {
          content_type: "text",
          title: "I'm a customer",
          payload: "CUSTOMER_INTRO"
        },
        {
          content_type: "text",
          title: "I'm a merchant",
          payload: "MERCHANT_INTRO"
        },
        {
          content_type: "text",
          title: "Confused? Call us!",
          payload: "CALL_US"
        }
      ],
      text: `So, how can we help?`
    }
  };  

  setTimeout(function () {
    callSendAPI.send(messageData);
  }, 2000);
}

exports.handle = handle;
