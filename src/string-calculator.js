const _ = require('lodash'); 

const stringCalculator = {
  add: (numberString) => {
    // Check for an empty string
    if (_.isEqual(numberString, '')) {
      return 0;
    }

    return parseInt(numberString);
  },
};

module.exports = stringCalculator;