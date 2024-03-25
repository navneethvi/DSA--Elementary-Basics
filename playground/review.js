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

    insert(value) {
        const newNode = new Node(value)
        if (this.root === null) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(root, newNode) {
        if (newNode.data < root.data) {
            if (root.left === null) {
                root.left = newNode
            } else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if (root.right === null) {
                root.right = newNode
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    }

    search(root, target) {
        if (root) {
            if (root.data === target) {
                return 1
            }
            if (target < root.data) {
                return this.search(root.left, target)
            } else if (target > root.data) {
                return this.search(root.right, target)
            }
        } else {
            return false
        }
    }

    preOrder(root) {
        if (root) {
            console.log(root.data);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    levelOrder() {
        const queue = []
        queue.push(this.root)
        while (queue.length) {
            let curr = queue.shift()
            console.log(curr.data);
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }

    minimum(root){
        if(!root.left){
            return root.data
        }else{
            return this.minimum(root.left)
        }
    }

    delete(value){
        this.root = this.deleteNode(this.root, value)
    }

    deleteNode(root, value){
        if(root === null){
            return root
        }
        if(value < root.data){
            root.left = this.deleteNode(root.left, value)
        }else if(value > root.data){
            root.right = this.deleteNode(root.right, value)
        }else{
            if(!root.left && !root.right){
                return null
            }
            if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }
            root.data = this.minimum(root.right)
            root.right = this.deleteNode(root.right, root.data)
        }
        return root
    }
    
}

const bst = new BinarySearchTree()
console.log("is Empty : ", bst.isEmpty());
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
console.log("is Empty : ", bst.isEmpty());
// bst.preOrder(bst.root)
bst.levelOrder()
console.log("---------------------------");
bst.delete(15)
bst.levelOrder()
// console.log(bst.search(bst.root, 5))
// console.log(bst.search(5))