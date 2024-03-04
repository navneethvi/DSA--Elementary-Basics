class Queue {
    constructor(){
        this.items = []
    }

    enqueue(value){
        this.items.push(value)
    }

    dequeue(value){
        this.items.shift()
    }
}