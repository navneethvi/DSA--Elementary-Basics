// const { removeAllListeners } = require("nodemon")

// let arr = [5, 4, 3, 2, 1, 0]

// function binarySearch(arr, value, left = 0, right = arr.length - 1) {
//     if (left > right) {
//         return -1
//     }
//     let mid = Math.floor((left + right) / 2)

//     if (arr[mid] === value) {
//         return mid
//     } else if (arr[mid] < value) {
//         return binarySearch(arr, value, left + 1, right)
//     } else {
//         return binarySearch(arr, value, left, right - 1)
//     }
// }

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



// class Node {
//     constructor(value) {
//         this.data = value
//         this.next = null
//     }
// }

// class Queue {
//     constructor() {
//         this.front = null
//         this.rear = null
//         this.size = 0
//     }

//     enque(value) {
//         const newNode = new Node(value)
//         if (this.front === null) {
//             this.front = newNode
//             this.rear = newNode
//         } else {
//             this.rear.next = newNode
//             this.rear = newNode
//         }
//         this.size++
//     }

//     deque() {
//         if (this.front === null) {
//             return
//         } else {
//             this.front = this.front.next
//             this.size--
//         }
//     }

//     print() {
//         if (this.front === null) {
//             console.log("Queue is empty");
//         } else {
//             let curr = this.front
//             let elems = ""
//             while (curr) {
//                 elems += curr.data + " "
//                 curr = curr.next
//             }
//             console.log(elems);
//         }
//     }
// }

// const queue = new Queue()
// queue.enque(10)
// queue.enque(20)
// queue.enque(30) 
// queue.print()
// queue.deque()
// queue.print()


// function rotateArray(arr, k){
//     k = k % arr.length
//     for(i=0;i<k;i++){
//         let temp = arr[0]
//         for(let j=1;j<arr.length;j++){
//             arr[j-1] = arr[j]
//         }
//         arr[arr.length-1] = temp
//     }
//     return arr
// }

// console.log(rotateArray([1,2,3,4,5], 2));



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
//         if(this.top === null){
//             this.top = newNode
//         }else{
//             newNode.next = this.top
//             this.top = newNode
//         }
//     }

//     pushArrayReview(arr){
//         for(let i=0;i<arr.length;i++){
//             this.push(arr[i])
//             this.push(arr[arr.length-1-i])
//         }
//     }

//     pushArrayReverse(arr){
//         for(let i=0;i<arr.length;i++){
//             this.push(arr[i])
//         }
//     }

//     pop(){
//         if(this.top === null){
//             console.log("Stack underflow");
//         }else{
//             this.top = this.top.next
//             this.size--
//         }
//     }

//     print(){
//         if(this.top===null){
//             console.log("Stack empty");
//         }else{
//             let curr = this.top
//             let elems = ""
//             while(curr){
//                 elems+= curr.data+ " "
//                 curr = curr.next
//             }
//             console.log(elems);
//         }
//     }
// }

// const stack = new Stack()
// // stack.pushArray([1,2,3,4,5,6,7,8,9])
// stack.pushArrayReverse([1,2,3,4,5,6])
// stack.print()

// stack.print()



