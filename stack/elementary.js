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

    reverse(){
        if(this.top===null || this.top.next === null){
            return
        }

        let prev = this.top
        let curr = this.top.next
        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.top.next = null
        this.top = prev
    }

    peek(){
        if(this.top === null){
            console.log("Stack is empty");
        }else{
            console.log(this.top.data);
        }
    }

    minimum() {
        if (this.top === null) {
            console.log("Stack empty");
        } else {
            let curr = this.top.next
            let min = this.top.data
            while (curr) {
                if (curr.data < min) {
                    min = curr.data
                }
                curr = curr.next
            }
            console.log(min);
        }
    }

    maximum() {
        if (this.top === null) {
            console.log("Stack is empty");
        } else {
            let curr = this.top
            let max = this.top.data
            while(curr){
                if(curr.data> max){
                    max = curr.data
                }
                curr = curr.next
            }
            console.log(max);
        }
    }

    middle() {
        if (this.top === null || this.top.next === null) {
            return
        }

        let slow = this.top
        let fast = this.top
        while (fast && fast.next) {
            slow = slow.next
            fast = fast.next.next
        }
        console.log(slow.data);
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
            console.log(elems);
        }
    }
}



