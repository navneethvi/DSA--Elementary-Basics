class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set()
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1)
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    hasEdge(vertex1, vertex2) {
        return this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1)
    }

    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex + "--->" + [...this.adjacencyList[vertex]]);
        }
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            return null
        } else {
            for (const adjacentVertex of this.adjacencyList[vertex]) {
                this.removeEdge(vertex, adjacentVertex)
            }
            delete this.adjacencyList[vertex]
        }
    }

    dfs(startVertex){
        let visited = new Set()
        this.dfsHelper(startVertex, visited)
    }

    dfsHelper(vertex, visited){
        visited.add(vertex)
        console.log(vertex)
        let neighbors = this.adjacencyList[vertex]
        for (const neighbor of neighbors) {
            if(!visited.has(neighbor)){
                this.dfsHelper(neighbor, visited)
            }
        }
    }

    bfs(startVertex){
        const visited = new Set()
        const queue = []
        visited.add(startVertex)
        queue.push(startVertex)
        while(queue.length){
            const curr = queue.shift()
            console.log(curr);
            const neighbors = this.adjacencyList[startVertex] || new Set()
            for (const neighbor of neighbors) {
                if(!visited.has(neighbor)){
                    visited.add(neighbor)
                    queue.push(neighbor)
                }
            }
        }
    }

}

const g = new Graph()
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addEdge("A", "B")
g.addEdge("B", "C")
g.display()
console.log(g.hasEdge("B", "C"))
// g.removeVertex("C")
g.display()
g.dfs("A")
g.bfs("C")