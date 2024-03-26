class MaxHeap {
    constructor(){
        this.heap = []
    }

    getParentIndex(i){
        return Math.floor((i-1)/2)
    }

    getLeftChildIndex(i){
        return 2*i+1
    }

    getRightChildIndex(i){
        return 2*i+2
    }

    swap(i1, i2){
        [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]]
    }

    insert(value){
        this.heap[this.heap.length] = value
        this.heapifyUp()
    }

    heapifyUp(){
        let currentIndex = this.heap.length - 1
        while(this.heap[currentIndex]>this.getParentIndex(currentIndex)){
            this.swap(currentIndex, this.getParentIndex(currentIndex))
            currentIndex = this.getParentIndex(currentIndex)
        }
    }

    delete(){
        let max = this.heap[0]
        this.heap[0] = this.heap[this.heap.length-1]
        this.heap.length--
        this.heapifyDown()
        return max
    }

    heapifyDown(){
        let currentIndex = 0
    }
}