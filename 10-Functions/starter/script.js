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
  },
};

lufthansa.book(239, 'Dahud Yusuf');
lufthansa.book(656, 'John Smith');
