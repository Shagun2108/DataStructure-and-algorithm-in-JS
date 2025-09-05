class Node {
    constructor(value){
     this.value = value;
    this.next = null;
    this.prev =null;

    }
   
}


class doubleLinkedList {
    constructor(value){
        this.head=new Node(value)
        this.tail= this.head;
        this.length =1;

    }


    push(value){
        
        let newNode = new Node(value);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
             newNode.prev= this.tail;
             this.tail.next = newNode;
             this.tail = newNode;

        }
        this.length ++;
       return this;
    }

    pop(){

         if (!this.head) {
           return undefined;
         }
        let temp = this.head;
        let prev = temp;

        while(temp.next){
            prev= temp;
            temp = temp.next
        }
        this.tail = prev;
        prev.next = null;
        temp.prev = null;
        this.length--;

        if(this.length ===0){
            this.head = null;
            this.tail = null;
        }

    }

    unshift(value){
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        this.head.prev = newNode;
        newNode.next=this.head;
        this.head = newNode;
        this.length++;
    }

    shift(){
        if(this.length === 0){
            return undefined;
        }
        if(this.length ==1){
            this.head = null;
            this.tail = null;
        }

        let temp = this.head.next;
        temp.prev = null;
        this.head.next = null;
        this.head = temp;
        this.length --;
    }

    
}
const doublyLinkedList = new doubleLinkedList(1);
doublyLinkedList.push(2);
doublyLinkedList.pop();
doublyLinkedList.unshift(23);
doublyLinkedList.shift();



console.log(doublyLinkedList);

