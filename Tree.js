// A DS tree is a fundamnetal hierchial data structure it represents a collection of lements called nodes , connected by edges(links)
// forming  a tree like strcuture
//leaf node node pointing to no other node
// full tree  each node has no children or exactly 2 children
//perfect tree all leaf node are at same depth (distance from root)this means the tree
// is completely filled with no gaps ant any level

//complete tree  all levels excpet possibly the last one are completely filled with nodes
// left leaning last level the last level is filled with nodes from the left side
// as much as possible there might be empty spcaes on the right

// BInary serach Tree
// a speacil kind of binary tree used to orgainse data in  a srted way
// it workd like filing cabinet where you can effiecitly seacrh , add or remove items

// go left if your value is smaller than the current branch
// go right if your value is biiger

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let temp = this.root;

    while (true) {
      if (newNode.value === temp.value) {
        return undefined;
      }

      if (newNode.value < temp.value) {
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      } else {
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }

        temp = temp.right;
      }
    }
  }

  include(value) {
    if (this.root === null) {
      return undefined;
    }
    let temp = this.root;

    while (temp !== null) {
      if (temp.value === value) {
        return temp;
      }
      if (temp.value > value) {
        temp = temp.left;
      } else {
        temp = temp.right;
      }
    }

    return false;
  }
}

const tree = new BST();
tree.insert(10);
tree.insert(15);
tree.insert(12), 
tree.insert(11), 
tree.insert(5);

console.log(tree.include(11));


console.log(tree);
