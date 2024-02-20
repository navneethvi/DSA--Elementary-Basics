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
            console.log("LinkedList is empty");
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

    insert(index, value) {
        if (index < 0 || index > this.getSize() || this.isEmpty()) {
            return
        }
        if (index === 0) {
            this.prepend(value)
        } else {
            const node = new Node(value)
            let curr = this.head
            for (let i = 0; i < index - 1; i++) {
                curr = curr.next
            }
            node.next = curr.next
            curr.next = node
        }
        this.size++
    }

    remove(value) {
        if (this.isEmpty()) {
            return
        }
        if (this.head.value === value) {
            this.head = this.head.next
        } else {
            let curr = this.head
            while (curr.next) {
                if (curr.next.value === value) {
                    curr.next = curr.next.next
                    this.size--
                    return
                }
                curr = curr.next
            }
        }
    }

    reverse() {
        if (this.isEmpty() || !this.head.next) {
            return
        }
        let prev = null
        let curr = this.head
        let next = null
        while (curr) {
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }
}

// const list = new LinkedList()
// list.append(10)
// list.append(20)
// list.append(30)
// list.prepend(5)
// list.insert(1, 8)
// list.remove(5)
// list.print()
// list.reverse()
// list.print()