const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

// Using different methods to iterate over the arrays and display the items in HTML

// 1. Using map() method
const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastTotalItems').innerHTML = breakfastMenu.length + ' items:';
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

// 2. Using forEach() method
let mainCourseMenuItemsHTML= "";
mainCourseMenu.forEach((item, index) => {
    mainCourseMenuItemsHTML += `<p>Item ${index + 1}: ${item}</p>`;
});
document.getElementById('maincourseTotalItems').innerHTML = mainCourseMenu.length + ' items:';
document.getElementById('maincourseMenuItems').innerHTML = mainCourseMenuItemsHTML;

// 3. Using for loop
let dessertMenuItemsHTML = "";
for(let i = 0; i < dessertMenu.length; i++){
    dessertMenuItemsHTML += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}
document.getElementById('dessertTotalItems').innerHTML = dessertMenu.length + ' items:';
document.getElementById('dessertMenuItems').innerHTML = dessertMenuItemsHTML;