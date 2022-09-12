console.log("CLOSURE");

// Closure is related to functions
// Nested functions
// there has to be dependency

function greet(){

    let n = 'raj'; // 

    return function () {

        // return function () { // open this for y()

            console.log(n);

        // } // open this for y()

    }
}

let x = greet();

x();

let y = x();

// y();


// DEBOUNCING

// -- Debouncing in JavaScript is a practice used to improve browser performance. There might be some functionality in a web page which requires time-consuming computations. If such a method is invoked frequently, it might greatly affect the performance of the browser, as JavaScript is a single threaded language

