'use strict';

for (var i = 0; i < 8; i++) {
  var res = (i % 2 === 0) ? '' : ' ';
  for (var j = 0; res.length < 8; j++) {
      res = (j % 2 === 0) ? (res + '#') : (res + ' ');
  }
  console.log(res);
}