var tileCons = (title, subtitle, image_url, default_action, buttons) => {return {
  title: title,
  subtitle: subtitle,
  image_url: image_url,
  default_action: default_action,
  buttons: buttons,
}}

var mediaTileCons = (type, page_name, item_numeric_id) => {
  if (type==) `https://business.facebook.com/${page_name}/videos/${item_numeric_id}`
}

exports.tile = tileCons;
exports.media_tile = mediaTileCons;