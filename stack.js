class Stack {
  constructor() {
    this.top = null;
    this.items = [];
  }

  getTopItem() {
    if (this.getLength() == 0) {
      return null;
    } else {
      return this.top;
    }
  }

  push(newData) {
    this.items.push(newData);
    this.top = newData;
  }

  pop() {
    if (this.getLength() == 0) {
      return null;
    } else if (this.getLength() == 1) {
      this.top = null;
      return this.items.pop();
    } else {
      this.top = this.items[this.getLength() - 2];
      return this.items.pop();
    }
  }

  getLength() {
    return this.items.length;
  }

  getEmpty() {
    return this.getLength() == 0;
  }
}

// let slack = new Stack();
// slack.push(20);
// slack.push(90);
// console.log(slack.getTopItem());
// slack.pop();
// console.log(slack.getLength());
// console.log(slack.getLength());
// console.log(slack.getTopItem());
