// string examples //

    //console.log("hello world")
    //console.log("hello, " + "Munahse")

// Index Example //
    //console.log("Hello World"[10])

// Using .length prop //
    //console.log("hello World".length)


// Variable Examples //
    //let fullName = "Munashe"

    //let isRain = true
    //let temp = 20
    //let plant = "Earth"

    //temp = temp + 2
    //console.log(temp)

//example Question 1:
/**
 * Converting Tempreature
 * 
 * Celsius-to-Fahrenheit formula:
 * 
 * F = C x 1.8 + 32
 */

    //let celsius = 10;
    //let fahrenheit = celsius * 1.8 + 32

    //console.log(fahrenheit);  //Code is correct//

// Equality example //
    //let bool = "1" == 1
    //let bool2 = "1" === 1

    //console.log(bool, bool2)



// Conditianals example //

//Example 1: //
    //let subscribed = false
    //let loggedIn = true

    //if (subscribed === true) {
        //console.log("show the video")
    //}
    //else if (loggedIn === true) {
        //console.log("Tell the user to upgrade their subscription")
    //}
    //else {
        //console.log("tell user to log into account")
    //}

// Example 2: //

    //let cash = 100
    //let price = 200
    //let difference = cash - price 

    //if (cash > price ) {
    //    console.log(`you paid extra - here's ${difference} dollars your change`)
    //}
    //else if (cash === price) {
    //    console.log("you paid the exact amount, have a nice day!")
    //}
    //else {
    //    console.log(`not enough money - you still owe ${difference * -1} dollars`)
    //}

// Example 3: //

    //let cash = 50
    //let price = 40
    //let isStoreOpen = false

    //if (cash >= price || !isStoreOpen) {
      //  console.log("print the receipt")
    //}

// Ternary Operators //
   
//example 1: //
    //let hot = false
    //hot ? console.log("weather is hot outside") : console.log("weather is cold")

//example 2: //
    //let subscribed = true
    //let loggedIn = true

    //let str = subscribed && loggedIn ? 'show the video' : 'hide the video'
    //console.log(str)

//example 3: //
    //let cash = 50
    //let price = 40
    //let isStoreOpen = true

    //let str = cash >= price && isStoreOpen ? 'give receipt' : 'do not give receipt'
    //console.log(str)   

// Loops //

//example 1: with while loop //
    //let count = 1
   
    //while (count <= 100) {
        //console.log(count)
        //count = count + 1
    //}

//example 2: with for loop //
    //for (let i = 0; i < 3; i++) {
      //  console.log(i + 1);
    //}

/** Example 3:
 * Write a for-loop that loops through 1 to 2
 * If the number is divisble by 3, print "Frontend"
 * if the number is divisble by 5, print "Simplifted"
 * If the number is divisble by 3 and 5 print "Frontend Simplifted"
 * if the number is not divisble by either 3 or 5, print the number */

/**
 * for (let i = 1; i <= 20; ++i) {
    if (i % 3 === 0 && i % 5 ===0) {
        console.log(`${i} -> Frontend Simplifted`)
    }
    else if (i % 3 === 0) {
        console.log(`${i} -> frontend`)
    }
    else if (i % 5 === 0) {
        console.log(`${i} -> Simplifted`)
    }
    else {
        console.log(`${i} -> ${i}`)
    }
}
 */

/**Example 4:
 * Print out every character from the string:
 * "Frontend Simplifited"
*/
//const str = "Frontend Simplified"

//to loop over everithing in the string is to loop over until "i" is less than the string//
//for (let i = 0; i < str.length; ++i) {
    //console.log(str[i])
//}



// Functions //

//Example 1:  Function Def//
//function welcomePersonToFES(name) {
      //  console.log(`Welcome to FES, ${name}`)
    //}
// call the function 
    //welcomePersonToFES('munahse');
    //welcomePersonToFES('munahse2');
    //welcomePersonToFES('munahse3');

//Example 2: //
   // function sumOfTwoNumbers(num1, num2) {
     //  return num1 + num2
    //}

    //console.log(sumOfTwoNumbers(10, 10));

/** Example 3
 * Create a function that converts a Celsius to Fahrenheit
 * 
 * Celsius to Fahrenheit formula:
 *   F = C x 1.8 + 32
 * 
 * example:
 * convertCelsiusToFahrenheit(0) ->
 *  Solution 1:
 *  function convertCelsiusToFahrenheit(celsius) {
        return fahrenheit = celsius * 1.8 + 32
    }

    console.log(convertCelsiusToFahrenheit(16))
 Solution 2:
    const convertCelsiusToFahrenheit(celsius) => {
        return celsius * 1.8 + 32
    }

    console.log(convertCelsiusToFahrenheit(0))
 */



// Arrays //
//example 1: //

    //let arr = [20, 30, 40, 50, 100]

    //first element of array
    //console.log(arr[0])
    //last element of array
    //console.log(arr[arr.length - 1])

//example 2; //
 //let arr = [20, 30, 40, 50, 100]

 //adding an element to end of array 
    //arr.push(200)


 //console.log(arr)

//example 3(long version): //
//let arr = [20, 30, 40, 50, 100]

//let newArr = arr.filter((element) => {
  //  console.log(element)
    //if (element < 50) {
      //  return true;
    //}
//})
//console.log(newArr)

//Short version:
   // let newArr = arr.filter(element => element < 50 )
  
  //  console.log(newArr)

