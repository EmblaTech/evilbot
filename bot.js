const app = require('./evil/core')

const simpleService = {
  inject: function(_) { this.$ = _ },
  send: function(userId, msg) { 
    this.$.send.text(userId, msg) 
  }
};

app({
  interactions: [{
    inject: function(_) { this.$ = _ },
    init: function(_) { 
      this.$.listenTo.text(x => {
        simpleService.send(x.userId, x.message)
      })
    }
  }],
  services: [
    simpleService
  ],
  configs: {
    log_events: true,
    enable_nlp: true,
  }
});