class Timer {
  constructor(interval, callback) {
    this.count = 0;
    this.isOn = true;
    this.startTime = new Date().getTime();
    this.interval = interval;
    this.callback = callback;
    this.next = this.next.bind(this);
    this.stop = this.stop.bind(this);

    setTimeout(this.next, interval);
  }

  next() {
    this.callback();
    this.count++;
    const diff =
      new Date().getTime() - this.startTime - this.count * this.interval;

    if (!this.isOn) return;
    setTimeout(this.next, this.interval - diff);
  }

  stop() {
    this.isOn = false;
  }
}

module.exports = Timer;
