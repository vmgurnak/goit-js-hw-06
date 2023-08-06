// Task 9

// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

// Для генерации случайного цвета используй функцию getRandomHexColor.

// Функция для генерации случайного цвета
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Поиск button.change-color
const changeColorBtn = document.querySelector(".change-color");

// Поиск body по селектору тега
const body = document.querySelector("body");

// Поиск span.color
const colorValue = document.querySelector(".color");

// Коллбэк-функция: изменение цвета фона body и текст span при клике на кнопку на случайный цвет
const changeColorBackground = (event) => {
  body.style.backgroundColor = getRandomHexColor();
  colorValue.textContent = getRandomHexColor();
};

// Добавление слушателя для button.change-color событие "click
changeColorBtn.addEventListener("click", changeColorBackground);
