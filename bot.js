const app = require('./evil/core')

const SimpleTileFactory = require('./tile-factory');

const SendService = {
  send: function(userId, msg) { 
    return this.$.send.text(userId, msg)
  }, 
  sendTiles: function(userId, elements) {
    return this.$.send.tiles.generic(userId, elements)
  }
};

const EchoHandler = {
  setup: function() 
  { 
    this.$.listenTo.text(_ => {
      SendService.send(_.userId, _.message).subscribe(() => {
        SendService.send(_.userId, `*${_.message.toUpperCase()}*`).subscribe()
      })
    })
  }
}

const HiHandler = {
  setup: function() 
  { 
    this.$.listenTo.text(_ => {
      if (_.message.toLowerCase()=='hi') {
        SendService.send(_.userId, "Hi!! :-)").subscribe(() => {
          SendService.sendTiles(_.userId, [ 
            SimpleTileFactory.createSimpleTile(), 
            SimpleTileFactory.createSimpleTile(),
            SimpleTileFactory.createSimpleTile(),
          ]).subscribe()
        })
      }
    })
  }
}

app({
  interactions: [
    EchoHandler,
    HiHandler
  ],
  services: [
    SendService,
    SimpleTileFactory
  ],
  configs: {
    enable_nlp: true
  }
});