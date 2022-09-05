// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time


let BooKMovieArr=JSON.parse(localStorage.getItem("movie"))
// console.log(BooKMovieArr)

let amountArr = JSON.parse(localStorage.getItem("amount"))
// console.log(amountArr)
let sum = 0;
for (let i = 0; i < amountArr.length; i++) {
    sum += Number(amountArr[i]);
}

document.querySelector("#wallet").innerHTML = sum;



document.querySelector("#confirm").addEventListener("click",BookMovie);

function BookMovie(){
    
    if(sum<100){
        alert("Insufficient Balance!")
    }else{
        alert("Booking successful!")
    }
}


function display(BooKMovieArr){
    
    BooKMovieArr.forEach(function(el){

        let div=document.createElement("div");

        let img= document.createElement("img");
            img.src=el.Poster

        let title=document.createElement("h1");
            title.innerText=el.Title



        div.append(title,img);

        document.querySelector("#movie").append(div);
    })
}
display(BooKMovieArr)