// Question 1: Return the Sum of Two Numbers
// create a function that takes two arguments as functions and returns their sum.
/**
 * function addition(num1, num2) {
    return num1 + num2  
}

console.log(addition(3, 5));
 * 
 */

// Question 2: Convert Hours into Seconds 
// create a function that converts hours into seconds 
/**
 * function hoursIntoSeconds(hour) {
    let seconds = hour * 60 * 60;
    return seconds;
}

console.log(hoursIntoSeconds(2))
 * 
 */

// Question 3: Calculate the perimeter of a Rectangle 
/**
 * 
 * function calcPerimeter(width, length) {
    let perimeter = (width + length) * 2
    return perimeter
}

console.log(calcPerimeter(6,7))
 */

// Question 4: Calculate the Area of a Triangle
// write a function that takes the base and height of a triangle and return its area
/**
 * function calcArea(base, height) {
    let area = 0.5 * base * height
    return area
}

console.log(calcArea(10,10))
 *  
 */

// Question 5: Extend a String
// write a function accepts a string and adds 'Frontend' onto the end of it 
/**
 * 
 * function appendFrontend(string) {
    return string + 'Frontend'
}

console.log(appendFrontend('Apple')); 
 */

// Question 6: Greater than 100?
// Given two numbers, return true if the sum of both is greater than 100. 
// Otherwise, return false. 
/**
 * function sumGreaterThan100(num1, num2) {
    return num1 + num2 >= 100 
}

console.log(sumGreaterThan100(50, 51));
 * 
 */

// Question 7: Less then or equal to zero?
// Write a function that accepts a number and returns true if it is less than or equal
// to zero, otherwise returns false.
/**
 * function lassThanOrEqualToZero(num1) {
    return num1 <= 0;
}

console.log(lassThanOrEqualToZero(-2));
 * 
 */

//Question 8: Opposite boolean
// Given a boolean (true or false), return a the opposite boolean
/**
 * function oppositeBoolean(bool) {
    //'!' infront of a boolean gives the opposite
    return !bool;
}
 
console.log(oppositeBoolean(false))
 * 
 */

// Question 9: is not the number '0'
// Given ANY element, return true if it is not the number 0.
/**
 * function isNotZero(num) {
    return num !== 0
}

console.log(isNotZero(5))
 * 
 */

// Question 10: Calculate the remainder
// Given two numbers, retunr their remainder when divided by each other
/**
 * function calcRemainder(num1, num2) {
    return num1 % num2;
}

console.log(calcRemainder(9,8));
 * 
 */


//Q11: Is the Number odd?
//Given two numbers, return true if the number is odd
/**
 * function isOdd(num1) {
    return num1 % 2 !== 0 
    
}

console.log(isOdd(15));
 *  
 */

//Q12: If a number is even, return 1 otherwise return -1
//Create a function that takes a number argument and returns 1 if the number is even. if the number is odd return -1
/**
 * method 1:
 * function booleanInteger(num1) {
    if (num1 % 2 === 0)  {
        return 1;
    }
    return -1;
    
}

console.log(booleanInteger(4));

method 2:
function booleanInteger(num1) {
    return num1 % 2 === 0 ? 1 : -1; (ternary operator)
}

console.log(booleanInteger(4));
 */

// Q13: Check if a user is logged in AND subscribed
// Create a function that takes in two strings. if the first string is equal to 
//'LOGGED_IN' AND the second string is equal to 'SUBSCRIBED return true,
// otherwise return false.
/**
 * function isLoggedInAndSubscribed(LOGGED_IN, SUBSCRIBED) {
    return (LOGGED_IN === 'LOGGED_IN') && (SUBSCRIBED === 'SUBSCRIBED')
      
}

console.log(isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED'))
 * 
 */


// Q14: Check if a user is logged in AND subscribed
// Create a function that takes in two strings. if the first string is equal to 
//'LOGGED_IN' OR the second string is equal to 'SUBSCRIBED return true,
// otherwise return false.
/**
 * function isLoggedInAndSubscribed(LOGGED_IN, SUBSCRIBED) {
    return (LOGGED_IN === 'LOGGED_IN') || (SUBSCRIBED === 'SUBSCRIBED')
      
}

console.log(isLoggedInAndSubscribed('LOGGED_out', 'UNSUBSCRIBED'))
 */
