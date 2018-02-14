const app = require('./evil/core')

const SendService = {
  send: function(userId, msg) { 
    return this.$.send.text(userId, msg)
  }, 
  sendTiles: function(userId, elements) {
    return this.$.send.tiles.generic(userId, elements)
  }
};

const SimpleTileFactory = {
  createSimpleTile: function() { 
    return this.$.factories.tile.generic(
      'My tile', 
      'Lorem ipsum dolor sit amet', 
      'https://cdn.glitch.com/5655c833-6ba1-4cae-a038-c785bce441e8%2Fsixteen.png?1517748298720', 
      this.createSimpleAction(),
      [ 
        this.createSimpleButton('Tap me!', 'demo.simpleTile.buttons.1'), 
        this.createSimpleButton('Tap me!', 'demo.simpleTile.buttons.1'),
      ]
    )
  }, 
  createSimpleButton: function(title, id) {
    return this.$.factories.button.postback(title, id)
  },
  createSimpleAction: function() {
    return this.$.factories.action.url('https://medium.com/emblatech')
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