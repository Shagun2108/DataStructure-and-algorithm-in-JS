// A queue is a linear data structure that functions like a waiting line it follows the FIFO (first in first out)
// principle meaning the lemnet that enters the queue first will first one to be removed

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class queue {
    constructor(value){
        const newNode = new Node(value);
        this.first = newNode;
        this.last = newNode;
        this.length =1;
    }

enQueue(value){
    let newNode = new Node(value);

    if(this.length ===0){
        this.head = newNode;
        this.last = newNode
    }
    this.last.next = newNode;
    this.last= newNode ;
    this.length++;
    return this;
}

deQueue(){
    if(this.length ===0){
        return undefined;
    }
    if(this.length ===1){
        this.first = null;
        this.last = null;
    }
   let temp = this.first;
    this.first = this.first.next;
    this.length --;
    temp.next= null;

    return temp;
}


}

let myQueue = new queue(0);
myQueue.enQueue(1);
myQueue.enQueue(2);
myQueue.deQueue();
console.log(myQueue);
