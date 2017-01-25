# slack-botつくりゅー!!

- responseの編集はresponse.js

- 環境変数に以下を設定してappをrunすれば動く
    - SLACKBOT_TOKEN
    - SLACKBOT_USERNAME
    - SLACKBOT_DEFAULTCHANNEL(現状SLACKBOT_CHANNELでも動くけどできれば修正したい)
    - SLACKBOT_DEBUGCHANNEL（任意,指定なしの場合はSLACKBOT_DEFAULTCHANNEL）
    - SlACKBOT_RESPONCE_AUTHORITY("publicもしくはprivate",指定なしの場合は"private")
