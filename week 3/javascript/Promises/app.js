//example1 : unlocking the API data
    //fetch("https://jsonplaceholder.typicode.com/users/1")
const emailRef = document.querySelector(".email");

/**
 * //1. 'Then' method
fetch("https://jsonplaceholder.typicode.com/users/1")
.then(response => {  
   return response.json()
})
.then((data) => {
    console.log(data);
    emailRef.innerHTML = data.email
});
 */

// 2. 'Async/Await' method
/**
 * async function main() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
    const data = await response.json()
    console.log(data)
    emailRef.innerHTML = data.emails
}

main();
 */

