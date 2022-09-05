class Array{

    constructor(){
        this.length=0;
        this.arr=[];
    }

    push(...ele){
        console.log("ele:",ele);

        ele.forEach((element) => {
            this.arr.push(element);
            this.length++;
        });
       

        return this.arr;
    }

    // Pop

    remove(){
        this.arr.pop();
        this.length--;
    }
}


let arr1= new Array();
arr1.push(1,2,3,4,5,6)
arr1.remove();
console.log("arr1:",arr1);