exports.ref = function(url, height) {
  var _height = height.toUpperCase();
  return {
    type: 'web_url',
    url: '',
    messenger_extensions: false,
    webview_height_ratio: 'COMPACT', // "<COMPACT | TALL | FULL>"
  };
}