// function secondLargest(arr){
//     let largest = Number.NEGATIVE_INFINITY
//     let second = Number.NEGATIVE_INFINITY
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>largest){
//             second = largest
//             largest = arr[i]
//         }else if(arr[i]!==largest&&arr[i]>second){
//             second = arr[i]
//         }
//     }
//     return second
// }

// console.log(secondLargest([1,2,3,4,5]));


// function thirdLargest(arr){
//     let largest = -1
//     let second = -1
//     let third = -1
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>largest){
//             third = second
//             second = largest
//             largest = arr[i]
//         }else if(arr[i]>second&&arr[i]!==largest){
//             third = second
//             second = arr[i]
//         }else if(arr[i]>third&&arr[i]!==second&&arr[i]!==largest){
//             third = arr[i]
//         }
//     }
//     return third
// }

// console.log(thirdLargest([1,2,3,4,5]));

// class HashTable {
//     constructor(size = 50) {
//         this.table = new Array(size)
//         this.size = size
//     }

//     hash(key) {
//         let total = 0
//         for (let i = 0; i < arr.length; i++) {
//             total += key.charCodeAt(i)
//         }
//         return total % this.size
//     }

//     set(key, value) {
//         const index = this.hash(key)
//         this.table[index] = value
//     }

//     get(key) {
//         const index = this.hash(key)
//         return this.table[index]
//     }

//     remove(key) {
//         const index = this.hash(key)
//         this.table[index] = undefined
//     }
// }

// const ht = new HashTable()
// ht.set("student", "navaneeth")
// ht.set("age", "21")
// console.log(ht.get("student"));


// class HashTable {
//     constructor(size = 50){
//         this.table = new Array(size)
//         this.size = size
//     }

//     _hash(key){
//         let total = 0
//         for(let i=0;i<arr.length;i++){
//             total+=key.charCodeAt(i)
//         }
//         return total%this.size
//     }

//     set(key, value){
//         let index = this._hash(key)
//         this.table[index] = value
//     }

//     get(key){
//         let index = this._hash(key)
//         return this.table[index]
//     }

//     remove(key){
//         let index = this._hash(key)
//         this.table[index] = undefined
//     }
// }

// const ht = new HashTable()
// ht.set("name", "navaneeth")
// ht.set("age", "21")


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

//     pushArrayLike(arr){
//         for(let i=0;i<Math.ceil(arr.length/2);i++){
//             this.push(arr[i])
//             if(arr.length-1-i !== i){
//                 this.push(arr[arr.length-1-i])
//             }
//         }
//     }

//     pushReversedString(str){
//         for(let i=str.length-1;i>=0;i--){
//             this.push(str[i])
//         }
//     }

//     pop() {
//         if (this.top === null) {
//             console.log("Stack empty");
//         } else {
//             this.top = this.top.next
//             this.size--
//         }
//     }

//     print() {
//         if (this.top === null) {
//             console.log("Stack empty");
//         } else {
//             let curr = this.top
//             let elems = ""
//             while (curr) {
//                 elems += curr.data + " "
//                 curr = curr.next
//             }
//             console.log(elems);
//         }
//     }
// }


// const stack = new Stack()
// // stack.pushArrayLike([1, 2, 3, 4, 5])
// stack.pushReversedString("hello")
// stack.print()


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

//     peek() {
//         if (this.top === null) {
//             return
//         } else {
//             console.log(this.top.data);
//         }
//     }

//     reverse() {
//         if (this.top === null || this.top.next === null) {
//             return
//         }
//         let prev = this.top
//         let curr = this.top.next
//         while (curr) {
//             const next = curr.next
//             curr.next = prev
//             prev = curr
//             curr = next
//         }
//         this.top.next = null
//         this.top = prev
//     }

//     minimum() {
//         if (this.top === null) {
//             console.log("Stack empty");
//         } else {
//             let curr = this.top.next
//             let min = this.top.data
//             while (curr) {
//                 if (curr.data < min) {
//                     min = curr.data
//                 }
//                 curr = curr.next
//             }
//             console.log(min);
//         }
//     }

//     maximum() {
//         if (this.top === null) {
//             console.log("Stack is empty");
//         } else {
//             let curr = this.top
//             let max = this.top.data
//             while(curr){
//                 if(curr.data> max){
//                     max = curr.data
//                 }
//                 curr = curr.next
//             }
//             console.log(max);
//         }
//     }

//     middle() {
//         if (this.top === null || this.top.next === null) {
//             return
//         }

//         let slow = this.top
//         let fast = this.top
//         while (fast && fast.next) {
//             slow = slow.next
//             fast = fast.next.next
//         }
//         console.log(slow.data);
//     }

//     pushArray(arr) {
//         for (let i = 0; i < Math.ceil(arr.length / 2); i++) {
//             this.push(arr[i])
//             if (arr.length - 1 - i !== i) {
//                 this.push(arr[arr.length - 1 - i])
//             }
//         }
//     }

//     print() {
//         if (this.top === null) {
//             return
//         } else {
//             let curr = this.top
//             let elems = ""
//             while (curr) {
//                 elems += curr.data + " "
//                 curr = curr.next
//             }
//             console.log(elems);
//         }
//     }
// }


// const stack = new Stack()
// stack.pushArray([10, 30, 50, 70, 60, 40, 20])
// stack.print()
// stack.maximum()
// stack.minimum()
// stack.reverse()
// stack.print()
// stack.peek()
// stack.middle()


// class HashTable {
//     constructor(size) {
//         this.table = new Array(size)
//         this.size = size
//     }

//     _hash(key) {
//         let total = 0
//         for (let i = 0; i < key.length; i++) {
//             total += key.charCodeAt(i)
//         }
//         return total % this.size
//     }

//     set(key, value) {
//         const index = this._hash(key)
//         const bucket = this.table[index]
//         for(let i=0;i<bucket.length;i++){
//             if(bucket[i][0]===key){
//                 bucket[i][1] = value
//                 return
//             }
//         }
//         bucket.push([key, value])
//     }

//     get(key) {
//         const index = this._hash(key)
//         const bucket = this.table[index]
//         for(let i=0;i<bucket.length;i++){
//             if(bucket[i][0]===key){
//                 return bucket[i][1]
//             }
//         }
//         return undefined
//     }

//     remove(key) {
//         let index = this._hash(key)
//         const bucket = this.table[index]
//         for(let i=0;i<bucket.length;i++){
//             if(bucket[i][0]===key){
//                 bucket.splice(i,1)
//                 return
//             }
//         }
//     }

//     print() {
//         for (let i = 0; i < this.table.length; i++) {
//             if (this.table[i]) {
//                 console.log(i, this.table[i]);
//             }
//         }
//     }
// }

// const ht = new HashTable(50)
// ht.set("name", "Navaneeth")
// ht.set("age", 21)
// ht.set("batch", "BCE159")
// ht.get("batch")
// ht.print()



// class HashTable {
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }

