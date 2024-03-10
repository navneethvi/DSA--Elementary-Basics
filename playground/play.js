const { removeAllListeners } = require("nodemon")

let arr = [5, 4, 3, 2, 1, 0]

function binarySearch(arr, value, left = 0, right = arr.length - 1) {
    if (left > right) {
        return -1
    }
    let mid = Math.floor((left + right) / 2)

    if (arr[mid] === value) {
        return mid
    } else if (arr[mid] < value) {
        return binarySearch(arr, value, left + 1, right)
    } else {
        return binarySearch(arr, value, left, right - 1)
    }
}

// console.log(binarySearch([1,2,3,4,5,6]));


// function bubbleSort(arr) {
//     let swapped
//     do {
//         swapped = false
//         for(i=0;i<arr.length;i++){
//             if(arr[i]>arr[i+1]){
//                 let temp = arr[i]
//                 arr[i] = arr[i+1]
//                 arr[i+1] = temp 
//                 swapped = true
//             }
//         }
//     } while (swapped);
//     return arr
// }



// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         let temp = arr[i]
//         j = i - 1
//         while (j >= 0 && arr[j] > temp) {
//             arr[j + 1] = arr[j]
//             j = j - 1
//         }
//         arr[j+1] = temp
//     }
//     return arr
// }

// console.log(insertionSort(arr));


// function bubbleSort(arr) {
//     let swapped
//     do {
//         swapped = false
//         for (i = 0; i < arr.length; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 let temp = arr[i]
//                 arr[i] = arr[i + 1]
//                 arr[i + 1] = temp
//                 swapped = true
//             }
//         }
//     } while (swapped);
//     return arr
// }



// function insertionSort(arr){
//     for(let i=1;i<arr.length;i++){
//         let temp = arr[i]
//         let j = i - 1
//         while(j>=0&&arr[j]>temp){
//             arr[j+1] = arr[j]
//             j = j - 1
//         }
//         arr[j+1] = temp
//     }
//     return arr
// }

// console.log(insertionSort(arr));

// function bubbleSort(arr){
//    let swapped 
//    do {
//     swapped = false
//     for(i=0;i<arr.length;i++){
//         if(arr[i]>arr[i+1]){
//             let temp = arr[i]
//             arr[i] = arr[i+1]
//             arr[i+1] = temp
//             swapped = true
//         }
//     }
//    } while (swapped);
//     return arr
// }
// console.log(bubbleSort(arr));


// function insertionSort(arr){
//     for(let i=1;i<arr.length;i++){
//         let temp = arr[i]
//         let j = i - 1
//         while(j>=0&&arr[j]>temp){
//             arr[j+1] = arr[j]
//             j = j - 1
//         }
//         arr[j+1] = temp
//     }
//     return arr
// }

// console.log(insertionSort(arr));



// function bubbleSort(arr){
//     let swapped
//     do {
//         swapped = false
//         for(i=0;i<arr.length;i++){
//             if(arr[i]>arr[i+1]){
//                 let temp = arr[i]
//                 arr[i] = arr[i+1]
//                 arr[i+1] = temp
//                 swapped = true
//             }
//         }
//     } while (swapped);
//     return arr
// }


// console.log(bubbleSort(arr));


// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         let temp = arr[i]
//         let j = i - 1
//         while(j>=0&&arr[j]>temp){
//             arr[j+1] = arr[j]
//             j = j - 1
//         }
//         arr[j+1] = temp
//     }
//     return arr
// }

// console.log(insertionSort(arr));


// function insertionSort(arr){
//     for(i=1;i<arr.length;i++){
//         let temp = arr[i]
//         let j = i - 1
//         while(j>=0&&arr[j]>temp){
//             arr[j+1] = arr[j]
//             j--
//         }
//         arr[j+1] = temp
//     }
//     return arr
// }


// console.log(insertionSort([10,2,33,54,23,65,43,24]));



// class Node {
//     constructor(value) {
//         this.data = value
//         this.next = null
//     }
// }

// class Stack {
//     constructor() {
//         this.top = null
//         this.size = 0
//     }

