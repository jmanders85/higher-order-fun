// Probably a good idea to whiteboard the API
// reload repl
// add some numbers, with a start value, utilizing index

const USERS = [
  {
    name: 'Laura Roslin',
    rank: 'President'
  },
  {
    name: 'William Adama',
    rank: 'Admiral'
  },
  {
    name: 'Kara Thrace',
    rank: 'Lieutenant'
  },
  {
    name: 'Saul Tigh',
    rank: 'Colonel'
  },
  {
    name: 'Sharon Valerii',
    rank: 'Lieutenant'
  }
];

/**
 * Imperative approach
 */
function howManyLetters1(users) {
  let count = 0;

  for (let i = 0; i < users.length; i++) {
    count += users[i].name.length
  }

  return count;
}

/**
 * This is sort of a map-reduce action going on here
 */
function howManyLetters2(users) {
  return users.reduce((count, user) => {
    return count + user.name.length;
  }, 0);
}

/**
 * Oh look, the length function is a reduction!
 */
function myLength(array) {
  return array.reduce((count, element) => count + 1, 0);
}

/**
 * Array to String!  Which, unfortunately, is not an array in javascript...
 * and needs to be console.logged in repl
 */
function crewRoster(crew) {
  return crew.reduce((acc, potentialCylon, index) => {
    const { name, rank } = potentialCylon;
    const listing = ` * ${index + 1}. ${rank} ${name}\n`;

    return acc + listing;
  }, '\n********************************\n');
}
