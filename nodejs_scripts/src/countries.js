const fs = require('fs');
const gm = require('gm');

const countries = require('./config/countriesList');
const helpers = require('./shared/helpers');
const watchParams = require('./shared/watchParams');

const params = [
  ['small', 'big'],
  ['top', 'bottom'],
  ['#ffea00', '#00d8ff', '#00fe1e', '#ff782e', '#ff5ace'],
];

const config = helpers.generateCountriesConfig(params);

if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist', () => {});
}

let images = [];

config.forEach((config) => {
  countries.forEach((country) => {
    const { font, fontLarge, mainColor } = watchParams;
    const {name, capital, iso} = country;
    const watch = config.watch;
    const docSize = helpers.getDocSize(watch);
    const position = config.position;
    const color = config.color;
    const isOneLine = helpers.isOneLine(name);
    const top = helpers.getTopPosition(watch, position, isOneLine);
    const folderName = `${watch}_${position}_${color}`;
    const folderLocation = `dist/${folderName}`;

    if (!fs.existsSync(folderLocation)) {
      fs.mkdirSync(folderLocation);
    }

    const image = gm(docSize.width, docSize.height, 'black')
      .fill(config.color)
      .font(font, fontLarge.value)
      .drawText(0, top.countryPosition, name.toUpperCase())
      .fontSize(helpers.getCapitalFontSize(capital))
      .fill(mainColor)
      .drawText(0, top.capitalPosition, capital.toUpperCase());

    images.push({
      gmImage: image,
      path: `${folderLocation}/${iso.toLowerCase()}.png`,
    });
  });
});

let promise = Promise.resolve();

const writeImage = image => new Promise(resolve => {
  const { gmImage, path } = image;

  gmImage.write(path, resolve);
  console.log(path);
});

images.forEach(image => {
  promise = promise.then(() => writeImage(image))
});
