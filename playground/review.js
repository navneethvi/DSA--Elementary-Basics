class Node {
    constructor(value){
        this.data = value
        this.next = null
    }
}

class Stack {
    constructor(){
        this.top = null
        this.size = 0
    }

    push(value){
        const newNode = new Node(value);
        if(this.top===0){
            this.top = newNode
        }else{
            newNode.next = this.top
            this.top = newNode
        }
        this.size++
    }

    pushArray(arr){
        for(let i=0;i<arr.length;i++){
            this.push(arr[i])
            this.push(arr[arr.length-1-i])
        }
    }

    print(){
        if(this.top!==0){
            let curr = this.top
            let elems = ""
            while(curr){
                elems+=curr.data+" "
                curr = curr.next
            }
            console.log(elems);
        }
    }
}

const stack = new Stack()
stack.pushArray([1,2,3,4,5,6,7,8])
stack.print()