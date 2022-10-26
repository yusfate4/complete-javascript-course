"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

// const interFace = 'Audio'

// functions
function logger() {
  console.log("My name is Yusuf");
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4)
console.log(appleOrangeJuice);

// function declaration
function calcAge(birthYear) {
  return 2037 - birthYear;
}
console.log(calcAge(1991));


// function expression
const calcAge2 = function(birthYear){
  return 2037 - birthYear;

}
console.log(calcAge2(1991));
// function expression
const calcAge2 = function(birthYear){
  return 2037 - birthYear;

}
console.log(calcAge2(1991));

// Arrow function
const calcAge3 = birthYear => 2037 - birthYear
const age3 = calcAge3(1991)
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear
  const retirement = 65 - age
return `${firstName} retires in ${retirement} years`
  // return retirement
}

console.log(yearsUntilRetirement(1991, 'Jonas'))
console.log(yearsUntilRetirement(1980, 'Bob'))
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
  return juice;
}

console.log(fruitProcessor(2, 3));

const calcAge = function (birthYear) {
  return 2037 - birthYear
}

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = calcAge(birthYear)
  const retirement = 65 - age
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`)
    return retirement

  } else {
    console.log(`${firstName} has already retired`);
    return -1
  }
}
console.log(yearsUntilRetirement(1991, 'Jonas'))
console.log(yearsUntilRetirement(1958, 'Jon'))

// Coding Challenge #1
// const calcAverage = (a,b,c) => {
//   const avgDolhins =  (a + b + c) /3
//   const avgKoalas = (a + b + c) /3
// }

// function checkWinner(avgDolhins, avgKoalas){
//   if (avgDolhins >= 2 * avgKoalas){
//     return `Dolphins win ${avgDolhins} vs ${avgKoalas}`
//   } else {
//     return `Koalas won`
//   }
// }
// console.log(checkWinner(7,2,2));

const calcAverage = (a, b, c) => (a + b + c) / 3;

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolhins, avgKoalas) {
  if (avgDolhins >= 2 * avgKoalas) {
    console.log(`Dolphins win :gift: (${avgDolhins} vs ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolhins) {
    console.log(`Koalas win :gift: (${avgKoalas} vs ${avgDolhins})`);
  } else {
    console.log('No team wins.....');
  }
};


checkWinner(scoreDolphins, scoreKoalas)

 scoreDolphins = calcAverage(85, 54, 41);
 scoreKoalas = calcAverage(23, 34, 27);
 checkWinner(scoreDolphins, scoreKoalas)


// Arrays
const friends = ['Micheal', 'Steven', 'Peter']
console.log(friends);


friends[2] = 'Jay'
console.log(friends);

const firstName = 'Yusuf'
const jonas = [firstName, 'Dahud', 2034 - 1991, 'teacher', friends]
console.log(jonas);


// Exercise
const calcAge = function(birthYear){
  return 2037 - birthYear
}
const years = [1190, 1987, 1956, 1978]

const age1 = calcAge(years[0])
const age2 = calcAge(years[1])
const age3 = calcAge(years[years.length - 1])
console.log(age1, age2, age3);

const friends = ['Micheal', 'Steven', 'Peter']
// Add elements
friends.push('Jay')
console.log(friends);

friends.unshift('John')
console.log(friends);

// Remove elements
friends.pop()
console.log(friends);

friends.shift()
console.log(friends);

console.log(friends.indexOf('Steven'))
console.log(friends.indexOf('Yusuf'))

console.log(friends.includes('non'))

// Challenge #4
// const billValue = 50;
// const tip1 = billValue * 0.15;

// // console.log(
// //   `The bill was ${billValue}, the tip was ${tip}, and the total value is ${totalValue} `
// // );
// if (billValue >= 50 && billValue <= 300) {
//   const totalValue = billValue + tip1;
//   console.log(
//     `The bill was ${billValue}, the tip was ${tip1}, and the total value is ${totalValue} `
//   );
// } else {
//   console.log("Don't worry");
// }

// const bill = 275;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15:
// bill * 0.2;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

let bill = 275;
if (bill <= 300 && bill >= 50) {
  const tip = bill * 0.15;
  console.log(
    `The bill was ${bill}, the tip was ${tip}, and the total value ${
      bill + tip
    }`
  );
} else {
  const tip = bill * 0.2;
  console.log(
    `The bill was ${bill}, the tip was ${tip}, and the total value ${
      bill + tip
    }`
  );
}

