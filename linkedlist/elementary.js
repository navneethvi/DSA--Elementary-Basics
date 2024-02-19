// LinkedList class

// class Node {
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class LinkedList {
//     constructor(){
//         this.head = null
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size === 0
//     }

//     getSize(){
//         return this.size
//     }
// }

// const list = new LinkedList()

// console.log(list.isEmpty());
// console.log(list.getSize());


// LinkedList Prepend

// class Node {
//     constructor(value){
//         this.value = value 
//         this.next = null
//     }
// }

// class LinkedList {
//     constructor(){
//         this.head = null
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size === 0
//     }

//     getSize(){
//         return this.size
//     }

//     prepend(value){
//         const node = new Node()
//         if(this.isEmpty){
//             this.head = node
//         }else{
//             node.next = this.head
//             this.head = node
//         }
//         this.size ++
//     }
// }

// const list = new LinkedList()

// console.log(list.isEmpty());
// console.log(list.getSize());

// list.prepend(10)