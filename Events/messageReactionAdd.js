const Discord = require('discord.js');

module.exports = async(client, reaction, user) => {
    //Ignore les Reactions des bots
    if(user.bot) return;
    //ignore les autres messages que les ATRIBUTION DES ROLES
    if(!reaction.message.embeds[0].title === 'ATRIBUTION DES ROLES') return;
    const cmd = client.commands.get("addrole");
    cmd.run(
        reaction.message.guild,
        reaction.message.guild.member(user), 
        reaction.emoji.name
    );
}