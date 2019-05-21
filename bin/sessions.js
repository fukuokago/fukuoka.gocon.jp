#!/usr/bin/env node

const fs = require('fs');
const submissions = require('../submissions.json');
let sessions = [];

for (const v in submissions) {
  const src = submissions[v];
  if (src.state === "accepted" && src.confirmed === true) {
    const data = {
      sponsor: (src.rating === 0),
      start: "",
      end: "",
      id: (src.twitter === '' ? src.email.split('@')[0] : src.twitter),
      type: (src.talk_format.match(/20 min/) ? 'short' : 'long')
    };
    sessions.push(data);
  }
}

fs.writeFileSync('./data/sessions.json', JSON.stringify(sessions));
