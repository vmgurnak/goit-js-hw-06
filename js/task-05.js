// Task 5

// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

// Поиск span
const nameOutput = document.querySelector("#name-output");
console.log(nameOutput);

// Поиск input для ввода имени
const inputName = document.querySelector("#name-input");
console.log(inputName);

// Коллбэк функция для события ввода в input
// value от currentTarget, trim() убрать пробелы;
const enterName = (event) => {
  if (event.currentTarget.value.trim()) {
    nameOutput.textContent = event.currentTarget.value;
  } else {
    nameOutput.textContent = "Anonymous";
  }
};

// Слушатель для input, событие input
inputName.addEventListener("input", enterName);
