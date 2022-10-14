// Завдання 10 (виконувати не обов'язково)
// Напиши скрипт створення і очищення колекції елементів. Користувач 
// вводить кількість елементів в input і натискає кнопку Створити, 
// після чого рендериться колекція. Натисненням на кнопку Очистити, 
// колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

//+Створи функцію createBoxes(amount), яка приймає один параметр - число. 
//+Функція створює стільки <div>, скільки вказано в amount і додає їх у 
// div#boxes.

//+Розміри найпершого <div> - 30px на 30px.
//+Кожен елемент після першого повинен бути ширшим і вищим від попереднього 
// на 10px.
//+Всі елементи повинні мати випадковий колір фону у форматі HEX. 
//+Використовуй готову функцію getRandomHexColor для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

//+Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий 
// спосіб видаляючи всі створені елементи.




function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const countInput = document.querySelector("input");
const divList = document.querySelector("div#boxes");
let numberDiv = 0;
  
countInput.addEventListener("input", inInput)
createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);


function inInput(event) {
  numberDiv = event.currentTarget.value;
}

function createBoxes() {
  let divArray = [];
      for (let index = 0; index < numberDiv; index++) {
        let divElement = document.createElement("div");
        let size = 30 + 10 * index + "px";
      divElement.style.background = getRandomHexColor();
      divElement.style.width = size;
      divElement.style.height = size;
      divArray.push(divElement)
    }
  divList.append(...divArray);
}
function destroyBoxes() {
  divList.innerHTML = "";
}