// Завдання 1
// HTML містить список категорій ul#categories.
// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, 
// тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories, знайде і 
// виведе в консоль текст заголовку елемента (тегу <h2>) і кількість 
// елементів в категорії (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const categories = document.body.querySelectorAll("li.item");
console.log("Number of categories:",categories.length);
console.log("");

categories.forEach(element => {
    console.log("Category:", element.querySelector("h2").textContent);
    console.log("Elements:", element.querySelectorAll("li").length);
    console.log("");
});

