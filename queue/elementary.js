class Node {
    constructor(value) {
        this.data = value
        this.next = null
    }
}

class Queue {
    constructor() {
        this.front = null
        this.rear = null
        this.size = 0
    }

    enqueue(value) {
        const newNode = new Node(value)
        if (this.front === null) {
            this.front = newNode
            this.rear = newNode
        } else {
            this.rear.next = newNode
            this.rear = newNode
        }
    }

    dequeue() {
        if (this.front === null) {
            console.log("Queue is empty");
        } else {
            this.front = this.front.next
            if(this.front===null){
                this.rear = null
            }
            this.size--
        }
    }

    print(){
        if(this.front===null){
            console.log("Queue is empty");
        }else{
            let curr = this.front
            let elems = ""
            while(curr!==null){
                elems+=curr.data+" "
                curr = curr.next
            }
            console.log(elems);
        }
    }
}


const queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.print()
queue.dequeue()
queue.print()

