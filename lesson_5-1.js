'use strict';

var r = +prompt("Введите первый параметр RGB - r: ", 0);
var g = +prompt("Введите второй параметр RGB - g: ", 0);
var b = +prompt("Введите третий параметр RGB - b: ", 0);

function rgbToHex(r, g, b) {
  if (r > 255 || r < 0 || g > 255 || g < 0 || b > 255 || b < 0) {
    alert('Допустимый диапазон параметров - 0-255. Проверьте корректность данных');
  } else {
    var arrRGB = [r, g, b];
    var arrHex = arrRGB.map(function(item) {
      return item > 15 ? item.toString(16) : '0' + item.toString(16);
    });
    var hash = ('#' + arrHex[0] + arrHex[1] + arrHex[2]);
    return hash;
  }
}
alert(rgbToHex(r, g, b) || 'Попробуйте еще раз');
