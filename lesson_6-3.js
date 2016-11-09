'use strict';

function pick(obj, keys) {
  var newObj = {};
  for (var key in obj) {
    if (keys.indexOf(key) !== -1) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

var user = {
  name: 'Sergey',
  age: 30,
  email: 'sergey@gmail.com',
  friends: ['Sveta', 'Artem']
};

console.log(pick(user, ['name'])); // {name: 'Sergey'}
console.log(pick(user, ['name', 'second-name'])); // {name: 'Sergey'}
console.log(pick(user, ['name', 'friends'])); // {name: 'Sergey', friends:['Sveta', 'Artem']}
