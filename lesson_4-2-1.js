'use strict';

var str = "Корабли лавировали-лавировали, лавировали-лавировали, да не вылавировали";

function countBs(str) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) == 'в') {
      count++;
    }
  }
  return count;
}

alert(countBs(str));
