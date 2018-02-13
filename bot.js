const app = require('./evil/core')

const simpleService = {
  inject: function(_) { this.$ = _ },
  send: function(userId, msg) { this.$.send. }
};

app({
  interactions: [{
    inject: function(_) { this.$ = _ },
    init: function(_) { this.$.listenTo.text(x => {
      simpleService.send(x.userId, x.message)
    })}
  }],
  services: [],
  configs: {}
});