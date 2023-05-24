'use strict';
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(
      `Here is your pizza with ${mainIngredient}, ${otherIngredient}`
    );
  },

  openingHours,
};

// const arr = [2, 3, 4];
// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;

// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

const [starter, main] = restaurant.order(2, 0);

const { name, openHours, categories } = restaurant;

const { name: restaurantName, openHours: hours, categories: tag } = restaurant;

const {
  fri: { open, close },
} = restaurant.openingHours;
console.log(open, close);

restaurant.orderDelivery({
  time: '22.30',
  address: 'Via Del Sole, 21',
  mainIndex: 2,
  starterIndex: 1,
});

restaurant.orderDelivery({
  address: 'Via Del Sole, 21',
  starterIndex: 0,
});

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

const str = 'Livia';
const letters = [...str, ' ', ' S.', ' ', 'T.'];
console.log(letters);

// const ingredients = [
//   prompt(`Let's make pasta! Ingredient 1?`),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];

// restaurant.orderPasta(...ingredients);

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(8, 2, 5, 3, 2, 1, 4);

restaurant.orderPizza('mushrooms', 'onion', 'olives');

console.log('==== OR SHORT-CIRCUITING ====');

console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(undefined || null);

//two same statements
restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
const guests2 = restaurant.numGuests || 10;

console.log(guests1, guests2);

console.log('==== AND SHORT-CIRCUITING ====');
console.log('Hello' && 23 && null && 'jonas');

const guests3 = restaurant.numGuests ?? 10;
console.log(guests3);

const rest1 = {
  name: 'Capri',
  numGuests: 20,
};
const rest2 = {
  name: 'La Piaza',
  owner: 'Giovanni Rossi',
};
rest2.numGuests = rest2.numGuests || 10;
rest1.numGuests ||= 10;

//Coding Challenge #1
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// const players1 = game.players[0];
// const players2 = game.players[1];
const [players1, players2] = game.players;
const [gk, ...fieldPlayers] = players1;
const allPlayers = [...players1, ...players2];
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
const {
  odds: { team1, x: draw, team2 },
} = game;

const printGoals = function (...player) {
  let totalGoals = 0;
  for (let i = 0; i < player.length; i++) {
    for (let j = 0; j < game.scored.length; j++) {
      if (player[i] == game.scored[j]) {
        totalGoals += 1;
      }
    }
    console.log(player[i]);
  }
  console.log('Total Goals = ', totalGoals);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) {
  console.log(item);
}

for (const item of menu.entries()) {
  console.log(item);
}

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

console.log(restaurant.openingHours.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  console.log(
    `On ${day}, ${
      restaurant.openingHours[day] ? 'we open at' : 'we do not open'
    }${restaurant.openingHours[day]?.open ?? ''}.`
  );
}

let openStr = `We are open on ${Object.keys(openingHours).length} days:`;
for (const day of Object.keys(openingHours)) {
  openStr += `${day},`;
}
console.log(openStr);

const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);
console.log(entries);
for (const [day, { open, close }] of entries) {
  console.log(`On ${day}, we open at ${open} and close at ${close}.`);
}

//Coding Challenge #2
for (const [index, playerGoal] of game.scored.entries()) {
  console.log(`Goal ${index}: ${playerGoal}`);
}
let sumOdd = 0;
for (const odd of Object.values(game.odds)) {
  sumOdd += odd;
}
console.log(
  'The average of the odd: ',
  sumOdd / Object.values(game.odds).length
);

for (const [result, odd] of Object.entries(game.odds)) {
  console.log(
    `Odd of ${game[result] ? 'victory ' + game[result] : 'draw'}: ${odd}`
  );
}

for (const [index, playerGoal] of game.scored.entries()) {
  console.log(`Goal ${index}: ${playerGoal}`);
}

console.log('\n---CHALLENGE DIDI---\n');
//create an array consisting player yang ngegol + jumlah golnya
const playerScored = [];
for (const player of game.scored) {
  const isExist = playerScored.findIndex(p => {
    return p.playerName == player;
  });
  if (isExist == -1) {
    playerScored.push({ playerName: player, goal: 1 });
  } else {
    playerScored[isExist].goal += 1;
  }
}
console.log(playerScored);

const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);

const ordersSet = new Set(['Pasta', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
console.log(ordersSet);
console.log(ordersSet.has('Pasta'));
console.log(ordersSet.has('Garlic Bread'));

ordersSet.add('Garlic Bread');
ordersSet.delete('Pizza');
console.log(ordersSet);

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = new Set(staff);
console.log(staffUnique);

console.log(new Set('Livia Dharmago').size);

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegeterian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open!')
  .set(false, 'We are closed.');

console.log(rest.get('name'));

const time = 23;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

const keyArr = [1, 2];
rest.set(keyArr, 'Test');
console.log(rest.get(keyArr));

rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javscript'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Try again!'],
]);

