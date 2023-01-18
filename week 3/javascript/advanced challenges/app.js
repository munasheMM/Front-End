//Q1: Show rating
//Given a rating, display a star (*) for each
//full rating and a full-stop(.) for each half rating
/**
 * Method 1:
 * function showRating(rating) {
    let ratings = "";
    for (let i = 0; i < Math.floor(rating); ++i) {
        ratings = ratings + "*"
        if (i !== Math.floor(rating) -1) {
            ratings = ratings + " "
        }   
    }
    if (!Number.isInteger(rating)) {
        ratings = ratings + " ."
    }
    return ratings;
}

console.log(showRating(4.5));
 * 
 */

//Q2: Sort by lowest to highest price
// Given an array of numbers, return the price sorted by low to high.
/**
 * function sortLowToHigh(numbers) {
    return numbers.sort((a, b) => a - b);
    //use to sort by numbers
}

console.log(sortLowToHigh([1,5,0,10,4]))
 *  
 */

//Q3: Sort by highest to lowest price
//Given an array of objects, return the prices sorted by high to low
/**
 * function sortHighTolow(numbers) {
    return numbers.sort((a, b) => b.price -a.price);
}

console.log(
    sortHighTolow([
        {id: 1, price: 50},
        {id: 2, price: 30},
        {id: 3, price: 60},
        {id: 4, price: 10}
    ])
);
 *
 */

//Q4: Promises. Watch on youtube
//- "the async await episode I promised(fireship"
//- "Async await javascript ES7(Techsith)"
//- "Async JS Crash Course - Callbacks, Promises, Async Await(Travsery Media"

//Q5: Find all the posts by a single user
// Call an API and return all the posts by any given user ID
/**
 *async function postsByUser(userId) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/posts");

    const result = await promise.json()

    const posts = result.filter(element => element.userId === userId)
    
    console.log(posts)
}

postsByUser(4); 
 * 
 */


//Q6: First 6 Incomplete Todos
//Call an API and return the first 6 incomplete
// todos from the result. 
/**
 * async function firstSixIncomplete(userID) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/todos");

    const result = await promise.json()

    const incompleteTasks = result.filter(element => !element.completed).slice(0, 6);

    console.log(incompleteTasks);
}

firstSixIncomplete(6)
 * 
 */
