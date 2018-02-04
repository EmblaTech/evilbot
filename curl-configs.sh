## Setup Get_started postback payload
curl -X POST -H "Content-Type: application/json" -d '{
  "get_started": {"payload": "GET_STARTED"}
}' "https://graph.facebook.com/v2.6/me/messenger_profile?access_token=<PAGE_ACCESS_TOKEN>"
## { "result": "success" }

## Enable Built-in NLP from Messenger Platform
##   NOTE: Wit.ai is not configured in the Evil framework; 
##   but Messenger Platform supports it. You can use it 
##   by referring to Messenger Platform docs:
##   https://developers.facebook.com/docs/messenger-platform/built-in-nlp
curl -i -X POST \
  -d "access_token=$PAGE_APP_ACCESS_TOKEN" \
  "https://graph.facebook.com/v2.8/me/nlp_configs?nlp_enabled=$NLP_ENABLED"
