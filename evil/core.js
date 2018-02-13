const startup = require('./startup').ref

module.exports = (_) => {
  const configs = _.configs || {}
  
  startup({
    configs: configs
  })
  
  const services = _.services || []
  
  services.forEach(_ => _.inject({
    services: services.filter(service_ref => _ != service_ref),
    factories: {
      button: require('./model_button').refs,
      tile: require('./model_tile').refs,
      action: require('./model_action').refs
    },
    send: {
      text: require('./send_text'),
      tiles: require('./send_tiles').refs,
      attachment: require('./send_attachment')
    }
  }))
  
  const interactions = _.interactions || []
  
  interactions.forEach(_ => _.inject({
    listenTo: {
      getStarted: (f) => [].push(f),
      text: (f) => [].push(f),
      quickReply: (f) => [].push(f),
      postback: (f) => [].push(f),
      attachment: (f) => [].push(f),
      other: (f) => [].push(f)
    }
  }))
}