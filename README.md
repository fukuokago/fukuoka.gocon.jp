fukuoka.gocon.jp
==

This is SPA by Nuxt.js for Go Conference'19 Summer in Fukuoka.

Build Setup
--

```sh
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build and deploy to Google Cloud Storage
$ npm run dist
```

Style Guide
--

https://jp.vuejs.org/v2/style-guide/

Update speakers data
--

1. Download json from https://www.papercall.io/cfps/1911/submissions
1. `mv ~/Downloads/Go\ Conference\'19\ in\ Fukuoka,\ Japan\ Submissions.json ./submissions.json`
1. `./bin/speakers.js`
1. `cat data/speakers.json | jq '.' > speakers.json`
1. `mv speakers.json ./data`
