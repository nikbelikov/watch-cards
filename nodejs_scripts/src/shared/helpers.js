const _isEqual = require('lodash/isEqual');
const watchParams = require('../config/watchParams');

module.exports = {
  getDocSize(watch) {
    return watch === 'small' ? watchParams.small : watchParams.big;
  },

  isOneLine(string) {
    return string.indexOf('\n') < 0;
  },

  getTopPosition(watch, position, isOneLine) {
    if (position === 'top') {
      const countryPosition = watchParams.fontLarge.letterHeight + watchParams.padTop;

      return {
        countryPosition,
        capitalPosition: isOneLine ? countryPosition + 33 : countryPosition + 70,
      };
    }

    const capitalPosition = watchParams[watch].height - 14;
    const countryPosition = isOneLine ? capitalPosition - 33 : capitalPosition - 70;

    return {
      countryPosition,
      capitalPosition,
    };
  },

  getCapitalFontSize(capital) {
    const length = capital.length;
    const { value } = watchParams.fontSmall;

    if (length > 21) {
      return value - 8;
    }

    if (length > 19) {
      return value - 6;
    }

    if (length > 17) {
      return value - 4;
    }

    if (length > 15) {
      return value - 2;
    }

    return value;
  },

  generateCountriesConfig(params) {
    let config = [];
    let variants = [];

    // считаем количество вариантов в каждом параметре
    for (let param = 0; param < params.length; param += 1) {
      variants.push(params[param].length);
    }

    // формируем конфиг возможных параметров
    for	(let counterWatch = 0; counterWatch < variants[0]; counterWatch += 1) {
      for	(let counterPosition = 0; counterPosition < variants[1]; counterPosition += 1) {
        for	(let counterColor = 0; counterColor < variants[2]; counterColor += 1) {
          for	(let counterVariations = 0; counterVariations < variants[3]; counterVariations += 1) {
            config.push({
              watch: params[0][counterWatch],
              position: params[1][counterPosition],
              color: params[2][counterColor],
              countriesSet: params[3][counterVariations],
            });
          }
        }
      }
    }

    return config;
  },

  getCountriesSetName(countriesSet) {
    const sets = [
      {
        id: 'all',
        items: ['Европа', 'Азия', 'Америка', 'Африка', 'Океания'],
      },
      {
        id: 'noOk',
        items: ['Европа', 'Азия', 'Америка', 'Африка'],
      },
      {
        id: 'noAf',
        items: ['Европа', 'Азия', 'Америка', 'Океания'],
      },
      {
        id: 'noBoth',
        items: ['Европа', 'Азия', 'Америка'],
      },
    ];

    for (let setIndex = 0; setIndex < sets.length; setIndex++) {
      if (_isEqual(sets[setIndex].items, countriesSet)) {
        return sets[setIndex].id;
      }
    }

    return 'all';
  }
};
