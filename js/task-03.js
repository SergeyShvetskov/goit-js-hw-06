// Завдання 3
// Напиши скрипт для створення галереї зображень на підставі масиву даних. 
// HTML містить список ul.gallery.

// <ul class="gallery"></ul>

// +Використовуй масив об'єктів images для створення елементів <img>, 
// вкладених в <li>. 
// +Для створення розмітки використовуй шаблонні рядки 
// і метод insertAdjacentHTML().

// +Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS 
// класи.


const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

//Рішення №1
const gallery = document.querySelector(".gallery");

const newGallery = [];

images.forEach(({url, alt}) => {
  const liElem = document.createElement("li");
  const imgElem = `<img src=${url} alt=${alt} width=540px >`
  console.log(imgElem);
  liElem.insertAdjacentHTML("afterbegin", imgElem);
  newGallery.push(liElem);
});

gallery.append(...newGallery);
gallery.classList.add("js-taskThree");

//Рішення №2

// const gallery = document.querySelector(".gallery");

// const newGallery = [];

// images.forEach(({url, alt}) => {
//   const liElem = document.createElement("li");
//   const imgElem = document.createElement("img");
//   imgElem.src = url;
//   imgElem.alt = alt;
//   imgElem.width = 540;
//   liElem.appendChild(imgElem);
//   newGallery.push(liElem);
// });

// gallery.append(...newGallery);
// gallery.classList.add("js-taskThree");
