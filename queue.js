class Queue {
  constructor() {
    this.items = [];
    this.first = this.items[0];
    this.last = null;
  }

  getQueue() {
    return this.items;
  }

  push(data) {
    if (this.items.length == 0) {
      this.first = data;
      this.last = data;
    } else {
      this.last = data;
    }
    this.items.push(data);
  }

  getFirst() {
    return this.items[0];
  }

  getLast() {
    return this.last;
  }

  pop() {
    if (this.items.length == 0) {
      return null;
    } else if (this.items.length == 1) {
      this.first = null;
      this.last = null;
      return this.items.pop();
    } else {
      this.last = this.items[this.items.length - 2];
      return this.items.shift();
    }
  }
}

// let que = new Queue();
// que.push(1);
// que.push(2);
// que.push(3);
// que.push(4);

// console.log(que.getLast());

// que.pop();
// console.log(que.getLast());
// console.log(que.getQueue());
// que.pop();
// que.pop();
// que.pop();
// console.log(que.getQueue());
// console.log(que.getLast());
