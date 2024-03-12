### Warden

Warden is a lightweight Discord bot framework for Node.js that simplifies the process of creating and managing Discord bots. It offers an intuitive interface and a set of features to help you build powerful bots quickly and efficiently.

### Installation

You can install Warden via npm by running the following command in your terminal:

```
npm install warden
```

### Getting Started

```javascript
const { Client } = require('warden');

const client = new Client({
  token: 'YOUR_DISCORD_BOT_TOKEN',
  intents: 131071,
});

client.on('ready', (d) => {
  console.log(`${d.user.username} is logged in`);
});

client.on('messageCreate', (message) => {
  if (message.author.bot) return;
  const command = message.content;
  if (command === "!help") {
    message.send(message.channel_id, "I'm here!");
  }
});
```

### Features

- **Easy Setup**: Warden simplifies the setup process, allowing you to focus on building your bot's functionality.
- **Event Handling**: Handle Discord events easily using the `on` method. Warden supports a variety of events, including message creation, user presence updates, and more.
- **Message Sending**: Send messages to Discord channels effortlessly with the `send` method.
- **Intuitive API**: Warden's API is designed to be easy to understand and use, making it accessible to developers of all skill levels.
- **Updated**: Warden stays up-to-date with the latest changes to the Discord API, ensuring compatibility with new features and improvements.

### Contributing

Contributions to Warden are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request on [GitHub](https://github.com/tech-voyager/warden).

### License

Warden is licensed under the MIT License. See the [LICENSE](https://github.com/tech-voyager/warden/blob/main/LICENSE) file for more information.
