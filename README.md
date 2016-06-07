# ngrammer

[![Build Status][travis-image]][travis-url]

Perform frequency analysis on a js code string

Uses [nlp-compromise](https://github.com/nlp-compromise/nlp_compromise) with [nlp-ngram](https://github.com/nlp-compromise/nlp-ngram)

## Installation

### node.js

Install using [npm](http://npmjs.org/):

```bash
$ npm install ngrammer
```

## Examples

**Node.JS**

```javascript
const ngrammer = require('ngrammer');
const fs = require('fs');
const fileContents = fs.readFileSync('./testfile.js').toString();

/*
  options:
  - minCount: minimum gram frequency, default: 10
  - maxSize: max gram count, default: 3
*/
const ngram = ngrammer(fileContents, { minCount: 10, maxSize: 3 })
/*
  [
    [
      { word: 'someword', count: 100, size: 1 },
      { word: 'another', count: 90, size: 1 },
      { word: 'etc', count: 80, size: 1 },
      ...
    ],
    [
      { word: 'two words', count: 30, size: 2 },
      { word: 'some more', count: 20, size: 2 },
      { word: 'etc etc', count: 10, size: 2 },
      ...
    ],
    ...
  ]
*/
```

## Testing

To run the tests:

```bash
$ npm test
```

## Contributing

Feel free to create a pull request.

## License

MIT - see [LICENSE][license-url]

[travis-image]: https://travis-ci.org/claudiorodriguez/ngrammer.svg?branch=master
[travis-url]: https://travis-ci.org/claudiorodriguez/ngrammer
[license-url]: ./LICENSE
