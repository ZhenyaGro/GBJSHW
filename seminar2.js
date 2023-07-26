console.log(task2_1());
task2_2();
console.log(task2_3());
task2_3plus();


function task2_1() {
  /*
  Задание 1
  Создать переменные num1, num2 которые пользователь вводит с клавиатуры
  Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.
  */
  const num1 = Number(prompt('Введите число: ', '0'));
  const num2 = Number(prompt('Введите число: ', '0'));

  return num1 <= 1 && num2 >= 3;
}

function task2_2() {
  /*
  Задание 2
  Перепишите код к тернарному оператору

  let test = true;
  if (test === true) {
  console.log('+++');
  } else {
  console.log('---');
  }
  */

  let test = true;
  test ? console.log('+++') : console.log('---');
}

function task2_3() {
  /*
  Задание 3
  В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
  */

  const day = Math.round(Math.random() * (31 - 1) + 1);
  console.log(`День: ${day}`);

  if (day <= 10) return 'Первая декада';
  if (day >= 11 && day <= 20) return 'Вторая декада';
  return 'Третья декада';
}

function task2_3plus() {
  const day = Math.round(Math.random() * (31 - 1) + 1);
  console.log(`День: ${day}`);

  console.log(Math.trunc(day / 11) + 1 + ' декада');
}
