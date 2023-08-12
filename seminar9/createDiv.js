export function createDiv(elWhere, data) {
  const newDiv = document.createElement("div");
  newDiv.appendChild(document.createTextNode(data));
  newDiv.classList.add('main__block');

  document.querySelector(elWhere).insertAdjacentElement('beforeend', newDiv);
}