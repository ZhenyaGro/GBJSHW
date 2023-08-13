import { getData } from './getData.js';
import { createDogImage } from './createImage.js';

export async function showDog(url) {
  try {
    const answer = await getData(url);
    console.log(answer);
    if (answer.status !== 'success') throw new Error('Не удалось получить изображение');

    createDogImage('.main__images', answer)
  } catch (error) {
    console.error(`Ошибка: ${error}`);
  }
}
