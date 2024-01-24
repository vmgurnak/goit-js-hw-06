// Task 4

// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

// Initial counter value
const counterValueStart = 0;
let counterValue = counterValueStart;

// Рефакторинг с объектом
// Создание объекта с поиском элементов

const elements = {
  btnDescr: document.querySelector('[data-action= "decrement"]'),
  btnIncr: document.querySelector('[data-action="increment"]'),
  valueCounter: document.querySelector('#value'),
  clearBtn: document.querySelector('[data-action= "clear"]'),
};

// Деструктуризация объекта

const { btnDescr, btnIncr, valueCounter, clearBtn } = elements;

// Setting the text inside the span to the initial counter value
valueCounter.textContent = counterValueStart;

// callback function when the counter decrement button is clicked
const decrementCounter = () => {
  counterValue -= 1;
  valueCounter.textContent = counterValue;
};

// callback function when the counter increase button is clicked
const incrementCounter = () => {
  counterValue += 1;
  valueCounter.textContent = counterValue;
};

// Call listener on button click with counter
btnDescr.addEventListener('click', decrementCounter);

// Call listener on button click with counter increment
btnIncr.addEventListener('click', incrementCounter);

// Reset counter

// callback function for reset
const reset = () => {
  valueCounter.textContent = counterValueStart;
  counterValue = counterValueStart;
};

// Call listener on button Clear
clearBtn.addEventListener('click', reset);
