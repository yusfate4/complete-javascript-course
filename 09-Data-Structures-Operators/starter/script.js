'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function (obj) {
    console.log(obj);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
restaurant.orderDelivery({
  time: '22:30',
  address: 'Unity Estate',
  mainIndex: 2,
  starterIndex: 2,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Mutating variable
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
// ({a, b} = obj)
// console.log(a, b);

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

// Destructuring Arrays
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, z, y);

// const [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// [main, secondary] = [secondary, main]
// console.log(main, secondary);
/*
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested

const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p, q = 1, r = 1] = [4, 6];
console.log(p, q, r);

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// Spread operator

const newArr = [1, 2, ...arr];
console.log(newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables
const str = 'Yusuf';
const letters = [...str, ' ', 'S.'];
console.log(letters);

// const ingredients = [prompt("Let's make pasta! Ingredient 1?"), prompt("Ingredient 2?"), prompt('Ingredient3')];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);
// Objects
const newRestaurant = { ...restaurant, foundedIn: 1998, founder: 'Guisepper' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Restorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

// Rest operator
const [x, y, ...others] = [1, 2, 3, 4, 5, 6];
console.log(x, y, others);

const [pizza, , risotto, ...other] = [
  ...restaurant.mainMenu,
  ...restaurant.startMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2. Function
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    console.log(sum);
  }
};
add(2, 3);
add(5, 3, 7, 2);
add(5, 4, 3, 2, 4, 5, 4);

const x = [23, 5, 7];
add(...x);


restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach')
restaurant.orderPizza('mushroom')
*/

// Use any data type, return any data type, short-circuiting
console.log(3 || 'Jonas');

restaurant.numGuests || 10 
console.log('------------ AND --------------');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

const rest1 = {
  name: 'Capri',
  numGuests: 20,
}

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
}

rest1.numGuests = rest1.numGuests || 10
rest2.numGuests = rest2.numGuests || 10



console.log(rest1);
console.log(rest2);





