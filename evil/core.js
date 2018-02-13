const startup = require('./startup').ref

module.exports = (_) => {
  const configs = _.configs || {}
  
  startup({
    configs: configs
  })
  
  const services = _.services || []
  
  services.forEach(_ => _({
    services: services.filter(service_ref => _ != service_ref),
    factories: {
      button: require('./model_button'),
      tile: require('./model_tile'),
      action: require('./model_action')
    },
    send: {
      text: require('./send_text'),
      tiles: require('./send_tiles'),
      attachment: require('./send_attachment')
    }
  }))
}