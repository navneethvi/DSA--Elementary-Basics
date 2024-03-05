class Node {
    constructor(value){
        this.data = value
        this.next = null
    }
}

class Queue {
    constructor(){
        this.front = null
        this.rear = null
        this.size = 0
    }

    enqueue(value){
        const newNode = new Node(value)
        if(this.front === null){
            this.front = newNode
            this.rear = newNode
        }else{
            this.rear.next = newNode
            this.rear = newNode
        }
    }
}

