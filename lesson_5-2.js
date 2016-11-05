'use strict';

var a = prompt('Введите число в диапазоне от 0 до 999: ', 0);
a = Number(a);

function numToObj(a) {
  if (isNaN(a)) {
    alert('Это не число. Повторите попытку');
  } else if (a < 0 || a > 999) {
    alert('Число не входит в указанный диапазон. Повторите попытку');
  } else {
    a = String(a);
    a = {
      'единицы': +a[a.length - 1],
      'десятки': +a[a.length - 2] || 0,
      'сотни': +a[a.length - 3] || 0
    };
    console.log(a);
  }
}

numToObj(a);

// Прим.: Порядок вывода свойств объекта не всегда правильный.
