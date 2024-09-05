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
    let negatives = [];

    _.forEach(numArray, (num) => {
      const parsedNum = parseInt(num);

      if (parsedNum < 0) {
        negatives.push(parsedNum);
      } else {
        sum += parsedNum;
      }
    });

    if (negatives.length > 0) {
      throw new Error(`Negative Number Not Allowed: ${negatives.join(', ')}`);
    }

    return sum;
  },
};

module.exports = stringCalculator;