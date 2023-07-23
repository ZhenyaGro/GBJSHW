function task1(number1 = 2, number2 = 3) {
  /*
  Задание 1
  Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени
  */
  function powCube(number) {
    return Math.pow(number, 3);
  }

  console.log(powCube(number1) + powCube(number2));
}

function task2() {
  /*
  Задание 2
  Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
  Создать функцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"
  */
  const userInput = Number(prompt('Введите число', 0));
  if (isNaN(userInput)) {
    console.log('Некорректный ввод');
    return
  }

  function calculateSalary(fullSalary) {
    return fullSalary * 0.87;
  }

  console.log(`Размер заработной платы за вычетом налогов равен ${calculateSalary(userInput)}`);
}

task2();