"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive!");

function logger() {
  console.log("My name is Jonas.");
}

logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

console.log("test");

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const age1 = calcAge1(1991);
console.log(age1);

function calcAge1(birthYear) {
  return 2023 - birthYear;
}

const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};
const age2 = calcAge2(1997);

console.log(age1, age2);

const calcAge3 = (birthYear) => 2023 - birthYear;
console.log(calcAge3(1997));

const yearsToRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  if (retirement > 0) {
    return `${firstName} retires in ${retirement} years.`;
  } else if (retirement == 0) {
    return `${firstName} retires this year.`;
  } else {
    return `${firstName} has already retired.`;
  }
};

console.log(yearsToRetirement(1997, "Didi"));
console.log(yearsToRetirement(1950, "Kevin"));

function cutFruitPieces(fruit) {
  return 4 * fruit;
}

function fruitProcessorPieces(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessorPieces(2, 3));

//coding challenge #1
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);

function checkWinner(team1, avgScore1, team2, avgScore2) {
  if (avgScore1 > avgScore2) {
    console.log(`${team1} win (${avgScore1} vs ${avgScore2})`);
  } else if (avgScore1 < avgScore2) {
    console.log(`${team2} win (${avgScore1} vs ${avgScore2})`);
  } else {
    console.log("Its' a draw");
  }
  return 0;
}
checkWinner("Dolphins", avgDolphins, "Koalas", avgKoalas);

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const years = new Array(1991, 1984, 2000);
console.log(years);

console.log(friends[0], years[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends.push("Jay");
console.log(friends);

friends.unshift("John");
console.log(friends);

friends.pop();
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}

//coding challenge #2
function calcTip(bills) {
  let tips;
  if (bills >= 50 && bills <= 300) {
    tips = 0.15;
  } else {
    tips = 0.2;
  }
  return tips * bills;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(tips);

const jonasInformation = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2023 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(jonasInformation);

console.log(jonasInformation.lastName);
console.log(jonasInformation["lastName"]);

const nameKey = "Name";
console.log(jonasInformation["first" + nameKey]);
console.log(jonasInformation["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
);

if (jonasInformation[interestedIn]) {
  console.log(jonasInformation[interestedIn]);
} else {
  console.log("Wrong request!");
}

jonasInformation.location = "Portugal";
jonasInformation["twitter"] = "@jonasschmedtmann";
console.log(jonasInformation);

console.log(
  `${jonasInformation.firstName} has ${jonasInformation["friends"].length} friends, and his best friend is called ${jonasInformation.friends[0]}.`
);

//for learning object with function
const jonasInformation2 = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: false,

  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },
};

console.log(jonasInformation2);
console.log(jonasInformation2.calcAge());
console.log(jonasInformation2.age);

console.log(
  `${jonasInformation2.firstName} is a ${jonasInformation2.age}-year old ${
    jonasInformation2.job
  }, and he has ${
    jonasInformation2.hasDriversLicense ? "a" : "no"
  }  driver's license.`
);

//Coding challenge #3
//BMI = mass / height ** 2
const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  },
};

console.log(john);
console.log(john.calcBMI());
console.log(john.BMI);

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  },
};

console.log(mark);
console.log(mark.calcBMI());

let statusBMI;
if (john.BMI > mark.BMI) {
  statusBMI = "higher";
} else {
  statusBMI = "lower";
}

if (john.BMI == mark.BMI) {
  console.log(`John's BMI is equal to Mark's. (${john.BMI})`);
} else {
  console.log(
    `${john.fullName}'s BMI (${john.BMI}) is ${statusBMI} than ${mark.fullName}'s BMI (${mark.BMI})!`
  );
}

for (let rep = 0; rep < 10; rep++) {
  console.log(`Lifting weights repetition ${rep + 1}`);
}

const jonas = [
  "Jonas",
  "Schmedtmann",
  2023 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

const type = [];
for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i]);
  type[i] = typeof jonas[i];
}

console.log(type);

const birthYears = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i < birthYears.length; i++) {
  ages.push(2023 - birthYears[i]);
}
console.log(ages);

console.log("--- ONLY STRINGS ---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;

  console.log(jonas[i], typeof jonas[i]);
}
console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i]);

  if (typeof jonas[i] === "number") break;
}

let rep = 0;
while (rep < 10) {
  console.log(`Lifting weights repetition ${rep + 1}`);
  rep++;
}

let x = 7;
while (x != 16) {
  if (x % 2 == 1) {
    x = 2 * x - 10;
    console.log(x);
  } else {
    x = x + 5;
    console.log(x);
  }
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`you rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
}

dice = Math.trunc(Math.random() * 6) + 1;

console.log("--- Another Roll ---");
do {
  console.log(`you rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
} while (dice !== 6);

// coding challenge #4
const billsChallenge = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tipsChallenge = [];
const totalChallenge = [];

for (let i = 0; i < billsChallenge.length; i++) {
  tipsChallenge[i] = calcTip(billsChallenge[i]);
  totalChallenge[i] = billsChallenge[i] + tipsChallenge[i];
}

console.log(billsChallenge, tipsChallenge, totalChallenge);

const calcAverageChallenge = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverageChallenge(totalChallenge));
