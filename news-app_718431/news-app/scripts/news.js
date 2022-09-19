

let News_DATA= JSON.parse(localStorage.getItem('news'));
// console.log(News_DATA)




let user = JSON.parse(localStorage.getItem("user"));
// console.log(user)



function UserDisplay(user){



    // console.log(user)

    let img = document.createElement("img");
    img.src = user.image;

    let name = document.createElement("h3");
    name.innerText = `Name : ${user.name}`;
    let email = document.createElement("p")
    email.innerText = `Email : ${user.email}`
    let country = document.createElement("p")
    country.innerText = user.country;
    document.querySelector("#show_news").append(img,name,email,country)
}

UserDisplay(user);



function display(News_DATA){

    console.log(News_DATA)
}

display(News_DATA);