const fontSizeInputControl = document.querySelector('#font-size-control');
const fontSizeText = document.querySelector('#text');


fontSizeInputControl.addEventListener('input', onChangeControl)


function onChangeControl(e) { 
    fontSizeText.style.fontSize = `${fontSizeInputControl.value}px`;
}