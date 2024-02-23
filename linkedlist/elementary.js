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
//         this.size++
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

//     insert(index, value) {
//         if (index < 0 || index > this.getSize()) {
//             return
//         }

//         if (index === 0) {
//             this.prepend(value)
//         } else {
//             const node = new Node(value)
//             let prev = this.head
//             for (let i = 0; i < index - 1; i++) {
//                 prev = prev.next
//             }
//             node.next = prev.next
//             prev.next = node
//         }
//         this.size++
//     }

//     removeAt(index) {
//        if(index < 0 || index > this.getSize() || this.head === null){
//         return
//        }
//        if(index === 0){
//         this.head = this.head.next
//         this.size --
//         return
//        }
//        let prev = null
//        let curr = this.head
//        let count = 0
//        while(count < index){
//         prev = curr
//         curr = curr.next
//         count ++
//        }
//        prev.next = curr.next
//        this.size --
//     }

//     deleteWithValue(value) {
//         if (!this.head) return

//         if (this.head.value === value) {
//             this.head = this.head.next
//         }
//         let prev = this.head
//         while(prev.next){
//             if(prev.next.value === value){
//                 prev.next = prev.next.next
//                 this.size--
//                 return
//             }
//             prev = prev.next
//         }
//     }

//     search(value){
//         if(this.getSize===0){
//             return
//         }
//         if(this.head.value === value){
//             return {value : this.head.value, index : 0}
//         }
//         let curr = this.head
//         let count = 0
//         while(curr){
//             if(curr.value === value){
//                return {value : curr.value, index : count}        
//             }
//             curr = curr.next
//             count ++
//         }
//         return { value: null, count: -1 };
//     }

//    reverse(){
//     if(!this.head || !this.head.next){
//         return
//     }
//     let prev = null
//     let curr = this.head
//     let nextNode = null
//     while(curr){
//         nextNode = curr.next
//         curr.next = prev
//         prev = curr
//         curr = nextNode
//     }
//     this.head = prev
//    }
// }

// const list = new LinkedList()
// list.append(10)
// list.append(20)
// list.prepend(5)
// list.insert(2, 300)
// list.print()
// list.removeAt(1)
// list.deleteWithValue(300)`
// list.print()
// list.reverse()
// list.print()
// console.log(list.search(10));



// LinkedList with Tail Implementations

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
//         this.tail = null
//     }

//     getSize(){
//         return this.size
//     }

//     print(){
//         if(this.getSize()===0){
//             console.log("list is empty");
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

//     prepend(value){
//         const node = new Node(value)
//         if(this.getSize()===0){
//             this.head = node
//             this.tail = node
//         }else{
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }

//     append(value){
//         const node = new Node(value)
//         if(this.getSize()===0){
//             this.head = node
//             this.tail = node
//         }else{
//             this.tail.next = node
//             this.tail = node
//         }
//         this.size ++
//     }

//     removeFromFront(){
//         if(this.getSize()===0){
//             return
//         }else{
//             this.head = this.head.next
//             this.size--
//         }
//     }

//     removeFromEnd(){
//         if(this.getSize()===0){
//             return
//         }else{
//             if(this.size===1){
//                 this.head = null
//                 this.tail = null
//             }else{
//                 let prev = this.head
//                 while(prev.next !== this.tail){
//                     prev = prev.next
//                 }
//                 prev.next = null
//             }
//             this.size--
//         }
//     }
// }

// const list = new LinkedList()
// list.print()
// list.prepend(10)
// console.log(list.getSize());
// list.prepend(20)
// list.append(100)
// list.append(200)
// console.log(list.getSize());
// list.print()
// list.removeFromFront()
// list.removeFromEnd()
// list.print()


// Doubly LinkedList

// class DoublyNode {
//     constructor(value) {
//         this.prev = null
//         this.next = null
//         this.value = value
//     }
// }

// class DoublyLinkedList {
//     constructor() {
//         this.head = null
//         this.tail = null
//         this.size = 0
//     }

//     append(value) {
//         const node = new DoublyNode(value)
//         if (!this.size) {
//             this.head = node
//             this.tail = node
//         } else {
//             node.prev = this.tail
//             this.tail.next = node
//             this.tail = node
//         }
//         this.size++
//     }

//     print() {
//         if (this.size === 0) {
//             console.log("list is empty");
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

//     prepend(value) {
//         const node = new DoublyNode(value)
//         if (!this.size) {
//             this.head = node
//             this.tail = node
//         } else {
//             node.next = this.head
//             this.head.prev = node
//             this.head = node
//         }
//         this.size++
//     }

//     deleteWithValue(value) {
//         if (!this.head) {
//             return
//         }
//         if (this.head.value === value) {
//             this.head = ths.head.next
//             return
//         }
//         let curr = this.head
//         while (curr.next) {
//             if (curr.next.value === value) {
//                 curr.next = curr.next.next
//                 if (curr.next) {
//                     curr.next.prev = curr
//                 }
//                 if (!curr.next) {
//                     this.tail = curr
//                 }
//                 return
//             }
//             curr = curr.next
//         }
//     }

