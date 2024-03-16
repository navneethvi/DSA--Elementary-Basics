enque(value){
    const newNode = new Node(value)
    if(this.front === null){
        this.rear = this.front = newNode
    }else{
        this.rear.next = newNode
        this.rear = newNode
    }
    this.size++
}