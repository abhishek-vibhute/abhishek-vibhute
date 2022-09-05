//store the products array in localstorage as "products"
document.querySelector("#products").addEventListener("submit",MyFun);

let addProducts= JSON.parse(localStorage.getItem("products"))||[];

function MyFunCF(type,desc,price,image){
    this.type=type;
    this.desc=desc;
    this.price=price;
    this.image=image;
}

function MyFun(event){
    event.preventDefault();
  
    let type=document.querySelector("#type").value;
    let desc =document.querySelector("#desc").value;
    let price =document.querySelector("#price").value;
    let image=document.querySelector("#image").value; 
   


    let addData= new MyFunCF(type,desc,price,image);
    
    addProducts.push(addData);
    
    localStorage.setItem("products",JSON.stringify(addProducts));
    console.log(addProducts);
}


document.querySelector("#show_products").addEventListener("click",PageLink);

function PageLink(event){
    event.preventDefault();
    window.location.href="inventory.html"
}