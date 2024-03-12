const WebSocket = require('ws');

class WS {
  #socket;

  constructor() {
    this.#socket = null;
  }

  connect(url) {
    this.#socket = new WebSocket(url);
    return this.#socket;
  }

  disconnect() {
    if (this.#socket) {
      this.#socket.close();
    }
  }

  on(event, callback) {
    if (this.#socket) {
      this.#socket.on(event, callback);
    }
  }

  send(data) {
    if (this.#socket) {
      this.#socket.send(data);
    }
  }
}

module.exports = WS;
