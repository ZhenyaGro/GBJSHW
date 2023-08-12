/*
Задача
Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users) и отобразить их на странице. Пользователь должен иметь возможность удалить любого пользователя из списка. Данные при получении необходимо сохранить в локальное хранилище браузера localStorage. При удалении пользователь должен удаляться не только со страницы, но и из локального хранилища localStorage
*/

// Show users
// Remove user + remove from localStorage

import { getData } from './getData.js';
import { createDiv } from './createDiv.js';

const url = 'https://jsonplaceholder.typicode.com/users';
const htmlContent = document.querySelector('.main__content');

try {
  const users = await getData(url);
  users.forEach((user, index) => {
    const strUser = JSON.stringify(user);
    localStorage.setItem(`User № ${index + 1}`, strUser)
    createDiv('.main__content', strUser);
  });
  console.log(users);
} catch (error) {
  console.error(`Ошибка: ${error}`);
}