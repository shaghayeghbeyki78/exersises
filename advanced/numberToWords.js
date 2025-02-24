/**
 * Problem:
 * Write a program that converts a number to its word representation.
 *
 * Your task:
 * Implement the function `numberToWords` that converts a number to its corresponding word form.
 *
 * Example:
 * numberToWords(123) should return "one hundred twenty three".
 * numberToWords(5) should return "five".
 */

// Write your solution here

// function numberToWords(num) {
//     if (num === 0) return "zero";

//     const belowTwenty = [
//         "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
//         "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
//     ];
//     const tens = [
//         "", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"
//     ];
//     const thousands = ["", "thousand", "million", "billion"];
//     function helper(n) {
//         if (n === 0) return "";
//         else if (n < 20) return belowTwenty[n] + " ";
//         else if (n < 100) return tens[Math.floor(n / 10)] + " " + helper(n % 10);
//         else return belowTwenty[Math.floor(n / 100)] + " hundred " + helper(n % 100);
//     }
//     let result = "";
//     let i = 0;
//     while (num > 0) {
//         if (num % 1000 !== 0) {
//             result = helper(num % 1000) + thousands[i] + " " + result;
//         }
//         num = Math.floor(num / 1000);
//         i++;
//     }

//     return result.trim();
// }
const numberToWords = num => {
    if (num === 0) return 'zero';
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const hundreds = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
    let word = '';
    const hundred = Math.floor(num / 100);
    if (hundred) word += hundreds[hundred] + ' ';
    num %= 100;
    if (num >= 20) {
        word += tens[Math.floor(num / 10)] + ' ';
        num %= 10;
    } else if (num >= 10) {
        return word + teens[num - 10];
    }
    return word + ones[num].trim();
};
module.exports = numberToWords;
