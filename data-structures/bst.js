class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    let temp = this.root;

    if (!this.root) {
      this.root = newNode;
    } else {
      while (temp) {
        if (newNode.value === temp.value) return undefined;

        if (newNode.value > temp.value) {
          if (!temp.right) {
            temp.right = newNode;
            break;
          }
          temp = temp.right;
        } else {
          if (!temp.left) {
            temp.left = newNode;
            break;
          }
          temp = temp.left;
        }
      }
    }

    return this;
  }

  contains(value) {
    if (this.root === null) return false;

    let temp = this.root;

    while (temp) {
      if (temp.value === value) return true;

      if (value < temp.value) {
        temp = temp.left;
      } else {
        temp = temp.right;
      }
    }

    return false;
  }

  rContains(value, currentNode = this.root) {
    if (currentNode === null) return false;

    if (currentNode.value === value) return true;

    if (value < currentNode.value)
      return this.rContains(value, currentNode.left);
    else return this.rContains(value, currentNode.right);
  }

  #rInsert(value, currentNode = this.root) {
    if (currentNode === null) return new Node(value);

    if (value < currentNode.value)
      currentNode.left = this.#rInsert(value, currentNode.left);
    else if (value > currentNode.value)
      currentNode.right = this.#rInsert(value, currentNode.right);

    return currentNode;
  }

  rInsert(value) {
    if (this.root === null) this.root = new Node(value);
    return this.#rInsert(value);
  }

  minValue(currentNode) {
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }

  #deleteNode(value, currentNode) {
    if (currentNode === null) return null;

    if (value < currentNode.value)
      currentNode.left = this.#deleteNode(value, currentNode.left);
    else if (value > currentNode.value)
      currentNode.right = this.#deleteNode(value, currentNode.right);
    else {
      if (currentNode.left === null && currentNode.right === null) {
        return null;
      } else if (currentNode.left === null) {
        currentNode = currentNode.right;
      } else if (currentNode.right === null) {
        currentNode = currentNode.left;
      } else {
        let subTreeMin = this.minValue(currentNode.right);
        currentNode.value = subTreeMin;
        currentNode.right = this.#deleteNode(subTreeMin, currentNode.right);
      }
    }
    return currentNode;
  }

  deleteNode(value) {
    this.root = this.#deleteNode(value, this.root);
  }

  BFS() {
    let currentNode = this.root;
    let queue = [];
    let results = [];
    queue.push(currentNode);

    while (queue.length) {
      currentNode = queue.shift();
      results.push(currentNode.value);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
    return results;
  }

  DFSPreOrder() {
    let results = [];

    function traverse(currentNode) {
      results.push(currentNode.value);
      if (currentNode.left) traverse(currentNode.left);
      if (currentNode.right) traverse(currentNode.right);
    }

    traverse(this.root);
    return results;
  }

  DFSPostOrder() {
    let results = [];

    function traverse(currentNode) {
      if (currentNode.left) traverse(currentNode.left);
      if (currentNode.right) traverse(currentNode.right);
      results.push(currentNode.value);
    }

    traverse(this.root);
    return results;
  }

  DFSInOrder() {
    let results = [];

    function traverse(currentNode) {
      if (currentNode.left) traverse(currentNode.left);
      results.push(currentNode.value);
      if (currentNode.right) traverse(currentNode.right);
    }

    traverse(this.root);
    return results;
  }
}

const bst = new BST();
bst.insert(5);
bst.insert(2);
bst.insert(1);
bst.insert(3);
bst.insert(7);
bst.insert(6);
bst.insert(8);
console.log(bst.DFSInOrder());
