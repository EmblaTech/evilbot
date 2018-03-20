exports.send = function(userId, msg) { 
  return this.$.send.text(userId, msg)
};

exports.sendTiles = function(userId, elements) {
  return this.$.send.tiles.generic(userId, elements)
};