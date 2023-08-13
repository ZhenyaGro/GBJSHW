function createUserBlock() {
  let divCount = 0;

  return function (elWhere, data) {
    const newDiv = document.createElement("div");
    newDiv.appendChild(document.createTextNode(data));
    newDiv.classList.add('main__block');
    newDiv.setAttribute('id', `block-${JSON.parse(data).id}`);

    document.querySelector(elWhere).insertAdjacentElement('beforeend', newDiv);

    const buttonRemove = document.createElement("button");
    buttonRemove.appendChild(document.createTextNode('X'));
    buttonRemove.classList.add('main__button-remove');
    buttonRemove.setAttribute('id', `button-${JSON.parse(data).id}`);
    document.getElementById(`block-${JSON.parse(data).id}`).insertAdjacentElement('beforeend', buttonRemove);
    buttonRemove.addEventListener('click', e => {
      localStorage.removeItem(`User № ${e.target.id.replace('button-', '')}`);
      document.getElementById(`block-${e.target.id.replace('button-', '')}`).remove();
    });
  }
}

export const createNewBlock = createUserBlock();