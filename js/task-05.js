// Task 5

// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

// Поиск span.#name-output
const nameOutput = document.querySelector("#name-output");

// Поиск input.#name-input для ввода имени
const inputName = document.querySelector("#name-input");

// Коллбэк функция для события ввода в input
// value от currentTarget, trim() убрать пробелы;
const enterName = (event) => {
  // if проверяет, что inputName.value не пустая строка, метод .trim() убирает пробелы до и после ввода
  if (event.currentTarget.value.trim()) {
    // тексту в span присваивается значение ввода
    nameOutput.textContent = event.currentTarget.value;
  } else {
    nameOutput.textContent = "Anonymous";
  }
};

// Слушатель для input, событие input
inputName.addEventListener("input", enterName);
