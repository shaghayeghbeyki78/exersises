/**
 * Problem:
 * Write a program that takes a string as input and returns the string reversed.
 *
 * Your task:
 * Implement the function `reverseString` that returns the reversed string of the input.
 *
 * Example:
 * reverseString("hello") should return "olleh".
 * reverseString("world") should return "dlrow".
 */

// Write your solution here
var fullname = "hello";
function reverseString (fullname) {
    return fullname.split("").reverse().join("");
}
module.exports = reverseString;
