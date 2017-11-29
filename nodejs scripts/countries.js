const fs = require('fs');
const gm = require('gm');
const path = require('path');
const countries = require('./config/countries');

// if (!fs.exists('dist')) {
//   fs.mkdir('dist', (error) => {
//     if (!fs.exists('dist/flags')) {
//       fs.mkdir('dist/flags', (error) => { console.log(error) });
//     }
//   });
// }

// fs.readdir('shared/flags', (err, files) => {
//   files.forEach((file) => {
//     if (path.extname(file) === '.png') {
//       gm(`shared/flags/${file}`)
//         .resize(30)
//         .write(`dist/flags/${file}`, (error) => {})
//     }
//   });
// });

for (let coutryIndex = 0, countriesLength = countries.length; coutryIndex < countriesLength; coutryIndex++) {
  const {name, capital} = countries[coutryIndex];

  gm(272, 312, 'black')
    .fill('#ffea00')
    .font('shared/fonts/Rubik.ttf', 30)
    .drawText(12, 107, name)
    .fontSize(28)
    .fill('#fff')
    .drawText(12, 140, capital)
    .write(`dist/${name.toLowerCase()}.png`, (error) => {
      // gm('dist/test.png')
      //   .composite('dist/flags/nl.png')
      //   .geometry('+12+42')
      //   .write('dist/composite.png', () => {});
    });
}
