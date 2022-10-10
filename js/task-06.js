// Завдання 6
// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), 
// перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість смиволів повинна бути в інпуті, зазначається в його 
// атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим,
//  якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми 
// вже додали у вихідні файли завдання.

const textInput = document.querySelector("#validation-input");
const dataLength = Number(textInput.dataset.length);
// console.log(textInput);
textInput.addEventListener("blur", () => {
console.log(textInput.value.length, dataLength);
if (textInput.value.length === dataLength) {
    //  textInput.dataset.
} 
// textInput.classList.add("invalid");
 
// console.log(document.querySelector("data-length"));

});