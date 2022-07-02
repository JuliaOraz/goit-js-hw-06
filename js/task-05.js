const nameOutput = document.querySelector('#name-output')
const nameInput = document.querySelector('#name-input')

const onNameInput = e => {
    nameOutput.textContent = nameInput.value !== '' ? e.currentTarget.value.trim() : 'Anonymous';
}

nameInput.addEventListener('input', onNameInput);