const startup = require('./startup').ref

module.exports = (_) => {
  const configs = _.configs || {}
  
  const flowSubscribers = {
    on_get_started: [],
    on_postback: [],
    on_message: [],
    on_attachment: [],
    on_other: []
  }
  const bindSubscribers = (idx) => 
    (_) => flowSubscribers[idx].forEach(subs => subs(_))
  
  const flow = {
    on_get_started: (_) => bindSubscribers('on_get_started'),
    on_postback: bindSubscribers('on_postback'),
    on_message: bindSubscribers('on_message'),
    on_attachment: bindSubscribers('on_attachment'),
    on_other: bindSubscribers('on_other')
  }
  
  startup({
    configs: configs,
    flow: flow
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
      getStarted: (f) => flowSubscribers.on_get_started.push(f),
      text: (f) => flowSubscribers.on_message.push(f),
      postback: (f) => flowSubscribers.on_postback.push(f),
      attachment: (f) => flowSubscribers.on_attachment.push(f),
      other: (f) => flowSubscribers.on_other.push(f)
    }
  }))
}