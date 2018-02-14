const app = require('./evil/core')

const sendService = {
  send: function(userId, msg) { 
    return this.$.send.text(userId, msg)
  }, 
  sendTile: function(userId, elements) {
    return this.$.send.list(userId, elements)
  }
};

const simpleTileFactory = {
  createSimpleTile: function() { 
    return this.$.factories.tile.generic('My tile', 'Lorem ipsum dolor sit amet', image_url, default_action, buttons)
  }, 
  createSimpleButton: function(title, postback) {
    return this.$.factories.button.postback(title, postback)
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
          // const btn = this.$.
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