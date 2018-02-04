const send_template = require('./__send_template').ref;

exports.ref = function (recipientId, elements) {
  send_template(recipientId, 'generic', elements);
}