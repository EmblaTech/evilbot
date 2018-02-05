const evil = require('./evil/startup').ref;

const send_text = require('./evil/send_text').ref;

// evil({
//   flow: {
//     on_message: (x) => {
//       send_text(x.user_id, 'Got your text');
//     },
//   }
// });

evil({
  flow: {
    on_message: (x) => {
      send_text(x.user_id, 'Hello!!!');
    }
  }
})