class Node {
    constructor(value) {
        this.data = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    isEmpty() {
        return this.root === null
    }

    // insert(value){
    //     const newNode = new Node(value)
    //     if(this.root === null){
    //         this.root = newNode
    //     }else{

    //     }
    // }

    // insertNode(root, newNode){
    //     if(root.data < newNode.data){
    //         if(root.left === null){
    //             root.left = newNode
    //         }else{
    //             this.insertNode(root.left, newNode)
    //         }
    //     }else{
    //         if(root.right === null){
    //             root.right = newNode
    //         }else{
    //             this.insertNode(root.right, newNode)
    //         }
    //     }
    // }

    // insert(value){
    //     const newNode = new Node(value)
    //     if(this.root === null){
    //         this.root = newNode
    //     }else{
    //         let curr = this.root
    //         while(true){
    //             if(value < curr.data){
    //                 if(curr.left === null){
    //                     curr.data = newNode
    //                     break
    //                 }else{
    //                     curr = curr.left
    //                 }
    //             }else{
    //                 if(curr.right === null){
    //                     curr.right = newNode
    //                     break
    //                 }else{
    //                     curr = curr.right
    //                 }
    //             }
    //         }
    //     }
    // }


    insert(value) {
        const newNode = new Node(value)
        if (this.root === null) {
            this.root = newNode
        } else {
            this.insertOne(this.root, newNode)
        }
    }

    insertOne(root, newNode) {
        if (newNode.data < root.data) {
            if (root.left === null) {
                root.left = newNode
            } else {
                this.insertOne(root.left, newNode)
            }
        } else {
            if (root.right === null) {
                root.right = newNode
            } else {
                this.insertOne(root.right, newNode)
            }
        }
    }

    search(root, value) {
        if (root === null) {
            return false
        } else {
            if (root.data === value) {
                return true
            } else if (value < root.data) {
                return this.search(root.left, value)
            } else {
                return this.search(root.right, value)
            }
        }   
    }
}


const bst = new BinarySearchTree()
console.log("is Empty : ", bst.isEmpty());
bst.insert(10)
bst.insert(5)
bst.insert(11)
console.log("is Empty : ", bst.isEmpty());
console.log(bst.search(bst.root, 5))