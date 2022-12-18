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

/** Write a for-loop that loops through 1 to 20
 * If the number is divisble by 3, print "Frontend"
 * if the number is divisble by 5, print "Simplifted"
 * If the number is divisble by 3 and 5 print "Frontend Simplifted"
 * if the number is not divisble by either 3 or 5, print the number */

for (let i = 1; i <= 20; ++i) {
    if (i % 3 === 0) {
        console.log(`${i} -> frontend`)
    }
    if (i % 5 === 0) {
        console.log(`${i} -> Simplifted`)
    }
}