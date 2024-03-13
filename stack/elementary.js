class Node {
    constructor(value) {
        this.data = value
        this.next = null
    }
}

class Stack {
    constructor() {
        this.top = null
        this.size = 0
    }

    push(value) {
        const newNode = new Node(value)
        if (this.top === null) {
            this.top = newNode
        } else {
            newNode.next = this.top
            this.top = newNode
        }
        this.size++
    }

    pop() {
        if (this.top === null) {
            return "Stack Underflow"
        } else {
            const poppedData = this.top.data
            this.top = this.top.next
            this.size--
            return poppedData
        }
    }

    pushFormat(arr){
        for(let i=0;i<Math.ceil(arr.length/2);i++){
            this.push(arr[i])
            if(arr.length-1-i!==i){
                this.push(arr[arr.length-1-i])
            }
        }
    }

    print() {
        if (this.size === 0) {
            return "Stack Underflow"
        } else {
            let curr = this.top
            let elems = ""
            while (curr !== null) {
                elems += curr.data + " "
                curr = curr.next
            }
            return elems
        }
    }
}

const stack = new Stack()
// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.push(40)
// stack.pop()
stack.pushFormat([1,2,3,4,5])

// console.log(stack.pop());
console.log(stack.print());