const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const conteinerIngredients = document.querySelector('#ingredients');

// Создание элементов
const creatIngredientItem = ingredients => {
  return ingredients.map(ingredient => {
    const itemIngredient = document.createElement('li');
    itemIngredient.classList.add('item');
    itemIngredient.textContent = ingredient;
    return itemIngredient;
  })
}
 
const items = creatIngredientItem(ingredients);

// Вывод в шаблон
conteinerIngredients.append(...items);