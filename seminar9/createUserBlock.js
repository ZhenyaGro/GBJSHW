function createUserBlock() {
  let divCount = 0;

  return function (elWhere, data) {
    const newDiv = document.createElement("div");
    newDiv.appendChild(document.createTextNode(data));
    newDiv.classList.add('main__block');
    newDiv.setAttribute('id', `block-${++divCount}`);

    document.querySelector(elWhere).insertAdjacentElement('beforeend', newDiv);

    const buttonRemove = document.createElement("button");
    buttonRemove.appendChild(document.createTextNode('X'));
    buttonRemove.classList.add('main__button-remove');
    buttonRemove.setAttribute('id', `button-${divCount}`);
    document.getElementById(`block-${divCount}`).insertAdjacentElement('beforeend', buttonRemove);
    buttonRemove.addEventListener('click', e => console.log(`click! ${e.target.id}`))
  }
}

export const createNewBlock = createUserBlock();