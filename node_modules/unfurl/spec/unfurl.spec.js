/* globals describe, it, expect */
'use strict';

var unfurl = require('..');

describe('unfurl(url)', function() {

  it('query string only', function() {
    expect(unfurl('https://github.com/?foo=bar')).toEqual({
      query: { foo: 'bar' },
      hash: ''
    });
    expect(unfurl('https://github.com/?foo=42')).toEqual({
      query: { foo: 42 },
      hash: ''
    });
  });

  it('hash only', function() {
    expect(unfurl('https://github.com/#bar')).toEqual({
      query: {},
      hash: 'bar'
    });
    expect(unfurl('https://github.com/#42')).toEqual({
      query: {},
      hash: 42
    });
  });

  it('both query string and hash', function() {
    expect(unfurl('https://github.com/?foo&bar=42&baz=Hello#World')).toEqual({
      query: { foo: true, bar: 42, baz: 'Hello' },
      hash: 'World'
    });
  });

  it('neither query string nor hash', function() {
    var empty = {
      query: {},
      hash: ''
    };
    var urls = [
      '',
      '?',
      '#',
      '?&',
      '?=',
      '?=&=',
      'https://github.com/',
      'https://github.com/?',
      'https://github.com/#',
      'https://github.com/?&',
      'https://github.com/?=',
      'https://github.com/?=&='
    ];
    urls.forEach(function(url) {
      expect(unfurl(url)).toEqual(empty);
    });
  });

});
