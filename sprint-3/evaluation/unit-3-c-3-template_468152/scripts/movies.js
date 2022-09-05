// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let id;
let BooKMovieArr=JSON.parse(localStorage.getItem("movie"))||[];

let amountArr = JSON.parse(localStorage.getItem("amount"))
// console.log(amountArr)
let sum = 0;
for (let i = 0; i < amountArr.length; i++) {
    sum += Number(amountArr[i]);
}

document.querySelector("#wallet").innerHTML = sum;
// http://www.omdbapi.com/?apikey=88ae7f05&s=thor

async function getData() {

    try {
        let query = document.querySelector("#search").value;

        let url = await fetch(`https://www.omdbapi.com/?apikey=88ae7f05&s=${query}`);

        let { Search } = await url.json();
        let data= Search;
        display(data);
    }catch(err){
        console.log(err);
    }
}


function display(data){
    
    // console.log(data)
    document.querySelector("#movies").innerHTML=null

    data.forEach(function(el){
        // console.log(el);
        let div = document.createElement("div");
            div.setAttribute("class","movie_tab");

        let image= document.createElement("img");  
            image.src=el.Poster

        let title = document.createElement("p");
            title.innerText=el.Title

        let btn = document.createElement("button");
            btn.innerText=`book now`
            btn.addEventListener("click",function(){
                BookAdd(el);
            })
            btn.setAttribute("class","book_now");



        div.append(image,title,btn);
        document.querySelector("#movies").append(div);
    })
}



function debouncing(func,delay){

    if(id){
        clearTimeout(id);
        console.log(id);
    }

    id=setTimeout(function(){
        func();
        console.log(id);
    },delay)
}

function  BookAdd(el){
    
    BooKMovieArr.push(el)

    localStorage.setItem("movie",JSON.stringify(BooKMovieArr));
    window.location.href="checkout.html"
}