/**
 * example 4:
 * Filter out all the 'FAIL' elements in an array
 * 
 * -examples=
 * ['A+', 'A', 'FAIL'] => ['A+', 'A']
 * ['FAIL', 'FAIL', 'B'] => ['B']
 * ['FAIL'] => []
 */


//    let grades = ['A+', 'A', 'FAIL']

//long way =
//    let goodGrades = grades.filter((element) => {
//        console.log(element)
//        if (element !== 'FAIL') {
//            return true;
//        }
//    })

//short way =
    //let goodGrades = grades.filter(element => element !== 'FAIL')

//  console.log(goodGrades)

/**
 * example 5:
 * Filter out all the 'FAIL' elements in an array
 * without using the Array.filter method
 * 
 */
 
//    let grades = ['A+', 'A', 'FAIL']

// Create a new empty array called 'goodGrades'
// add the current element onto 'goodGrades' only if
// the current element is not equal to 'FAIl
//    let goodGrades = []

//  for (let i = 0; i < grades.length; ++i) {
//    if (grades[i] !== 'FAIL') {
//        goodGrades.push(grades[i]);
//    }
//}
//  console.log(goodGrades);

//example 6:
//  let arr = [1, 4, 9, 16]

//  let newArray = arr.map(element => 'dog')

//  console.log(newArray)

//example 7:
/**
 * Turn each element in an array of dollars into cents
 * 
 * -examples=
 * [1, 5, 10, 3] => [100, 500, 1000, 300]
 */

//    let dollars = [1, 5, 10, 3];

//long way: //
//    let cents = dollars.map(element => {
//        return element * 100
//    })

//short way:
//    let cents = dollars.map(element => element * 100)
//    console.log(cents)

//example 8:
/**
 * Turn each element in an array of dollars into cents
 * without using the map method 
 * 
 */
    //let dollars = [1, 5, 10, 3];
// create new cents array
    //let cents = [];
// loop over every element in dollars 
    //for (let i = 0; i < dollars.length; ++i) {
      //  cents.push(dollars[i] * 100); 
        //multiply the element by 100
        // add ths element onto cents array
    //}

// console log cents
    //console.log(cents);




    /// Objects ///

//example 1: //

//let user = {
  //  username: 'Munashe',
    //email: 'munahse@email.com'
//}

//console.log(user.username);

//example 2: when object is in an array //

//let users = [
  //  {
    //username: 'Munashe',
    //email: 'munahse@email.com',
//}, 
//{
  //  username: 'Munashe2',
    //email: 'munahse2@email.com',
//}
//];

//console.log(users[0].username);

//example 3 login function:

/**
 * let users = [
    {
        username: 'Munashe',
        email: 'munashe@email.com',
        password: 'test123',
    }, 
    {
        username: 'Munashe2',
        email: 'munahse2@email.com',
        password: '123test',
    },
    {
        username: 'jow',
        email: 'jow@email.com',
        password: '123jow',
    },
];

function login(email, password) {
    for (let i = 0; i < users.length; ++i) {
        if (users[i].email === email) {
          console.log(users[i]);
          if (users[i].password === password) {
            console.log('log the user in - the details are correct')
          }
          else {
            console.log('password is incorrect - try again')
          }
          return;
        }
    }
    console.log('could not find an email that matches')
}

login('munashe@email.com', 'test123');
 */

/**
 * Example 4
 * create a register function that accepts:
 * - username
 * - email
 * - password
 * - subscriptionStatus
 * - discordId
 * - lessonsCompleted
 * 
 * Inside your register function:
 * 1. create a user object
 * 2. push this user object onto the 'users array
 * 
 * let users = [
    {
        username: 'Munashe',
        email: 'munashe@email.com',
        password: 'test123',
    }, 
    {
        username: 'Munashe2',
        email: 'munahse2@email.com',
        password: '123test',
    },
    {
        username: 'jow',
        email: 'jow@email.com',
        password: '123jow',
    },
];

function login(email, password) {
    for (let i = 0; i < users.length; ++i) {
        if (users[i].email === email) {
          console.log(users[i]);
          if (users[i].password === password) {
            console.log('log the user in - the details are correct')
          }
          else {
            console.log('password is incorrect - try again')
          }
          return;
        }
    }
    console.log('could not find an email that matches')
}

login('munashe@email.com', 'test123');

function register(user) {
    users.push(user);
}

    register( {
        username: "test",
        email: "testemail@email.com",
        password: "test123",
        subscriptionStatus: "VIP",
        discordId: "test#0001",
        lessonsCompleted: [0, 1]
    });

    console.log(users);
 * 
 */

// DOM //

// first way of accessing an element //
    //console.log(document.querySelector('#title'));
// Use # for ID, use '.' for a class

// second way of accessing an element(if you have an ID)
    //console.log(document.getElementById('title'))

//example 3: to change the html element //
    //console.log(document.querySelector('#title').innerHTML = 'Frontend')
//example 4: to change the html element with what you have already
    //console.log(document.querySelector('#title').innerHTML += 'Frontend')

// example 5: change CSS //
    //document.querySelector('#title').style.color = 'red'
    //document.querySelector('#title').style.fontSize = '48px'

//example 6: click listenr//
    //function changeTitletoRed() {
    //  document.querySelector('#title').style.color = 'red'
        //console.log('Clicked');
    //}

//example 7: theme changer 

    function toggleDarkMode() {
      document.querySelector('body').classList.toggle("dark-theme")
        console.log('Clicked');
    }