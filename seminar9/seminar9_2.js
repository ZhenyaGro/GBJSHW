/*
Необязательная задача

Необходимо реализовать отрисовку 10 картинок собак из API https://dog.ceo/dog-api/ с интервалом в 3 секунды.
*/

import { showDog } from './showDog.js'

const dogUrl = 'https://dog.ceo/api/breeds/image/random';

showDog(dogUrl);
let countShowed = 1;
console.log(countShowed);

const dogImgTimer = setInterval(async () => {
  document.querySelector('.main__images').innerHTML = '';
  showDog(dogUrl);
  countShowed++;
  console.log(countShowed);

  if (countShowed === 10)
    clearInterval(dogImgTimer);
}, 3000);


