class TrieNode {
    constructor() {
        this.end = false
        this.children = {}
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode()
    }

    insert(word) {
        let currentNode = this.root
        for (let i = 0; i < word.length; i++) {
            const char = word[i]
            if (!currentNode.children[char]) {
                currentNode.children[char] = new TrieNode()
            }
            currentNode = currentNode.children[char]
        }
        currentNode.end = true
    }

    search(word) {
        let currentNode = this.root
        for (let i = 0; i < word.length; i++) {
            const char = word[i]
            if (!currentNode.children[char]) {
                return false
            }
            currentNode = currentNode.children[char]
        }
        return currentNode.end
    }

    startWith(prefix) {
        let currentNode = this.root
        for (let i = 0; i < prefix.length; i++) {
            const char = prefix[i]
            if (!currentNode.children[char]) {
                return false
            }
            currentNode = currentNode.children[char]
        }
        return true
    }

    delete(word){
        if(!this.search(word)){
            console.log("word not exist");
        }else{
            this.deleteHelper(this.root, word, 0)
        }
    }

    deleteHelper(node, word, index){
        if(index === word.length){
            node.end = false
            return Object.keys(node.children).length === 0
        }

        const char = word[index]
        const nextNode = node.children[char]
        const shouldDeleteChildrenNode = this.deleteHelper(nextNode, word, index + 1)
        if(shouldDeleteChildrenNode){
            delete node.children[char]
            return Object.keys(node.children).length === 0
        }
        return false
    }
}
// Example usage:
const trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("application");

console.log("Before deletion:");
console.log(trie.search("apple")); // true
console.log(trie.search("app")); // true
console.log(trie.search("application")); // true

trie.delete("app");

console.log("After deletion:");
console.log(trie.search("apple")); // true
console.log(trie.search("app")); // false
console.log(trie.search("application")); // true