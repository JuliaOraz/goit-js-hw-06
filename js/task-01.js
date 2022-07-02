// Вывод количества категорий
const itemCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemCategories.length}\n\n`);

// Вывод названий категорий и их количество элементов
itemCategories.forEach((value) => {
    const headerContentItemCategories = value.querySelector('h2').textContent;
    const countElementOfItemCategories = value.querySelectorAll('li').length;
    console.log(`Category: ${headerContentItemCategories}\nElements: ${countElementOfItemCategories}`)
});