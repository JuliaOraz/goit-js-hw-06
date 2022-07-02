function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const numberInput = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');


createBtn.addEventListener('click', getAmount)

// Берет значение из input
function getAmount() {
  createBoxes(+numberInput.value)
}

// Создание div 
let divSize = 30;

function createBoxes(amount) {
  console.log(amount)
  for (let i = 0; i < amount; i += 1) { 
    const hexColor = getRandomHexColor();
    const newDiv = document.createElement('div');
    newDiv.setAttribute('style', `background-color: ${hexColor}; width: ${divSize}px; height: ${divSize}px`)
    boxes.append(newDiv);
    divSize += 10;
  }

}
 
// Удаление div 
destroyBtn.addEventListener('click', destroyBoxes)

function destroyBoxes() { 
  boxes.innerHTML = numberInput.value = '';
  divSize = 30;
}