console.log(question);

//convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//Quiz app
let questionDisplayed = question.get('question');

for (const [key, value] of question) {
  if (typeof key === 'number') questionDisplayed += `\nAnswer ${key}: ${value}`;
}
// const answer = prompt(questionDisplayed);
const answer = 3;
console.log(question.get(Number(answer) === question.get('correct')));

//Coding Challenge #3
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

const array = [...new Set(gameEvents.values())];
console.log(array);

gameEvents.delete(64);

//3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
const timeArray = [...gameEvents.keys()];
const times = [...gameEvents.keys()].pop();

console.log(timeArray);
let totalDurationEvent = 0;

for (let i = 0; i < timeArray.length - 1; i++) {
  totalDurationEvent += timeArray[i + 1] - timeArray[i];
  console.log(timeArray[i + 1], timeArray[i], timeArray[i + 1] - timeArray[i]);
}
console.log(totalDurationEvent);

console.log(
  `An event happened, on average, every ${(totalDurationEvent /=
    timeArray.length - 1)} minutes.`
);

console.log(
  `An event happened, on average, every ${times / gameEvents.size} minutes.`
);

for (const [time, event] of gameEvents) {
  console.log(`[${time <= 45 ? 'FIRST' : 'SECOND'} HALF] ${time}: ${event}`);
}

console.log('\n----AIRPLANE CASE----');

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(airline.indexOf(' ') + 1));
console.log(airline.slice(-2));
console.log(airline.slice(1, -2));

const middleSeat = ['B', 'E'];
const notMiddleSeat = ['A', 'C', 'D', 'F'];

const checkMidSeat = function (seat) {
  if (seat.length != 3 && isNaN(Number(seat.slice(2)))) {
    console.log('Wrong Input!');
  } else {
    if (middleSeat.includes(seat.slice(-1))) {
      console.log('Middle seat');
    } else if (notMiddleSeat.includes(seat.slice(-1))) {
      console.log('Not middle seat');
    } else {
      console.log('Wrong Input!');
    }
  }
};

console.log(Number('11A'));
checkMidSeat('11G');

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//Fix capitalization in name
const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase + passengerLower.slice(1);

const loginEmail = '    Hello@Jonas.Io  \n';
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on board');
  } else {
    console.log('Welcome aboard');
  }
};

checkBaggage('I have a laptop, some Food and a pocket knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

console.log('a+very+nice+string'.split('+'));

const [firstName, lastName] = 'Livia Dharmago'.split(' ');
console.log(firstName, lastName);

const newName = ['Ms.', firstName, lastName];
console.log(newName.join(' '));

const capitalizeName = function (name) {
  const names = name.toLowerCase().split(' ');
  for (let i = 0; i < names.length; i++) {
    // names[i] = names[i][0].toUpperCase() + names[i].slice(1);
    names[i] = names[i].replace(names[i][0], names[i][0].toUpperCase());
  }

  console.log(names.join(' '));
  console.log(names[0][0]);
};

capitalizeName('jessica ann smith davis');
capitalizeName('LIVIA DHARMAGO');

const splitCreditCard = function (number) {
  if (number.length != 16) {
    console.log('Input error');
    return;
  }
  for (let i = 0; i < 4; i++) {
    number =
      number.slice(0, 4 * (i + 1) + i) + ' ' + number.slice(4 * (i + 1) + i);
  }
  console.log(number);
};

const maskCreditCard = function (number) {
  let str = number + ' ';
  str = str.slice(0, -1);
  const last = str.slice(-4);
  return last.padStart(str.length + 3, '**** ');
};

splitCreditCard('1234567812345678');
console.log(maskCreditCard('1234567812345678'));

//Coding Challenge #4
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
document.querySelector('button').addEventListener('click', function () {
  let text = document.querySelector('textarea').value;
  const textSplit = text.split('_');
  let i = 0;
  for (let n of textSplit) {
    if (i == 0) {
      text = n.toLowerCase().trim();
      i++;
    } else {
      n = n.toLowerCase().trim();
      text += ' ' + n[0].toUpperCase() + n.slice(1);
    }
  }
  console.log(text);
});

//More String Exercise
const flightList = flights.split('+');
console.log(flightList);

for (const flight of flightList) {
  const [type, from, to, time] = flight.split(';');
  console.log(
    `${type.replaceAll('_', ' ').trim()} from ${from
      .slice(0, 3)
      .toUpperCase()} to ${to.slice(0, 3).toUpperCase()} (${time.replace(
      ':',
      'h'
    )})`
  );
}
