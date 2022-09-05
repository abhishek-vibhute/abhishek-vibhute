

let signUpData = [];
class User {

    #password;

    constructor(){
        this.organasation =`Masai`;
    }

    UserName(userName){

        let value = userName.includes("@")? false : true ;
        
        return value;
    }

    #Password(Password){

        let value = Password.includes("123")? false :true;
        
        return value;
    }

    Login(userName,password){
        if(userName==this.userName && password==this.#password){
            console.log("Login Suceeful");
        }else{
            console.log("Login ERror")
        }
    }


   


    Signup(userName,password){

        let isValidate = false;

        isValidate = this.UserName(userName) && this.#Password(password);

        if(isValidate){
            this.userName = userName;
            this.#password = password;

            signUpData.push(this);
         }else{
            console.log("error");
         }
    }
}

// let s1 = new User();

// s1.Signup("akash","akash");
// s1.Login("akash","akash");


// let s2 = new User();

// s2.Signup("shivam","shivam");

// console.log(signUpData);


class Student extends User{
    constructor(){
        super();
        this.numOfAssignements =0;
    }

    SubmitAssigement(){


        this.numOfAssignements++
        
    }
}

let s1 = new Student();

s1.Signup("shivam","shivamPass");
s1.Login("shivam","shivamPass");
s1.SubmitAssigement()  

console.log(s1.numOfAssignements);