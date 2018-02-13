const startup = require('./startup').ref

module.exports = (_) => {
  startup({
    configs: _.configs || {},
    flow: _.servic
  })
}