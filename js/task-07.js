// Task 7

// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// Создание объекта с поиском элементов
const elements = {
  inputSizeControl: document.querySelector('#font-size-control'),
  text: document.querySelector('#text'),
  fontsize: document.querySelector('#fontsize'),
  resetBtn: document.querySelector('[data-reset="reset"]'),
};

// Деструктуризация объекта
const { inputSizeControl, text, resetBtn, fontsize } = elements;

// Переменная с начальным значение размера шрифта - значение input по умолчанию (среднее min и max в атрибутах input)
const sizeTextStart = `${inputSizeControl.value}px`;
console.log(inputSizeControl.value);
console.log(sizeTextStart);

// Присвоение span размера шрифта равного начальному значению input с помощью инлайн-стиля
fontsize.textContent = `Font size: ${sizeTextStart}`;
text.style.fontSize = sizeTextStart;
fontsize.style.fontSize = sizeTextStart;

// Коллбєк-функция: добавляет инлайн-стиль в span#text размер шрифта со значением input
const inputSize = (event) => {
  text.style.fontSize = `${event.currentTarget.value}px`;
  const colorFont = getRandomHexColor();
  text.style.color = colorFont;
  fontsize.textContent = `Font size: ${event.currentTarget.value}`;
  fontsize.style.fontSize = `${event.currentTarget.value}px`;
  fontsize.style.color = colorFont;
};

// Добавление слушателя с событием input
inputSizeControl.addEventListener('input', inputSize);

// Сброс
// Поиск button по атрибуту
// const resetBtn = document.querySelector('[data-reset="reset"]');

// Добавление слушателя с событием click на кнопку для сброса размера шрифта к начальному значению
resetBtn.addEventListener('click', () => {
  text.style.fontSize = sizeTextStart;

  fontsize.textContent = `Font size: ${sizeTextStart}`;
  fontsize.style.fontSize = sizeTextStart;

  text.style.color = '#000';
  fontsize.style.color = '#000';
});

// Функция для генерации случайного цвета
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
