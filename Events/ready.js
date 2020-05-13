const Discord = require('discord.js');

module.exports = async(client) => {
    let channels = client.channels.cache.array();
    let guilds = [];
    channels.forEach(element => (element.name == 'rôles') ? guilds.push(element) : 1+1);
    messageRoleEmbed(client ,guilds);
    client.user.setPresence({
        activity: {
            name: "Triez les papiers, Remplir un carnet de note, sucez la queue du patron (si tu lis sa c'est que tu as regardé le profil petit coquin)"
        }
    });
    console.log("je suis connecté")
};

function messageRoleEmbed(client ,guilds) {
    guilds.forEach(element => {
        let emojis = Array();
        emojis[0] = element.guild.emojis.cache.find(x => x.name == "GtaV");
        emojis[1] = element.guild.emojis.cache.find(x1 => x1.name == "CSGO");
        emojis[2] = element.guild.emojis.cache.find(x2 => x2.name == "Wakfu");
        emojis[3] = element.guild.emojis.cache.find(x3 => x3.name == "Destiny");
        emojis[4] = element.guild.emojis.cache.find(x4 => x4.name == "Dofus");
        emojis[5] = element.guild.emojis.cache.find(x5 => x5.name == "Warframe");
        emojis[6] = element.guild.emojis.cache.find(x6 => x6.name == "Valorant");
        emojis[7] = element.guild.emojis.cache.find(x7 => x7.name == "Overwatch");
        emojis[8] = element.guild.emojis.cache.find(x8 => x8.name == "RocketLeague");
        emojis[9] = element.guild.emojis.cache.find(x9 => x9.name == "LeagueOfLegends");

        element.bulkDelete(3);
        element.send({embed:{
            jeu : "GTA",
            color : 0xEE0000,
            title : 'ATRIBUTION DES ROLES',
            thumbnail : client.user.displayAvatarURL,
            description : "Ajouté un Emojis réaction si vous voulais, le role du jeu correspondant afin de recevoir les notifications",
            fields : [
                {name: "GtaV", value:`Grand Thief Auto V ${emojis[0]}`, inline: true},
                {name: "CSGO", value:`Counter-Strike: Global Offensive ${emojis[1]}`, inline: true},
                {name: "Wakfu", value:`Wakfu ${emojis[2]}`, inline: true},
                {name: "........................", value:`.........................`},
                {name: "Destiny", value:`Destiny 2 ${emojis[3]}`, inline: true},
                {name: "Dofus", value:`Dofus ${emojis[4]}`, inline: true},
                {name: "Warframe", value:`Warframe ${emojis[5]}`, inline: true},
                {name: "........................", value:`.........................`},
                {name: "Valorant", value:`Valorant ${emojis[6]}`, inline: true},
                {name: "Overwatch", value:`Overwatch ${emojis[7]}`, inline: true},
                {name: "RocketLeague", value:`Rocket League ${emojis[8]}`, inline: true},
                {name: "........................", value:`.........................`},
                {name: "LeagueOfLegends", value:`League of Legends ${emojis[9]}`, inline: true}
            ]
        }}).then(async msg => {
            await msg.react(emojis[0]);
            await msg.react(emojis[1]);
            await msg.react(emojis[2]);
            await msg.react(emojis[3]);
            await msg.react(emojis[4]);
            await msg.react(emojis[5]);
            await msg.react(emojis[6]);
            await msg.react(emojis[7]);
            await msg.react(emojis[8]);
            await msg.react(emojis[9]);
        });
    })
}