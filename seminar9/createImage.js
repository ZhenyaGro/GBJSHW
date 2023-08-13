export function createDogImage(elWhere, data) {
  const img = document.createElement('img');
  img.classList.add('main__img');


  img.src =
    data.message;
  document.querySelector('.main__images').appendChild(img);
}