//     insert(index, value) {
//         if (index < 0 || index > this.size || this.size === 0) {
//             return
//         }
//         const node = new DoublyNode(value)
//         if (index === 0) {
//             this.prepend(value)
//         } else if(index===this.size) {
//             this.append(value)
//         }else {
//             let curr = this.head
//             let count = 0
//             while (count < index) {
//                     curr = curr.next
//                     count ++
//                 }
//                 node.prev = curr.prev
//                 node.next = curr
//                 curr.prev.next = node
//                 curr.prev = node
//                 this.size++
//             }

//     }
// }

// const list = new DoublyLinkedList()
// list.append(10)
// list.append(20)
// list.prepend(5)
// list.prepend(2)
// list.print()

// list.deleteWithValue(10)
// list.insert(2,200)


// list.print()


// class DoublyNode {
//     constructor(value) {
//         this.prev = null
//         this.value = value
//         this.next = null
//     }
// }

// class DoublyLinkedList {
//     constructor(value) {
//         this.head = null
//         this.tail = null
//         this.size = 0
//     }

//     print() {
//         if (this.size === 0) {
//             console.log("list is empty");
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

//     append(value) {
//         const node = new DoublyNode(value)
//         if (!this.head) {
//             this.head = node
//             this.tail = node

//         } else {
//             node.prev = this.tail
//             this.tail.next = node
//             this.tail = node
//         }
//         this.size++
//     }

//     prepend(value) {
//         const node = new DoublyNode(value)
//         if (!this.head) {
//             this.head = node
//             this.tail = node
//         } else {
//             node.next = this.head
//             this.head.prev = node
//             this.head = node
//         }
//         this.size++
//     }

//     insert(index, value) {
//         const node = new DoublyNode(value)
//         if (index < 0 || index > this.size || !this.head) {
//             return
//         }

//         if (index === 0) {
//             this.prepend(value)
//         } else {
//             let curr = this.head
//             let count = 0
//             for (let i = 0; i < index - 1; i++) {
//                 if (count < index) {
//                     curr = curr.next
//                     count++
//                 }
//             }
//             node.prev = curr
//             node.next = curr.next
//             curr.next = node
//         }
//         this.size++
//     }

//     deleteByValue(value) {
//         if(!this.head){
//             return
//         }
//         if(this.head.value === value){
//             this.head = this.head.next
//             this.size--
//             return
//         }
//         let curr = this.head
//         while (curr.next) {
//             if (curr.next.value === value) {
//                 curr.next = curr.next.next
//                 this.size--
//                 return
//             }
//             curr = curr.next
//         }
//     }

//     deleteByIndex(index){
//         if(index < 0 || index < this.size || !this.head){
//             return
//         }
//         if(index === 0){
//             this.head = this.head.next
//             if(this.head){
//                 this.head.prev = null
//             }else{
//                 this.tail = null
//             }
//         }else{
//             let curr = this.next
//             for(let i=0;i<index-1;i++){
//                 curr = curr.next
//             }
//             curr.next = curr.next.next
//             if(curr.next){
//                 curr.next.prev = curr
//             }else{
//                 this.tail = curr
//             }
//             this.size--
//         }
//     }

//     reverse(){
//         if(!this.head || this.size > 1){
//             return
//         }else{
//             let curr = this.head
//             let prev = null
//             let next = null
//             while (curr) {
//                 next = curr.next
//                 curr.next = prev
//             }
//         }
//     }
// }


// const list = new DoublyLinkedList()
// list.append(20)
// list.append(30)
// list.append(40)
// list.prepend(100)
// list.prepend(200)
// list.print()
// list.insert(3, 400)
// list.deleteByIndex(0)
// list.print()

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

    isEmpty() {
        return this.size === 0
    }

    print() {
        if (this.isEmpty()) {
            console.log("list is empty");
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
        if (this.isEmpty()) {
            this.head = node
        } else {
            let curr = this.head
            while (curr.next) {
                curr = curr.next
            }
            curr.next = node
        }
        this.size++
    }

    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    sum() {
        if (this.isEmpty()) {
            console.log("0");
        } else {
            let curr = this.head
            let sum = 0
            while (curr) {
                sum += curr.value
                curr = curr.next
            }
            console.log(sum);
        }
    }

    insert(index, value) {
        if (index < 0 || index >= this.getSize() || this.isEmpty()) {
            return
        }

        
        if (index === 0) {
            this.prepend(value)
        } else {
            const node = new Node(value)
            let curr = this.head
            for(let i=0;i<index-1;i++){
                curr = curr.next
            }

            node.next = curr.next
            curr.next = node
            
        }
        this.size++
    }

    insertAfter(value, data){
        if(this.isEmpty()){
            return
        }
        const node = new Node(data)
        let curr = this.head
        while(curr){
            if(curr.value === value){
                node.next = curr.next
                curr.next = node
                this.size++
                return
            }
            curr = curr.next
        }
    }

    reverse(){
        if(this.isEmpty()){
            return
        }
        let prev = null
        let curr = this.head
        let next = null
        while(curr){
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }
    
}

// function arrayToLinkedList(arr){
//     const list = new LinkedList()
//     arr.forEach(item=>list.append(item))
//     return list
// }

// const arr = [1, 2, 3, 4, 5];
// const linkedList = arrayToLinkedList(arr);
// linkedList.print();

const list = new LinkedList()
list.append(20)
list.append(30)
list.prepend(10)
list.prepend(5)
list.print()
// list.sum()
// list.insert(1,100)
list.insertAfter(20, 200)
list.print()
list.reverse()
list.print()
