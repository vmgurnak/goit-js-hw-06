// Task 7

// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// Поиск input
const inputSizeControl = document.querySelector("#font-size-control");

// Переменная с начальным значение размера шрифта - значение input по умолчанию
const sizeTextStart = inputSizeControl.value + "px";

// Поиск span
const text = document.querySelector("#text");

// Присвоение span размера шрифта равного значению input с помощью инлайн-стиля
text.style.fontSize = inputSizeControl.value + "px";

// Коллбєк-функция: добавляет инлайн-стиль в span#text размер шрифта со значением inut
const inputSize = (event) => {
  text.style.fontSize = `${event.currentTarget.value}px`;

  //   text.style.fontSize = event.currentTarget.value + "px";
};

// Добавление слушателя с событием input
inputSizeControl.addEventListener("input", inputSize);

// Сброс

// Поиск button
const resetBtn = document.querySelector('[data-reset="reset"]');

// Добавление слушателя с событием click на кнопку для сброса ращмера шрифта к начальному значению
resetBtn.addEventListener("click", () => {
  text.style.fontSize = sizeTextStart;
});
