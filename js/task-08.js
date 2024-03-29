// Task 8

// Напиши скрипт управления формой логина.

// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

// Поиск form
const loginForm = document.querySelector('.login-form');

// Вызов слушателя на форме с событием submit
loginForm.addEventListener('submit', handlerFormSubmit);

// Коллбэк-функция
function handlerFormSubmit(event) {
  // Отмена действий по умолчанию
  event.preventDefault();
  // console.log(event.currentTarget.elements);

  //   Дескруктуризация, свойство DOM-элемента формы объекта с элементами
  const { email, password } = event.currentTarget.elements;

  // Проверка на пустые строки, вывод alert или объекта с данными Email, Password
  if (!email.value.trim() || !password.value.trim()) {
    alert('Please fill in all the fields!');
  } else {
    console.log({
      [email]: email.value,
      [password]: password.value,
    });
    // Очистка полей формы после отправки
    event.currentTarget.reset();
  }
}
