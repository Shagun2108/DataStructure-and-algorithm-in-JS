//stack is a linaer data structure that follows LIFO  or 
class Node{
    constructor(value){
        this.value = value;
        this.next = null;

    } 
}
    class Stack{
    constructor(value){
        const newNode= new Node(value);
        this.first = newNode;
        this.length =1;
    }

    push(value){
        let node = new Node(value);
        node.next= this.first;
        this.first = node;
        this.length++;
    }

    pop(){
        if(!this.first) return null;
        let temp = this.first;
        this.first = this.first.next;
        this.length--;
        temp.next = null;

        return temp;
    }

    max() {
    let temp = this.first;
    let minNode = this.first;

    while(temp){
     let value = temp.value;
     if(value > minNode.value){
        minNode = temp;
     }
     temp = temp.next;
    }
    return minNode

    }
    min() {
        if(this.length === 0){
            return undefined;
        }
    let temp = this.first;
    let minNode = this.first;

    while(temp){
     let value = temp.value;
     if(value < minNode.value){
        minNode = temp;
     }
     temp = temp.next;
    }
    return minNode

    }
        
    }
    let stack = new Stack(3);
    stack.push(90);
    stack.push(1);
    stack.push(91);
    console.log(stack.min());
    console.log(stack);
    