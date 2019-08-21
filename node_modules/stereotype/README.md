# Stereotype.js [![npm Version](http://img.shields.io/npm/v/stereotype.svg?style=flat)](https://www.npmjs.org/package/stereotype) [![Build Status](https://img.shields.io/travis/yuanqing/stereotype.svg?style=flat)](https://travis-ci.org/yuanqing/stereotype) [![Coverage Status](https://img.shields.io/coveralls/yuanqing/stereotype.svg?style=flat)](https://coveralls.io/r/yuanqing/stereotype)

> Cast a string (where possible) to a primitive type.

## Usage

```js
stereotype('undefined'); //=> undefined
stereotype('null');      //=> null
stereotype('NaN');       //=> NaN
stereotype('Infinity');  //=> Infinity
stereotype('true');      //=> true
stereotype('3.14');      //=> 3.14
stereotype('0xFF');      //=> 255

stereotype({});          //=> {}
stereotype('foo');       //=> 'foo'
```

More usage examples are in [the tests](https://github.com/yuanqing/stereotype/blob/master/spec/stereotype.spec.js).

## API

### stereotype(obj)

Returns, where possible, `obj` cast to a primitive type. Otherwise returns `obj` if `obj` is not a `string`, or if `obj` cannot be cast to a primitive.

## Installation

Install via [npm](https://www.npmjs.org/package/stereotype):

```bash
$ npm i --save stereotype
```

## License

[MIT license](https://github.com/yuanqing/stereotype/blob/master/LICENSE)
