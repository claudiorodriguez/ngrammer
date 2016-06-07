'use strict';
const reservedWords = require('./data/reservedWords');

function prepare(string) {
  let i;
  for (i = 0; i < reservedWords.length; i++) {
    string = string.replace(
      new RegExp('([^a-zA-Z\d]+)' + reservedWords[i] + '([^a-zA-Z\d]+)', 'g'),
      '$1 $2'
    );
    string = string.replace(
      new RegExp('^' + reservedWords[i] + '([^a-zA-Z\d]+)', 'g'),
      '\n$1'
    );
    string = string.replace(
      new RegExp('([^a-zA-Z\d]+)' + reservedWords[i] + '$', 'g'),
      '$1\n'
    );
  }

  string = string.replace(/[^a-zA-Z\d \n]+/g, ' ');
  string = string.replace(/[ ]+/g, ' ');
  return string;
}

module.exports = prepare;
