

let addProducts= JSON.parse(localStorage.getItem("products"))||[];

display(addProducts)
function display(addProducts){

    addProducts.forEach(function(el,index){


        let div=document.createElement("div");

        let type=document.createElement("h4");
            type.innerText=el.type

        let des=document.createElement("h4");
            des.innerText=el.desc;

        let price=document.createElement("h4");
            price.innerText=el.price;

        let image=document.createElement("img");
            image.src=el.image;

        let btn=document.createElement("button");
            btn.innerText="Remove Product";
            btn.addEventListener("click",function(){
                remove(index);
            })

            btn.style.cursor="pointer"
            

        div.append(image,type,des,price,btn);
        document.querySelector("#all_products").append(div);
    })
}

function remove(index){

    let data1=addProducts.filter(function(el,i){

        if(i==index){
            remove(el);
            window.location.reload();
        }else{
            return i!==index;
        }
    })

    localStorage.setItem("products",JSON.stringify(data1));

    
}



document.querySelector("#add_more_product").addEventListener("click",MYPageLink);

function MYPageLink(event){
    event.preventDefault();

    window.location.href="index.html";
}