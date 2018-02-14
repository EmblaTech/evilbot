const app = require('./evil/core')

const sendService = {
  send: function(userId, msg) { 
    return this.$.send.text(userId, msg)
  }, 
  sendTiles: function(userId, elements) {
    return this.$.send.tiles.list(userId, elements)
  }
};

const simpleTileFactory = {
  createSimpleTile: function() { 
    return this.$.factories.tile.generic(
      'My tile', 
      'Lorem ipsum dolor sit amet', 
      'https://cdn.glitch.com/5655c833-6ba1-4cae-a038-c785bce441e8%2Fsixteen.png?1517748298720', 
      null, 
      [ 
        this.createSimpleButton('Tap me!', 'demo.simpleTile.buttons.1'), 
        this.createSimpleButton('Tap me!', 'demo.simpleTile.buttons.1'),
      ]
    )
  }, 
  createSimpleButton: function(title, id) {
    return this.$.factories.button.postback(title, id)
  }
};

const handleEcho = {
  setup: function() 
  { 
    this.$.listenTo.text(_ => {
      sendService.send(_.userId, _.message).subscribe(() => {
        sendService.send(_.userId, `*${_.message.toUpperCase()}*`).subscribe()
      })
    })
  }
}

const handleHi = {
  setup: function() 
  { 
    this.$.listenTo.text(_ => {
      if (_.message.toLowerCase()=='hi') {
        sendService.send(_.userId, "Hi!! :-)").subscribe(() => {
          sendService.sendTiles(_.userId, [ 
            simpleTileFactory.createSimpleTile(), 
            simpleTileFactory.createSimpleTile() 
          ]).subscribe()
        })
      }
    })
  }
}

app({
  interactions: [
    handleEcho,
    handleHi,
  ],
  services: [
    sendService,
    simpleTileFactory,
  ],
  configs: {
    log_events: true,
    enable_nlp: true,
  }
});