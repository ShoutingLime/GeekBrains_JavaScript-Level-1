'use strict';

var user = prompt('Введите свойство объекта "user": ', user);
var password = prompt('Введите свойство объекта "password": ', password);
var id = prompt('Введите свойство объекта "id": ', id);

var obj = {
  'user': user,
  'password': password,
  'id': id
};

function objectToQueryString(obj) {
  var str = '';
  for (var key in obj) {
    if (obj[key]) {
      str = str + '&' + key + '=' + obj[key];
    } else {
      continue;
    }
  }
  return str.slice(1);
}

alert(objectToQueryString(obj));
