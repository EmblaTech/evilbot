const evil = require('./evil/startup').ref;
const send_text = require('./evil/send_text').ref;

const static_path = __dirname + '/views/index.html';

evil({
  flow: {
    on_message: (x) => { // 'message', 'sender_id', {_message}
      send_text(x.user_id, 'Got your text');
    },
    on_postback: (x) => { // 'payload', 'sender_id', {_message}
      send_text(x.user_id, 'Got your quick reply');
    },
    on_attachment: (x) => { // [attachment], 'sender_id', {_message}
      send_text(x.user_id, 'Got your attachment');
    },
    on_other: (x) => {}, // 'sender_id', {_message}
  },
  static_path: static_path, // string
  port: process.env.PORT, // num
  hookname: 'webhook', // default: 'webhook'
});