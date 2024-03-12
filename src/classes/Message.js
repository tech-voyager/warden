const {
  api
} = require("../api/api");

class Message {
  #token;

  constructor(data, token) {
    try {
      this.#token = token;
      this.type = data.type;
      this.tts = data.tts;
      this.timestamp = data.timestamp;
      this.referencedMessage = data.referenced_message;
      this.pinned = data.pinned;
      this.nonce = data.nonce;
      this.mentions = data.mentions;
      this.mentionRoles = data.mention_roles;
      this.mentionEveryone = data.mention_everyone;
      this.member = {
        roles: data.member.roles,
        premiumSince: data.member.premium_since,
        pending: data.member.pending,
        nick: data.member.nick,
        mute: data.member.mute,
        joinedAt: data.member.joined_at,
        flags: data.member.flags,
        deaf: data.member.deaf,
        communicationDisabledUntil: data.member.communication_disabled_until,
        avatar: data.member.avatar
      };
      this.author = {
        username: data.author.username,
        publicFlags: data.author.public_flags,
        premiumType: data.author.premium_type,
        id: data.author.id,
        globalName: data.author.global_name,
        discriminator: data.author.discriminator,
        avatarDecorationData: data.author.avatar_decoration_data,
        avatar: data.author.avatar,
      };
      this.id = data.id;
      this.flags = data.flags;
      this.embeds = data.embeds;
      this.editedTimestamp = data.edited_timestamp;
      this.content = data.content;
      this.components = data.components;
      this.channelId = data.channel_id;
      this.attachments = data.attachments;
      this.guildId = data.guild_id;
    } catch (error) {
      console.error('Error:', error);
    }
  }

  async getUserData(userId) {
    try {
      return await api(this.#token, "GET", `users/${userId}`);
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async getUser() {
    try {
      const userData = await this.getUserData(this.author.id);
      if (userData) {
        return new User(userData);
      }
      return null;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  get user() {
    return this.getUser();
  }

  async getChannelData() {
    try {
      return await api(this.#token, "GET", `/channels/${this.channelId}`);
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async getChannel() {
    try {
      const channelData = await this.getChannelData();
      if (channelData) {
        return new Channel(this.#token, channelData);
      }
      return null;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  get channels() {
    return this.getChannel();
  }
  async send(content = "", embeds = null, options = {}) {
    try {
      if (typeof content !== "string") {
        throw new Error("content must be a string.");
      }
      if (Array.isArray(embeds)) {
        throw new Error("embeds must be an Array.");
      }
      const payload = {
        content,
        embeds,
        ...options
      };
      const response = await api(this.#token, "POST", `channels/${this.channelId}/messages`, payload);
      return response;
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = {
  Message
};
