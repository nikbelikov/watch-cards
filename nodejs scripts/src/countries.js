const fs = require('fs');
const gm = require('gm');
const path = require('path');
const zipFolder = require('zip-folder');

const countries = require('./config/countriesList');
const helpers = require('./shared/helpers');
const watchParams = require('./shared/watchParams');

const params = [
  ['small', 'big'], // watch
  ['top', 'bottom'], // position
  ['#ffea00', '#00d8ff', '#00fe1e', '#ff782e', '#ff5ace'], // highlightColor
];

const config = [
  { watch: 'small', position: 'top', color: '#ffea00' },
  { watch: 'small', position: 'bottom', color: '#00d8ff' },
];

if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist', () => {});
}

if (!fs.existsSync('dist/flags')) {
  fs.mkdirSync('dist/flags');

  fs.readdir('src/shared/flags', (err, files) => {
    files.forEach((file) => {
      if (path.extname(file) === '.png') {
        gm(`src/shared/flags/${file}`)
          .resize(30)
          .write(`dist/flags/${file}`, (error) => {})
      }
    });
  });
}

config.forEach((config) => {
  countries.forEach((country) => {
    const { padLeft, font, fontLarge, mainColor } = watchParams;
    const {name, capital, alpha2} = country;
    const watch = config.watch;
    const docSize = helpers.getDocSize(watch);
    const position = config.position;
    const color = config.color;
    const isOneLine = helpers.isOneLine(name);
    const left = 0;
    const top = helpers.getTopPosition(watch, position, isOneLine);
    const folderName = `${watch}_${position}_${color}`;
    const folderLocation = `dist/${folderName}`;

    if (!fs.existsSync(folderLocation)) {
      fs.mkdir(folderLocation);
    }

    gm(docSize.width, docSize.height, 'black')
      .fill(config.color)
      .font(font, fontLarge.value)
      .drawText(left, top.countryPosition, name.toUpperCase())
      .fontSize(helpers.getCapitalFontSize(capital))
      .fill(mainColor)
      .drawText(left, top.capitalPosition, capital.toUpperCase())
      .write(`${folderLocation}/${alpha2.toLowerCase()}.png`, (error) => {
        if (error) {
          console.log(error);
        }
        // gm('dist/test.png')
        //   .composite('dist/flags/nl.png')
        //   .geometry('+12+42')
        //   .write('dist/composite.png', () => {});
      });
  });
});
