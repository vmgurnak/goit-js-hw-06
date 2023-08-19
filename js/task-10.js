// Task 10

// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.

// Функция для генерации случайного цвета
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Создание объекта с поиском элементов
const elements = {
  input: document.querySelector('#controls > input'),
  btnCreate: document.querySelector('button[data-create]'),
  btnDestr: document.querySelector('button[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};

// Деструктуризация объекта
const { input, btnCreate, btnDestr, boxes } = elements;

// Слушатель для кнопки Create, событие click, вызов функции createBoxes с параметром input.value
btnCreate.addEventListener('click', () => createBoxes(input.value));

// Слушатель для кнопки Destroy, событие click
btnDestr.addEventListener('click', clearBoxes);

// Коллбэк-функция createBoxes(amount) для создания коллекции div
function createBoxes(amount) {
  // Очистка разметки
  boxes.innerHTML = '';
  // Присвоение параметру значения input

  const items = [];
  let widht = 20;
  let heigth = 20;
  let markup = '';

  // Цикл для создания элементов разметки и добавления в массив
  for (let i = 0; i < amount; i += 1) {
    const color = getRandomHexColor();
    widht += 10;
    heigth += 10;
    // Создание разметки с помощью boxes.append(...items)
    const item = document.createElement('div');
    item.style.width = `${widht}px`;
    item.style.height = `${heigth}px`;
    item.style.backgroundColor = color;
    items.push(item);

    // Создание разметки с помощью шаблонных строк и boxes.insertAdjacentHTML("beforeend", markup)
    // const item = `<div style="width: ${widht}px;height: ${heigth}px;background-color: ${color};"></div>`;
    // markup += item;
  }

  // Добавление разметки в DOM с распылением значений массива элементов разметки
  boxes.append(...items);

  // Добавление markup в DOM с помощью метода insertAdjacentHTML
  // boxes.insertAdjacentHTML("beforeend", markup);
}

// Коллбэк-функция для очистки разметки
function clearBoxes() {
  boxes.innerHTML = '';
}
