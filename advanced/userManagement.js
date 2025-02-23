/**
 * Problem:
 * Write a simple user management system that allows adding and removing users,
 * and showing the list of users.
 *
 * Your task:
 * Implement the functions `addUser`, `removeUser`, and `showUsers` that
 * manage a list of users.
 *
 * Example:
 * addUser("Alice");
 * showUsers() should return ["Alice"].
 * removeUser("Alice");
 * showUsers() should return [].
 */
let users = [];
const addUser = user => users.includes(user) ? console.log(`User "${user}" already exists.`) : users.push(user);
const removeUser = user => {
  const index = users.indexOf(user);
  index === -1 ? console.log(`User "${user}" not found.`) : users.splice(index, 1);
};
const showUsers = () => users.length ? users : "No users available.";

module.exports = { addUser, removeUser, showUsers };
