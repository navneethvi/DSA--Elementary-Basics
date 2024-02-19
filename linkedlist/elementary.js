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


// LinkedList Print

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

//     getSize(){
//         return this.size
//     }

//     prepend(value){
//         const node = new Node(value)
//         if(this.size === 0){
//             this.head = node
//         }else{
//             node.next = this.head
//             this.head = node
//         }
//         this.size ++
//     }

//     print(){
//         if(this.size === 0){
//             console.log("Linkedlist is empty");
//         }else{
//             let listValues = ""
//             let curr = this.head
//             while(curr){
//                 listValues += `${curr.value} `
//                 curr = curr.next
//             }
//             console.log(listValues);
//         }
//     }
// }

// const list = new LinkedList()
// list.prepend(20)
// list.prepend(10)
// list.prepend(30)
// list.prepend(40)
// console.log(list.getSize());
// list.print()