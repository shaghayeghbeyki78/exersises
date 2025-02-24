/**
 * Problem:
 * Write a recursive function that calculates the factorial of a given number.
 *
 * Your task:
 * Implement the function `factorial` which calculates the factorial of the input number recursively.
 *
 * Example:
 * factorial(5) should return 120.
 * factorial(0) should return 1.
 */

// Write your solution here

// function factorial(n) {
//     if (n == 0) {
//         return 1;
//     }
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }
// behine
const factorial = n => n < 0 ? undefined : (n <= 1 ? 1 : n * factorial(n - 1));

module.exports = factorial;
