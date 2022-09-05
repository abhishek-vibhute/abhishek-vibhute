// Promise

// pending
// Resolved
// Rejected

let p = new Promise((resolve,reject) => {
    // reject("Rejected");
    resolve("resolved");
});

// Handling a promise
// 1. .then and .catch :- catch
// 2. async await: - try catch

p.then((res)=>{
    console.log(res);
});

p.catch((err) => {
    console.log(err);
})

p.finally(() => {
    console.log("Finally");
});

sleep(delay) //promise
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

let func = async () = {
    
}

/*
create a sleep function
1. delay will be a number (5000)
2. The promise will be resolved after delay secs
3. If the delay param is not a number reject it
*/

function sleep (delay) {
    return new Promise ((res, rej) => {
        if(typeof delay !== number){
            rej("Delay is not a number")
        }
        setTimeout(() =>{
            res("resolved")
        }, delay);
    });
}

