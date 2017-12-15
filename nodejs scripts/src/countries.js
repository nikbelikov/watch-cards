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

const config = helpers.generateCountriesConfig(params);

if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist', () => {});
}

config.forEach((config) => {
  countries.forEach((country) => {
    const { font, fontLarge, mainColor } = watchParams;
    const {name, capital, alpha2} = country;
    const watch = config.watch;
    const docSize = helpers.getDocSize(watch);
    const position = config.position;
    const color = config.color;
    const isOneLine = helpers.isOneLine(name);
    const top = helpers.getTopPosition(watch, position, isOneLine);
    const folderName = `${watch}_${position}_${color}`;
    const folderLocation = `dist/${folderName}`;

    if (!fs.existsSync(folderLocation)) {
      fs.mkdir(folderLocation);
    }

    gm(docSize.width, docSize.height, 'black')
      .fill(config.color)
      .font(font, fontLarge.value)
      .drawText(0, top.countryPosition, name.toUpperCase())
      .fontSize(helpers.getCapitalFontSize(capital))
      .fill(mainColor)
      .drawText(0, top.capitalPosition, capital.toUpperCase())
      .write(`${folderLocation}/${name.toLowerCase()}.png`, () => {});
  });
});
