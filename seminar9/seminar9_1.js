/*
Задача
Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users) и отобразить их на странице. Пользователь должен иметь возможность удалить любого пользователя из списка. Данные при получении необходимо сохранить в локальное хранилище браузера localStorage. При удалении пользователь должен удаляться не только со страницы, но и из локального хранилища localStorage
*/

import { getData } from './getData.js';
import { createUserBlock } from './createUserBlock.js';

const url = 'https://jsonplaceholder.typicode.com/users';
const htmlContent = document.querySelector('.main__content');

document.querySelector('.main__button').addEventListener('click', async () => {
  try {
    document.querySelector('.main__content').innerHTML = '';

    const users = await getData(url);
    users.forEach((user, index) => {
      const strUser = JSON.stringify(user);
      localStorage.setItem(`User № ${index + 1}`, strUser)
      createUserBlock('.main__content', strUser);
    });
    console.log(users);
  } catch (error) {
    console.error(`Ошибка: ${error}`);
  }
});

