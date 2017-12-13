const watchParams = require('./watchParams');

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
  }
};
