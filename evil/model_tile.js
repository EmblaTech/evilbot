var tileCons = (title, subtitle, image_url, default_action, buttons) => {return {
  title: title,
  subtitle: subtitle,
  image_url: image_url,
  default_action: default_action,
  buttons: buttons,
}}

exports.tile = tileCons;