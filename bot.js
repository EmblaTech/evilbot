const app = require('./evil/core')

const simpleService = {
  send: function(userId, msg) { 
    return this.$.send.text(userId, msg)
  }
};

const handleEcho = {
  setup: function() { 
    this.$.listenTo.text(_ => {
      simpleService.send(_.userId, _.message).subscribe(() => {
        simpleService.send(_.userId, `*${_.message.toUpperCase()}*`).subscribe()
      })
    })
  }
}

const handleHi = {
  setup: function() { 
    this.$.listenTo.text(_ => {
      
      if (_.message.toLowerCase()=='hi') {
        
        simpleService.send(_.userId, "Hi!! :-)").subscribe()
      
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
    simpleService,
  ],
  configs: {
    log_events: true,
    enable_nlp: true,
  }
});