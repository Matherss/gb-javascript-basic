// Задание №1
var temperatureCelsius = +prompt("Введите температуру в цельсиях");
var temperatureFahrenheit = (9 / 5) * temperatureCelsius + 32;
alert("Температура в фаренгейтах: " + temperatureFahrenheit);

// Задание №2
var name = "Василий";
var admin = name;
alert(admin);

// Задание №3
var strQuestion = 1000 + "108"; // Получится 1000108
alert(strQuestion);

// Задание №4
// async и defer не блокируют отрисовку страницы. Различия: async работает в порядке загрузки, а defer скрипты работают по порядку расположения в документе.

// Задание №5 (поменять местами значения двух переменных без добавления 3й переменной)

var a = 5;
var b = 10;
alert("А = " + a + "\n B = " + b);
a = a + b;
b = a - b;
a = a - b;
alert("А = " + a + "\n B = " + b);

// Искал ещё варианты и наткнулся на новый способ, появившийся в ES6. Как я понял, это операция с массивами.
var firstNumber = 10;
var secondNumber = 20;
alert("firstNumber = " + firstNumber + "\n secondNumber = " + secondNumber); // 10 и 20
[firstNumber, secondNumber] = [secondNumber, firstNumber];
alert("firstNumber = " + firstNumber + "\n secondNumber = " + secondNumber); // 20 и 10
