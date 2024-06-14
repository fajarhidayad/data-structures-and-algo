class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let temp = this.head;
    let prev = temp;

    while (temp.next) {
      prev = temp;
      temp = temp.next;
    }

    prev.next = null;
    this.tail = prev;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }

  unshift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;

    return this;
  }

  shift() {
    if (!this.head) return undefined;

    let temp = this.head;
    if (!temp.next) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      temp.next = null;
    }
    this.length--;

    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;

    if (index === 0) return this.head;
    else if (index == this.length - 1) return this.tail;
    else {
      let temp = this.head;
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
      return temp;
    }
  }

  set(index, value) {
    if (index < 0 || index >= this.length) return undefined;

    let node = this.get(index);
    node.value = value;
    return node;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return undefined;

    if (index === 0) return this.unshift(value);
    else if (index === this.length) return this.push(value);
    else {
      let newNode = new Node(value);
      let prevNode = this.get(index - 1);
      newNode.next = prevNode.next;
      prevNode.next = newNode;
      this.length++;

      return this;
    }
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;

    if (index === 0) return this.shift();
    else if (index === this.length - 1) return this.pop();
    else {
      let prevNode = this.get(index - 1);
      let temp = prevNode.next;
      prevNode.next = temp.next;
      temp.next = null;
      this.length--;

      return temp;
    }
  }

  reverse() {
    if (!this.head) return undefined;

    let prev = null;
    let temp = this.head;
    let next = temp;

    while (temp.next) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }

    this.tail = this.head;
    this.head = temp;
    this.head.next = prev;

    return this;
  }
}

const a = new LinkedList();
a.push(1);
a.push(2);
a.push(3);
a.push(4);
console.log(a);

a.reverse();
console.log(a);
