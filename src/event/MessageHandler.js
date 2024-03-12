const {
  Message
} = require("../classes/Message.js");

class MessageHandler {
  constructor(callback) {
    this.callback = callback;
  }

  async handle(data, token) {
    const message = new Message(data, token);
    this.callback(message);
  }
}

module.exports = {
  MessageHandler
};
