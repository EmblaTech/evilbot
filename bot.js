const evil = require('./evil/startup').ref;

const send_text = require('./evil/send_text').ref;
const send_attachment = require('./evil/send_attachment').ref;

// evil({
//   flow: {
//     on_message: (x) => {
//       send_text(x.user_id, 'Got your text');
//     },
//   }
// });

evil({
  flow: {
    on_message: (x) => {
      send_text(x.user_id, 'Hello!!!');
    },
    on_attachment: (x) => {
      send_attachment(x.user_id, 'image', {url: 'https://cdn.glitch.com/5655c833-6ba1-4cae-a038-c785bce441e8%2Fsixteen.png?1517748298720', is_reusable: true},);
    }
  }
})