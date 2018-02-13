const sendToAPI = require('./__api_send').refObservable;

exports.ref = function (recipientId, messageText, on_success, on_error) {
  
  // const subscribers = []
  // const errorHandlers = []
  
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: messageText
    }
  };
  
  console.log(messageData);

  return sendToAPI(messageData, on_success, on_error)
    // .bind(...args => {
    //   subscribers.forEach(f => f(...args))
    //   subscribers = null
    //   errorHandlers = null
    // }).error(...args => {
    //   errorHandlers.forEach(f =>
    //     f(...args)
    //   )
    //   errorHandlers = null
    //   subscribers = null
    // })
               
  // return {
  //   bind: (_) => subscribers.push(_),
  //   error: (_) => errorHandlers.push(_)
  // }
}