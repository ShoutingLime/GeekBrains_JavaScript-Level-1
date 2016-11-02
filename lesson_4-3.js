'use strict';

function isEven(x) {
  if (x === 0) return true;
  else if (x == 1) return false;
  // else if (x < 0) return isEven(-x);
  else return isEven(x - 2);
}

alert(isEven(50)); // true
alert(isEven(75)); // false
alert(isEven(-1)); // переполнение стека; проблему решает закомментированная строка
