

let News_data = JSON.parse(localStorage.getItem("user"));
// console.log(News_data)


function sidebarData(News_data) {

    console.log(News_data)

    let img = document.createElement("img");
    img.src = News_data.image;

    let name = document.createElement("h3");
    name.innerText = `Name : ${News_data.name}`;
    let email = document.createElement("p")
    email.innerText = `Email : ${News_data.email}`
    let country = document.createElement("p")
    country.innerText = News_data.country;

    document.querySelector("#sidebar").append(img, name, email, country)
}
sidebarData(News_data);

document.querySelector("#in").addEventListener("click", IndiaFun);

async function IndiaFun() {

    let india = `in`

    try {
        let url = await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=${india}`);

        let { articles } = await url.json();
        let data = articles;
        display(data);
    } catch (err) {
        console.log(err);
    }

}

function display(data) {
    console.log(data);
    document.querySelector("#news_container").innerHTML=null
    data.forEach(({ urlToImage, title, author }) => {

        let div = document.createElement("div");
        div.setAttribute("class", "news");
        div.addEventListener("click",function(){
            MyFunNews(title,urlToImage,author)
        })
        let img = document.createElement("img");
        img.src = urlToImage

        let Title = document.createElement("h3");
        Title.innerText = title

        let Author = document.createElement("p");
        Author.innerText = author


        div.append(img, Title, Author);
        document.querySelector("#news_container").append(div);

    })
}



document.querySelector("#us").addEventListener("click", UsaFun);

async function UsaFun() {

    let Usa = `us`

    try {
        let url = await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=${Usa}`);

        let { articles } = await url.json();
        let data = articles;
        display(data);
    } catch (err) {
        console.log(err);
    }

}

UsaFun()


function display(data) {
    console.log(data);
    document.querySelector("#news_container").innerHTML=null
    data.forEach(({ urlToImage, title, author }) => {

        let div = document.createElement("div");
        div.setAttribute("class", "news");
        div.addEventListener("click",function(){
            MyFunNews(title,urlToImage,author)
        })
        let img = document.createElement("img");
        img.src = urlToImage

        let Title = document.createElement("h3");
        Title.innerText = title

        let Author = document.createElement("p");
        Author.innerText = author


        div.append(img, Title, Author);
        document.querySelector("#news_container").append(div);

    })
}




document.querySelector("#ch").addEventListener("click", ChinaFun);

async function ChinaFun() {

    let China = `ch`

    try {
        let url = await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=${China}`);

        let { articles } = await url.json();
        let data = articles;
        display(data);
    } catch (err) {
        console.log(err);
    }

}




function display(data) {
    console.log(data);
    document.querySelector("#news_container").innerHTML=null
    data.forEach(({ urlToImage, title, author }) => {

        let div = document.createElement("div");
        div.setAttribute("class", "news");
        div.addEventListener("click",function(){
            MyFunNews(title,urlToImage,author)
        })
        let img = document.createElement("img");
        img.src = urlToImage

        let Title = document.createElement("h3");
        Title.innerText = title

        let Author = document.createElement("p");
        Author.innerText = author


        div.append(img, Title, Author);
        document.querySelector("#news_container").append(div);

    })
}


document.querySelector("#uk").addEventListener("click", UKFun);

async function UKFun() {

    let UK  = `uk`

    try {
        let url = await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=${UK }`);

        let { articles } = await url.json();
        let data = articles;
        display(data);
    } catch (err) {
        console.log(err);
    }

}



function display(data) {
    console.log(data);
    document.querySelector("#news_container").innerHTML=null
    data.forEach(({ urlToImage, title, author }) => {

        let div = document.createElement("div");
        div.setAttribute("class", "news");
        div.addEventListener("click",function(){
            MyFunNews(title,urlToImage,author)
        })
        let img = document.createElement("img");
        img.src = urlToImage

        let Title = document.createElement("h3");
        Title.innerText = title

        let Author = document.createElement("p");
        Author.innerText = author


        div.append(img, Title, Author);
        document.querySelector("#news_container").append(div);

    })
}






document.querySelector("#nz").addEventListener("click", NewZealandFun);

async function NewZealandFun() {

    let UK  = `nz`

    try {
        let url = await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=${UK }`);

        let { articles } = await url.json();
        let data = articles;
        display(data);
    } catch (err) {
        console.log(err);
    }

}




function display(data) {
    console.log(data);
    document.querySelector("#news_container").innerHTML=null
    data.forEach(({ urlToImage, title, author }) => {

        let div = document.createElement("div");
        div.setAttribute("class", "news");
        div.addEventListener("click",function(){
            MyFunNews(title,urlToImage,author)
        })
        let img = document.createElement("img");
        img.src = urlToImage

        let Title = document.createElement("h3");
        Title.innerText = title

        let Author = document.createElement("p");
        Author.innerText = author


        div.append(img, Title, Author);
        document.querySelector("#news_container").append(div);

    })
}




document.querySelector("#search").addEventListener("keypress",SearchFun);

 async function SearchFun(event){


    let query = document.querySelector("#search").value;
    if(event.key=="Enter"){
        
        try{

            let url = await fetch(`https://masai-mock-api-2.herokuapp.com/news?q=${query}`);

            let {articles} = await url.json();
            let data = articles
            News_display(data)
        }catch(err){
            console.log(err);
        }
    }
}

SearchFun();


function News_display(data){

    document.querySelector("#news_container").innerHTML=null
    data.forEach(({ urlToImage, title, author }) => {

        let div = document.createElement("div");
        div.setAttribute("class", "news");
        div.addEventListener("click",function(){
            MyFunNews(title,urlToImage,author)
        })

        let img = document.createElement("img");
        img.src = urlToImage

        let Title = document.createElement("h3");
        Title.innerText = title

        let Author = document.createElement("p");
        Author.innerText = author


        div.append(img, Title, Author);
        document.querySelector("#news_container").append(div);

    })

}

function  MyFunNews(title,urlToImage,author){
    let img = document.createElement("img");
    img.src = urlToImage
    
    let Title = document.createElement("h3")
    Title.innerText=title;

    let Author = document.createElement("h3")
        Author.innerText=author
  
    

    localStorage.setItem('news',JSON.stringify(img,Title,Author));
    window.location.href="news.html"
}