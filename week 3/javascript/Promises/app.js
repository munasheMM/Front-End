//example1 : unlocking the API data
    //fetch("https://jsonplaceholder.typicode.com/users/1")
//const emailRef = document.querySelector(".email");

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

//example 2: creating a promise//
/**
 * const statusRef = document.querySelector(".status");

function getSubscrptionStatus() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("VIP");
        }, 2000);
    });
}

//1. then
//getSubscrptionStatus().then(response => console.log(response))

//2. Aync/Await
async function main() {
    const status = await getSubscrptionStatus();
    statusRef.innerHTML = status;
}

main();
 * 
 */

//example 3:
/**
 * 1. Create a function called 'getVideo'
 * 2. Accept a parameter called 'subscriptionStatus'
 * 3. Return a new Promise inside of the function that:
 *      if "VIP" resolve("show video")
 *      if "FREE" resolve("show trailer")
 *      otherwise reject("no video")
 * 4. console.log the result of getVideo() in main()
 * 
 * const statusRef = document.querySelector(".status");
const videoRef = document.querySelector(".video");

function getSubscrptionStatus() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(undefined);
        }, 2000);
    });
}

function getVideo(subscriptionStatus) {
    return new Promise((resolve, reject) => {
        if (subscriptionStatus === 'VIP') {
            resolve("Show video")
        }
        else if (subscriptionStatus === 'FREE') {
            resolve("Show tralier")
        }
        else {
            reject("no video")
        }
    })
}

async function main() {
    const status = await getSubscrptionStatus();
    statusRef.innerHTML = status;
    try {
       console.log(await getVideo(status)) 
    }
    catch (e) {
        console.log(e)
        videoRef.innerHTML = e;
    }   
}

main();
 * 
 */

