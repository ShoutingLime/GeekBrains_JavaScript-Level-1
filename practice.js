  'use strict';

  // создаем объект - хранилище  записей
  var users = [{
    id: 0,
    firstName: 'Dmitry',
    lastName: 'Kozlov',
    birthDay: '16.07.1990',
    phones: [
      '89001234567',
      '83431234567'
    ]
  }, {
    id: 1,
    firstName: 'Ivan',
    lastName: 'Petrov',
    birthDay: '08.06.1956',
    phones: [
      '89001234567',
      '83431234567'
    ]
  }];

  // добавление нового адресата
  function addUser(users) {
    var user = {};
    user.id = users.length - 1;
    user.firstName = prompt('Введите имя:');
    user.lastName = prompt('Введите фамилию:');
    user.birthDay = prompt('Дату рождения:');
    user.phones = [];
    while (true) {
      var phone = prompt('Номер телефона:(для выхода введите пустой номер)');
      if (!phone) break;
      user.phones.push(phone);
    }
    users.push(user);
  }

  // удаление адресата
  function deleteUser(users, id) {
    delete users[id];
    return users;
  }

  addUser(users);

  // вывод данных всех адресатов
  for (var i = 0; i < users.length; ++i) {
    console.log('Имя: ' + users[i].firstName, ' Фамилия: ' + users[i].lastName, ' Дата рождения: ' + users[i].birthDay, ' Телефоны: ' + users[i].phones.join(', '));
  }

  // функция выгрузки адресной книги в формате csv
  function csvFormat(users) {
    return users.map(function(user) {
      return Object.keys(user).map(function(key) {
        if (typeof user[key] == 'string' || typeof user[key] == 'number') return '"' + user[key] + '"';
        else return user[key].map(function(phone) {
          return '"' + phone + '"';
        }).join(';');
      }).join(';');
    }).join('\r\n');
  }

  console.log(csvFormat(users));

  function search(value, users) {
    var result = [];
    var re = new RegExp(value, 'i');

    users.forEach(function(item) {
      var findString = item.firstName + ' ' + item.lastName;
      if (re.test(findString)) {
        result.push(item);
      }
    })
    return result;
  }
