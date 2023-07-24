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

function task3() {
  /*
  Задание 3
  Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел
  */

  const askNumber = () => Number(prompt('Введите число', 0));
  userNumbers = [num1, num2, num3] = [askNumber(), askNumber(), askNumber()];
  console.log(Math.max(...userNumbers));
}

task3();

/*
Задание 4
Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.
*/