//     push(value) {
//         const newNode = new Node(value)
//         if (this.top === null) {
//             this.top = newNode
//         } else {
//             newNode.next = this.top
//             this.top = newNode
//         }
//         this.size++
//     }

//     pop() {
//         if (this.top === null) {
//             console.log("Stack is empty");
//         } else {
//             this.top = this.top.next
//             this.size--
//         }
//     }

//     print() {
//         if (this.size === 0) {
//             console.log("Stack is Empty");
//         } else {
//             let curr = this.top
//             let elems = ""
//             while (curr !== null) {
//                 elems += curr.data + " "
//                 curr = curr.next
//             }
//             console.log(elems);
//         }
//     }
// }

// const stack = new Stack()
// console.log(stack.pop());
// stack.push(10)
// stack.push(20)
// stack.push(30)
// console.log(stack.print());
// stack.pop()
// stack.print()
// console.log(stack.print());

// class Node {
//     constructor(value) {
//         this.data = value
//         this.next = null
//     }
// }

// class Stack {
//     constructor() {
//         this.top = null
//         this.size = 0
//     }

//     push(value) {
//         const newNode = new Node(value)
//         if (this.top === null) {
//             this.top = newNode
//         } else {
//             newNode.next = this.top
//             this.top = newNode
//         }
//         this.size++
//     }

//     pop() {
//         if (this.top === null) {
//             console.log("Stack is empty");
//         } else {
//             this.top = this.top.next
//             this.size--
//         }
//     }

//     print() {
//         if (this.top === null) {
//             console.log("Stack is empty");
//         } else {
//             let curr = this.top
//             let elems = ""
//             while (curr !== null) {
//                 elems += curr.data + " "
//                 curr = curr.next
//             }
//             console.log(elems);
//         }
//     }
// }

// const stack = new Stack()
// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.print()
// stack.pop()
// stack.print()






// class Node {
//     constructor(value){
//         this.data = value
//         this.next = null
//     }
// }

// class Queue {
//     constructor(){
//         this.rear = null
//         this.front = null
//         this.size = 0
//     }

//     enqueue(value){
//         const newNode = new Node(value);
//         if(this.front===null){
//             this.front = newNode
//             this.rear = newNode
//         }else{
//             this.rear.next = newNode
//             this.rear = newNode
//         }
//         this.size++
//     }

//     dequeue(){
//         if(this.size===0){
//             console.log("Queue is empty");
//         }else{

//         }
//     }
// }



// class Node {
//     constructor(value){
//         this.data = value
//         this.next = null
//     }
// }

// class Stack {
//     constructor(){
//         this.top = null
//         this.size = 0
//     }

//     push(value){
//         const newNode = new Node(value)
//         if(this.size===0){
//             this.top = newNode
//         }else{
//             newNode.next = this.top
//             this.top = newNode
//         }
//         this.size++
//     }

//     pop(){
//         if(this.top===null){
//             console.log("Stack empty");
//         }else{
//             this.top = this.top.next
//             this.size --
//         }
//     }

//     peek(){
//         if(this.size!==0){
//             console.log(this.top.data);
//         }else{
//             console.log("Stack empty");
//         }
//     }

//     print(){
//         if(this.top === null){
//             console.log("Stack empty");
//         }else{
//             let curr = this.top
//             let elems = ""
//             while(curr){
//                 elems+=curr.data+ " "
//                 curr = curr.next
//             }
//             console.log(elems);
//         }
//     }
// }


// const stack = new Stack()
// // stack.pop()
// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.print()
// stack.pop()
// stack.print()
// stack.peek()


// class Node {
//     constructor(value){
//         this.data = value
//         this.next = null
//     }
// }

// class Queue {
//     constructor(){
//         this.front = null
//         this.rear = null
//         this.size = 0
//     }

//     enque(value){
//         const newNode = new Node(value)
//         if(this.front === null){
//             this.front = newNode
//             this.rear = newNode
//         }else{
//             this.rear.next = newNode
//             this.rear = newNode
//         }
//         this.size++
//     }

//     deque(){
//         if(this.front===null){
//             console.log("Queue is empty");
//         }else{
//             this.front = this.front.next
//             this.size--
//         }
//     }

