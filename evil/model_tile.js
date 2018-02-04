var tileCons = (url, height) => {return {
  title: '',
  subtitle: '',
  image_url: '',
  default_action: UrlAction('https://medium.com/emblatech'),
  buttons: [PostbackButton('Callback','CALLBACK_1')]
}}

exports = {
  tile: tileCons,
  
  ref: tileCons,
}