var urlCons = (url, height) => {
  height = height || 'COMPACT';
  height = height.toUpperCase();

  return {
    type: 'web_url',
    url: url,
    messenger_extensions: false,
    webview_height_ratio: height, // "<COMPACT | TALL | FULL>"
  };
}

exports.url = urlCons;

exports.refs = {
  url: urlCons
}