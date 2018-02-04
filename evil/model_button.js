var urlCons = (title, url) => {return {
  "type": "web_url",
  "url": url,
  "title": title,
}}

var postbackCons = (title, id) => {return {
  "type": "postback",
  "title": title,
  "payload": id,
}}

exports.ref = {
  url: urlCons,
  postback: postbackCons,
}

exports.url = urlCons;
exports.postback = postbackCons;