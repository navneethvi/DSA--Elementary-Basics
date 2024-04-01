class Node {
    constructor(value){
        this.data = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root === null
    }

    insert(value){
        const newNode = new Node(value)
        if(this.root === null){
            this.root = newNode
        }else{
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(root, newNode){
        if(newNode.data < root.data){
            if(root.left === null){
                root.left = newNode
            }else{
                this.insertNode(root.left, newNode)
            }
        }else{
            if(root.right === null){
                root.right = newNode
            }else{
                this.insertNode(root.right, newNode)
            }
        }
    }

    levelOrder(){
        let queue = []
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.data);
            if(curr.left) queue.push(curr.left)
            if(curr.right) queue.push(curr.right)
        }
    }
}


const bst = new BinarySearchTree()
console.log("isEmpty : ",bst.isEmpty());
bst.insert(10)
bst.insert(30)
bst.insert(2)
bst.insert(15)
bst.insert(40)
console.log("isEmpty : ",bst.isEmpty());
// bst.levelOrder()