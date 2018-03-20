exports = {
  createSimpleTile: function() { 
    return this.$.factories.tile.generic(
      'My tile', 
      'Lorem ipsum dolor sit amet', 
      'https://cdn.glitch.com/5655c833-6ba1-4cae-a038-c785bce441e8%2Fsixteen.png?1517748298720', 
      this.createSimpleAction(),
      [ 
        this.createSimpleButton('Tap me!', 'demo.simpleTile.buttons.1'), 
        this.createSimpleButton('Tap me!', 'demo.simpleTile.buttons.1'),
      ]
    )
  }, 
  createSimpleButton: function(title, id) {
    return this.$.factories.button.postback(title, id)
  },
  createSimpleAction: function() {
    return this.$.factories.action.url('https://medium.com/emblatech')
  }
};