const app = require('./evil/core')

const SendService = {
  send: function (userId, msg) { 
    return this.$.send.text(userId, msg)
  }
}

const EchoHandler = {
  setup: function () { 
    this.$.listenTo.text(_ => {
      SendService.send(_.userId, _.message).subscribe()
    })
  }
}

app({
  interactions: [
    EchoHandler,
  ],
  services: [
    SendService,
  ]
})