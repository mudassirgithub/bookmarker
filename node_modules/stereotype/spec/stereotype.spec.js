/* globals describe, it, expect */
'use strict';

var stereotype = require('..');

describe('stereotype(obj)', function() {

  describe('should cast the string to', function() {

    it('undefined', function() {
      expect(stereotype('undefined')).toBe(undefined);
    });

    it('null', function() {
      expect(stereotype('null')).toBe(null);
    });

    it('NaN', function() {
      expect(isNaN(stereotype('NaN'))).toBe(true);
    });

    it('Infinity', function() {
      expect(stereotype('Infinity')).toBe(Infinity);
    });

    it('a boolean', function() {
      expect(stereotype('true')).toBe(true);
      expect(stereotype('false')).toBe(false);
    });

    it('a number', function() {
      expect(stereotype('-42')).toBe(-42);
      expect(stereotype('0')).toBe(0);
      expect(stereotype('42')).toBe(42);
      expect(stereotype('+42')).toBe(42);
      expect(stereotype('0xFF')).toBe(255);
      expect(stereotype('-3.14')).toBe(-3.14);
      expect(stereotype('0.00')).toBe(0);
      expect(stereotype('3.14')).toBe(3.14);
      expect(stereotype('+3.14')).toBe(+3.14);
    });

  });

  describe('should not cast', function() {

    var arr = [
      [{},           'any non-string'],
      ['',           'the empty string'],
      [' ',          'a single space'],
      ['\r\n',       'whitespace'],
      ['2014.12.31', 'a date'],
      ['123foo',     'an integer preceded with a word'],
      ['foo123',     'an integer trailed by a word'],
      ['foo0x123',   'a hexadecimal number preceded with a word'],
      ['0x123foo',   'a hexadecimal number trailed by a word'],
      ['1.23foo',    'a float preceded with a word'],
      ['foo1.23',    'a float trailed by a word']
    ];

    arr.forEach(function(elem) {
      it(elem[1], function() {
        expect(stereotype(elem[0])).toBe(elem[0]);
      });
    });

  });

});
