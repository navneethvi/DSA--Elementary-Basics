class Node {
    constructor(value) {
        this.data = value
        this.right = null
        this.left = null
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
console.log("Tree is empty : ", bst.isEmpty());
bst.insert(10)
bst.insert(20)
console.log(bst.search(bst.root, 20));
console.log("Tree is empty : ", bst.isEmpty());











