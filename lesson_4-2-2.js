'use strict';

var str = "Мама мыла раму!";
var x = "а";
var counter = 0;

function countBs(str, x) {
  var i = 0;
  while (true) {
    var j = str.indexOf(x, i);
    if (j == -1) {
      if (counter === 0) { // сообщает, если подстрока в строке отсутствует
        alert("Символ \"" + x + "\" в данной строке отсутствует");
      }
      break;
    }
    alert("Символ \"" + x + "\" находится на " + (j + 1) + "-й позиции в строке");
    counter = 1;
    i = j + 1;
  }
}

countBs(str, x);
