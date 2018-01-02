const fs = require('fs');
const gm = require('gm');

const countries = require('./shared/countriesList');
const helpers = require('./shared/helpers');
const watchParams = require('./config/watchParams');

const params = [
  ['small', 'big'],
  ['top', 'bottom'],
  ['#ffea00', '#00d8ff', '#00fe1e', '#ff782e', '#ff5ace'],
  [
    ['Европа', 'Азия', 'Америка', 'Африка', 'Океания'],
    ['Европа', 'Азия', 'Америка', 'Африка'],
    ['Европа', 'Азия', 'Америка', 'Океания'],
    ['Европа', 'Азия', 'Америка'],
  ],
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
    const { watch, position, color, countriesSet } = config;
    const docSize = helpers.getDocSize(watch);
    const isOneLine = helpers.isOneLine(name);
    const top = helpers.getTopPosition(watch, position, isOneLine);
    const countriesSetName = helpers.getCountriesSetName(countriesSet);
    const folderName = `${watch}_${position}_${color.slice(1)}_${countriesSetName}`;
    const folderLocation = `dist/${folderName}`;

    if (!fs.existsSync(folderLocation)) {
      fs.mkdirSync(folderLocation);
    }

    if (countriesSet.indexOf(country.location) !== -1) {
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
    }
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
