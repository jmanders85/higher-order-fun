// Refresh repl
// show string length map in REPL
// .load nameFuse.js

const USERS = [
  {
    firstName: 'Joe',
    lastName: 'Anderson',
    hobbies: ['Boardgames', 'Functional Programming']
  },
  {
    firstName: 'Ursula K.',
    lastName: 'Le Guin',
    hobbies: ['Essay Writing', 'Dystopia Forming', 'General Badassery']
  },
  {
    firstName: 'Rick',
    lastName: 'Sanchez',
    hobbies: ['Belching', 'Tinkering']
  }
];

/**
 * I'm scared!
 */
function fuseNames1() {
  for (let i = 0; i < USERS.length; i++) {
    USERS[i] = {
      name: USERS[i].lastName + ', ' + USERS[i].firstName,
      hobby: USERS[i].hobbies[0]
    }
  }
}

/**
 * Don't worry, USERS is still there
 */
function fuseNames2(users) {
  const correctlyFormattedUsers = users.map((user) => {
    return {
      name: user.lastName + ', ' + user.firstName,
      hobby: user.hobbies[0]
    };
  });

  return correctlyFormattedUsers;
}

/**
 * Aaahhh abstraction!  And string interpolation!
 */
function formatUser(user) {
  return {
    name: `${user.lastName}, ${user.firstName}`,
    hobby: user.hobbies[0]
  };
}

/**
 * It's so elegant.
 */
function fuseNames3(users) {
  return users.map(formatUser);
}
