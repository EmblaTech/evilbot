const evil = require('./evil/startup').ref;
const send_text = require('./evil/send_text').ref;
const send_attachment = require('./evil/send_attachment').ref;

const url_banner = 'https://cdn.glitch.com/5655c833-6ba1-4cae-a038-c785bce441e8%2Fsixteen.png?1517748298720';

evil({
  flow: {
    on_get_started: (x) => { // { {'user_id', event} }
      send_text(x.user_id, 'Welcome!');
    },
    on_message: (x) => { // { 'message', 'sender_id', {meaning}, {event} }
      send_text(x.user_id, 'Got your text');
      
    },
    on_postback: (x) => { // { 'payload', 'sender_id', {event} }
      send_text(x.user_id, 'Got your quick reply');
    },
    on_attachment: (x) => { // { [attachment], 'sender_id', {event} }
      send_text(x.user_id, 'Got your attachment');
      send_attachment(x.user_id, {url: url_banner, is_reusable: true});
    },
    on_other: (x) => {}, // { 'sender_id', {event} }
  },
  configs: { // !!log_events, !!enable_nlp, 'get_started_payload'
    log_events: true,
    enable_nlp: true,
  },
});