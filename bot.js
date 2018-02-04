const evil = require('./evil/startup').ref;

const static_path = __dirname + '/views/index.html';

evil({
  flow: {
    on_message: (x) => {},
    on_postback: (x) => {},
    on_attachment: (x) => {},
    on_other: (x) => {},
  },
  static_path: static_path,
  port: process.env.PORT,
});