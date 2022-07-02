const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', onSubmitForm)

function onSubmitForm(e) { 
    // Останавливаем перезагрузку страницы
    e.preventDefault();

    const {
        elements: { email, password }
    } = e.currentTarget;
    
    // Проверка на пустые поля
    if (email.value === "" || password.value === "") {
        return alert("Пожалуйста, заполните все поля");
    }

    // Собираем введенные данные в консоль
    const loginUser = {
        email: email.value,
        password: password.value,
    }
    console.log(loginUser)

    // Очищаем поля после отправки данных
    e.currentTarget.reset();
}

