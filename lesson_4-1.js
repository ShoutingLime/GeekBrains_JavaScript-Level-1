'use strict';

  function min(a, b) {
    return a < b ? a : b;
  }

  // Примеры вызовов
  console.log(min(1, 2)); // 1
  console.log(min(2, 1)); // 1
  console.log(min(1, -2)); //-2
  console.log(min(-1, 2)); // -1
  console.log(min(1, 1)); // 1