class Queue {
    constructor() {
        this.dataStore = []
        this.head = 0
        this.tail = 0
    }

    enqueue(value) {
        this.dataStore[this.tail++] = value
    }

    dequeue() {
        return this.dataStore[this.head++]
    }

    peek() {
        return this.dataStore[this.head]
    }

    size() {
        return this.tail - this.head
    }

    print(){
        for(let i=this.head;i<this.tail;i++){
            console.log(this.dataStore[i]);
        }
    }

}

const queue = new Queue()
queue.enqueue(20)
queue.enqueue(30)
queue.print()
