module.exports = {
    token: process.env.TOKEN || "",  // ⚠️ Mets ce token dans Railway
    clientID: process.env.CLIENT_ID || "1168170696493510826",  
    prefix: process.env.PREFIX || "&",  
    ownerID: process.env.OWNER_ID || "1053399246805684265",
    guildID: process.env.GUILD_ID || "1328162211084111942",

    // ✅ Sécurité : Ne mets PAS ces clés en dur ! Utilise les variables d’environnement
    SpotifyID: process.env.SPOTIFY_ID || "",
    SpotifySecret: process.env.SPOTIFY_SECRET || "",

    mongourl: process.env.MONGO_URL || "",  // ⚠️ Ajoute ton URL MongoDB sur Railway
    embedColor: process.env.EMBED_COLOR || 0xcc0000,

    // 📌 Logs et erreurs (mets bien ces IDs dans Railway si tu les changes)
    logs: process.env.LOGS || "",
    logs1: process.env.LOGS1 || "",
    errorLogsChannel: process.env.ERROR_LOGS_CHANNEL || "",
    buglogschannel: process.env.BUG_LOGS_CHANNEL || "",

    // ⚙️ Recherche par défaut (tu peux changer l’ordre si nécessaire)
    SearchPlatform: "youtube",
    AggregatedSearchOrder: process.env.AGGREGATED_SEARCH_ORDER || "youtube, youtube music, soundcloud",

    // 🔗 Liens (mets-les bien dans Railway)
    links: {
        img: process.env.IMG || 'https://media.discordapp.net/attachments/1221788310935179294/1221788721184243722/standard_4.gif', 
        support: process.env.SUPPORT || 'https://dsc.gg/codexdev',
        invite: process.env.INVITE || 'https://discord.com/api/oauth2/authorize?client_id=1168170696493510826&permissions=36768832&scope=applications.commands%20bot'
    },

    // 🔌 Lavalink Nodes (⚠️ Corrige les infos et mets-les dans Railway)
    nodes: [
        {
            host: process.env.NODE_HOST || "",  // ⚠️ Mets un vrai host dans Railway
            port: parseInt(process.env.NODE_PORT || "3128"),
            password: process.env.NODE_PASSWORD || "",
            secure: parseBoolean(process.env.NODE_SECURE || "false"),
        }
    ],
}

// Fonction pour parser un booléen proprement
function parseBoolean(value) {
    if (typeof (value) === 'string') {
        value = value.trim().toLowerCase();
    }
    return value === "true";
}
