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
        } else if (newNode.data > root.data) {
            if (root.right === null) {
                root.right = newNode
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    }

    levelOrder() {
        const queue = []
        queue.push(this.root)
        while (queue.length) {
            let curr = queue.shift()
            console.log(curr.data);
            if (curr.left) queue.push(curr.left)
            if (curr.right) queue.push(curr.right)
        }
    }

    preOrder(root){
        if(root){
            console.log(root.data);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root, arr){
        if(root){
            this.inOrder(root.left, arr)
            console.log(root.data);
            this.inOrder(root.right, arr)
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.data);
        }
    }

    search(root, value) {
        if (root) {
            if (value === root.data) {
                return true
            }
            if (value < root.data) {
                return this.search(root.left, value)
            } else {
                return this.search(root.right, value)
            }
        } else {
            return false
        }
    }

    delete(value){
        this.root = this.deleteNode(this.root, value)
    }

    minimum(root){
        if(!root){
            return null
        }
        while(root.left){
            root = root.left
        }
        return root.data
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
            if(!root.left) return root.right
            else if(!root.right) return root.left
            root.data = this.minimum(root.right)
            root.right = this.deleteNode(root.right, root.data)
        }
        return root
    }

    maximum(root){
        if(!root){
            return null
        }else{
            while(root.right){
                root = root.right
            }
            return root.data
        }
    }

    // closestValue(root, value){
    //     let closest = root.data
    //     let curr = root
    //     while(curr){
    //         if(Math.abs(curr.data - value) < Math.abs(closest - value)){
    //             closest = curr.data
    //         }
    //     }
    // }

    isBST(){
        let arr = []
        this.inOrder(this.root, arr)
        for(let i=0;i<arr.length;i++){
            if(arr[i]<arr[i-1]){
                return false
            }
        }
        return true
    }

}

const bst = new BinarySearchTree()


console.log("Is empty : ", bst.isEmpty());
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
console.log("is Empty : ", bst.isEmpty());
bst.levelOrder()
console.log("Minimum", bst.minimum(bst.root));
bst.delete(15)
console.log("Maximum", bst.maximum(bst.root));

console.log(bst.search(bst.root, 3));
bst.levelOrder()
console.log("isBst", bst.isBST());
console.log(bst.search(bst.root, 3));








