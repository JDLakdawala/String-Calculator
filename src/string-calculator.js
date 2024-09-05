const _ = require('lodash'); 

const stringCalculator = {
  add: (numberString) => {
    // Check for an empty string
    if (_.isEqual(numberString, '')) {
      return 0;
    }

    let delimiter = /,|\n/;

    if (numberString.startsWith('//')) {
      const delimiterEndIndex = numberString.indexOf('\n');
      delimiter = new RegExp(numberString.substring(2, delimiterEndIndex));
      numberString = numberString.substring(delimiterEndIndex + 1);
    }

    const numArray = numberString.split(delimiter);

    let sum = 0;
    _.forEach(numArray, (num) => {
      sum += parseInt(num);
    });

    return sum;
  },
};

module.exports = stringCalculator;