// Task 6

// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />;

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

// Search input by id
const inputText = document.querySelector("#validation-input");

// Callback function for the focus loss event, compares the length of the entered characters with the specified length, adds classes for the border color
const inputTextValid = (event) => {
  if (
    event.currentTarget.value.trim().length === Number(inputText.dataset.length)
  ) {
    inputText.classList.add("valid");
    inputText.classList.remove("invalid");
  } else {
    inputText.classList.add("invalid");
    inputText.classList.remove("valid");
  }
};

// Listener for input, blur event out of focus
inputText.addEventListener("blur", inputTextValid);
