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

  addEdge() {}

  removeEdge() {}

  removeVertex() {}
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('A');
console.log(graph);
