
let append = () => {
    let products = JSON.parse(localStorage.getItem('products'));

    let container = document.getElementById('container');

    container.innerHTML = null;

    // this is written in destructuring -- (({name, brand, price})

    products.forEach(({name, brand, price}, index) =>{
        let div = document.createElement('div');
        let h3 = document.createElement('h3');
        h3.innerText = name;
        let b = document.createElement('p');
        b.innerText = brand;
        let p = document.createElement('p');
        p.innerText = price;

        // how to remove
        let remove_btn = document.createElement('button');
        remove_btn.innerText = "Remove"

        // method 1
        remove_btn.onclick = () => {
            remove(index);
        }
        // add this index above in forEach destructuring

        // method 2
        // remove_btn.addEventListener("click", () => {
        //     remove(index);
        // })

        div.append(h3, b, p, remove_btn);
        container.append(div);
    });
};

append();

// suppose there is an array - [a,b,c,d,e];
// 1st question - what to remove?
// identifier to remove is index. SO we used 'id' there

let remove = (index) => {
    let products = JSON.parse(localStorage.getItem('products'));
    products.splice(index,1);
    localStorage.setItem('products',JSON.stringify(products));
    append();
}