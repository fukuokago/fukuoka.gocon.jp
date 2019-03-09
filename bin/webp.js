#!/usr/bin/env node

const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

imagemin(['assets/img/*.{jpg,png}'], 'static/img', {
  use: [
    imageminWebp({quality: 50})
  ]
}).then(() => {
  console.log('Images optimized with WebP');
});
