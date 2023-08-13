export function createUserBlock(elWhere, data) {
  const userId = JSON.parse(data).id;

  const newDiv = document.createElement("div");
  newDiv.appendChild(document.createTextNode(data));
  newDiv.classList.add('main__block');
  newDiv.setAttribute('id', `block-${userId}`);

  document.querySelector(elWhere).insertAdjacentElement('beforeend', newDiv);

  const buttonRemove = document.createElement("button");
  buttonRemove.appendChild(document.createTextNode('X'));
  buttonRemove.classList.add('main__button-remove');
  buttonRemove.setAttribute('id', `button-${userId}`);
  document.getElementById(`block-${userId}`).insertAdjacentElement('beforeend', buttonRemove);
  buttonRemove.addEventListener('click', e => {
    localStorage.removeItem(`User № ${e.target.id.replace('button-', '')}`);
    document.getElementById(`block-${e.target.id.replace('button-', '')}`).remove();
  });
}