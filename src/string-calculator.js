const _ = require('lodash'); 

const stringCalculator = {
  add: (numberString) => {
    // Check for an empty string
    if (_.isEqual(numberString, '')) {
      return 0;
    }

    // Handle , Delimeter and any Number of Input
    const numArray = numberString.split(',');

    let sum = 0;
    _.forEach(numArray, (num) => {
      sum += parseInt(num);
    });

    return sum;
  },
};

module.exports = stringCalculator;