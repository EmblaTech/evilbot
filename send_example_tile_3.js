const send_tiles = require('./evil/send_tiles').media;

const UrlAction = require('./evil/model_action').url;
const PostbackButton = require('./evil/model_button').postback;
const Tile = require('./evil/model_tile').tile;

const url_tile = 'https://cdn.glitch.com/5655c833-6ba1-4cae-a038-c785bce441e8%2Fbig-images01.jpg?1517751457881';

exports.ref = (x) => {
  
  var _tile = {
    media_type: 'image', // 'image', 'video'
    url: 'https://business.facebook.com/<PAGE_NAME>/videos/<NUMERIC_ID>'
  };
  
  send_tiles(
    x.user_id, 
    [
      _tile,
      _tile,
      _tile,
    ]
  );
  
};