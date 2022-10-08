/*let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Yusuf");
console.log(23);

let firstName = "Dahud";

console.log(firstName);

// Data Type
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");

javascriptIsFun = 'Yes!'
console.log(typeof javascriptIsFun)

let year
console.log(year)
console.log(typeof year)

year = 1991
console.log(typeof year)

console.log(typeof null)

let age = 30;
age = 31;
console.log(age);

const birthYear = 1999;
// birthYear = 1991;

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = "Jones";
const lastName = " Yusuf";
console.log(firstName + lastName);

let x = 10 - 5; //5
x += 10; // x = x + 10 = 25
x += 4;
x++;
x--;
console.log(x);

// comparison operator
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 19);

const isFullAge = ageSarah >= 10

console.log(now - 1991 > now - 2019)

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = ageJonas + ageSarah / 2;
console.log(ageJonas, ageSarah, averageAge);

// Conditional statement

const age = 19;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("Sarah can start driving license ");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young, wait another ${yearsLeft} years :)`);
}

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);

const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log("I a m" + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" + "2");

let n = "1" + 1;
n = n - 1;
console.log(n);

// boolean
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));

const money = 100;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job");
}

let height = 8;
if (height) {
  console.log("Yay! Height is dined");
} else {
  console.log("hEIGHT IS uNDEFINED");
}

const age = 18;
if (age === 18) {
  console.log("You just became an adult (Strict");
}

if (age == 18) {
  console.log("You just became an adult (loose)");
}

const favourite = Number(prompt("What is your favourite number?"));
console.log(favourite);

if (favourite == 23) {
  console.log("Cool! 23 is an amazing number");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else {
  console.log("Number is not 23 or 7");
}

if (favourite !== 23) console.log("why not 23?");

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;
if (shouldDrive) {
  console.log("Sarah is able to drive");
} else {
  console.log("Someone else should drive.....");
}

const isTired = false;
console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired){
    console.log('Sarah is able to drive!');

}else {
    console.log('Someone else should drive ...');
}

const day = "friday";
switch (day) {
  case "monday":
    console.log("Plan my course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
    break
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("Not a valid day");
}
*/

const age = 3;
age >= 18
  ? console.log("I like to drink wine")
  : console.log("I like to drink water");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);


