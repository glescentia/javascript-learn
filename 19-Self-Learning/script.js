//1. Return true if the given string begins with "mix", except the 'm' can be anything, so "pix", "9ix" .. all count.
const mixStart = function (string) {
  if (string.slice(1, 3) === "ix") {
    return true;
  } else {
    return false;
  }
};
console.log(mixStart("nix snacks"));
console.log(mixStart("pix snacks"));
console.log(mixStart("pos snacks"));
console.log(mixStart(""));

//2. Given a string, return a new string where "not " has been added to the front. However, if the string already begins with "not", return the string unchanged. Note: use .equals() to compare 2 strings.
const notString = function (string) {
  if (string.slice(0, 3) === "not") {
    console.log(string);
  } else {
    console.log(`not ${string}`);
  }
};
notString("x");
notString("candy");
notString("bad");
notString("not bad");
notString("is not");
notString("no");

//3. Given 2 int values, return true if one is negative and one is positive. Except if the parameter "negative" is true, then return true only if both are negative.
const posNeg = function (num1, num2, status) {
  let result = "";
  if ((num1 < 0 && num2 < 0) || (num1 >= 0 && num2 > 0)) {
    result = false;
  } else {
    result = true;
  }
  if (status) console.log(!result);
  else console.log(result);
};

posNeg(1, -1, false);
posNeg(-1, 1, false);
posNeg(-4, -5, true);
posNeg(-4, 5, true);
posNeg(1, 1, false);
posNeg(-1, 1, true);
posNeg(1, 1, true);
posNeg(-1, -1, true);
posNeg(-1, -1, false);
posNeg(-5, -5, true);

//4. Given 2 int values greater than 0, return whichever value is nearest to 21 without going over. Return 0 if they both go over.
const blackjack = function (num1, num2) {
  let diff1 = 21 - num1;
  let diff2 = 21 - num2;

  if (diff1 < 0 && diff2 < 0) console.log(0);
  else if (diff1 < 0) console.log(num2);
  else if (diff2 < 0) console.log(num1);
  else if (diff1 < diff2) console.log(num1);
  else if (diff1 > diff2) console.log(num2);
};
console.log("\n---BLACKJACK---");
blackjack(19, 21);
blackjack(21, 19);
blackjack(19, 22);
blackjack(22, 50);
blackjack(22, 22);
blackjack(33, 1);
blackjack(33, 34);
blackjack(18, 17);
blackjack(16, 23);
blackjack(21, 20);

//5. Given three ints, a b c, one of them is small, one is medium and one is large. Return true if the three values are evenly spaced, so the difference between small and medium is the same as the difference between medium and large.
console.log("\n---NOMOR 5---");
const evenlySpaced = function (a, b, c) {
  if (a > b) [a, b] = [b, a];
  if (a > c) [a, c] = [c, a];
  if (b > c) [b, c] = [c, b];

  if (b - a === c - b) console.log(true);
  else console.log(false);
};

evenlySpaced(2, 4, 6);
evenlySpaced(4, 6, 2);
evenlySpaced(4, 6, 3);
evenlySpaced(9, 10, 11);
evenlySpaced(10, 9, 11);
evenlySpaced(10, 9, 9);
evenlySpaced(2, 4, 4);
evenlySpaced(2, 2, 4);
evenlySpaced(3, 6, 12);
evenlySpaced(12, 3, 6);
evenlySpaced(2, 2, 2);
evenlySpaced(6, 2, 4);

//6. Given an array of ints, return the number of 9's in the array.
console.log("\n---NOMOR 6---");
const arrayCount9 = function (array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 9) count++;
  }
  console.log(count);
};

arrayCount9([1, 2, 9]);
arrayCount9([1, 2, 2]);
arrayCount9([]);
arrayCount9([9, 2, 4, 3, 1]);

arrayCount9([1, 9, 9]);
arrayCount9([1, 9, 9, 3, 9]);

//7. Given an array of ints, return true if the sequence of numbers 1, 2, 3 appears in the array somewhere.
console.log("\n---NOMOR 7---");
const array123 = [1, 2, 3];

const checkArray123 = function (array) {
  let count = 0;
  let result = false;
  for (let i = 0; i < array.length - 2; i++) {
    for (let j = 0; j < array123.length; j++) {
      if (array123[j] === array[i + j]) count++;
    }
    if (count === array123.length) {
      result = true;
      break;
    }
    count = 0;
  }
  console.log(result);
};
checkArray123([1, 1, 2, 3, 1]);
checkArray123([1, 2, 3, 1, 2, 3]);

checkArray123([1, 1, 2, 4, 1]);
checkArray123([1, 1, 2, 1, 2, 3]);

checkArray123([1, 1, 2, 1, 2, 1]);
checkArray123([]);

//8. Return the sum of the numbers in the array, returning 0 for an empty array. Except the number 13 is very unlucky, so it does not count and numbers that come immediately after a 13 also do not count.
console.log("\n---NOMOR 8---");
const sum13 = function (array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 13) break;
    else sum += array[i];
  }
  console.log(sum);
};
sum13([1, 2, 2, 1]);
sum13([1, 1]);
sum13([1, 2, 2, 1, 13]);
sum13([13, 2, 2, 1]);
sum13([13, 0]);

//9. Given an array of ints, return true if the array contains no 1's and no 3's.
console.log("\n---NOMOR 9---");
const arr13 = [1, 3];
const lucky13 = function (array) {
  let result = true;
  for (let i = 0; i < array.length; i++) {
    if (arr13.includes(array[i])) {
      result = false;
      break;
    }
  }
  console.log(result);
};
lucky13([0, 2, 4]);
lucky13([1, 2, 3]);
lucky13([1, 2, 4]);
lucky13([2, 7, 2, 1]);
lucky13([]);

//10. Given a non-empty array of ints, return a new array containing the elements from the original array that come before the first 4 in the original array. The original array will contain at least one 4. Note that it is valid in java to create an array of length 0.
console.log("\n---NOMOR 10---");
const pre4 = function (array) {
  let index = array.indexOf(4);
  if (index === -1) console.log(array);
  else console.log(array.slice(0, index));
};
pre4([1, 2, 1, 4]);
pre4([3, 1, 4]);
pre4([1, 3, 4, 2, 4]);
pre4([2, 1, 2, 1, 4, 2]);

//Bonus1: Given a string, if the string "del" appears starting at index 1, return a string where that "del" has been deleted. Otherwise, return the string unchanged.
console.log("\n---BONUS 1---");
const delDel = function (string) {
  let result = "";
  let index = string.indexOf("del");
  if (index === 1) {
    result += string.slice(0, index);
    result += string.slice(index + 3);
  } else {
    result += string;
  }
  console.log(result);
};
delDel("adelbc");
delDel("adelHello");
delDel("adedbc");
delDel("abcdel");

//Bonus2: Given a non-empty string and an int n, return a new string where the char at index n has been removed. The value of n will be a valid index of a char in the original string (i.e. n will be in the range 0..str.length()-1 inclusive).
console.log("\n---BONUS 2---");
const missingChar = function (string, n) {
  let result = "";
  result += string.slice(0, n);
  result += string.slice(n + 1);

  console.log(result);
};
missingChar("hi", 1);
missingChar("code", 3);
missingChar("chocolate", 8);
