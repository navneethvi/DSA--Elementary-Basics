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
}

const heap = new MaxHeap()
heap.insert(10)
heap.insert(20)
heap.insert(44)
heap.insert(22)
heap.insert(60)
console.log(heap.heap);