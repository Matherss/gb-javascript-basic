/**
 * Задание №1. Почему код дает именно такие результаты:
 */
var a = 1,
  b = 1,
  c,
  d;
c = ++a;
alert(c); // 2 / сначала увеличение а на 1, потом присвоение с, вывод с / a=2
d = b++;
alert(d); // 1 / сначала присвоение d, вывод d, увеличение b на 1 / b=2
c = 2 + ++a;
alert(c); // 5 / сначала увеличение а на 1(получается 3), потом сложение 2+a(3), присвоение результата c, вывод c / a=3
d = 2 + b++;
alert(d); // 4 / сначала сложение 2+b(2), присвоение d, вывод d, увеличение b на 1(получается b=3) / b=3
alert(a); // 3 / подробно расписал выше
alert(b); // 3 / подробно расписал выше

/**
 * Задание №2. Чему будет равен x в примере ниже?:
 */
var a = 2;
var x = 1 + (a *= 2); // x = 1 + (a = a * 2), x равен 5

/**
 * Задание №3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
 * если a и b положительные, вывести их разность;
 * если а и b отрицательные, вывести их произведение;
 * если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.
 */

var a = 5,
  b = 10;
if (a > 0 && b > 0) {
  alert(a - b);
} else if (a < 0 && b < 0) {
  alert(a * b);
} else if ((a >= 0 && b <= 0) || (a <= 0 && b >= 0)) {
  alert(a + b);
}

/**
 * Задание №4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15. Можно сделать решение двумя способами. Второй способ - использовать рекурсию, можно без switch:
 */
var a = Math.round(Math.random() * (15 - 0)) + 0;
console.log("Отсчет от числа " + a);

switch (a) {
  case 0:
    console.log(0);
  // break;
  case 1:
    console.log(1);
  // break;
  case 2:
    console.log(2);
  // break;
  case 3:
    console.log(3);
  // break;
  case 4:
    console.log(4);
  // break;
  case 5:
    console.log(5);
  // break;
  case 6:
    console.log(6);
  // break;
  case 7:
    console.log(7);
  // break;
  case 8:
    console.log(8);
  // break;
  case 9:
    console.log(9);
  // break;
  case 10:
    console.log(10);
  // break;
  case 11:
    console.log(11);
  // break;
  case 12:
    console.log(12);
  // break;
  case 13:
    console.log(13);
  // break;
  case 14:
    console.log(14);
  // break;
  case 15:
    console.log(15);
    break;

  default:
    console.log("что-то пошло не так");
}

/**
 *
 * Задание №4 с рекурсией
 */

function showNumbers(a) {
  if (a == 16) {
    return 15;
  }
  console.log(a);
  showNumbers(a + 1);
}
showNumbers(Math.round(Math.random() * (15 - 0)) + 0);

// /**
//  * Задание №5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.:
//  */

function sum(arg1, arg2) {
  return arg1 + arg2;
}
// alert(sum(2, 5));

function minus(arg1, arg2) {
  return arg1 - arg2;
}
// alert(minus(2, 5));

function multiply(arg1, arg2) {
  return arg1 * arg2;
}
// alert(multiply(2, 5));

function divide(arg1, arg2) {
  return arg1 / arg2;
}
// alert(divide(2, 5));

// /**
//  * Задание №6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).
//  */

var operation = prompt("Введите сложение/вычитание/умножение/деление");
var arg1 = +prompt("Введите число 1");
var arg2 = +prompt("Введите число 2");

function mathOperation(arg1, arg2, operation) {
  switch (operation) {
    case "сложение":
      return sum(arg1, arg2);
    case "вычитание":
      return minus(arg1, arg2);
    case "умножение":
      return multiply(arg1, arg2);
    case "деление":
      return divide(arg1, arg2);
  }
}
console.log(mathOperation(arg1, arg2, operation));

/**
 * Задание №7. *Сравнить null и 0. Попробуйте объяснить результат.
 */
console.log(null > 0); // false
console.log(null < 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
console.log(null <= 0); // true

// сравнения преобразуют null в число, рассматривая его как 0, поэтому null >=0 true, а null > 0 false.
// для нестрогого равенства == undefined и null равны друг другу и ничему больше, поэтому null == 0 false.

/**
 * Задание №8. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.
 */
var val = +prompt("введите число");
var pow = +prompt("введите степень");

function power(val, pow) {
  if (val == 0) {
    return 0;
  } else if (pow == 0) {
    return 1;
  } else if (pow < 0) {
    return power(1 / val, -pow);
  } else {
    return val * power(val, pow - 1);
  }
}
console.log(power(val, pow));
