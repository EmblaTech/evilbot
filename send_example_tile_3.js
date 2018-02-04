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
      PostbackButton('Callback','CALLBACK_1'), 
    ]
  );
  
  send_tiles(
    x.user_id, 
    [
      _tile,
    ],
    null,
    (body, response)=>console.log(response)
  );
  
};