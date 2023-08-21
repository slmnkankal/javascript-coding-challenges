// Problem Explanation
// Ensure that you are editing the inside of the lookUpProfile() function.
// This function includes two parameters, name and prop.
// The function should look through the contacts list for the given name parameter.
// If there is a match found, the function should then look for the given prop parameter.
// If both name and the associated prop are found, you should return the value of the prop.
// If name is found and no associated prop is found, you should return No such property.
// If name isn’t found anywhere, you should return No such contact.

// lookUpProfile("Kristian", "lastName") should return the string Vos
// Passed:lookUpProfile("Sherlock", "likes") should return ["Intriguing Cases", "Violin"]
// Passed:lookUpProfile("Harry", "likes") should return an array
// Passed:lookUpProfile("Bob", "number") should return the string No such contact
// Passed:lookUpProfile("Bob", "potato") should return the string No such contact
// Passed:lookUpProfile("Akira", "address") should return the string No such property

const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (prop in contacts[i]) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}

lookUpProfile("Akira", "likes");
console.log(lookUpProfile("Akira", "likes"));
console.log(lookUpProfile("Sherlock", "likes"));
console.log(lookUpProfile("Bob", "number"));
console.log(lookUpProfile("Akira", "address"));
