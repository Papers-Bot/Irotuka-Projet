const Discord = require("discord.js");
const client = new Discord.Client();
client.commands = new Discord.Collection();
const fs = require("fs");
const config = require("./config.json");

client.on("ready", () => {
  console.log("Le Bot est pret !");
})

fs.readdir('./commands/', (error, f) => {
  if (error) { return console.error(error); }
  let commandes = f.filter(f => f.split('.').pop() === 'js');
  if (commandes.length <= 0) { return console.log('Aucune commande trouvée !'); }

  commandes.forEach((f) => {
    let commande = require(`./commands/${f}`);
    console.log(`${f} commande chargée !`);
    client.commands.set(commande.help.name, commande);
  });
});

fs.readdir('./events/', (error, f) => {
  if (error) { return console.error(error); }
  console.log(`${f.length} events chargés`);

  f.forEach((f) => {
    let events = require(`./events/${f}`);
    let event = f.split('.')[0];
    client.on(event, events.bind(null, client));
  });
});

client.login(config.token);