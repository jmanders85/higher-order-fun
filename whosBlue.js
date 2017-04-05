// show isEven filter in repl, non ES6 & ES6
// .load whosBlue.js

const USERS = [
  {
    name: 'Joe',
    color: 'Blue'
  },
  {
    name: 'Taylor',
    color: 'Yellow'
  },
  {
    name: 'Kurt Gödel',
    color: 'Blue'
  },
  {
    name: 'Haskell Curry',
    color: 'Limegreen'
  }
];

/**
 * GAHHHHH
 */
 function whosBlue1() {
  for (let i = 0; i < USERS.length; i++) {
    if (USERS[i].color !== 'Blue') {
      USERS.splice(i, 1);
    }
  }
}

/**
 * Getting there?
 */
function whosBlue2() {
  return USERS.filter((user) => user.color === 'Blue');
}

/**
 * Closer...
 */
function whosWhat(color) {
  return USERS.filter((user) => user.color === color);
}

/**
 * Beautiful.  Let's make a whosBlue3 in the REPL and add some curry
 */
function whichWhoisWhat(userArray, color) {
  return userArray.filter((user) => user.color === color);
}
