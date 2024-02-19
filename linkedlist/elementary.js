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

// LinkedList Append

// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null
//         this.size = 0
//     }

//     getSize() {
//         return this.size
//     }

//     prepend(value) {
//         const node = new Node(value)
//         if (this.getSize() === 0) {
//             this.head = node
//         } else {
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }

//     append(value) {
//         const node = new Node(value)
//         if (this.getSize() === 0) {
//             this.head = node
//         } else {
//             let prev = this.head
//             while (prev.next) {
//                 prev = prev.next
//             }
//             prev.next = node
//         }
//         this.size ++
//     }


//     print() {
//         if (this.getSize() === 0) {
//             console.log("linkedlist is empty");
//         } else {
//             let curr = this.head
//             let listValues = ""
//             while (curr) {
//                 listValues += `${curr.value} `
//                 curr = curr.next
//             }
//             console.log(listValues);
//         }
//     }
// }

// const list = new LinkedList()
// list.print()
// list.prepend(10)
// list.prepend(20)
// list.prepend(30)
// list.print()
// list.append(500)
// list.print()


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
//         if(this.getSize === 0){
//             this.head  = node
//         }else{
//             node.next = this.head
//             this.head = node
//         }
//         this.size ++
//     }

//     append(value){
//         const node = new Node(value)
//         if(this.getSize()===0){
//             this.head = node
//         }else{
//             let prev = this.head
//             while(prev.next){
//                 prev = prev.next
//             }
//             prev.next = node
//         }
//         this.size ++
//     }

//     print(){
//         if(this.getSize === 0){
//             console.log("linkedlist is empty");
//         }else{
//             let curr = this.head
//             let listValues = ""
//             while(curr){
//                 listValues += `${curr.value} `
//                 curr = curr.next
//             }
//             console.log(listValues);
//         }
//     }

// }

// const list = new LinkedList()
// list.print()
// list.append(10)
// list.append(20)
// list.append(50)
// list.append(30)
// list.print()
// list.prepend(100)
// list.print()

// class Node {
//     constructor (value){
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

//     append(value){
//         const node = new Node(value)
//         if(this.getSize() === 0){
//             this.head = node
//         }else{
//             let prev = this.head
//             while(prev.next){
//                 prev = prev.next
//             }
//             prev.next = node
//         }
//         this.size ++
//     }

//     print(){
//         if(this.getSize()===0){
//             console.log("linked list is empty");
//         }else{
//             let curr = this.head
//             let listValues = ""
//             while(curr){
//                 listValues += `${curr.value} `
//                 curr = curr.next
//             }
//             console.log(listValues);
//         }
//     }

// }

// const list = new LinkedList()

// console.log(list.getSize());
// list.append(10)
// list.append(20)
// list.append(30)
// list.print()
// console.log(list.getSize());


// LinkedList Insert

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    getSize() {
        return this.size
    }

    print() {
        if (this.getSize() === 0) {
            console.log("linkedlist is empty");
        } else {
            let curr = this.head
            let listValues = ""
            while (curr) {
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log(listValues);
        }
    }

    append(value) {
        const node = new Node(value)
        if (this.getSize() === 0) {
            this.head = node
        } else {
            let prev = this.head
            while (prev.next) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    prepend(value) {
        const node = new Node(value)
        if (this.getSize() === 0) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    insert(index, value){
        if(index < 0 || index > this.getSize()){
            return
        }

        if(index === 0){
            this.prepend(value)
        }else{
            const node = new Node(value)
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
        }
        this.size ++
    }

}

const list = new LinkedList()
list.append(10)
list.append(20)
list.prepend(5)
list.insert(2, 300)
list.print()
