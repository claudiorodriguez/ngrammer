'use strict';

const module = require('module');

function exportedFunction(someArgument, options) {
  let varOne = 1;
  let varTwo = 2;

  if (varOne > varTwo) {
    return module(varOne);
  } else {
    return module(someArgument + varTwo);
  }
}

module.exports = exportedFunction;
