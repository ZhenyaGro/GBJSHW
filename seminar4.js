

function task4_1() {
  /*
  Задание 1
  Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
  0 – это ноль
  1 – нечетное число
  2 – четное число
  3 – нечетное число
  …
  10 – четное число
  */

  for (let i = 0; i < 11; i++) {
    if (i === 0) console.log(`${0} - это ноль`);
    else console.log(`${i} - ${i % 2 === 0 ? 'четное' : 'нечетное'} число`)
  }
}

function task4_2() {
  /*
  Задание 2
  Дан массив [1, 2, 3, 4, 5, 6, 7]
  Сделайте из этого массива следующий [1, 2, 3, 6, 7]
  */

  let arr = [1, 2, 3, 4, 5, 6, 7];
  arr.splice(3, 2);
  console.log(arr);
}

function task4_3() {
  /*
  Задание 3
  Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
  1. Рассчитать сумму элементов этого массива
  2. Найти минимальное число
  3. Найти есть ли в этом массиве число 3
  */

  let arr = [];
  const arraySize = 5;
  const searchNumber = 3;
  for (let i = 0; i < arraySize; i++)
    arr.push(Math.round(Math.random() * 10));

  const sumElems = arr.reduce((sum, elem) => { return sum + elem }, 0);
  const minValue = Math.min(...arr);
  const hasNumber = arr.includes(searchNumber) ? 'есть' : 'нет';

  console.log(`Массив: ${arr}
Сумма элементов: ${sumElems}
Минимальное число: ${minValue}
Число 3 в массиве: ${hasNumber}`);
}

function task4_4() {
  /*
  *Необязательное задание. *
  Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

  x
  xx
  xxx
  xxxx
  xxxxx
  */

  const slideSize = 20;
  let arr = [];
  for (let i = 0; i < slideSize; i++) {
    arr.push('x');
    console.log(arr.toString().replaceAll(',', ''));
  }
}

task4_4();