const WebSocket = require('ws');
const fetch = require('node-fetch');

class Client {
  constructor(options) {
    this.token = options.token;
    this.intents = options.intents;
    this.ws = new WebSocket('wss://gateway.discord.gg/?v=10&encoding=json');
    this.interval = 0;
    this.readyCallback = null;
    this.messageCreateCallback = null;
    this.initialize();
  }

  on(event, callback) {
    switch (event) {
      case 'READY':
        this.readyCallback = callback;
        break;
      case 'MESSAGE_CREATE':
        this.messageCreateCallback = callback;
        break;
    }
  }

  initialize() {
    const payload = {
      op: 2,
      d: {
        token: this.token,
        intents: this.intents,
        properties: {
          $os: 'linux',
          $browser: 'chrome',
          $device: 'chrome',
        },
        presence: {
          status: "online",
          since: 91879201,
          afk: false
        },
      }
    };

    this.ws.on('open', () => {
      this.ws.send(JSON.stringify(payload));
    });

    this.ws.on('message', (data) => {
      let payload = JSON.parse(data);
      const { t, op, d } = payload;

      switch (op) {
        case 10:
          const { heartbeat_interval } = d;
          this.interval = this.heartbeat(heartbeat_interval);
          break;
      }

      switch (t) {
        case "READY":
          if (typeof this.readyCallback === 'function') {
            this.readyCallback(d);
          }
          break;
        case "MESSAGE_CREATE":
          if (typeof this.messageCreateCallback === 'function') {
            this.messageCreateCallback(d);
          }
          break;
      }
    });
  }

  send(channelId, content) {
    const URL = `https://discord.com/api/v10/channels/${channelId}/messages`;
    const requestOptions = {
      method: 'POST',
      headers: {
        Authorization: `Bot ${this.token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: content,
        tts: false,
      }),
    };

    fetch(URL, requestOptions)
      .then((response) => response.text())
      .then(console.log)
      .catch(console.error);
  }

  heartbeat(ms) {
    return setInterval(() => {
      this.ws.send(JSON.stringify({ op: 1, d: null }));
    }, ms);
  }
}

module.exports = {Client};
