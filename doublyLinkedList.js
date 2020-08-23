class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class doublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  add(data) {
    var node = new Node(data);
    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  get(index) {
    if (index > this.size - 1 || index < 0 || this.size === 0) {
      return null;
    }

    var curr = this.head,
      i = 0;

    while (curr.next) {
      if (i === index) {
        return curr.data;
      }
      curr = curr.next;
      i++;
    }
  }

  getLast() {
    if (this.size === 0) {
      return null;
    }
    return this.tail.data;
  }

  remove(index) {
    if (index > this.size - 1 || index < 0 || this.size === 0) {
      return null;
    }

    var curr = this.head,
      last = null,
      removeNode = null;
    i = 0;

    while (curr.next) {
      //Todo: needs optimisation.
      //Check the closest range and then iterate from last as well.
      if (i === index) {
        if (i === 0) {
          //first node
          removeNode = curr;
          this.head = curr.next;
          this.head.prev = null;
        } else if (i === this.size - 1) {
          //last node
          removeNode = curr;
          this.tail = last;
          last.next = null;
        } else {
          //middle node
          removeNode = curr;
          last.next = removeNode.next;
          curr = removeNode.next;
          curr.prev = last;
        }

        removeNode.next = null;
        removeNode.prev = null;
        this.size--;
        return removeNode.data;
      }

      last = curr;
      curr = curr.next;
      i++;
    }
    return null;
  }

  removeFirst() {
    if (this.size === 0) {
      return null;
    } else if (this.size === 1) {
      //list contains only 1 element
      let data = this.head.data;
      this.head = null;
      this.tail = null;
      this.size--;
      return data;
    } else {
      //list contains many elements
      let removeNode = this.head;
      this.head = removeNode.next;
      this.head.prev = null;
      this.size--;
      removeNode.next = null;
      return removeNode.data;
    }
  }

  removeLast() {
    if (this.size === 0) {
      return null;
    } else if (this.size === 1) {
      //list contains only 1 element
      let data = this.head.data;
      this.head = null;
      this.tail = null;
      this.size--;
      return data;
    } else {
      //list contains many elements
      let removeNode = this.tail;
      this.tail = removeNode.prev;
      this.tail.next = null;
      this.size--;
      removeNode.prev = null;
      return removeNode.data;
    }
  }

  size() {
    return this.size;
  }
}
