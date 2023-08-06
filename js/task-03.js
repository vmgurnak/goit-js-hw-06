// Task 3

// Напиши скрипт для создания галереи изображений по массиву данных. В HTML есть список ul.gallery.

// <ul class="gallery"></ul>

// Используй массив объектов images для создания элементов <img> вложенных в <li>. Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.

// Массив объектов с изображениями
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// Поиск ul.gallery
const list = document.querySelector(".gallery");

// Объявление функции, принимает массив объектов
function creativeMarkup(arr) {
  // Пременная для создания разметки markup, метод map преобразует массив объектов в новый массив. Метод join преобразует массив в строку
  const markup = arr
    .map(
      (image) => `    <li>
      <img class="image"
        src=${image.url}
        alt=${image.alt} width="300">
        
    </li>`
    )
    .join("");

  // console.log(markup);

  // Метод insertAdjacentHTML() добавляет строку в разметку "afterbegin" - внутри list, перед всеми детьми
  list.insertAdjacentHTML("afterbegin", markup);
}

// Вызов функции creativeMarkup(arr), аргумента массив объектов images
creativeMarkup(images);

// Inline styles
// list.style.listStyle = "none";
// list.style.margin = "0";
// list.style.padding = "0";
// list.style.display = "flex";
// list.style.justifyContent = "center";
// list.style.alignItemst = "center";
// list.style.alignItemst = "10px";
// console.log(list.style);
