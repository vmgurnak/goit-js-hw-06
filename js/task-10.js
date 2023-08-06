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

// Поиск div.controls
const controlsBox = document.querySelector("#controls");

// Объявление переменной для аргумента функкции createBoxes(amount) - число при вводе в input
let numberElem = 0;

// Поиск input #controls > input"
const input = document.querySelector("#controls > input");

// Коллбэк-функция для получения значения input
const getNumber = (event) => {
  event.preventDefault();
  // numberElem = Number(input.value);
  numberElem = event.currentTarget.value;
  console.log(numberElem);
  createBoxes(numberElem);
};
// Слушатель для input, событие input
input.addEventListener("input", getNumber);

// Поиск button data-create;
const dataCreateBtn = document.querySelector("button[data-create]");
console.log(dataCreateBtn);

// Поиск button data-destroy;
const dataDestroyBtn = document.querySelector("button[data-destroy]");
console.log(dataDestroyBtn);

// Поиск div#boxes;
const boxes = document.querySelector("#boxes");
console.log(boxes);

// Функция createBoxes
function createBoxes(amount) {
  // Строка для добавления разметки
  const markup = `<div>Test</div>`;

  // Коллбэк-функция для CreateBtn
  const createColl = () => {
    boxes.insertAdjacentHTML("beforeend", markup);
  };

  // Слушатель для кнопки Create, событие click
  dataCreateBtn.addEventListener("click", createColl);

  // Коллбэк-функция для DestroyBtn
  const clearColl = () => {
    boxes.innerHTML = "";
  };

  // Слушатель для кнопки Destroy, событие click
  dataDestroyBtn.addEventListener("click", clearColl);
}
