// Q1: Falsy or Truthy
// Given two values, return the first one if it is falsy, otherwise return the second one.
/**
 * function filterOutFalsy(val1,val2) {
    return (!val1) ? val1 : val2
}

console.log(filterOutFalsy(0, 500))
 * 
 */

// Q2: Return the length of any given array
// Given an array, return its length
/**
 * function arrlength(arr) {
   return arr.length;
}

console.log(arrlength([1,2,3]));
 * 
 */
 
// Q3: Get the last element in an array
// Given an array, return the first element
/**
 * function lastElem(arr) {
    return arr[arr.length - 1];
 }
 
 console.log(lastElem(['ball','cat','dog'])); 
 * 
 */

 // Q4: Find the sum of an array
 // Given an array , return the sum of every element
/**
 *function arrSum(arr) {
    let sum = 0

    for (let i = 0; i < arr.length; ++i) {
     // this is how you loop through every element in an array
     //*console.log(arr[i]);*
     sum = sum + arr[i]
    }
    return sum
 }
 
 console.log(arrSum([2,2,2]));  
 * 
 */
 
 // Q5: Add up the numbers from a single number
 // Given a number, add up all the numbers from one to the number that is 
 // given. E.g. An input of 4 will give you 1 + 2 + 3 + 4, which equals 10.
/**
 * function progressiveSum(num) {
    let sum = 0;

    for (let i = 0; i <= num; ++i) {
        sum = sum +i;
    }
    return sum
 }

 console.log(progressiveSum(3))
 * 
 */

 // Q6: Calculate the time
 // Given a number in seconds, returns this number in mm:ss format.

 function calcTime() {

 }

 console.log(calcTime(66))
 