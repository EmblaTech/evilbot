const send_template = require('./__send_template').ref;

exports.generic = (recipientId, elements, on_success, on_error) => {
  return send_template(recipientId, 'generic', elements, on_success, on_error);
};
exports.list = (recipientId, elements, on_success, on_error) => {
  return send_template(recipientId, 'list', elements, on_success, on_error);
};
exports.media = (recipientId, elements, on_success, on_error) => {
  return send_template(recipientId, 'media', elements, on_success, on_error);
};

exports.refs = exports