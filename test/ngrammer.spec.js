'use strict';

const chai = require('chai');
const expect = chai.expect;
const fs = require('fs');
const fileContents = fs.readFileSync(__dirname + '/_data/testfile.js').toString();
const ngrammer = require('../ngrammer');

describe('ngrammer', () => {

  describe('analyse file contents', () => {

    it('must provide valid ngrams', () => {
      const ngrams = ngrammer(fileContents, { minCount: 1 });
      expect(ngrams).to.be.an('array').and.to.not.be.empty;
      expect(ngrams[0]).to.be.an('array').and.to.not.be.empty;
      expect(ngrams[0][0]).to.be.an('object');
      expect(ngrams[0][0]).to.have.property('word');
      expect(ngrams[0][0]).to.have.property('count');
      expect(ngrams[0][0]).to.have.property('size');
      return true;
    });
  });
});
