const evil = require('./evil/startup').ref;

const send_text = require('./evil/send_text').ref;
const send_attachment = require('./evil/send_attachment').ref;
const send_tiles = require('./evil/send_tiles').ref;

const UrlAction = require('./evil/model_action').url;
const PostbackButton = require('./evil/model_button').postback;
const Tile = require('./evil/model_tile').ref;

const url_banner = 'https://cdn.glitch.com/5655c833-6ba1-4cae-a038-c785bce441e8%2Fsixteen.png?1517748298720';
const url_tile = 'https://cdn.glitch.com/5655c833-6ba1-4cae-a038-c785bce441e8%2Fbig-images01.jpg?1517751457881';

evil({
  flow: {
    on_get_started: (x) => { // { {'user_id', event} }
      send_text(x.user_id, 'Welcome!');
    },
    on_message: (x) => { // { 'message', 'sender_id', {meaning}, {event} }
      send_text(x.user_id, 'Got your text');
      if (x.message=='generic') {
        send_tiles(x.user_id, [
          Tile(
            'Tile', 
            'This is a custom tile/template.', 
            url_tile, 
            UrlAction('https://medium.com/emblatech'), 
            [
              PostbackButton('Callback','CALLBACK_1'),
            ]
          ),
        ]);
      }
    },
    on_postback: (x) => { // { 'payload', 'sender_id', {event} }
      send_text(x.user_id, 'Got your quick reply');
    },
    on_attachment: (x) => { // { [attachment], 'sender_id', {event} }
      send_text(x.user_id, 'Got your attachment. Here\'s one of my own:');
      send_attachment(x.user_id, 'image', {url: url_banner, is_reusable: true});
    },
    on_other: (x) => {}, // { 'sender_id', {event} }
  },
  configs: { // !!log_events, !!enable_nlp, 'get_started_payload'
    log_events: true,
    enable_nlp: true,
  },
});