function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);

const total = [
  bills[0] + tips[0],
  bills[1] + tips[1],
  bills[2] + tips[2],
];
console.log(total);

// Objects
const jonas = {
  firstName: "Jonas",
  lastName: "Yusuf",
  birthYear: 1991,
  job: "teacher",
  friends: ["Micheal", "Peter", "Steven"],
  hasDRiversLicense: true,

  // calcAge: function(birthYear){
  //   return 2037 - birthYear
  // }

  // calcAge: function(){
  //   console.log(this);
  //   return 2037 - jonas.birthYear
  // }

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      jonas.job
    }, and he has ${this.hasDRiversLicense ? "a" : "no"} driver license `;
  },
};

console.log(jonas.calcAge());
console.log(jonas.age);
console.log(
  `${jonas.firstName} is a ${jonas.age}-year old ${jonas.job}, and he has a driver's license. `
);

console.log(jonas["calcAge"](1999));
console.log(jonas.getSummary());
console.log(jonas);
console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about Yusuf? Choose between firstName, lastName, age, job, and friends"
// );

// if (jonas[interestedIn]) {
//   // console.log(jonas[interestedIn]);
// } else {
//   // console.log(
//   //   "Wrong request! Choose between firstName, lastName, age, job, and friends"
//   // );
// }

jonas.location = "Portugal";
jonas["twitter"] = "@yusfate4";
// console.log(jonas.location);

// Challenge
// Jonas has 3 friends, and his best friend is called Micheal
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);
// Challenge 
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

let markBmi = markMass / markHeight ** 2;
console.log("Mark's BMI is " + markBmi);

let johnBmi = johnMass / johnHeight ** 2;
console.log("John's BMI is " + johnBmi);

let markHigherBMI = markBmi > johnBmi;
console.log(markHigherBMI);
if (markBmi >= johnBmi) {
  console.log(`Mark's BMI ${markBmi} is higher than John's ${johnBmi}`);
} else {
  console.log(`John's BMI ${johnBmi} is higher than Mark's ${markBmi}`);
}


// Test data:
//  Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
//  Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.
let john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.johnBmi;
  },
};

let mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = mark.mass / mark.height ** 2;
    return this.markBmi;
  },
};
mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI ${mark.bmi} is higher than ${john.fullName}'s BMI ${john.bmi}`
  )
  
  }
  else if (john.bmi > mark.bmi){
    console.log(
      `${john.fullName}'s BMI ${john.bmi} is higher than ${mark.fullName}'s BMI ${mark.bmi}`
    ); 
}

// for loops
for (let rep = 1; rep <= 10; rep++){
  console.log('Lifting weights repetition ' + rep + '🏋️');
}

const jonas = [
  "Jonas",
  "Yusuf",
  2037 - 1991,
  "teacher",
  ["Micheal", "Peter", "Steven"],
];

const types = []

for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i]);

  // filling types array
  // types[i] = typeof jonas[i]
  types.push(typeof jonas[i])


}

console.log(types);

const years = [1991, 1999, 1989, 1890, 1934]
const ages = []

for (let i = 0; i < years.length;  i++){
 ages.push(2037 - years[i])
}

console.log(ages);

const jonas = [
  "Jonas",
  "Yusuf",
  2037 - 1991,
  "teacher",
  ["Micheal", "Peter", "Steven"],
  true,
];

console.log("======== ONLY STRINGS =========");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;

  console.log(jonas[i], typeof jonas[i]);
}


console.log("======== BREAKS WITH NUMBER =========");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "number") break;

  console.log(jonas[i], typeof jonas[i]);
}

const jonas = [
  "Jonas",
  "Yusuf",
  2037 - 1991,
  "teacher",
  ["Micheal", "Peter", "Steven"],
  true,
];

for (let i = jonas.length - 1; i >= 0; i--){
  console.log(i, jonas[i]);
}

for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`---------------String exercise ${exercise}----------------`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Lifting weight repetition ${rep}`);

    for (let top = 1; top < 3; top++) {
      console.log(`Topic ${top}`);
    }
  }
}

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

console.log(`=====================================`);
let rep = 1;
while (rep <= 10) {
  console.log(`WHILE Lifting weights repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`Loop is about to end ........`);
}

// Coding Challenge #4

function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

// BONUS

function calcAverage(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
*/
