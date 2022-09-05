// On clicking remove button the item should be removed from DOM as well as localstorage.

let CoffeeData =JSON.parse(localStorage.getItem("coffee"))
display(CoffeeData);
function display(CoffeeData){
   CoffeeData.forEach(function(el,index){
        
        let div =document.createElement("div");
        
        let img =document.createElement("img"); 
            img.src=el.image;


        let name =document.createElement("h2");
            name.innerText=`Name -${el.title}`;

        let price =document.createElement('h2');
            price.innerText=`Price -${el.price}`


        let btn = document.createElement("button");
            btn.innerText="remove"
            btn.setAttribute("id","remove_coffee");
        btn.addEventListener("click",function(){
            remove(el,index)
        })
       div.append(img,name,price,btn);
        document.querySelector("#bucket").append(div);
    })
}



function remove(el,index){   
    let data = CoffeeData.filter(function(el,i){
        
        if(i==index){
            remove(el);
            window.location.reload();
        }
        else{
            return i!==index
        }
    })
    localStorage.setItem("coffee",JSON.stringify(data));
}

let sum=0;
function total(CoffeeData){

    CoffeeData.forEach(function(el,i){
        sum = sum+el.price
    })

}


total(CoffeeData)

document.querySelector("#total_amount").append(sum)