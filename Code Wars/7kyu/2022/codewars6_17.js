// Who's Online?
// You have a group chat application, but who is online!?

// You want to show your users which of their friends are online and available to chat!

// Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is online, offline and away.

// If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.

// parameters array of objects
// returns object
// examples
// pseudo code given an array of object set the correct status checking to see if the status is online and if the lastActivity is greater than 10, then add them to the object

let friends = [
  {
    username: "David",
    status: "online",
    lastActivity: 10,
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104,
  },
];

let friends1 = [
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104,
  },
];

const whosOnline = (friends) => {
  let output = {};
  friends.forEach((e) => {
    let status = e.status;
    if (status === "online" && e.lastActivity > 10) status = "away";
    let temp = output[status];
    if (output[status]) {
      output[status].push(e.username);
    } else {
      output[status] = [e.username];
    }
  });
  return output;
};
console.log(whosOnline(friends)); //{
//     online: ['David'],
//     offline: ['Lucy'],
//     away: ['Bob']
//   }
// console.log(whosOnline(friends1)); // {
//     offline: ['Lucy'],
//     away: ['Bob']
//   }
