#!/usr/bin/env node

const fs = require('fs');
const submissions = require('../submissions.json');
let speakers = [];

for (const v in submissions) {
  const src = submissions[v];
  if (src.state === "accepted" && src.confirmed === true) {
    const data = {
      id: (src.twitter === '' ? src.email.split('@')[0] : src.twitter),
      name: src.name,
      avatar: src.avatar,
      bio: src.bio,
      twitter: src.twitter,
      url: src.url,
      organization: src.organization,
      title: src.title,
      abstract: src.abstract,
      tags: src.tags
    };
    speakers.push(data);
  }
}

fs.writeFileSync('./data/speakers.json', JSON.stringify(speakers));
