class Node {
    constructor(value){
        this.data = value
        this.right = null
        this.left = null
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
            let curr = this.root
            while(true){
                if(value < curr.data){
                    if(curr.left === null){
                        curr.left = newNode
                        break
                    }else{
                        curr = curr.left
                    }
                }else{
                    if(curr.right === null){
                        curr.right = newNode
                        break
                    }else{
                        curr = curr.right
                    }
                }
            }
        }
    }

}

const bst = new BinarySearchTree()
console.log("Tree is empty : ",bst.isEmpty());
bst.insert(20)
bst.insert(30)
console.log("Tree is empty : ",bst.isEmpty());