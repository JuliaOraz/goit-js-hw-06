let counterValue = 0;

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueCounterContent = document.querySelector('#value');


// Обновление значения
const updateValueCounter = () => { 
    valueCounterContent.textContent = counterValue;
}

// Уменьшение значения по клику
const onDecrementCounter = e => { 
    counterValue -= 1;
    updateValueCounter();
}

decrementButton.addEventListener('click', onDecrementCounter)

// Увеличение значения по клику
const onIncrementCounter = e => { 
    counterValue += 1;
    updateValueCounter();   
}

incrementButton.addEventListener('click', onIncrementCounter)

