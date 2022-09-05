// LocalStorage
// setTimeout and setInterval

let submit = () => {
    // Collecting the info 
    let name = document.getElementById('name').value;
    let brand = document.getElementById('brand').value;
    let price = document.getElementById('price').value;

    // Form an object
    let p = new product(name, brand, price);
    // console.log(p); //to show in console

    let products = JSON.parse(localStorage.getItem('products')) || [];
    // above products is like bag, where we will push the data in new created object "p".

    // console.log(products); // output shows null.
    // null = false

    // if (products) {
    //     products = [];
    // }else {
    //     products.push(p);
    // }
    // instead of this you can directly add "  || []" at the end of parse code like written above

    products.push(p);

    localStorage.setItem('products', JSON.stringify(products));

    console.log(products)


}

// Two types of creating an object
function product(name, brand, price) {
    this.name = name;
    this.brand = brand;
    this.price = price;    
}

// Store it to local storage
// render it (append this) to the DOM


// Second method of creating an object
// let print = () => {
//     this.name = "Abhishek";
//     // this always refers to Global Object
//     // But we cannot use it here in this problem
// }

// print();
// console.log(name);


// in first method, it cretes a local object and second method, it creates a global object. Here we need local object specific to product only.