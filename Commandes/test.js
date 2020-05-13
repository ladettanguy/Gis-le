const Discord = require('discord.js');

module.exports.run = async(client,message, args) => {

    console.log(message.channel.id);

}

module.exports.help = {
    name:"test"
}