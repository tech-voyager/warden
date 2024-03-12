class User {
  constructor(data) {
    this.id = data.id;
    this.username = data.username;
    this.avatar = data.avatar;
    this.discriminator = data.discriminator;
    this.publicFlags = data.public_flags;
    this.premiumType = data.premium_type;
    this.flags = data.flags;
    this.banner = data.banner;
    this.accentColor = data.accent_color;
    this.globalName = data.global_name;
    this.bannerColor = data.banner_color;
    this.avatarDecorationData = data.avatar_decoration_data;
  }
  iconURL(options = {}) {
    if (!this.avatar) return null;
    const url = `https://cdn.discordapp.com/avatars/`;
    const {
      id,
      avatar
    } = this;
    const {
      size = 256,
      format = "png"
    } = options;
    return `${url}${id}/${avatar}?size=${size}&${format}`;
  }
  get tag() {
    return `${this.username}#${this.discriminator}`;
  }
}

module.exports = User;
