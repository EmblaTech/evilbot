var evil = require('./evil/startup').ref;

evil({
  on_message: (x) => {},
  on_postback: (x) => {},
  on_attachment: (x) => {},
  on_other: (x) => {},
});