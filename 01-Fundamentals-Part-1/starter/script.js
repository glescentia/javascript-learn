let js = "amazing";
console.log(40 + 8 + 23 - 10);

let firstName = "Jonas";
console.log(firstName);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
console.log(x);

// Comparison operators -> boolean
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

let z, y;
z = y = 25 - 10 - 5;
console.log(z, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;

const jonas =
  "I'm " + firstName + ", a " + (now - birthYear) + " years old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${now - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(
  "String with \n\
multiple \n\
lines"
);

console.log(`String with
multiple
lines
using template literals`);

let age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("Accepted");
} else {
  console.log(`Declined. Wait another ${18 - age} years.`);
}

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

// type conversion
const inputYear = "1991";
console.log(Number(inputYear) + 18);
console.log(inputYear + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

// type coercion
console.log("Will be 18 at " + Number(inputYear) + 18 + ".");
console.log("23" - "10" - 3);
console.log("23" + "10" + 3); //not converted cause '+' is used to combine strings
console.log("23" * "10");
// interesting coercion
let n = "1" + 1; // 11
n = n - 1; // 11 - 1 = 10
console.log(n);

const newAge = "18";
if (newAge === 18) {
  console.log("You just became an adult! (strict)");
}
if (newAge == 18) {
  console.log("You just became an adult! (loose)");
}

// const favNum = Number(prompt("What is your favorite number?"));
// console.log(favNum + " (" + typeof favNum + ")");

const hasDriversLicense = true;
const hasGoodVision = true;
const isTired = true;

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive.");
} else {
  console.log("someone else shoulde drive..");
}

// coding challenge #3
let dolphins = [96, 108, 89];
let koalas = [88, 91, 110];
let dolphinsScore = 0;
let koalasScore = 0;

// case 1
console.log("\n This is the initial case.");
for (let i = 0; i < dolphins.length; i++) {
  dolphinsScore += dolphins[i];
  koalasScore += koalas[i];

  if (i == dolphins.length - 1) {
    dolphinsScore = dolphinsScore / 3;
    koalasScore = koalasScore / 3;
  }
}

console.log(`Dolphins average score is ${dolphinsScore}`);
console.log(`Koalas average score is ${koalasScore}`);

if (dolphinsScore > koalasScore) {
  console.log("Dolphins wins!");
} else if (dolphinsScore < koalasScore) {
  console.log("Koalas wins!");
} else {
  console.log("It's a draw!");
}

// case 2
console.log("\n This is bonus case #1");

dolphins = [97, 112, 101];
koalas = [109, 95, 123];
dolphinsScore = 0;
koalasScore = 0;

for (let i = 0; i < dolphins.length; i++) {
  dolphinsScore += dolphins[i];
  koalasScore += koalas[i];

  if (i == dolphins.length - 1) {
    dolphinsScore = dolphinsScore / 3;
    koalasScore = koalasScore / 3;
  }
}

console.log(`Dolphins average score is ${dolphinsScore}`);
console.log(`Koalas average score is ${koalasScore}`);

if (dolphinsScore > koalasScore && dolphinsScore >= 100) {
  console.log("Dolphins wins!");
} else if (dolphinsScore < koalasScore && koalasScore >= 100) {
  console.log("Koalas wins!");
} else {
  console.log("It's a draw!");
}

// case 3
console.log("\n This is bonus case #2");

dolphins = [97, 112, 101];
koalas = [109, 95, 106];
dolphinsScore = 0;
koalasScore = 0;

for (let i = 0; i < dolphins.length; i++) {
  dolphinsScore += dolphins[i];
  koalasScore += koalas[i];

  if (i == dolphins.length - 1) {
    dolphinsScore = dolphinsScore / 3;
    koalasScore = koalasScore / 3;
  }
}

console.log(`Dolphins average score is ${dolphinsScore}`);
console.log(`Koalas average score is ${koalasScore}`);

if (dolphinsScore > koalasScore && dolphinsScore >= 100) {
  console.log("Dolphins wins!");
} else if (dolphinsScore < koalasScore && koalasScore >= 100) {
  console.log("Koalas wins!");
} else if (dolphinsScore == koalasScore && dolphinsScore >= 100) {
  console.log("It's a draw!");
} else {
  console.log("No one wins!");
}

const day = "monday";
console.log("\nMy plan for today:");
switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend:D");
    break;
  default:
    console.log("Not a valid day!");
}

age = 19;
age >= 18
  ? console.log("I like to drink wine")
  : console.log("I like to drink water");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

const chooseDrink = (age) => {
  if (age >= 18) {
    return "wine";
  } else {
    return "water";
  }
};

let drink2 = chooseDrink(age);
console.log("test", drink2);

let drink3;
if (age >= 18) {
  drink3 = "wine";
} else {
  drink3 = "water";
}

console.log(drink3);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

//coding challenge #4
let bill = 275;
const tips = bill >= 30 && bill <= 300 ? 15 : 20;
console.log((1 + tips / 100) * bill);
