const Discord = require('discord.js');

module.exports.run = async(guild, member, args) => {
    let role = guild.roles.cache.find(x => x.name === args);
    member.roles.remove(role.id).catch(console.error)
}

module.exports.help = {
    name:"delrole"
}