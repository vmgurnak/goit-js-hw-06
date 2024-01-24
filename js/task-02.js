// Task 2

// В HTML есть пустой список ul#ingredients.
// <ul id="ingredients"></ul>;

// В JavaScript есть массив строк.

// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Поиск ul#ingredients
const list = document.querySelector('#ingredients');

// Функция принимает массив
function creativeMarkup(arr) {
  // Метод map трансоформирует массив ingredients, создает новый массив с элементами разметки
  const markup = arr.map((element) => {
    // создание элемента "li"
    const item = document.createElement('li');
    // Добавление название ингредиента в текст li
    item.textContent = element;
    // Добавление класса для li
    item.classList.add('item');
    // возвращает готовый элемент массива item
    return item;
  });

  console.log(markup);

  // Распыление элементов массива в колекцию элементов с помощью spred. Добавление элементов после детей ul в DOM дерево
  list.append(...markup);
}

// Вызов функции, аргумент массив ingredients
creativeMarkup(ingredients);
