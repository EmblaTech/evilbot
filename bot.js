const app = require('./evil/core')

const simpleService = {
  send: function(userId, msg) { 
    return this.$.send.text(userId, msg)
  }
};

const handleEcho = {
  setup: function(_) { 
    this.$.listenTo.text(x => {
      simpleService.send(x.userId, x.message).subscribe(() => {
        simpleService.send(x.userId, `*${x.message.toUpperCase()}*`).subscribe()
      })
    })
  }
}

const handleHi = {
  setup: function(_) { 
    if (_.message==) {
      this.$.listenTo.text(x => {
      simpleService.send(x.userId, x.message).subscribe(() => {
        simpleService.send(x.userId, `*${x.message.toUpperCase()}*`).subscribe()
      })
    })
    }
  }
}

app({
  interactions: [
    handleEcho,
  ],
  services: [
    simpleService,
  ],
  configs: {
    log_events: true,
    enable_nlp: true,
  }
});