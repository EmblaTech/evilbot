const evil = require('./evil/startup').ref;
const send_text = require('./evil/send_text').ref;

const static_path = __dirname + '/views/index.html';

evil({
  flow: {
    on_message: (x) => {
      send_text(x.user_id, 'Got your text');
    },
    on_postback: (x) => {
      send_text(x.user_id, 'Got your quick reply');
    },
    on_attachment: (x) => {
      send_text(x.user_id, 'Got your attachment');
    },
    on_other: (x) => {},
  },
  static_path: static_path,
  port: process.env.PORT,
});