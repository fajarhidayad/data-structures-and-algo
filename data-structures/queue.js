class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = this.first;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;
    return this;
  }

  dequeue() {
    if (this.length === 0) return undefined;

    let temp = this.first;
    this.first = this.first.next;
    temp.next = null;
    this.length--;

    if (this.length === 0) {
      this.first = null;
      this.last = null;
    }
    return temp;
  }
}

const q = new Queue();
q.enqueue(1);
q.enqueue(2);
console.log(q);
q.dequeue();
console.log(q);
q.dequeue();
console.log(q);
