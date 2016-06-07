'use strict';
const prepare = require('./prepare');
const nlp = require('nlp_compromise');

// Bug with nlp-ngram's main script, bugfix not released to npm yet:
// https://github.com/nlp-compromise/nlp-ngram/pull/1
const nlpNgram = require('../node_modules/nlp-ngram/builds/nlp-ngram');
nlp.plugin(nlpNgram);

function parser(string, { minCount, maxSize } = { minCount: 10, maxSize: 3 }) {
  if (!string) {
    throw new Error('Cannot parse an empty value');
  }

  if (typeof string !== 'string') {
    throw new Error('ngrammer can only parse strings');
  }

  string = prepare(string);
  let parsedText = nlp.text(string);
  let ngrams = parsedText.ngram({ min_count: minCount, max_size: maxSize });
  return ngrams.filter((ngramObject) => ngramObject && ngramObject.length);
}

module.exports = parser;