//     print(){
//         if(this.size === 0){
//             console.log("Queue is empty");
//         }else{
//             let elems = ""
//             let curr = this.front
//             while(curr){
//                 elems += curr.data+" "
//                 curr = curr.next
//             }
//             console.log(elems);
//         }
//     }
// }

// const queue = new Queue()
// queue.enque(20)
// queue.enque(10)
// queue.enque(1)
// queue.print()
// queue.deque()
// queue.print()

// function bubbleSort(arr) {
//     let swapped
//     do {
//         swapped = false
//         for (i = 0; i < arr.length; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 let temp = arr[i]
//                 arr[i] = arr[i + 1]
//                 arr[i + 1] = temp
//                 swapped = true
//             }
//         }
//     } while (swapped);
//     return arr
// }


// function selectionSort(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         let min = i
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[min]) {
//                 min = j
//             }
//         }
//         [arr[i], arr[min]] = [arr[min], arr[i]]
//     }
//     return arr
// }



// function bubbleSort(arr){
//     let swapped
//     do {
//         swapped = false
//         for(let i=0;i<arr.length;i++){
//             if(arr[i]>arr[i+1]){
//                 let temp = arr[i]
//                 arr[i] = arr[i+1]
//                 arr[i+1] = temp
//                 swapped = true
//             }
//         }
//     } while (swapped);
//     return arr
// }


// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         let temp = arr[i]
//         let j = i - 1
//         while(j>=0&&arr[j]>temp){
//             arr[j+1] = arr[j]
//             j = j - 1
//         }
//         arr[j+1] = temp
//     }
//     return arr
// }



// function selectionSort(arr){
//     for(i=0;i<arr.length-1;i++){
//         let min = i
//         for(j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[min]){
//                 min = j
//             }
//         }
//         [arr[i], arr[min]] = [arr[min], arr[i]]
//     }
//     return arr
// }

// function insertionSort(arr){
//     for(i=1;i<arr.length;i++){
//         let temp = arr[i]
//         let j = i-1
//         while(j>=0&&arr[j]>temp){
//             arr[j+1] = arr[j]
//             j--
//         }
//         arr[j+1] = temp
//     }
//     return arr
// }


// function selectionSort(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         let min = i
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[min]) {
//                 min = j
//             }
//         }
//         [arr[min], arr[i]] = [arr[i], arr[min]]
//     }
//     return arr
// }




// function partition(arr, start, end) {
//     let pivot = arr[end]
//     let i = start - 1
//     for (let j = start; j < end; j++) {
//         if (arr[j] < pivot) {
//             i++
//             swap(arr, i, j)
//         }
//     }
//     swap(arr, i + 1, end)
//     return i + 1
// }

// function swap(arr, i, j) {
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
// }

// function quickSort(arr, start = 0, end = arr.length - 1) {
//     if (start < end) {
//         const pivotIndex = partition(arr, start, end)
//         quickSort(arr, start, pivotIndex - 1)
//         quickSort(arr, pivotIndex + 1, end)
//     }
//     return arr
// }


// function partition(arr, start, end) {
//     let pivot = arr[end]
//     let i = start - 1
//     for (let j = start; j < end; j++) {
//         if (arr[j] < pivot) {
//             i++
//             swap(arr, i, j)
//         }
//     }
//     swap(arr, i + 1, end)
//     return i + 1
// }

// function swap(arr, i, j) {
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
// }

// function quickSort(arr, start = 0, end = arr.length - 1){
//     if(start<end){
//         const pivotIndex = partition(arr, start, end)
//         quickSort(arr, pivotIndex+1, end)
//         quickSort(arr, start, pivotIndex-1)
//     }
//     return arr
// }




// function partition(arr, start, end) {
//     let pivot = arr[end]
//     let i = start - 1
//     for (let j = start; j < end; j++) {
//         if (arr[j] < pivot) {
//             i++
//             swap(arr, i, j)
//         }
//     }
//     swap(arr, i + 1, end)
//     return i + 1
// }

// function swap(arr, i, j) {
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
// }

// function quickSort(arr, start = 0, end = arr.length - 1) {
//     if (start < end) {
//         const pivotIndex = partition(arr, start, end)
//         quickSort(arr, pivotIndex + 1, end)
//         quickSort(arr, start, pivotIndex - 1)
//     }
//     return arr
// }


// function mergeSort(arr){
//     if(arr.length<=1){
//         return arr
//     }
//     let mid = Math.floor(arr.length/2)
//     let left = arr.slice(0,mid)
//     let right = arr.slice(mid)
//     return merge(mergeSort(left), mergeSort(right))
// }

// function merge(left, right){
//     let result = []
//     while(left.length&&right.length){
//         if(left[0]<right[0]){
//             result.push(left.shift())
//         }else{
//             result.push(right.shift())
//         }
//     }
//     return result.concat(left, right)
// }



// function bubbleSort(arr) {
//     let swapped
//     do {
//         swapped = false
//         for (i = 0; i < arr.length; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 let temp = arr[i]
//                 arr[i] = arr[i + 1]
//                 arr[i + 1] = temp
//                 swapped = true
//             }
//         }
//     } while (swapped);
//     return arr
// }


// function insertionSort(arr){
//     for(let i = 1;i<arr.length;i++){
//         let temp = arr[i]
//         let j = i - 1
//         while(j>=0&&arr[j]>temp){
//             arr[j+1] = arr[j] 
//             j--
//         }
//         arr[j+1] = temp
//     }
//     return arr
// }



// function bubbleSort(arr) {
//     let swapped
//     do {
//         swapped = false
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 let temp = arr[i]
//                 arr[i] = arr[i + 1]
//                 arr[i + 1] = temp
//                 swapped = true
//             }
//         }
//     } while (swapped);
//     return arr
// }

// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         let temp = arr[i]
//         let j = i - 1
//         while (j >= 0 && arr[j] > temp) {
//             arr[j + 1] = arr[j]
//             j--
//         }
//         arr[j + 1] = temp
//     }
//     return arr
// }

// function selectionSort(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         let min = i
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[min]) {
//                 min = j
//             }
//         }
//         let temp = arr[min]
//         arr[min] = arr[i]
//         arr[i] = temp
//     }
//     return arr
// }




// function insertionSort(arr) {
//     for (i = 0; i < arr.length; i++) {
//         let temp = arr[i]
//         let j = i - 1
//         while (j >= 0 && arr[j] > temp) {
//             arr[j + 1] = arr[j]
//             j--
//         }
//         arr[j + 1] = temp
//     }
//     return arr
// }

// function selectionSort(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         let min = i
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[min]) {
//                 min = j
//             }
//         }
//         [arr[i], arr[min]] = [arr[min], arr[i]]
//     }
//     return arr
// }


// function partition(arr, start, end){
//     let pivot = arr[end]
//     let i = start - 1
//     for(let j=start;j<end;j++){
//         if(arr[j]<pivot){
//             i++
//             swap(arr,i,j)
//         }
//     }
//     swap(arr,i+1,end)
//     return i + 1
// }

// function swap(arr, i,j){
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
// }

// function quickSort(arr, start = 0, end = arr.length - 1){
//     if(start<end){
//         const pivotIndex = partition(arr,start,end)
//         quickSort(arr,start,pivotIndex-1)
//         quickSort(arr,pivotIndex+1, end)

//     }
//     return arr
// }




// function mergeSort(arr){
//     if(arr.length<=1){
//         return arr
//     }

//     let mid = Math.floor(arr.length/2)
//     let left = arr.slice(0,mid)
//     let right = arr.slice(mid)
//     return merge(mergeSort(left), mergeSort(right))
// }

// function merge(left, right){
//     let result = []
//     while(left.length&&right.length){
//         if(left[0]<right[0]){
//             result.push(left.shift())
//         }else{
//             result.push(right.shift())
//         }
//     }
//     return result.concat(left, right)
// }


// function bubbleSort(arr) {
//     let swapped
//     do {
//         swapped = false
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 let temp = arr[i]
//                 arr[i] = arr[i + 1]
//                 arr[i + 1] = temp
//                 swapped = true
//             }
//         }
//     } while (swapped);
//     return arr
// }

// function insertionSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let temp = arr[i]
//         let j = i - 1
//         while(j>=0&&arr[j]>temp){
//             arr[j+1] = arr[j]
//             j--
//         }
//         arr[j+1] = temp
//     }
//     return arr
// }


// function bubbleSort(arr) {
//     let swapped
//     do {
//         swapped = false
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 let temp = arr[i]
//                 arr[i] = arr[i + 1]
//                 arr[i + 1] = temp
//                 swapped = true
//             }
//         }
//     } while (swapped);
//     return arr
// }

// function insertionSort(arr) {
//     for (i = 1; i < arr.length; i++) {
//         let temp = arr[i]
//         let j = i - 1
//         while (j >= 0 && arr[j] > temp) {
//             arr[j + 1] = arr[j]
//             j--
//         }
//         arr[j + 1] = temp
//     }
//     return arr
// }


// function selectionSort(arr) {
//     for (i = 0; i < arr.length - 1; i++) {
//         let min = i
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[min]){
//                 min = j
//             }
//         }
//         [arr[min], arr[i]] = [arr[i], arr[min]]
//     }
//     return arr
// }


// function bubbleSort(arr) {
//     let swapped
//     do {
//         swapped = false
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
//                 swapped = true
//             }
//         }
//     } while (swapped);
//     return arr
// }


// function insertionSort(arr){
//     for(let i=1;i<arr.length;i++){
//         let temp = arr[i]
//         let j = i - 1
//         while(j>=0&&arr[j]>temp){
//             arr[j+1] = arr[j]
//             j--
//         }
//         arr[j+1] = temp
//     }
//     return arr
// }

// function selectionSort(arr){
//     for(let i=0;i<arr.length-1;i++){
//         let min = i
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[min]){
//                 min = j
//             }
//         }
//         [arr[min],arr[i]] = [arr[i],arr[min]]
//     }
//     return arr
// }


// function selectionSort(arr){
//     for(let i=0;i<arr.length-1;i++){
//         let min = i
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[min]){
//                 min = j
//             }
//         }
//         [arr[i],arr[min]] = [arr[min], arr[i]]
//     }
//     return arr
// }


// function insertionSort(arr){
//     for(let i=1;i<arr.length;i++){
//         let temp = arr[i]
//         let j = i - 1
//         while(arr[j]>temp&&j>=0){
//             arr[j+1] = arr[j]
//             j--
//         }
//         arr[j+1] = temp
//     }
//     return arr
// }


// function partition(arr, start, end) {
//     let pivot = arr[end]
//     let i = start - 1
//     for (let j = start; j < end; j++) {
//         if(arr[j]<pivot){
//             i++
//             swap(arr, i, j)
//         }
//     }
//     swap(arr, i+1, end)
//     return i+1
// }

// function swap(arr,i,j){
//     [arr[j], arr[i]] = [arr[i], arr[j]]
// }

// function quickSort(arr, start = 0, end = arr.length - 1){
//     if(start<end){
//         let pivotIndex = partition(arr, start, end)
//         quickSort(arr, pivotIndex+1, end)
//         quickSort(arr, start, pivotIndex-1)
//     }
//     return arr
// }

// function partition(arr, start, end){
//     let pivot = arr[end]
//     let i = start - 1
//     for(let j=start; j<end;j++){
//         if(arr[j]<pivot){
//             i++
//             swap(arr, i, j)
//         }
//     }
//     swap(arr, i+1, end)
//     return i+1
// }

// function swap(arr,i,j){
//     [arr[i],arr[j]] = [arr[j],arr[i]]
// }

// function quickSort(arr,start=0,end=arr.length-1){
//     if(start<end){
//         const pivotIndex = partition(arr,start,end)
//         quickSort(arr, pivotIndex+1, end)
//         quickSort(arr, start, pivotIndex-1)
//     }
//     return arr
// }

// console.log(bubbleSort([3, 2, 5, 6, 8, 9, 11, 2, 4]))
// console.log(insertionSort([3, 2, 5, 6, 8, 9, 11, 2, 4]))
// console.log(selectionSort([3, 2, 5, 6, 8, 9, 11, 2, 4]));
// console.log(quickSort([3, 2, 5, 6, 8, 9, 11, 2, 4]));
// console.log(mergeSort([3, 2, 5, 6, 8, 9, 11, 2, 4]));