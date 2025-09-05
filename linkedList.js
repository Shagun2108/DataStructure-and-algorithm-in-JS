//linked listt is a linear datastructure where elments called nodes , are stored continously in memory instead each nodes contains data and a refernce ,
// or link to the next node in the sequence

class Node {
  constructor(value) {
    this.head = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    }
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    //  if(this.head.next === null){
    //     this.head = null;
    //     this.tail =null;
    // }

    let temp = this.head;
    let prev = this.head;
    while (temp.next) {
      prev = temp;
      temp = prev.next;
    }

    this.tail = prev;
    prev.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  unshift(value) {
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length++;
    return this;
  }

  shift() {
    if (!this.head) {
      // nothing to remove
      return undefined;
    }

    let temp = this.head;

    if (!this.head.next) {
      // only one node
      this.head = null;
      this.tail = null;
    } else {
      // move head to next node
      this.head = this.head.next;
      temp.next = null; // detach
    }

    this.length--;
    return temp; // return removed node
  }

  getFirst() {
    return this.head;
  }

  getLastElement() {
    if (!head) {
      return undefined;
    }

    // return this.tail;
    let temp = this.head;

    while (temp.next) {
      if (temp.next) {
        temp = temp.next;
      }
    }
    return temp;
  }
  getElementByIndex(index) {
    let counter = 0;
    let temp = this.head;

    while (temp) {
      if (counter === index) {
        return temp;
      }
      counter++;
      temp = temp.next;
    }

    return null;
  }
  set(index, value) {
    let counter = 0;
    let temp = this.head;

    while (temp) {
      if (counter === index) {
        temp.value = value;
        return true;
      }
      counter++;
      temp = temp.next;
    }

    return false;
  }
  insert(index, value) {
    if(index ==0){
        return this.unshift(value);
    }
    if(index === this.length){
        return this.push(value);
    }
    let NewNode = new Node(value);
    let counter = 0;
    let temp = this.head;
    let prev = this.head;
    while (temp) {
      if (counter == index) {
        prev.next = NewNode;
        NewNode.next = temp;
        this.length++;
      }
      prev = temp;
      temp = temp.next;
      counter++;
    }
  }
  size(){
    return this.length;
  }
  clear(){
    this.head= null;
    this.tail =null;
    this.length =0;
  }

reverse() {
  let temp = this.head;
  this.head = this.tail;
  this.tail = temp;

  let prev = null;
  let next = null;

  for (let i = 0; i < this.length; i++) {
    next = temp.next;   // store next
    temp.next = prev;   // reverse pointer
    prev = temp;        // move prev forward
    temp = next;        // move temp forward
  }

  return this; // return the updated list
}
}

const myLinkedList = new LinkedList(1);
myLinkedList.push(5);
myLinkedList.push(6);
myLinkedList.push(7);
myLinkedList.push(7);
myLinkedList.pop();
myLinkedList.unshift(19);
myLinkedList.shift();
myLinkedList.set(2, 200);
myLinkedList.insert(2,1000);
myLinkedList.clear();

console.log(myLinkedList);
