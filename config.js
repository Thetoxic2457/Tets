module.exports = {
  token: process.env.DISCORD_TOKEN || "TON_TOKEN_ICI",
  prefix: process.env.PREFIX || "!",
  ownerID: process.env.OWNER_ID || "TON_ID_ICI",
  serverID: process.env.SERVER_ID || "ID_DU_SERVEUR_ICI",

  // Liens importants
  links: {
    invite: process.env.BOT_INVITE || "LIEN_INVITE_BOT",
    support: process.env.SUPPORT_SERVER || "LIEN_SERVEUR_SUPPORT"
  },

  // ID des salons (exemple pour logs, annonces, etc.)
  channels: {
    logs: process.env.LOGS_CHANNEL || "ID_SALON_LOGS_ICI",
    welcome: process.env.WELCOME_CHANNEL || "ID_SALON_BIENVENUE_ICI"
  }
};
