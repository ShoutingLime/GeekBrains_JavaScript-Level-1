'use strict';

/* В консоль выводятся числа от 1 до 100.
Вместо чисел, кратных 3, выводится Fizz. 
Вместо чисел, кратных 5, выводится Buzz. 
Вместо чисел, кратных и 3, и 5, выводится FizzBuzz */
for (let i = 1; i <= 100; i++)
  if (i % 3 == 0 && i % 5 == 0) console.log('FizzBuzz');
  else if (i % 3 == 0) console.log('Fizz');
  else if (i % 5 == 0) console.log('Buzz');
  else console.log(i);