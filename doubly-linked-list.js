class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
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
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let temp = this.tail;
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      temp.prev = null;
    }
    this.length--;
    return temp;
  }

  unshift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return undefined;

    let temp = this.head;
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      temp.next = null;
    }
    this.length--;

    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;

    if (index === 0) return this.head;
    if (index === this.length - 1) return this.tail;

    let temp = this.head;
    if (index < this.length / 2) {
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
    } else {
      temp = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        temp = temp.prev;
      }
    }

    return temp;
  }

  set(index, value) {
    if (index < 0 || index >= this.length) return undefined;

    let temp = this.get(index);
    temp.value = value;

    return temp;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;

    let temp = this.get(index - 1);

    if (index === 0) this.unshift(value);
    else if (index === this.length) this.push(value);
    else {
      let newNode = new Node(value);
      let next = temp.next;
      newNode.prev = temp;
      newNode.next = next;
      temp.next = newNode;
      next.prev = newNode;

      this.length++;
    }
    return true;
  }

  remove(index) {
    let temp = this.get(index);

    if (temp) {
      if (index === 0) this.shift();
      else if (index === this.length - 1) this.pop();
      else {
        let prev = temp.prev;
        let next = temp.next;
        prev.next = next;
        next.prev = prev;

        temp.next = null;
        temp.prev = null;
        this.length--;
        return temp;
      }
    }
    return false;
  }
}

const double = new DoublyLinkedList();
