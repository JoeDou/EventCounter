const Timer = require("./timer");
const { indexGenartor } = require("./helper");

const MAX_SEC = 300;
const ONE_SECOND = 1000;

class EventCounter {
  constructor() {
    this.storage = new Array(MAX_SEC);
    this.index = null;
    this.indexGenerator = null;
    this.set = this.set.bind(this);
    this.updateIndex = this.updateIndex.bind(this);
  }

  start() {
    this.storage = this.storage.fill(0);
    this.indexGenerator = indexGenartor(MAX_SEC);
    this.index = 0;
    this.timer = new Timer(ONE_SECOND, this.updateIndex);
  }

  updateIndex() {
    this.index = this.indexGenerator.next().value;
    this.storage[this.index] = 0;
  }

  stop() {
    this.timer.stop();
  }

  set() {
    this.storage[this.index]++;
  }

  get(seconds) {
    let count = 0;
    let countIndex = 0;
    while (countIndex < seconds) {
      if (countIndex > this.index) {
        count += this.storage[MAX_SEC - (countIndex - this.index)];
      } else {
        count += this.storage[this.index - countIndex];
      }
      countIndex++;
    }
    return count;
  }
}

module.exports = EventCounter;
