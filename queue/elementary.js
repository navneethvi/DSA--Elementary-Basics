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
            if (this.front === null) {
                this.rear = null
            }
            this.size--
        }
    }


    enqueFormat(arr) {
        for (let i = 0; i < Math.floor(arr.length / 2); i++) {
            this.enqueue(arr[i])
            this.enqueue(arr[arr.length - 1 - i])
        }
    }


    reverse() {
        if (this.front === null || this.front.next === null) {
            return
        }
        let prev = null
        let curr = this.front
        while (curr) {
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.rear = this.front
        this.front = prev
    }


    sort(){
        let swapped
        do {
            swapped = false
            let curr = this.front
            while(curr&&curr.next){
              if(curr.data>curr.next.data){
                let temp = curr.data
                curr.data = curr.next.data
                curr.next.data = temp
                swapped = true
              }
              curr = curr.next
            }
        } while (swapped);
    }


    queueToStack(){
        let temp = this.front
        this.top = null
        while(temp){
            let newNode = {
                data : temp.data,
                next : null
            }
            if(this.top===null){
                this.top = newNode
            }else{
                newNode.next = this.top
                this.top = newNode
            }
            temp = temp.next
        }
    }


    print() {
        if (this.front === null) {
            console.log("Queue is empty");
        } else {
            let curr = this.front
            let elems = ""
            while (curr !== null) {
                elems += curr.data + " "
                curr = curr.next
            }
            console.log(elems);
        }
    }
}



