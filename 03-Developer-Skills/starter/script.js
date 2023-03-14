// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "cels",
    //value: Number(prompt("Degrees celcius:")),
    value: 10,
  };
  console.table(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== "number") continue;

    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeBug);

const printForecast = function (arr) {
  //is the function printing the string or just returning the string?
  let printString = "";
  for (let i = 0; i < arr.length; i++) {
    printString += `${arr[i]} celcius in ${i + 1} days${
      i < arr.length - 1 ? ", " : "."
    }`;
  }
  console.log(printString);
};
printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
