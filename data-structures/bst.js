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
}

const tree = new BST();
