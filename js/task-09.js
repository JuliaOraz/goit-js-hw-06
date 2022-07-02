function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const textWidgetColor = document.querySelector('.color');
const buttonWidgetChangeColor = document.querySelector('.change-color');

buttonWidgetChangeColor.addEventListener('click', onChangeColor)

 
function onChangeColor() { 
  let color = getRandomHexColor();
  
  // Добавляет цвет body
  document.body.setAttribute('style', `background-color: ${color}`)
  
  // Выводит значение цвета
  textWidgetColor.textContent = color;
}
