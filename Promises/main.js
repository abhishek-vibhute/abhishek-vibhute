// JS is synchronous and single threaded
// Synchronous means line by line
//  Single threaded - one thing at a time

// fetch
// setTimeout
// setInterval

// 1. Call Stack
// 2. Web APIs
// 3. Callback queue
// 4. Event Loop

setTimeout(() => {
    console.log('Hii');
},5000);

setTimeout(() => {
    console.log('Hello');
},3000);

(function print(){
    console.log("Hey");
})();



// IIFE - Immediately invoked funciton execution