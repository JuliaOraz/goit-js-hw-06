const validationInputRef = document.querySelector('#validation-input');

// Проверяет кол-во символов в input
function onValidationInput(e) { 
    validationInputRef.value.trim().length === (e.currentTarget.dataset.length) * 1 ? successfulValidationInput() : unsuccessfulValidationInput();
}

// Успешая валидация
function successfulValidationInput() {
    validationInputRef.classList.add('valid');
    validationInputRef.classList.remove('invalid');
}

// Неуспешная валидация
function unsuccessfulValidationInput() {
    validationInputRef.classList.add('invalid');
    validationInputRef.classList.remove('valid');
}

validationInputRef.addEventListener('blur', onValidationInput);