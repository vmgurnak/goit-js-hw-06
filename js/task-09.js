// Task 9

// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

// Для генерации случайного цвета используй функцию getRandomHexColor.

// Функция для генерации случайного цвета
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Создание объекта с поиском элементов
const elements = {
  changeColorBtn: document.querySelector('.change-color'),
  body: document.querySelector('body'),
  colorValue: document.querySelector('.color'),
};

// Деструктуризация объекта
const { changeColorBtn, body, colorValue } = elements;

// Коллбэк-функция: изменение цвета фона body и текст span при клике на кнопку на случайный цвет
const changeColorBackground = (event) => {
  const backgroundColor = getRandomHexColor();
  body.style.backgroundColor = backgroundColor;
  colorValue.textContent = backgroundColor;
};

// Добавление слушателя для button.change-color событие "click
changeColorBtn.addEventListener('click', changeColorBackground);
