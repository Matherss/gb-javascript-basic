//После игры необходимо спросить номер вопроса.
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var event, ok;

var answers = [];

answers.length = 1; // сделал 1 чтобы нагляднее (от 1 до 3) был выбор окна в конце игры
gameQuestion(works.a00, works.a0, works.a1, works.a2);
switch (event) {
  case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
    gameQuestion(works.b00, works.b0, works.b1, works.b2);
    switch (event) {
      case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
        gameQuestion(works.d00, works.d0, works.d1, works.d2);
        break;
      case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
        gameQuestion(works.d00, works.d0, works.d1, works.d2);
        break;
      case -1: // Второе действие
        break;
      default:
        alert("Ошибка");
    }
    break;
  case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
    gameQuestion(works.c00, works.c0, works.c1, works.c2);
    switch (event) {
      case 1: // Второе действие
        gameQuestion(works.d00, works.d0, works.d1, works.d2);
        break;
      case 2: // Второе действие
        gameQuestion(works.d00, works.d0, works.d1, works.d2);
        break;
      case -1: // Второе действие
        break;
      default:
        alert("Ошибка");
    }
    break;
  case -1: // Первое действие
    break;
  default:
    alert("Ошибка");
}

endOfGame = +prompt("Какое окно открыть повторно с вашим ответом?");

if (endOfGame == 1) {
  alert(answers[1].question + "\n Вы выбрали ответ: \n" + answers[1].answer);
} else if (endOfGame == 2) {
  alert(answers[2].question + "\n Вы выбрали ответ: \n" + answers[2].answer);
} else if (endOfGame == 3) {
  alert(answers[3].question + "\n Вы выбрали ответ: \n" + answers[3].answer);
} else {
  alert("Такого окна не существует ;(");
}
alert("Спасибо за игру");

//------------------------------------------
function isAnswer(q, event) {
  if (isNaN(event) || !isFinite(event)) {
    alert("Вы ввели недопустимый символ");
    return false;
  } else if (event < 1 || event > q) {
    alert("Ваше число выходит из допустимого диапозона");
    return false;
  }
  return true;
}

// Функция ввода вопроса и фиксирования объектов в массиве:

function gameQuestion(question, limitAnswers, answer_1, answer_2) {
  var userQuest = {};
  do {
    ok = false;
    event = +prompt(question + answer_1 + answer_2 + "-1 - выход из игры");
    if (event == -1) {
      break;
    } else {
      ok = isAnswer(limitAnswers, event);
      if (isAnswer(limitAnswers, event)) {
        userQuest.question = question;
        if (event == 1) {
          userQuest.answer = answer_1;
        } else if (event == 2) {
          userQuest.answer = answer_2;
        }
        answers.push(userQuest);
      }
    }
  } while (!ok);
}
