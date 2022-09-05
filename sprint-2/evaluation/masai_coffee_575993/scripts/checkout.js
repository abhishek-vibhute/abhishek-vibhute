
document.querySelector("#confirm").addEventListener("click",MyCheckOut);


function MyCheckOut(event){
    event.preventDefault();

    let s=setTimeout(function(){
        alert (" Your order is accepted ");
    },0000)


    let x=setTimeout(function(){
        alert("Your order is being Prepared ");
    },3000);


    let y=setTimeout(function(){
        alert("Your order is being packed  ");
    },8000);


    let z= setTimeout(function(){
        alert(" Your order is out for delivery ");
    },10000);


    let a =setTimeout(function(){
        alert("Order delivered");
    },12000)

}