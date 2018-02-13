const startup = require('./startup').ref

exports.serve = startup({
  configs: { log_events: true }
})