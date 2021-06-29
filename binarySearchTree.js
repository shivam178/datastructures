class Node {
  constructor(val, next = null, prev = null) {
    this['val'] = val;
    this['next'] = next;
    this['prev'] = prev;
  }
}

class binarySearchTree {
  constructor() {
    this['head'] = null;
    this['size'] = 0;
  }

  insert(data) {
    const node = new Node(data);
    if (this['head'] === null) {
      this['head'] = node;
    } else {
      this.insertNode(this['head'], node);
    }
    this['size']++;
  }

  insertNode(currentNode, newNode) {
    if(newNode['val'] < currentNode['val']) {
      if(currentNode['prev'] === null) {
        currentNode['prev'] = newNode;
      } else {
        this.insertNode(currentNode['prev'], newNode);
      }
    } else {
      if(currentNode['next'] === null) {
        currentNode['next'] = newNode;
      } else {
        this.insertNode(currentNode['next'], newNode);
      }
    }
  }
}

const bst = new binarySearchTree();
bst.insert(22);
bst.insert(20);
bst.insert(21);
bst.insert(0);
bst.insert(-2);
bst.insert(25);