// Task 3

// Напиши скрипт для создания галереи изображений по массиву данных. В HTML есть список ul.gallery.

// <ul class="gallery"></ul>

// Используй массив объектов images для создания элементов <img> вложенных в <li>. Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.

// Массив объектов с изображениями
const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url: 'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Elephant Beside on Baby Elephant',
  },
  {
    url: 'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Blue Geeen and Orange Parrot',
  },
  {
    url: 'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Zebras on Zebra',
  },
];

// Поиск ul.gallery
const list = document.querySelector('.gallery');

// Объявление функции, принимает массив объектов
function creativeMarkup(arr) {
  // Пременная для создания разметки markup, метод map преобразует массив объектов в новый массив. Метод join преобразует массив в строку
  const markup = arr
    .map(
      // Деструктуризация
      ({ url, alt }) => `    <li class='gallery-item'>
      <img class="image"
        src=${url}
        alt="${alt}">
        
    </li>`
    )
    .join('');

  // console.log(markup);

  // Метод insertAdjacentHTML() добавляет строку в разметку "afterbegin" - внутри list, перед всеми детьми
  list.insertAdjacentHTML('afterbegin', markup);
}

// Вызов функции creativeMarkup(arr), аргумента массив объектов images
creativeMarkup(images);
