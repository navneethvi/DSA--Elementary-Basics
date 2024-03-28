class MaxHeap {
    constructor() {
        this.heap = []
    }

    getParentIndex(i) {
        return Math.floor((i - 1) / 2)
    }

    getLeftChildIndex(i) {
        return 2 * i + 1
    }

    getRightChildIndex(i) {
        return 2 * i + 2
    }

    swap(i1, i2) {
        [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]]
    }


    levelOrder() {
        let queue = [0]
        while (queue.length > 0) {
            let curr = queue.shift()
            console.log(this.heap[curr]);
            let left = this.getLeftChildIndex(curr)
            let right = this.getRightChildIndex(curr)
            if (left < this.heap.length) queue.push(left)
            if (right < this.heap.length) queue.push(right)
        }
    }

    insert(value) {
        this.heap[this.heap.length] = value
        this.heapifyUp()
    }

    heapifyUp() {
        let currentIndex = this.heap.length - 1
        while (currentIndex > 0 && this.heap[currentIndex] > this.getParentIndex(currentIndex)) {
            this.swap(currentIndex, this.getParentIndex(currentIndex))
            currentIndex = this.getParentIndex(currentIndex)
        }
    }

    delete(){
        let maxValue = this.heap[0]
        this.heap[0] = this.heap[this.heap.length - 1]
        this.heap.length --
        this.heapifyDown()
        return maxValue
    }

    
    heapifyDown(){
        let currentIndex = 0
        while(this.getLeftChildIndex(currentIndex) < this.heap.length){
            let largestChildIndex = this.getLeftChildIndex(currentIndex)
            let rightChildIndex = this.getRightChildIndex(currentIndex)
            if(rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largestChildIndex]){
                largestChildIndex = rightChildIndex
            }
            if(this.heap[currentIndex] < this.heap[largestChildIndex]){
                this.swap(currentIndex, largestChildIndex)
                currentIndex = largestChildIndex
            }else{
                break
            }
        }
    }
}

const heap = new MaxHeap()
heap.insert(10)
heap.insert(20)
heap.insert(44)
heap.insert(22)
heap.insert(60)
console.log(heap.heap);
heap.delete()
console.log(heap.heap);
heap.delete()
console.log(heap.heap);