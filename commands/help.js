const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
  var help = new Discord.RichEmbed()
    .setThumbnail(client.user.avatarURL)
    .setDescription("📋 Commandes Disponible")
    .addField("👮 Commmandes Administratives", "`Indisponible...`")
    .addField("🚨 Commandes De Modération", "`Indisponible...`")
    .addField("🤖 Commandes Utilitaires", "`Indisponible...`")
    .addField("💎 Commandes Divers", "`Indisponible...`")
    .setColor("#00E360")
    .setFooter("Irotuka - Tout Droit Réserver")
    .setTimestamp();

  message.channel.send(help)
}

module.exports.help = {
  name: "help"
}