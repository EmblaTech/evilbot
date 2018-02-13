const app = require('./evil/core')

const simpleService = {
  send: function(userId, msg) { 
    this.$.send.text(userId, msg) 
  }
};

const handleEcho = {
  setup: function(_) { 
    this.$.listenTo.text(x => {
      simpleService.send(x.userId, x.message)
    })
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