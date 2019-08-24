/*
Given a number n return a number with the digits of n in reverse order
Example: 123
Output: 321
*/

// String Solution
function reverseNumberString(n) {
    // Create a boolean value that checks if the number is negative
    let negFlag = false;
    // If number is negative set boolean to true
    if(n < 0) negFlag = true;
    // Take the absolute value of n
    n = Math.abs(n);
    // Convert n to a a character array
    let digArr = n.toString().split('');
    // Reverse the character array and parse it into a number
    let result = parseInt(digArr.reverse().join(''));
    // If the boolean flag was negative return a negative, else return normally
    return negFlag ? -result : result;
}

// Math Solution
function reverseNumberMath(n) {
    // Create bolean value to check if n is negative
    let negFlag = false;
    // If n is negative set the boolea to true
    if(n < 0) negFlag = true;
    // Get the absolute value of n
    n = Math.abs(n)
    
    // Initialize the answer to 0
    let answer = 0;
    // As long as n is not 0
    while(n != 0) {
        // We can do modulo 10 to get the last digit of any number
        let dig = n % 10;
        // Since JavaScript automatically makes floating points, perform floor operation
        n = Math.floor(n / 10);
        // To simulate the number going up by digit place, multiply the answer by ten and add digit
        answer = answer * 10 + dig;
    }
    // If answer is negative return negative, else return normally.
    return negFlag ? -answer : answer;
}