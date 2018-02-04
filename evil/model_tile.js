var tileCons = (title, subtitle, image_url, default_action, buttons) => {return {
  title: title,
  subtitle: subtitle,
  image_url: image_url,
  default_action: default_action,
  buttons: buttons,
}}

//// NOTE: Evil framework only supports media posted in Fb pages, not profiles
var mediaTileCons = (media_type, page_name, item_numeric_id, buttons) => {
  if (media_type=='video') {
    return {
      media_type: media_type,
      url: `https://business.facebook.com/${page_name}/videos/${item_numeric_id}`,
      buttons: buttons,
    };
  }
  else if (media_type=='image') {
    return {
      media_type: media_type,
      url: `https://business.facebook.com/${page_name}/photos/${item_numeric_id}`,
      buttons: buttons,
    };
  }
}

exports.generic = tileCons;
exports.media = mediaTileCons;