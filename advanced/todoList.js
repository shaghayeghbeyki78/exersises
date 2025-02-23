/**
 * Problem:
 * Write a program to manage a to-do list.
 * The program should support adding tasks, removing tasks, and displaying all tasks.
 *
 * Your task:
 * Implement the functions `addTask`, `removeTask`, and `showTasks` to manage the to-do list.
 *
 * Example:
 * addTask("Buy groceries") should add a new task.
 * removeTask("Buy groceries") should remove the task.
 * showTasks() should return a list of all current tasks.
 */

// Write your solution here
const todoList = [];
const addTask = task =>
  task && typeof task === 'string' && !todoList.includes(task)
    ? (todoList.push(task), `${task} added to the list.`)
    : 'Error: Task cannot be empty or already exists.';
const removeTask = task => {
  const taskIndex = todoList.indexOf(task);
  return taskIndex !== -1
    ? (todoList.splice(taskIndex, 1), `${task} removed from the list.`)
    : 'Error: Task not found.';
};
const showTasks = () => [...todoList];
module.exports = { addTask, removeTask, showTasks };
