'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// Function
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// displayMovements(account1.movements);

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = `${acc.balance}€`;
};
// calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest} €`;
};

// calcDisplaySummary(account1.movements);

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);
const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display Balance
  calcDisplayBalance(acc);

  // Display Summary
  calcDisplaySummary(acc);
};

// Event handler (Log in)
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

// Transfer button
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement

    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }

  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*
let arr = ['a', 'b', 'c', 'd', 'e']
console.log(arr.slice(2));
console.log(arr.slice(2,4));
console.log(arr.slice(2,4));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));

// SPLICE
console.log(arr.slice(2));
console.log(arr);
console.log(arr.splice(2));
console.log(arr);

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e']
const  arr2 = ['j', 'i', 'h', 'g', 'f']
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2)
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(' - '));

const arr = [23, 14, 64]
console.log(arr[0]);
console.log(arr.at(0));

// getting last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('============FOREACH=============');
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`You deposited ${mov}`);
  } else {
    console.log(`You withdrew ${Math.abs(mov)}`);
  }
});

// MAPS
const currencies1 = new Map([
  ['USD', 'United State dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies1.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// SET
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});

// Coding Challenge #1
*/

/* 
Julia and Kate are doing a study on dogs. 
So each of them asked 5 dog owners about their dog's age, 
and stored the data into an array (one array for each). 
For now, they are just interested in knowing whether a dog
 is an adult or a puppy. A dog is an adult if it is at least 
 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of 
dog's ages ('dogsJulia' and 'dogsKate'), and does the
 following things:

1. Julia found out that the owners of the FIRST 
and the LAST TWO dogs actually have cats, not dogs! 
So create a shallow copy of Julia's array, and remove 
 cat ages from that copied array (because it's a bad 
 practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and 
Kate's data
3. For each remaining dog, log to the console whether 
it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
/*
function checkDogs(dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  const dogs = dogsJuliaCorrected.concat(dogsKate);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy`);
    }
  });
}
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

*/
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

// const movementsUSD =  movements.map(function (mov){
//   return eurToUsd *  mov
// })

// console.log(movements);
// console.log(movementsUSD);

// Arrow function
/*
const movementsUSD = movements.map(mov => mov * eurToUsd);
console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);

const movementsDescriptions = movements.map((mov, i, arr) => {
  if (mov > 0) {
    return `Movement ${i + 1}: You deposited ${mov}`;
  } else {
    return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
  }
});

console.log(movementsDescriptions);

const deposits = movements.filter(function (mov) {
  return mov > 0;
});

console.log(deposits);

const withdrawals = movements.filter(function (mov) {
  return mov < 0;
});
console.log(withdrawals);

const balance = movements.reduce(function (acc, cur, i, arr) {
  return acc + cur;
}, 0);

console.log(balance);

// Maximum value
const max = movements.reduce(function (acc, mov) {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);

console.log(max);

const min = movements.reduce(function (acc, mov) {
  if (acc < mov) return acc;
  else return mov;
}, movements[0]);
console.log(min);
*/
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, 
humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/*
const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter(age => age >= 18);
  console.log(humanAges);
  console.log(adults);

  const average = adults.reduce((acc, age) => acc * age, 0) / adults.length;

  return average;
};

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);
*/

/*
const eurToUsd1 = 1.1;
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd1)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);

// The find method
const firstWithdrawal = movements.find(mov => mov < 0);

console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

console.log(movements);

// check for equality
console.log(movements.includes(-130));

// conditions
const anyDeposits = movements.some(mov => mov > 0);

// Every
console.log(movements.every(mov => mov > 0));

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

// flat
const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

// flatMap
const overalBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2);

// Sorting arrays
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);

// NUmbers
console.log(movements);
console.log(movements.sort());

// Ascending
movements.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});

console.log(movements);

// Descending
movements.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
});

console.log(movements);

movements.sort((a, b) => a - b);
console.log(movements);

movements.sort((a, b) => b - a);
console.log(movements);

// Array from

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

labelBalance.addEventListener('click', function () {
  const movementUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementUI);
});
*/

// Array Methods Practice
// 1. Adding the deposit together

/*
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositSum);

// 2. Number of deposit
const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

console.log(numDeposits1000);

let a = 10;
console.log(++a);
console.log(a);

// 3. create an object that contains the number of deposit and withdrawer
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    {
      deposits: 0,
      withdrawals: 0,
    }
  );
console.log(deposits, withdrawals);

// 4. Convert any string to title case
const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');
  return capitalize(titleCase);
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'))
console.log(convertTitleCase('and here is another title with an EXAMPLE'))
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);

// 2
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(`
Sarah's dog is eating too ${
  dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
}
`);

// 3.
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recFood));

// 6.
console.log(
  dogs.some(
    dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
  )
);

// 7.
// console.log(dogs.filter(checkEatingOkay));

// 8.
const dogsCopy = dogs.slice().sort((a, b) => a.recFood - b.recFood);

console.log(dogsCopy);