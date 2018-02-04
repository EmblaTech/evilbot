const evil = require('./evil/startup').ref;
const send_text = require('./evil/send_text').ref;

evil({
  flow: {
    on_get_started: (x) => {
      send_text(x.user_id, 'Welcome!');
    },
    on_message: (x) => { // { 'message', 'sender_id', {event} }
      send_text(x.user_id, 'Got your text');
    },
    on_postback: (x) => { // { 'payload', 'sender_id', {event} }
      send_text(x.user_id, 'Got your quick reply');
    },
    on_attachment: (x) => { // { [attachment], 'sender_id', {event} }
      send_text(x.user_id, 'Got your attachment');
    },
    on_other: (x) => {}, // { 'sender_id', {event} }
  },
});