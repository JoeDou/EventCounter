const EventCounter = require("./eventCounter");
const Timer = require("./timer");

let ec = new EventCounter();
ec.start();
let ref = new Timer(10, ec.set);

setTimeout(() => {
  console.log("get last 10 sec", ec.get(10));
}, 9995);
setTimeout(() => {
  console.log("get last 20 sec", ec.get(20));
}, 19995);
setTimeout(() => {
  console.log("get last 40 sec", ec.get(40));
}, 39995);
setTimeout(() => {
  console.log("get last 1 min", ec.get(60));
}, 59995);
setTimeout(() => {
  ref.stop();
  ref = new Timer(100, ec.set);
  console.log("get last 5 min; running for 5 min", ec.get(300));
}, 300000);
setTimeout(() => {
  ref.stop();
  ec.stop();
  console.log("get last 5 min; running for 6 min", ec.get(300));
}, 360000);
