const _ = require('lodash'); 

const stringCalculator = {
  add: (numberString) => {
    // Check for an empty string
    if (_.isEqual(numberString, '')) {
      return 0;
    }

    // Handle all delimeter by regex
    const numArray = numberString.split(/,|\n/);

    let sum = 0;
    _.forEach(numArray, (num) => {
      sum += parseInt(num);
    });

    return sum;
  },
};

module.exports = stringCalculator;