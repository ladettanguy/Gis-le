const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");

client.login("NzA5ODA1NTgxODE2NTYxNjg1.XrrkEA.0xLoB_b7Y_iyyxKs_U_X0QtpERQ");

client.commands = new Discord.Collection();

fs.readdir("./Commandes/", (error, files) => {
    
    if(error) console.log(error);
    
    let commandes = files.filter(file => file.split(".").pop() === 'js');
    if(commandes.length <= 0) return console.log("aucune commande trouvé !");

    commandes.forEach(f => {
        let commande = require(`./Commandes/${f}`);
        console.log(`${f} commande chargée !`);

        client.commands.set(commande.help.name, commande);
    });
});

fs.readdir("./Events/", (error, files) => {
    if(error) console.log(error);
    console.log(`${files.length} event en chargement`);

    files.forEach((files) => {
        const events = require(`./Events/${files}`);
        const event = files.split(".")[0];

        client.on(event, events.bind(null,client));
    });
});