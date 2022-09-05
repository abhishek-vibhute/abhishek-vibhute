// Store the wallet amount to your local storage with key "amount"

document.querySelector("#add_to_wallet").addEventListener("click",MyFun);

let amountArr=JSON.parse(localStorage.getItem("amount"))||[];
function MyFun(){
    

    let amount = document.querySelector("#amount").value;

    amountArr.push(amount);

    localStorage.setItem("amount",JSON.stringify(amountArr));

    // console.log(amountArr);

    let sum=0;
    for(let i=0;i<amountArr.length;i++){
        sum+=Number(amountArr[i]);
    }
    document.querySelector("#wallet").innerHTML=sum;

}


document.querySelector("#book_movies").addEventListener("click",MovieFun);

function MovieFun(){
    window.location.href="movies.html"
}