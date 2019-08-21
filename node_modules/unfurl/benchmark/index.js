/* globals suite, set, bench */
'use strict';

var unfurl = require('..');

suite('unfurl', function() {

  set('iterations', 10);

  bench('query string only', function() {
    unfurl('https://github.com/?foo=42');
  });

  bench('hash only', function() {
    unfurl('https://github.com/#foo');
  });

  bench('both query string and hash', function() {
    unfurl('https://github.com/?foo&bar=42&baz=Hello#World');
  });

});
