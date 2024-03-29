// Task 1

// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// Для выполнения этой задачи нужно использовать метод forEach() и свойства навигации по DOM.

// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

// Вариант 1

// Поиск  всех li.item - querySelectorAll, вывод в псевдомассив
const categories = document.querySelectorAll('.item');
console.log(categories);

// Вывод длины массива
console.log(`Number of categories: ${categories.length}`);

// Перебор элементов пседомассива li.item методом forEach, вывод содержимого первого дочернего элемента h2 и длины пседомассива  children (дочерние элементы li списка ul)
categories.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});

// Вариант 2

const list = document.querySelector('#categories');
const listItems = list.children;
console.log(listItems);
console.log(`Number of categories: ${listItems.length}`);
// Преобразование псевдомассива в массив, перебор массива
[...listItems].forEach((elem) => {
  console.log(`Category: ${elem.firstElementChild.textContent}`);
  console.log(`Elements: ${elem.lastElementChild.children.length}`);
});
