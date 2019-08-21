# Unfurl.js [![npm Version](http://img.shields.io/npm/v/unfurl.svg?style=flat)](https://www.npmjs.org/package/unfurl) [![Build Status](https://img.shields.io/travis/yuanqing/unfurl.svg?style=flat)](https://travis-ci.org/yuanqing/unfurl) [![Coverage Status](https://img.shields.io/coveralls/yuanqing/unfurl.svg?style=flat)](https://coveralls.io/r/yuanqing/unfurl)

> Extract the query string and hash of a URL.

## Usage

```js
unfurl('https://github.com/?foo&bar=42&baz=Hello#World');
/* =>
 * {
 *   query: {
 *     foo: true,
 *     bar: 42,
 *     baz: 'Hello'
 *   },
 *   hash: 'World'
 * }
 */
```

Values extracted (for both the `query` and `hash`) will be cast to a primitive type where possible. (See [Stereotype.js](https://github.com/yuanqing/stereotype).)

More usage examples are in [the tests](https://github.com/yuanqing/unfurl/blob/master/spec/unfurl.spec.js).

## API

### unfurl(url)

Returns an object containing the `query` and `hash` components of the given `url` string.

## Installation

Install via [npm](https://www.npmjs.org/package/unfurl):

```bash
$ npm i --save unfurl
```

## License

[MIT license](https://github.com/yuanqing/unfurl/blob/master/LICENSE)
