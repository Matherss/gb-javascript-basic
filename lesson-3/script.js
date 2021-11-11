/**
 * Задание №1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
 */

var i = 2;
while (i <= 100) {
  var j = 2;
  while (j <= i) {
    if (i % j == 0) {
      break;
    }
    j++;
  }
  if (j == i) {
    console.log(i);
  }
  i++;
}

/**
 * Задание №2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
 */
var goods = [
  {
    title: "Товар 1",
    price: 100,
    count: 1,
  },
  {
    title: "Товар 2",
    price: 200,
    count: 1,
  },
  {
    title: "Товар 3",
    price: 300,
    count: 3,
  },
];

var fullPrice = 0;
for (var item of goods) {
  fullPrice += item.price * item.count;
  console.log(
    item.title + " стоит = " + item.price + ". Количество штук: " + item.count
  );
}
console.log("Общая стоимость товаров: " + fullPrice);

/**
 * Задание №3. Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
 */

function countBasketPrice(goods) {
  var fullPrice = 0;
  for (var item of goods) {
    fullPrice += item.price * item.count;
  }
  return fullPrice;
}
console.log("Стоимость корзины: " + countBasketPrice(goods));

/**
 * Задание №4.Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
 */
for (var x = 0; x <= 9; console.log(x++)) {}

/**
 * Задание №5.Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
 */
var pyramItem = "x";
for (var pyram = 0; pyram <= 20; pyram++) {
  console.log(pyramItem);
  pyramItem += "x";
}
