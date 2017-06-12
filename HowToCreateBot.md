# 環境の作成の仕方
1. 最新のnodeとnpmを用意する．　[Macの場合](https://johnpapa.net/how-to-use-npm-global-without-sudo-on-osx/)　実行には`sudo`を入れた方が確実
2. 上田のリポジトリからプロジェクトをクローンする
```
git clone https://github.com/Ikuyadeu/PR-AnalyzeBot.git
```
3. [GitHub Apps](https://github.com/settings/apps/new)に登録する．
    3.1 `GitHub App name`:好きな名前（後から帰れる）
    * `Homepage URL`:http://localhost:1410
    * `User authorization callback URL`:http://localhost:1410/auth.callback
    * `Webhook URL`:https://example.com(すぐ編集する)
    * `Webhook secret`:development
    * `Permissions`:全部チェック（Single fileは`.github/*`）
    * 最後の`where can this GitHub App be installed?`は`Only on this account` のまま
4. ページの一番下に行って`Generate private key`ボタンを押してxxx.pemをダウンロードして，プロジェクトのルートに置く
6. プロジェクトのルートに`.env`というファイルを作る
中身は
```
APP_ID=作ったページの右上にある４桁の数字
WEBHOOK_SECRET=development

# Uncomment this to get verbose logging
LOG_LEVEL=info

# Subdomain to use for localtunnel server. Defaults to your local username.
SUBDOMAIN=適当な英数字(記号は使えない)
```
7. プロジェクトのルートで`$ npm install`を実行
8. プロジェクトのルートで`$ npm start`を実行
    * `https://xxxx.localtunnel.me/`というのが表示されるのでGitHub　AppsのWebhookをそれに書き換える．
9. もう一度`$ npm start`
9. Appsページの右上の`install`ボタンで自分のプロジェクトにインストールする．
10. 適当にissueを作る
11. うまく動いたら成功