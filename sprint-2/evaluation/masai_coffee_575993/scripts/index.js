// Add the coffee to local storage with key "coffee"
// https://masai-api.herokuapp.com/coffee/menu

let CoffeeData =JSON.parse(localStorage.getItem("coffee"))||[];
async function getData(){
    try{

        let x= await fetch(`https://masai-api.herokuapp.com/coffee/menu`);

        let data = await x.json();

            display(data.menu.data)
    }catch(err){
        console.log(err);
    }
}
getData()


function display(data){
    data.forEach(function(el,index){
        let div = document.createElement("div");
            // div.setAttribute("",)

        let img = document.createElement("img");   
            img.src= el.image


        let name =document.createElement("h2");
            name.innerText=`Name -${el.title}`

        let price =document.createElement("h2");
            price.innerText=`Price -${el.price}`


        let btn = document.createElement("button");
            btn.innerText="Add to bucket";
            btn.addEventListener("click",function(){
                addBucket(el,index)
            })
            btn.setAttribute("id","add_to_bucket");

        div.append(img,name,price,btn);

        document.querySelector("#menu").append(div);
    })
}

let count=0
function addBucket(el,index){
    CoffeeData.push(el);
    localStorage.setItem("coffee",JSON.stringify(CoffeeData));
    count++
    document.querySelector("#coffee_count").innerText=count;
}





