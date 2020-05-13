const Discord = require('discord.js');

module.exports = async(client) => {
    let channels = client.channels.cache.array();
    let guilds = [];
    channels.forEach(element => (element.name == 'rôles') ? guilds.push(element) : 1+1);
    guilds.forEach(element => {
        element.bulkDelete(3);
        element.send({embed:{
            jeu : "GTA",
            color : 0xEE0000,
            title : 'ATRIBUTION DES ROLES',
            thumbnail : client.user.displayAvatarURL,
            description : "Ajouté un Emojis réaction si vous voulais, le role du jeu correspondant afin de recevoir les notifications",
            fields : [
                {name: "GTA V", value:"Grand Thief Auto V"}
            ]
        }})
    })
    client.user.setPresence({
        activity: {
            name: "Triez les papiers, Remplir un carnet de note, sucez la queue du patron (si tu lis sa c'est que tu as regardé le profil petit coquin)"
        }
    });
    console.log("je suis connecté")
};