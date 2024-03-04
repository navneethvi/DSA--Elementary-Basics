class Stack {
    constructor(){
        this.dataStore = []
        this.top = 0
    }

    size(){
        return this.top
    }

    push(value){
        this.dataStore[this.top++] = value
    }

    pop(){
        this.dataStore[this.top--]
    }

    clear(){
        this.top = 0
    }

    peak(){
        return this.dataStore[this.top-1]
    }

    print(){
        for(let i=this.top-1;i>=0;i--){
            console.log(this.dataStore[i]);
        }
    }

}

const stack = new Stack()
console.log(stack.size())
stack.push(20)
// console.log(stack.size());
stack.push(30)
stack.push(40)
// stack.print()
// stack.pop()
// stack.print()

// stack.size()
console.log(stack.peak());
