/*const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

markBmi = markMass / markHeight ** 2;
// console.log("Mark's BMI is " + markBmi);

johnBmi = johnMass / johnHeight ** 2;
// console.log("John's BMI is " + johnBmi);

let markHigherBMI = markBmi > johnBmi;
// console.log(markHigherBMI);
if (markBmi >= johnBmi) {
  console.log(`Mark's BMI ${markBmi} is higher than John's ${johnBmi}`);
} else {
  console.log(`John's BMI ${johnBmi} is higher than Mark's ${markBmi}`);
}

let markMass1 = 95;
let markHeight1 = 1.88;
let johnMass1 = 85;
let johnHeight1 = 1.76;

markBmi1 = markMass1 / markHeight1 ** 2;
// console.log("Mark's BMI is " + markBmi1);

johnBmi1 = johnMass1 / johnHeight1 ** 2;
// console.log("John's BMI is " + johnBmi1);

let markHigherBMI1 = markBmi1 > johnBmi1;
// console.log(markHigherBMI1);
if (markBmi1 >= johnBmi1) {
  console.log(`Mark's BMI ${markBmi1} is higher than John's ${johnBmi1}`);
} else {
  console.log(`John's BMI ${johnBmi1} is higher than Mark's ${markBmi1}`);
}


// Challenge 3
let minScore = 100;
const dolphinScore = (96 + 108 + 89) / 3;
console.log(dolphinScore);

const koalaScore = (88 + 91 + 110) / 3;
console.log(koalaScore);

if (dolphinScore > koalaScore) {
  console.log("Dolphins wins the trophy");
} else if (koalaScore > dolphinScore) {
  console.log("Koala wins the trophy");
} else if(dolphinScore === koalaScore){
  console.log("Both win the trophy");
}

const dolphinScore1 = (97 + 112 + 101) / 3;
console.log(dolphinScore1);

const koalaScore1 = (109 + 95 + 123) / 3;
console.log(koalaScore1);

if (dolphinScore1 >= minScore && dolphinScore1 > koalaScore1) {
  console.log("Dolphins wins and Koala");
} else if (koalaScore1 > dolphinScore1 && koalaScore1 > minScore) {
  console.log("Koala wins the trophy");
} else {
  console.log("No one wins");
}


const dolphinScore2 = (97 + 112 + 101) / 3;
console.log(dolphinScore2);

const koalaScore2 = (109 + 95 + 106) / 3;
console.log(koalaScore2);

if (dolphinScore2 >= minScore && koalaScore2 >= minScore) {
  console.log("Dolphins wins and Koala");
} else if (dolphinScore2 === minScore || koalaScore2 === minScore) {
  console.log("Both are the same");
} else {
  console.log("No one wins");
}
*/
// Challenge #4
const billValue = 50;
const tip1 = billValue * 0.15;


// console.log(
//   `The bill was ${billValue}, the tip was ${tip}, and the total value is ${totalValue} `
// );
if (billValue >= 50 && billValue <= 300) {
  const totalValue = billValue + tip1;
  console.log(
    `The bill was ${billValue}, the tip was ${tip1}, and the total value is ${totalValue} `
  );
} else {
  console.log("Don't worry");
}


const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15:
bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);