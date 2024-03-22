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
            let curr = this.root
            while (true) {
                if (value < curr.data) {
                    if (curr.left === null) {
                        curr.left = newNode
                        break
                    } else {
                        curr = curr.left
                    }
                } else {
                    if (curr.right === null) {
                        curr.right = newNode
                        break
                    } else {
                        curr = curr.right
                    }
                }
            }
        }
    }

    // search(value) {
    //     if (this.root === null) {
    //         return
    //     } else {
    //         let curr = this.root
    //         while (curr !== null) {
    //             if (curr.data === value) {
    //                 return true
    //             } else if (value < curr.data) {

    //                 curr = curr.left
    //             } else {
    //                 curr = curr.right
    //             }
    //         }
    //         return false
    //     }
    // }

    search(value){
        if(this.root === null){
            return false
        }else{
            let curr = this.root
            while(curr !== null){
                if(curr.data === value){
                    return true
                }else if(value < curr.data){
                    curr = curr.left
                }else{
                    curr = curr.right
                }
            }
            return false
        }
    }


}

const bst = new BinarySearchTree()
console.log("Tree is empty : ", bst.isEmpty());
bst.insert(20)
bst.insert(30)
console.log(bst.search(30));
console.log("Tree is empty : ", bst.isEmpty());