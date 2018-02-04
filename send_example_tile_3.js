const send_tiles = require('./evil/send_tiles').media;

const UrlAction = require('./evil/model_action').url;
const PostbackButton = require('./evil/model_button').postback;
const MediaTile = require('./evil/model_tile').media;

exports.ref = (x) => {
  
  var _tile = MediaTile(
    'image', 
    'evilbot', 
    '2180560548837849', 
    [
      PostbackButton('Custom callback 1','CALLBACK_1'), 
    ]
  );
  
  send_tiles(
    x.user_id, 
    [
      _tile,
      _tile,
      _tile,
    ],
    null,
    (body)=>con
  );
  
};