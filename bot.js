const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '='
 
 client.on('ready', () => {
  client.user.setGame(`working .`,'https://www.twitch.tv/v5bz');

});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

﻿﻿client.on("message", message => {
if(message.content.startsWith(prefix + "avatar")){
if(message.author.bot || message.channel.type == "dm") return;
var args = message.content.split(" ")[1];
var avt = args || message.author.id;
client.fetchUser(avt)
.then((user) => {
avt = user
let avtEmbed = new Discord.RichEmbed()
.setColor("#36393e")
.setAuthor(`${avt.username}'s Avatar`, message.author.avatarURL)
.setImage(avt.avatarURL)
.setFooter(`DreamBot.`, message.client.user.avatarURL);
message.channel.send(avtEmbed);
})
.catch(() => message.channel.send(`Error`));
} // Julian
}); // Codes - Toxic Codes


client.on("message", msg=>{
if(!msg.content.startsWith(`${prefix}tax`)) return;
let tax = msg.content.split(" ")[1]
let Price = msg.content.split(" ")[2];
if(!tax || !Price) return msg.reply(`\`${prefix}tax 15% 100000\``).then(z=>z.delete(3000));
tax = tax.replace(/%/g,"");
let resulting = Math.floor(Price-(Price*(tax/100)));
if(!resulting || resulting < 0 ||  isNaN(resulting)) return msg.reply(`\`${prefix}tax 15% 100000\``).then(z=>z.delete(3000));
msg.reply(`resulting is ${resulting}$`)
})




client.on("message", message => {
if(message.content.startsWith(prefix + "vmute")) {
var mnt = message.mentions.members.first();
if(message.author.bot || message.channel.type == "dm" || !message.member.hasPermission("MUTE_MEMBERS") || !message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return;
if(!mnt) return message.channel.send(`**• | Usage:** ${prefix}vmute \`\`@Name\`\``);
if(!mnt.voiceChannel) return message.channel.send(`⛔ | *${mnt.user.tag}* is not in a voice channel!`);
mnt.setMute(true).then(() => {
message.channel.send(`Successfully Muted ${mnt} :+1:`)
}).catch(console.error);
}
if(message.content.startsWith(prefix + "unvmute")) {
var mnt = message.mentions.members.first();
if(message.author.bot || message.channel.type == "dm" || !message.member.hasPermission("MUTE_MEMBERS") || !message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return;
if(!mnt) return message.channel.send(`**• | Usage:** ${prefix}unvmute \`\`@Name\`\``);
if(!mnt.voiceChannel) return message.channel.send(`⛔ | *${mnt.user.tag}* is not in a voice channel!`);
mnt.setMute(false).then(() => {
message.channel.send(`Successfully Unmuted ${mnt} :+1:`)
}).catch(console.error);
}
});


const db = require('quick.db')
bot.on('guildMemberAdd', m => {
  let enabled = db.get(`autorole.${m.guild.id}.enabled`)
  if(enabled === 'off') return
  let roleID = db.get(`autorole.${m.guild.id}.role`)
  if(roleID === null) return
  let role = m.guild.roles.get(roleID)
  if(role === undefined) return
  m.addRole(role,'auto role')
})
bot.on('message', msg => {
  let params = msg.content.slice(prefix.length).trim().split(/ +/g);
  if(msg.author.bot) return;
  if(msg.content.startsWith(prefix + "autorole")) {
    if(params[1].toLowerCase() === 'set') {
      if(!params[2]) return msg.channel.send(`**اكتب اسم الرتبة او منشنها**`)
    let role = msg.mentions.roles.first() || msg.guild.roles.find(r => r.name.toLowerCase().startsWith(params[2].toLowerCase()))
    if(role === undefined) return msg.channel.send(`**لم استطع العثور على هذه الرتبة**`)
    db.set(`autorole.${msg.guild.id}.role`, role.id)
    msg.channel.send(`تم اعداد الاوتو رول للرتبة ${role}`)
  }
    if(params[1].toLowerCase() === 'off') {
      let enabled = db.get(`autorole.${msg.guild.id}.enabled`)
      if(enabled === 'off') return msg.channel.send(`**الاوتو رول موقفة بالفعل**`)
      db.set(`autorole.${msg.guild.id}.enabled`, 'off')
      msg.channel.send(`**تم ايقاف الاوتو رول بنجاح**`)
    }
    if(params[1].toLowerCase() === 'on') {
      let enabled = db.get(`autorole.${msg.guild.id}.enabled`)
      if(enabled === 'on') return msg.channel.send(`**الاوتو رول مفعلة بالفعل**`)
 
      db.set(`autorole.${msg.guild.id}.enabled`, 'on')
      msg.channel.send(`**تم تشغيل الاوتو رول بنجاح**`)
    }
  }
})




client.login(process.env.BOT_TOKEN);
