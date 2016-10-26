'use strict';

/* В консоль выводятся числа от 1 до 100.
Вместо чисел, кратных 3, выводится Fizz.
Вместо чисел, кратных 5, но не кратных 3, выводится Buzz */
for (let i = 1; i <= 100; i++)
  if (i % 3 == 0) console.log('Fizz');
  else if (i % 5 == 0) console.log('Buzz');
  else console.log(i);