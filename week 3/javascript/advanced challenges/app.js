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