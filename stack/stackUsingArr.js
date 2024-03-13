class ArrayStack {
    constructor(){
        this.arr = []
        this.size = 0
    }

    push(value){
        this.arr.push(value)
        this.size++
    }

    pop(){
        if(this.size===0){
            return
        }else{
            this.arr.pop()
            this.size--
        }
    }

    print(){
        if(this.size === 0){
            console.log("Stack empty");
        }else{
            console.log(this.arr.join(" "));
        }
    }
}


