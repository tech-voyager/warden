const {
  api
} = require("../api/api");

class Channel {
  #token;

  constructor(token, data) {
    try {
      this.#token = token;
      this.id = data.id;
      this.type = data.type;
      this.lastMessage = data.last_message_id;
      this.guildId = data.guild_id;
      this.name = data.name;
      this.parent = data.parent_id;
      this.perRateLimit = data.rate_limit_per_user;
      this.topic = data.topic;
      this.position = data.position;
      this.permissionOverwrites = data.permission_overwrites;
      this.nsfw = data.nsfw;
      this.icon = data.icon_emoji;
      this.themeColor = data.theme_color;
    } catch (e) {
      console.error(e);
    }
  }
}

module.exports = {
  Channel
}
