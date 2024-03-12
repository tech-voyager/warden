const {
  Ready
} = require("../classes/Ready.js");

class ReadyHandler {
  constructor(callback) {
    this.callback = callback;
  }
  handle(data) {
    const ready = new Ready(data);
    this.callback(ready);
  }
}

module.exports = {
  ReadyHandler
};
