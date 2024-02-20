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

class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
        this.size = 0
        this.tail = null
    }

    getSize(){
        return this.size
    }

    print(){
        if(this.getSize()===0){
            console.log("list is empty");
        }else{
            let curr = this.head
            let listValues = ""
            while(curr){
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log(listValues);
        }
        
    }

    prepend(value){
        const node = new Node(value)
        if(this.getSize()===0){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value){
        const node = new Node(value)
        if(this.getSize()===0){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            this.tail = node
        }
        this.size ++
    }

    removeFromFront(){
        if(this.getSize()===0){
            return
        }else{
            this.head = this.head.next
            this.size--
        }
    }

    removeFromEnd(){
        if(this.getSize()===0){
            return
        }else{
            if(this.size===1){
                this.head = null
                this.tail = null
            }else{
                let prev = this.head
                while(prev.next !== this.tail){
                    prev = prev.next
                }
                prev.next = null
            }
            this.size--
        }
    }
}

const list = new LinkedList()
list.print()
list.prepend(10)
console.log(list.getSize());
list.prepend(20)
list.append(100)
list.append(200)
console.log(list.getSize());
list.print()
// list.removeFromFront()
list.removeFromEnd()
list.print()



