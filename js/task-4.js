//? Напиши функцию formatString(string) которая принимает строку и форматирует ее если необходимо.

// ?Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
//? Если длина больше 40 символов, то функция обрезает строку до 40-ка символов и добавляет в конец строки троеточие '...',
//? после чего возвращает укороченную версию.
'use strict';

const formatString = function(string) {
  const sumOfSymbol = string.length;

  let newString;

  if (sumOfSymbol >= 40) {
    newString = string.slice(0, 41) + '...';
  } else {
    newString = string;
  }

  return newString;
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// вернется форматированная строка
