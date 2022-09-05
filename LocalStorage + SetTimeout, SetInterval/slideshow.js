

let image = [
    "https://media.istockphoto.com/photos/golgappa-panipuri-khatta-mittha-fuchka-a-spicy-indian-snacks-ready-to-picture-id1384617265?b=1&k=20&m=1384617265&s=170667a&w=0&h=VerSJkuIIuhJHSIM4mCjB6KgoOJUnH62zM_E-m-OyCk=",
    "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9tb3N8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
    "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
    "https://images.unsplash.com/photo-1598233847491-f16487adee2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWlzYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
];

let id;
let i = 0;

let slideshow = () => {
    let container = document.getElementById('container');

    id = setInterval(() => {
        if(i === image.length){
            i = 0;
        }
        console.log(i);// to show how it works in console
        let img = document.createElement('img');
        img.src = image[i];
        container.innerHTML = null;
        container.append(img);
        i++;
    },2000);

    // setTimeout - run only once
    // setInterval - keep on running unless stopped
};

// closures

// slideshow();

let stop = () => {
    clearInterval(id);
}
let start = () => {
    slideshow();
}