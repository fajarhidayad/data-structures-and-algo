class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      return true;
    }
    return false;
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2])
      return false;

    if (this.adjacencyList[vertex1].find((v) => v === vertex2)) return false;

    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
    return true;
  }

  removeEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2])
      return false;

    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
    return true;
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return undefined;
    // let edges = this.adjacencyList[vertex];

    // for (let i = 0; i < edges.length; i++) {
    //   this.removeEdge(vertex, edges[i]);
    // }

    while (this.adjacencyList[vertex].length) {
      let temp = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, temp);
    }

    delete this.adjacencyList[vertex];
    return this;
  }
}

const graph = new Graph();
