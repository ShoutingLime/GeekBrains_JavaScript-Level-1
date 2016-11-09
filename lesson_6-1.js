'use strict';

function arrayToList(array) {
  var list = null;
  for (var i = array.length - 1; i >= 0; i--)
    list = {
      value: array[i],
      rest: list
    };
  console.log(list);
  return list;
}

function listToArray(list) {
  var array = [];
  for (var node = list; node; node = node.rest)
    array.push(node.value);
  return array;
}

function prepend(value, list) {
  return {
    value: value,
    rest: list
  };
}

function nth(list, n) {
  if (!list)
    return undefined;
  else if (n === 0)
    return list.value;
  else
    return nth(list.rest, n - 1);
}

console.log(arrayToList([1, 2, 3])); // {value: 1, rest: {value: 2, rest: { value: 3, rest: null}}};
console.log(listToArray(arrayToList([1, 2, 3]))); // [1, 2, 3]
console.log(prepend(1, prepend(2, null))); // {value: 1, rest: {value: 2, rest: null}}
console.log(nth(arrayToList([1, 2, 3]), 1)); // 2
