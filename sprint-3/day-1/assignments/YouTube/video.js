let VideoData = JSON.parse(localStorage.getItem("Video"))

let display = (videoData) =>{
    

    videoData.forEach((el)=>{
        


        let ifram = document.querySelector("#ifram");

        ifram.src=`https://www.youtube.com/embed/${el}`  
       
    })
   
}

display(VideoData)


