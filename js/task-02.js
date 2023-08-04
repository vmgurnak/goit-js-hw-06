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
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// forEach method

// const list = document.querySelector("#ingredients");

// const items = [];

// ingredients.forEach((element) => {
//   const item = document.createElement("li");
//   item.textContent = element;
//   item.classList.add(  "item");
//   items.push(item);
// });

// // console.log(items);

// list.append(...items);

// Function, map method

const list = document.querySelector("#ingredients");

function creativeMarkup(arr) {
  const markup = arr.map((element) => {
    const item = document.createElement("li");
    item.textContent = element;
    item.classList.add("item");
    // console.log(item);
    return item;
  });
  // console.log(markup);

  list.append(...markup);
}

creativeMarkup(ingredients);
