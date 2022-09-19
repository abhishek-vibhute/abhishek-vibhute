/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/


document.querySelector("#submit").addEventListener("click",MyFun);



function MyFun(){
   

    let name = document.querySelector("#name").value;
    let image = document.querySelector("#image").value;
    let email = document.querySelector("#email").value;
    let country = document.querySelector("#country").value;
        if(country=="India"){
            country=`in`
        }else if(country=="China"){
            country=`ch`
        }else if(country=="Newzeland"){
            country=`nz`
        }else if(country=="USA"){
            country=`us`
        }else if(country=="UK"){
            country=`uk`
        }

    let obj={
        name:name,
        image:image,
        email:email,
        country:country,
    }

   
    localStorage.setItem("user",JSON.stringify(obj));

}