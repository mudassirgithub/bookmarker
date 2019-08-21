'use strict';

var stereotype = require('stereotype');

var parseQuery = function(query) {

  var result = {};
  var splitIndex, key, val, i, len;

  query = query.split('&');
  len = query.length;
  for (i = 0; i < len; ++i) {
    splitIndex = query[i].indexOf('=');
    if (splitIndex !== -1) {
      key = query[i].substring(0, splitIndex);
      val = query[i].substring(splitIndex + 1) || true;
    } else {
      key = query[i];
      val = true;
    }
    if (key) {
      result[key] = stereotype(val);
    }
  }

  return result;

};

var unfurl = function(url) {

  url = url.trim();

  var query = '';
  var hash = '';

  var queryIndex = url.indexOf('?');
  var hashIndex;

  if (queryIndex !== -1) {
    query = url.substring(queryIndex + 1);
    hashIndex = query.indexOf('#');
    if (hashIndex !== -1) {
      hash = query.substring(hashIndex + 1);
      query = query.substring(0, hashIndex);
    }
  } else { // no query
    hashIndex = url.indexOf('#');
    if (hashIndex !== -1) {
      hash = url.substring(hashIndex + 1);
    }
  }

  return {
    query: parseQuery(query),
    hash: stereotype(hash)
  };

};

module.exports = exports = unfurl;
