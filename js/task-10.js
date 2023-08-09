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
  controlsBox: document.querySelector("#controls > input"),
  input: document.querySelector("#controls > input"),
  btnCreate: document.querySelector("button[data-create]"),
  btnDestr: document.querySelector("button[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

// Деструктуризация объекта
const { input, btnCreate, btnDestr, boxes } = elements;

// Слушатель для кнопки Create, событие click
btnCreate.addEventListener("click", createBoxes);

// Слушатель для кнопки Destroy, событие click
btnDestr.addEventListener("click", clearBoxes);

// Коллбэк-функция createBoxes(amount) для создания коллекции div
function createBoxes(amount) {
  // Очистка разметки
  boxes.innerHTML = "";

  const items = [];
  let widht = 30;
  let heigth = 30;

  // Цикл для создания элементов разметки и добавления в массив
  for (let i = 0; i < input.value; i += 1) {
    const color = getRandomHexColor();
    widht += 10;
    heigth += 10;
    const item = document.createElement("div");
    item.style.width = `${widht}px`;
    item.style.height = `${heigth}px`;
    item.style.backgroundColor = color;
    items.push(item);
  }

  console.log(items);
  // Добавление разметки в DOM с распылением значений массива элементов разметки
  boxes.append(...items);
}

// Коллбэк-функция для очистки разметки
function clearBoxes() {
  boxes.innerHTML = "";
}