//     hash(key){
//         let total = 0
//         for(let i=0;i<key.length;i++){
//             total+=key.charCodeAt(i)
//         }
//         return total%this.size
//     }

//     set(key, value){
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if(!bucket){
//             this.table[index] = [[key, value]]
//         }else{
//             const sameKeyItem = bucket.find(item=>item[0]===key)
//             if(sameKeyItem){
//                 sameKeyItem[1] = value
//             }else{
//                 bucket.push([key, value])
//             }
//         }
//     }

//     get(key){
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if(bucket){
//             const sameKeyItem = bucket.find(item=>item[0]===key)
//             if(sameKeyItem){
//                 return sameKeyItem[1]
//             }
//         }
//         return undefined
//     }

//     remove(key){
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if(bucket){
//             const sameKeyItem = bucket.find(item=>item[0]===key)
//             if(sameKeyItem){
//                 bucket.splice(bucket.indexOf(sameKeyItem), 1)
//             }
//         }
//     }

//     print(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i, this.table[i])
//             }
//         }
//     }
// }


// const ht = new HashTable(30)
// ht.set("name", "navaneeth")
// ht.set("age", "21")
// ht.set("mane", "unni")
// ht.print()
// console.log(ht.get("mane"));
// ht.remove("mane")
// ht.print()


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

//     enque(value){
//         const newNode = new Node(value)
//         if(this.front===null){
//             this.rear = newNode
//             this.front = newNode
//         }else{
//             this.rear.next = newNode
//             this.rear = newNode
//         }
//         this.size++
//     }

//     deque(){
//         if(this.front===null){
//             return
//         }else{
//             this.front = this.front.next
//             this.size--
//         }
//     }

//     maximum(){
//         if(this.front===null||this.front.next===null){
//             return
//         }
//         let curr = this.front
//         let max = this.front.data
//         while(curr){
//             if(curr.data>max){
//                 max = curr.data
//             }
//             curr = curr.next
//         }
//         console.log(max);
//     }

//     reverse(){

//     }

//     middle(){
//         if(this.front===null||this.front.next===null){
//             return
//         }
//         let slow = this.front
//         let fast = this.front
//         while(fast&&fast.next){
//             slow = slow.next
//             fast = fast.next.next
//         }
//         console.log(slow.data);
//     }

//     print(){
//         if(this.front===null){
//             return
//         }else{
//             let curr = this.front
//             let elems = ""
//             while(curr){
//                 elems+= curr.data+ " "
//                 curr = curr.next
//             }
//             console.log(elems);
//         }
//     }
// }

// const q = new Queue()
// q.enque(10)
// q.enque(20)
// q.enque(99)
// q.enque(100)
// q.enque(30)
// q.print()
// // q.deque()
// q.print()
// q.middle()
// q.maximum()

// class Node {
//     constructor(value){
//         this.data = value
//         this.next = null
//     }
// }

// class Queue {
//     constructor(){
//         this.size = 0
//         this.front = null
//         this.rear = null
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

//     reverse(){
//         if(this.front === null || this.front.next === null){
//             return
//         }
//         let curr = this.front.next
//         let prev = this.front
//         while(curr){
//             let next = curr.next
//             curr.next = prev
//             prev = curr
//             curr = next
//         }
//         curr.next = prev
//         this.rear = this.front
//         this.front = curr
//     }

//     deque(){
//         if(this.front === null){
//             console.log("Queue empty");
//         }else{
//             this.front = this.front.next
//             this.size--
//         }
//     }

//     maximum(){
//         if(this.front === null){
//             return
//         }
//         let curr = this.front
//         let max = this.front.data
//         while(curr){
//             if(curr.data>max){
//                 max = curr.data
//             }
//             curr = curr.next
//         }
//         console.log(max);
//     }

//     minimum(){
//         if(this.front===null){
//             return
//         }
//         let min = this.front.data
//         let curr = this.front
//         while(curr){
//             if(curr.data<min){
//                 min = curr.data
//             }
//             curr = curr.next
//         }
//         console.log(min);
//     }

//     middle(){
//         if(this.front === null || this.front.next === null){
//             return
//         }
//         let slow = this.front
//         let fast = this.front
//         while(fast&&fast.next){
//             slow = slow.next
//             fast = fast.next.next
//         }
//         console.log(slow.data);
//     }

//     print(){
//         if(this.front===null){
//             console.log("Queue empty");
//         }else{
//             let elems = ""
//             let curr = this.front
//             while(curr){
//                 elems += curr.data+ " "
//                 curr = curr.next
//             }
//             console.log(elems);
//         }
//     }
// }

// const queue = new Queue()
// queue.enque(10)
// queue.enque(20)
// queue.enque(5)
// queue.enque(30)
// queue.enque(40)
// queue.print()
// queue.deque()
// queue.print()
// queue.maximum()
// queue.minimum()
// queue.middle()



// function linearSearch(arr, data, index=0){
//     if(index>=arr.length){
//         return
//     }
//     if(arr[index]===data){
//         return index
//     }
//     return linearSearch(arr, data, index+1)
// }


// console.log(linearSearch([1,2,3,4,5], 1));


// function binarySearch(arr, data, left=0, right=arr.length-1){
//    if(left>right){
//      return
//    }

//    let mid = Math.floor((left+right)/2)
//    if(arr[mid]===data){
//     return mid
//    }else if(arr[mid]<data){
//     return binarySearch(arr, data, mid+1, right)
//    }else{
//     return binarySearch(arr, data, left, mid-1)
//    }
// }

// console.log(binarySearch([1,2,3,4,5], 3));


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
//                 console.log(`Swapped ${arr[i]} and ${arr[i+1]}  now arr : ${arr}`);
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

// function swap(arr, i, j){
//     [arr[i], arr[j]] = [arr[j], arr[i]]
// }

// function quickSort(arr, start = 0, end = arr.length - 1) {
//     if (start < end) {
//         let pivotIndex = partition(arr, start, end)
//         quickSort(arr, pivotIndex + 1, end)
//         quickSort(arr, start, pivotIndex - 1)
//     }
//     return arr
// }


// function bubbleSort(arr){
//     let swapped
//     do {
//         swapped = false
//         for(i=0;i<arr.length;i++){
//             if(arr[i]>arr[i+1]){
//                 [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
//                 swapped = true
//             }
//         }
//     } while (swapped);
//     return arr
// }


// function insertionSort(arr){
//     for(let i=0;i<arr.length;i++){
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
//         [arr[min], arr[i]] = [arr[i], arr[min]]
//     }
//     return arr
// }

// function partition(arr, start, end){
//     let pivot = arr[end]
//     let i = start - 1
//     for(let j=start;j<end;j++){
//         if(arr[j]<pivot){
//             i++
//             swap(arr, i , j)
//         }
//     }
//     swap(arr, i+1,end)
//     return i+1
// }

// function swap(arr, i, j){
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
// }

// function quickSort(arr, start=0, end=arr.length-1){
//     if(start<end){
//         const pivotIndex = partition(arr, start, end)
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