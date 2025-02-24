/**
 * Problem:
 * Write a function that takes an array of numbers as input and returns the sum of the numbers in the array.
 *
 * Your task:
 * Implement the function `sumArray` that calculates the sum of all elements in the given array.
 *
 * Example:
 * sumArray([1, 2, 3]) should return 6.
 * sumArray([0, 0, 0]) should return 0.
 */

// Write your solution here
const isPrime = n => n > 1 && [...Array(Math.floor(Math.sqrt(n) - 1)).keys()].every(i => n % (i + 2) !== 0);

module.exports = sumArray;
