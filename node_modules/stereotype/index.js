'use strict';

var stereotype = function(obj) {

  if (typeof obj !== 'string') {
    return obj;
  }

  switch (obj) {
  case 'undefined':
    return undefined;
  case 'null':
    return null;
  case 'NaN':
    return NaN;
  case 'Infinity':
    return Infinity;
  case 'true':
    return true;
  case 'false':
    return false;
  }

  var num = parseFloat(obj);
  if (!isNaN(num) && isFinite(obj)) {
    if (obj.toLowerCase().indexOf('0x') === 0) {
      return parseInt(obj, 16);
    }
    return num;
  }

  return obj;

};

exports = module.exports = stereotype;
