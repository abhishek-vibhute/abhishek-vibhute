let VideoData = JSON.parse(localStorage.getItem("Video")) || [];

// let Api = "AIzaSyBBI-yKbBCLyC4AcUHgHhWxiKVQdNZTpkY";

let getData = async () => {

    let query = document.querySelector("#input-search").value;
    try {
        let url = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${query}&key=AIzaSyBwiyeN-iq4KwHfreLbMqwOTJ7kVgERWes`);

        let {items} = await url.json();

        let data = items
        display(data);
    }catch(err){
        console.log(err)
    }
   
}
getData()

let display= (data) =>{
    console.log(data);
    document.querySelector("#display_Data").innerHTML=null;
    data.forEach(({snippet:{title,thumbnails:{high:{url}}},id:{videoId}}) =>{


        let div = document.createElement("div");
            div.setAttribute("id","thumbnail")
            div.addEventListener("click",()=>{
                VideoPlayer(videoId);
            });


        let img = document.createElement("img");
            img.src=url;

        let name = document.createElement("p");
            name.innerText=title;

        div.append(img,name);
        document.querySelector("#display_Data").append(div);
    })
}


let VideoPlayer = (videoId) =>{

    VideoData.push(videoId)
    localStorage.setItem("Video",JSON.stringify(VideoData))
    window.location.href="./video.html"
    // console.log(data);
    
    
}