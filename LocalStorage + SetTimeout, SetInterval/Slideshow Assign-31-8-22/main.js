
// Slideshow - 31-8-22

let image =
[
    "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3BvcnRzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnRzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3BvcnRzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3BvcnRzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3BvcnRzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNwb3J0c3xlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHNwb3J0c3xlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1628891890467-b79f2c8ba9dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHNwb3J0c3xlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1551524559-8af4e6624178?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHNwb3J0c3xlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHNwb3J0c3xlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1530870110042-98b2cb110834?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHNwb3J0c3xlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1617052322729-d9d0b930573c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fHNwb3J0c3xlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1499754162586-08f451261482?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmJhfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1532040683343-edbde6dd500d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmJhfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmJhfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1533923156502-be31530547c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bmJhfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1574290139543-b3adb08494c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG5iYXxlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1550865811-d7814cebc70c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGhvY2tleXxlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1561917488-91aa9bc0a3a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGhvY2tleXxlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1468465226960-8899e992537c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGhvY2tleXxlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1631194758628-71ec7c35137e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y3JpY2tldHxlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vdGJhbGx8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1480099225005-2513c8947aec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cnVnYnl8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
];

let id;
let i=0;

let slideshow = () => {
    let container = document.getElementById('container');

    id = setInterval(() => {
        if(i === image.length){
            i=0;
        }
        console.log(i);

        let img = document.createElement('img');
        img.src = image[i];
        container.innerHTML = null;
        container.append(img);
        i++;
    },3000);

};

let start = () => {
    slideshow();
}

let stop = () => {
    clearInterval(id);
}

