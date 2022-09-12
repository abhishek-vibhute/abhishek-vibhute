/*

https://jsonmock.hackerrank.com/api/articles

*/
let url = "https://jsonmock.hackerrank.com/api/articles";

// let res = fetch(url);

// console.log(res); // it gives fulfilled promise

// fetch(url)
//     .then((res) => res.json())
//     .then((res) => console.log(res));

// OR

let fetch_arr = [];
for(let i=1; i<=5; i++){
    let f = fetch(`${url}?page=${i}`).then((res) => res.json());
    fetch_arr.push(f);
}

let getData = async () => {

    // try {
    //     let res = await fetch(url);
    //     res = await res.json();
    //     renderDom(res.data);
    //     // console.log(document.getElementById("container").children);
    //     console.log(res);
    // } catch (err) {
    //     console.log(err);
    // } finally {
    //     console.log("Hello");
    // }

    // OR

    try {
        let data = await Promise.all(fetch_arr);
        // ([
        //     fetch(`${url}?page=1`).then((res) => res.json()), //a
        //     fetch(`${url}?page=2`).then((res) => res.json()), //b
        //     fetch(`${url}?page=3`).then((res) => res.json()), //c
        // ])

        console.log(data);

        let all_data = [];

        for(let res of data) {
            all_data.push(...res.data);
        }

        console.log(all_data);

        renderDom(all_data)
    }
    catch(err) {
        console.log(err);
    }
    
};

getData();

let div = ({author,title,comments}) => {
    let div = document.createElement('div');
    let t = document.createElement('h3');
    let auth = document.createElement('p');
    let comm = document.createElement('p');

    t.innerText = title;
    auth.innerText = author;
    comm.innerText = comments;

    div.append(t,auth,comm);

    return div;
}

let renderDom = (data) => {
    // console.log(data);
    let cont = document.getElementById("container");
    data.forEach((el) => {
        let article = div(el);
        cont.append(article);
    });
};

// append all the data from page 1 to 5 in a single page

