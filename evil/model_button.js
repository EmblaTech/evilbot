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

var callCons = (title, num) => {return {
  "type":"phone_number",
  "title":title,
  "payload":num,
}}

exports = {
  url: urlCons,
  postback: postbackCons,
  call: callCons,
  
  ref: postbackCons,
}