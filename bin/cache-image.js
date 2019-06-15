#!/usr/bin/env node

const fs = require('fs');
const req = require('request');
const crypto = require('crypto');
const data = require('../static/eat/data.json');
const execSync = require('child_process').execSync;

const rootPath = '/eat/cache/';
const cachePath = `./static${rootPath}`;
fs.mkdirSync(cachePath);

const sha1 = (s) => {
  const hash = crypto.createHash('sha1');
  hash.update(s);
  return hash.digest('hex')
};

const ext = (s) => {
  const ext = s.split('/').pop().split('.').pop();
  if (typeof ext === 'undefined' || ext.length > 4) {
    return 'jpg';
  }
  return ext;
};

const download = (uri, cb) => {
  req.head(uri, (err, res, body) => {
    req(uri).pipe(
      fs.createWriteStream(`${cachePath}${sha1(uri)}.${ext(uri)}`)
    ).on('close', cb);
  });
};

let counter = 0;
let last = 0;

for (const genre in data) {
  for (const v in data[genre]) { last++; }
}

for (const genre in data) {
  for (const v in data[genre]) {
    const n = data[genre][v].content.title;
    const i = data[genre][v].content.image;
    const p = `${rootPath}${sha1(i)}.${ext(i)}`;
    data[genre][v].content.cache = p;
    download(i, () => {
      counter++;
      console.log(`done: ${n}, path: ${p}`)
      if (counter === last) {
        console.log('finish!');
        fs.writeFileSync('./data.json', JSON.stringify(data));
        execSync("cat data.json | jq '.' > ./static/eat/data.json && rm data.json");
      }
    });
  }
}
