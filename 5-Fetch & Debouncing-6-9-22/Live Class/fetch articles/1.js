// `https://jsonmock.hackerrank.com/api/articles`

let url = "https://jsonmock.hackerrank.com/api/articles";

let fetch_arr = [];
for (let i=1; i<=5; i++) {
    let f = fetch(`${url}?page=${i}`).then((res) => res.json());
    fetch_arr.push(f);
}

let getData = async () => {
    try {
        let data = await Promise.all(fetch_arr);
        console.log(data);

        let all_data = [];
        for (let res of data) {
            all_data.push(...res.data);
        }
        console.log(all_data);

        renderDom(all_data);
    }
    catch (err) {
        console.log(err);
    }
};

getData();

let div = ({ author, title, num_comments }) => {
    let div = document.createElement('div');
    let t = document.createElement('h3');
    let auth = document.createElement('p');
    let comm = document.createElement('p');

    t.innerText = title;
    auth.innerText = author;
    comm.innerText = num_comments;

    div.append(t, auth, comm);

    return div;
};

let renderDom = (data) => {
    // console.log(data);
    let cont = document.getElementById('container');
    data.forEach((el) => {
        let article = div(el);
        cont.append(article);
    });
};