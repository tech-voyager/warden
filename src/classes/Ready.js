class Ready {
  constructor(d) {
    this.user = {
      verified: d.user.verified,
      username: d.user.username,
      mfaEnabled: d.user.mfa_enabled,
      id: d.user.id,
      flags: d.user.flags,
      email: d.user.email,
      discriminator: d.user.discriminator,
      bot: d.user.bot,
      avatar: d.user.avatar,
    };
    this.application = {
      id: d.application.id,
      flags: d.application.flags,
    };
    this.v = d.v;
    this.userSettings = d.user_settings;
    this.sessionType = d.session_type;
    this.sessionId = d.session_id;
    this.resumeUrlGateway = d.resume_gateway_url;
    this.relationships = d.relationships;
    this.privateChannels = d.private_channels;
    this.presences = d.presences;
    this.guilds = d.guilds;
    this.guildJoinRequests = d.guild_join_requests;
    this.geoOrderedRtcRegions = d.geo_ordered_rtc_regions;
    this.auth = d.auth;
    this._trace = d._trace;
  } catch(e) {
    throw new Error("[Warning] Invalid property name!", e);
  }
}

module.exports = {
  Ready
};
