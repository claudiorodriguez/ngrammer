'use script';

const parser = require('./lib/parser');

function ngrammer(string, options) {
  return parser(string, options);
}

module.exports = ngrammer;
