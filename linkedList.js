class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    var node = new Node(element);
    var current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }

  insertAt(element, location) {
    if ((location > 0 && location > this.size) || location < 0) {
      return false;
    } else {
      var node = new Node(element);
      if (location == 0) {
        node.next = this.head;
        this.head = node;
      } else {
        var prev,
          curr = this.head,
          i = 0;

        while (i < location) {
          prev = curr;
          curr = curr.next;
          i++;
        }

        prev.next = node;
        node.next = curr;
      }
      this.size++;
      return true;
    }
  }

  removeFrom(location) {
    if ((location > 0 && location > this.size) || location < 0) {
      return false;
    } else if (!this.isEmpty()) {
      if (location === 0) {
        this.head = this.head.next;
      } else {
        var prev,
          curr = this.head,
          i = 0;

        while (i < location) {
          prev = curr;
          curr = curr.next;
          i++;
        }

        prev.next = curr.next;
        this.size--;
      }
      return true;
    }
    return false;
  }

  removeElement(element) {
    if (this.isEmpty()) {
      return false;
    } else {
      var currNode = this.head,
        prevNode = null,
        i = 0;

      while (currNode !== null) {
        if (currNode.element === element) {
          if (prevNode === null) {
            this.head = this.head.next;
          } else {
            prevNode.next = currNode.next;
          }

          this.size--;
          return currNode.element;
        }

        prevNode = currNode;
        currNode = currNode.next;
      }
      return null;
    }
  }

  isEmpty() {
    return this.size === 0 ? true : false;
  }

  size_Of_List() {
    return this.size;
  }

  printList() {
    var i = 0;
    if (this.size_Of_List() === 0) {
      return null;
    } else {
      var currNode = this.head;

      while (i < this.size_Of_List()) {
        console.log(currNode.element);
        currNode = currNode.next;
        i++;
      }
    }
  }
}

let list = new LinkedList();
list.add(20);
list.add(21);
list.add(22);
list.removeFrom(1);
list.printList();
console.log("");
list.insertAt(21, 2);
list.printList();
console.log("");
list.removeElement(20);
list.printList();
