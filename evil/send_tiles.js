const send_template = require('./__send_template').ref;

exports.generic = (recipientId, elements) => {
  send_template(recipientId, 'generic', elements);
};
exports.list = (recipientId, elements) => {
  send_template(recipientId, 'list', elements);
};