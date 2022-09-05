// MIMIC A TICKET BOOKING SYSTEM FUNCTIONALITY

let seats = 100;
let waiting = 110;

setInterval(() => {
    waiting--;
    console.log(waiting)
},1000);

// If you book a ticket :- 111;

let submit = () => {
    let name = document.getElementById('name').value;
    waiting++;

    let p = new Promise((res, rej) => {
        setInterval(() => {
            if(waiting <= seats){
                res('Confirmed');
            }
        });
    });

    p.then((res) => {
        alert((`${name}, Your Ticket is ${res}`));
    })
}