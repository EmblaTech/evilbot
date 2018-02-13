const $ = require('./evil/core')

const handleHi = {
  inject: (_) => handleHi.references = _,
  init: () => {
    
  }
}

$({
  interactions: [],
  services: [],
  configs: {}
});