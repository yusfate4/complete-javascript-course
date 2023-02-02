'use strict';

/*
const bookings = [];
const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(bookings);
  bookings.push(booking);
};

createBooking('LH123')
createBooking('LH123', 2, 880)

const flight = 'LH234';
const jonas = {
  name: 'Jonas Yusuf',
  passport: 24675847758,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24675847758) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const newPassport = function (person) {
  person.newPassport = Math.trunc(Math.random() * 100000000);
};

newPassport(jonas);
checkIn(flight, jonas);
*/

// hIGH ORDER FUNCTIONS
const oneWord = function (str) {
  // return str.replaces(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaSCript is the best!', oneWord);

const name = function () {
  console.log('Welcome to my house');
};

document.body.addEventListener('click', name);

// FUNCTIONS RETURNING FUNCTIONS
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

const greet = greeting => {
  return name => {
    console.log(`${greeting} ${name}`);
  };
};
const greetingHey = greet('Hey');
greetingHey('Jonas');
greetingHey('Steven');

greet('Hello')('Jonas');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],

  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );

    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Dahud Yusuf');
lufthansa.book(656, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

// call keyword
const book = lufthansa.book;

book.call(eurowings, 23, 'Sarah Williams');
book.call(lufthansa, 239, 'Dahud Yusuf');

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

console.log(swiss, 583, 'Yusuf Dahud');

// Apply method
const flightData = [567, 'Joseph Time'];
book.apply(swiss, flightData);
console.log(swiss);

// Alternative method
book.call(swiss, ...flightData);

// Bind method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Dahud Yusuf');
bookEW23('Martha Cooper');

// With event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

  // Partial application
  const addTax = (rate, value) => value + value * rate
  console.log(addTax(0.1, 200));
  