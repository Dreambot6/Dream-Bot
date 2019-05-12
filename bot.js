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

client.on("message",async message => {
if(message.content === '=shop'){//الامر
let staff = message.guild.member(message.author).roles.find('name' ,"Sellers");
      if(!staff) return message.reply(`**Only Sellers | :x:**`)
var shopc = message.guild.channels.find("name","「✮shop✮」")
  if(!shopc) return message.reply("لا اجد الروم المخصص للبيع")
    let shop = '';
      let fillter = m => m.author.id === message.author.id
     
     
 
      await message.channel.send("اكتب الاشياء الذي سوف تبيعها").then(e => {
           message.channel.awaitMessages(fillter, { time: 60000, max: 1                                    
})
     .then(co => {
       shop = co.first().content;
        co.first().delete();
     
let desc = '';
       
e.edit("اكتب الدفع عند مين؟").then(e => {
  message.channel.awaitMessages(fillter, { time: 60000, max: 1 })
 
     .then(co => {
       desc = co.first().content;
        co.first().delete();
e.edit("Done").then(e => {
  shopc.send(` <$>
${message.guild.name}:tm: Shop :arrow_down:
======================
${shop}
=================
**الدفع عند:** **${desc}**
 
**تم الارسال بواسطة:** ${message.author}
 @everyone</>@here `)
  })
})
  })
})
  })
           
     
 
     
 
     
           
}
});


client.on("message", (message) => {
 
   if (message.content.startsWith("=new")) {  
        const reason = message.content.split(" ").slice(1).join(" ");  
        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`لازم تسوي رتبة اسمها \`Support Team\` وتنطي البوت ادمنيتر حتا يقدر يسوي الرومات ويعدل برمشنات`);
        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);    /// ALPHA CODES
        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Support Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });  
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.channel.send(`:white_check_mark: تم انشاء تذكرتك, #${c.name}.`);
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .addField(`Hey ${message.author.username}!`, `:white_check_mark:  تم انشاء تذكرتك, =ticket`)
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error);
    }
 
 
  if (message.content.startsWith("=close")) {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
 
       message.channel.send(`هل انت متأكد من اقفالك للتذكرة اذا متأكد اكتب=confirm`)
           .then((m) => {
               message.channel.awaitMessages(response => response.content === '=confirm', {
                       max: 1,
                       time: 10000,
                       errors: ['time'],
                   })  
                   .then((collected) => {
                       message.channel.delete();
                   })  
                   .catch(() => {
                       m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
                           m2.delete();
                       }, 3000);
                   });
           });
   }
 
});





client.on("guildMemberAdd", member => {
  client.channels.find('id', '576778852009902101').send(`**مرحبابك نتمني لك الأستمتاع في سيرفرنا : [ ${member} ]**`)
});




 

client.on("message", msg=>{
let id = "491884648276819968"; // ايديك
let role = "VIP"; // اسم رتبة الفيب
let Price = 100; // السعر
let Price2 = Math.floor(Price-(Price*(1/100)));
if(!Price || Price < 1) return;
let cmd = msg.content.split(' ')[0];
if(cmd === `${prefix}buy`){
if(msg.author.bot) return;
if(!msg.channel.guild) return;
let embedvip = new Discord.RichEmbed()
.setColor("#42f4f4")
.setAuthor(msg.author.username, msg.author.displayAvatarURL)
.setThumbnail(msg.author.avatarURL)
.setTitle("**اختر الطريقة المناسبة لك**")
.addField("ل شراء الفي اي بي لنفسك","🔱",true )
.addField("ل شراء الفي اي بي ك هدية","🎁",true)
.setTimestamp()
.setFooter(client.user.username,client.user.displayAvatarURL);
msg.channel.send(embedvip).then(msgs2 =>{
msgs2.react("🔱").then(()=>{
  msgs2.react("🎁").then(()=>{
    const me = (reaction, user) => reaction.emoji.name === '🔱' && user.id === msg.author.id;
    const gift = (reaction, user) => reaction.emoji.name === '🎁' && user.id === msg.author.id;
    const mec = msgs2.createReactionCollector(me, {time: 120000});
    const giftc = msgs2.createReactionCollector(gift, {time: 120000});
mec.on("collect", r=>{  
msgs2.delete()
if(msg.member.roles.find(r=>r.name == role)) return msg.reply("انت تمتلك الرتبة مسبقًا");
let roleW = msg.guild.roles.find(r=>r.name == role);
if(!roleW) return msg.reply(`البوت مقفل لعدم وجود رتبة ب أسم \`${role}\``)
msg.channel.send(`كردت بروبوت\`${Price}\` لديك 4 دقائق لتحويل
إلى ${msg.guild.members.get(id)}
`).then( msgs =>{
const filter = response => response.author.id == "282859044593598464" && response.mentions._content.includes(`:moneybag: | ${msg.author.username}, has transferred \`$${Price2}\` to ${msg.guild.members.get(id)}`);
msg.channel.awaitMessages(filter, { maxMatches: 1, time: 240000, errors: ['time'] })
.then( collected =>{
msgs.delete()
msg.reply(`تم اعطائك رتبة \`${role}\``);
msg.member.addRole(roleW);
}).catch(e => {});
})})
giftc.on("collect", r=>{
  msgs2.delete()
  let roleW = msg.guild.roles.find(r=>r.name == role);
  if(!roleW) return msg.reply(`البوت مقفل لعدم وجود رتبة ب أسم \`${role}\``)
msg.channel.send(`كردت بروبوت\`${Price}\` لديك 4 دقائق لتحويل
إلى ${msg.guild.members.get(id)}
`).then( msgs =>{
  const filter = response => response.author.id == "282859044593598464" && response.mentions._content.includes(`:moneybag: | ${msg.author.username}, has transferred \`$${Price2}\` to ${msg.guild.members.get(id)}`);
  msg.channel.awaitMessages(filter, { maxMatches: 1, time: 240000, errors: ['time'] })
  .then( collected =>{
  msgs.delete()
  genKey(msg,roleW);
  }).catch(e => {});
  })
})
})})})
///
}
if(cmd === `${prefix}used`){
  let args = msg.content.split(" ").slice(1)[0];
  if(!args) {  
    let embed = new Discord.RichEmbed()
    .setColor("#42f4f4")
    .setTitle(`:x: - **الرجاء ادخال كود الهدية** \`${prefix}used <Key>\``)
    msg.reply(embed).then( z => z.delete(3000));
    return
}
  let embed = new Discord.RichEmbed()
.setTitle(`**جاري التحقق من الكود**`)
.setColor("#42f4f4")
  msg.reply(embed).then( msgs =>{
  if(vipKeys[args]){
    let hav = msg.member.roles.find(`name`, vipKeys[args].name);
    if(hav){
    let embed = new Discord.RichEmbed()
    .setTitle(`:x: - **انت تمتلك هذه الرتبة مسبقًا**  \`${vipKeys[args].name}\``)
    .setColor("#42f4f4")
    msgs.edit(embed)
    return
    }
    let embed = new Discord.RichEmbed()
    .setTitle(`:tada: - **مبروك تم اعطائك رتبة** \`${vipKeys[args].name}\``)
    .setColor("#42f4f4")
    msgs.edit(embed)
    msg.member.addRole(vipKeys[args]);
    delete vipKeys[args]
    save()
  }else{
    let embed = new Discord.RichEmbed()
    .setTitle(`:x: - **الكود غير صيحيح أو انه مستعمل من قبل**`)
    .setColor("#42f4f4")
    msgs.edit(embed)
  }});
}
});
 
function genKey(msg,role){
  var randomkeys = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var gift = "";
  for (var y = 0; y < 16; y++) {   ///16
    gift +=  `${randomkeys.charAt(Math.floor(Math.random() * randomkeys.length))}`;
  }
  vipKeys[gift] = role;
  let embed = new Discord.RichEmbed()
  .setColor("#42f4f4")
  .setTitle(`:ok_hand: - **تم ارسآل الكود على الخاص**`);
  msg.reply(embed);
  let embed2= new Discord.RichEmbed()
  .setAuthor(msg.author.username, msg.author.displayAvatarURL)
  .setThumbnail(msg.author.avatarURL)
  .addField("**Key Of Gift**", gift,true)
  .addField("Role",vipKeys[gift].name,true)
  .addField("This Key Made by", msg.author, true)
  .addField("The Room", msg.channel , true)
  .setTimestamp()
  .setFooter(client.user.username,client.user.displayAvatarURL)  
  msg.author.send(embed2);
  save()
}
 
function save(){
  fs.writeFile("./vipKeys.json", JSON.stringify(vipKeys), (err) => {
    if (err) console.log(err)
  });
 
}




client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","Member"));
    });



client.on('message', message => {
    if(message.content == '=allservers') {
             if(!message.author.id === 'YourID') return;
    var gimg;
    var gname;
    var gmemb;
    var gbots;
    var groles;
    var servers = client.guilds;
    servers.forEach((g)=>{
    gname = g.name;
    gimg = g.iconURL;
    gmemb = g.members.size;
    gbots = g.members.filter(m=>m.bot).size;
    groles = g.roles.map(r=> {return r.name});
    let serv = new Discord.RichEmbed()
    .setAuthor(gname,gimg)
    .setThumbnail(gimg)
    .addField('Server Member Count',gmemb = g.members.size)
    .setColor('RANDOM')
    message.channel.send(`
    Server Name : **${gname}**
    Server MemberCount : **${gmemb} **
           
            `);
          message.channel.sendEmbed(serv);
    })
    }
    });





client.on('message', message => {
    if(message.content == prefix + "usersinfo") {
    const mkcode = new Discord.RichEmbed()
    .setColor('RANDOM')
    .addField(`All Users Count`,`
    - Users & Bots: ${client.users.size}
    - Users: ${client.users.filter(m =>!m.bot).size}
    - Bots: ${client.users.filter(m=>m.bot).size}`, true)
    .addField(`All Users Status`,`
    - Online: ${client.users.filter(m=>m.presence.status == 'online').size}
    - Offline: ${client.users.filter(m=>m.presence.status == 'offline').size}
    - Dnd: ${client.users.filter(m=>m.presence.status == 'dnd').size}
    - Idle: ${client.users.filter(m=>m.presence.status == 'idle').size}`, true)
        message.channel.send(`- <@${client.user.id}> Users Informations\n- Requested by ${message.author}`,{embed: mkcode});
        }
});
//By MK ToxicCodes CopyRights 04/30/2019




client.on("guildCreate", () => {
    client.user.setActivity(`${prefix}help ${client.guilds.size}: Server ${client.users.size}: User`, {type:'WATCHING'});
});
client.on("guildDelete", () => {
    client.user.setActivity(`${prefix}help ${client.guilds.size}: Server ${client.users.size}: User`, {type:'WATCHING'});
});





client.on('message',async message => {
if(message.content == '=unbanall') { 
if(message.author.bot || message.channel.type == "dm" || !message.member.hasPermission("BAN_MEMBERS")) return;
message.guild.fetchBans().then(ba => {
ba.forEach(ns => {
message.guild.unban(ns);
})
}).then(() => {
let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)           
  .addField("Done✅|تم إزالة الباند عن جميع الأعضاء")     
  message.channel.send(embed);
})
}
});





client.on("message", async message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(message.author.id != "491884648276819968") return;
    if(message.author.bot) return;
    if (command == "leave") {
        if(!args[0] || args[1]) return message.reply(`**${prefix}leave <guild_id>**`);
        let GuildId = client.guilds.get(args[0])
        if(!GuildId) return message.reply(`** Guild ID is not Detected**`);
        GuildId.leave().then(m => message.channel.send("**I have Left "+GuildId.name+" ✅**"))
    }     
})




client.on('message', message => {
    if (message.content === "=id") {
    var year = message.createdAt.getFullYear()
    var month = message.createdAt.getMonth()
    var day = message.createdAt.getDate()
         let embed = new Discord.RichEmbed()
         .setAuthor(message.author.username, message.author.avatarURL)
      .setThumbnail(message.author.avatarURL)
        .addField("**اسمك:**",  '**[ ' + `${message.author.username}` + ' ]**')
          .setThumbnail(message.author.avatarURL)
                   .setFooter(`${message.author.username}`)
      .addField('الكود الخاص بك:', message.author.discriminator)
      .addField("**عدد الايام منذ افتتاح حسابك:**", message.author.createdAt.getDate())
        .addField("** تم افتتاح حسابك عام:**", message.createdAt.getFullYear())
            .addField("** عدد الشهور منذ افتتاح حسابك:**", message.createdAt.getMonth())
   
      message.channel.send({embed});
        }
    });




client.on("message", message => {
    
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
                if(!message.channel.guild) return;
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**No Permissions**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done",
        color: 0x36393e,
        description: "The Room chat has been Deleted !",
        footer: {
          text: "Pixel Bot©."
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});




const bot = new Discord.Client()
bot.on('message', msg => {
  if(msg.author.bot) return
  if(msg.content.startsWith(prefix + 'role')) {
  let params = msg.content.slice(prefix.length).trim().split(/ +/g);
  if(!params[0]) return msg.channel.send(`**syntax: ${prefix}role <all/humans/bots/@user> <name role/@role>`);
if(params[0] === 'all') {
 if(!params[1]) return msg.channel.send(`**منشن الرتبة او اكتب اسمها \n syntax: ${prefix}role all <@role / name role>**`)
     let role = msg.mentions.roles.first() || msg.guild.roles.find(r =>  r.name.toLowerCase().startsWith(params[1].toLowerCase()))
   if(!role) return msg.channel.send(`**لم استطع ايجاد هذه الرتبة**`)
 msg.guild.members.forEach(m => {
if(m.roles.some(r => r.id == role.id)) return
     m.addRole(role)
 })
 msg.channel.send(`**done give all role @${role.name}**`);
} else if(params[0] === 'bots') {
 if(!params[1]) return msg.channel.send(`**منشن الرتبة او اكتب اسمها \n syntax: ${prefix}role bots <@role / name role>**`)
     let role = msg.mentions.roles.first() || msg.guild.roles.find(r =>  r.name.toLowerCase().startsWith(params[1].toLowerCase()))
   if(!role) return msg.channel.send(`**لم استطع ايجاد هذه الرتبة**`)
 let bots = msg.guild.members.filter(m => m.user.bot)
 bots.forEach(bot => {
   if(bot.roles.some(r => r.id == role.id)) return
   bot.addRole(role)
 })
 msg.channel.send(`**done give all bots role @${role.name}**`);
} else if(params[0] === 'humans') {
 if(!params[1]) return msg.channel.send(`**منشن الرتبة او اكتب اسمها \n syntax: ${prefix}role humans <@role / name role>**`)
     let role = msg.mentions.roles.first() || msg.guild.roles.find(r =>  r.name.toLowerCase().startsWith(params[1].toLowerCase()))
   if(!role) return msg.channel.send(`**لم استطع ايجاد هذه الرتبة**`)
   let humans = msg.guild.members.filter(m => !m.user.bot)
   humans.forEach(h => {
     if(h.roles.some(r => r.id == role.id)) return
     h.addRole(role)
   })
   msg.channel.send(`**done give all humans role @${role.name}**`);
}else {
     if(!params[1]) return msg.channel.send(`**منشن الرتبة او اكتب اسمها \n syntax: ${prefix}role @user <@role / name role>**`)
     let role = msg.mentions.roles.first() || msg.guild.roles.find(r =>  r.name.toLowerCase().startsWith(params[1].toLowerCase()))
     if(!role) return msg.channel.send(`**لم استطع ايجاد هذه الرتبة**`)
     let userID = params[0].slice(2 , -1)
     let user = msg.guild.members.get(userID)
     if(!user) return
     user.addRole(role)
     msg.channel.send(`**Done give ${user} @${role.name}**`)
 
   }
 
 
 }
 
 
})



giftKeys = {};
let devs = ["434282754016935937","491884648276819968"]; 
client.on("message", msg =>{
  let args = msg.content.split(" ").slice(1)[0];
  let cmd = msg.content.split(' ')[0]
  if(cmd === `${prefix}giftR`){
  let roleW = msg.mentions.roles.first();
  if(!devs.includes(msg.author.id)){
    let embed = new Discord.RichEmbed()
    .setColor("#42f4f4")
    .setTitle(`:x: - انت لاتمتلك الصلاحية`);
    msg.reply(embed).then( z => z.delete(3000));
     return
  }
  if(!roleW) {
    let embed = new Discord.RichEmbed()
    .setColor("#42f4f4")
    .setTitle(`:x: - منشن الرتبة \`${prefix}giftR <@admin-role>\``);
    msg.reply(embed).then( z => z.delete(3000)); return
  };
  let role = msg.guild.roles.find(`name`, roleW.name);
  if(!role) {
    let embed = new Discord.RichEmbed()
    .setColor("#42f4f4")
    .setTitle(`:x: - Could't find \`${roleW.name}\` role.`);
  msg.reply(embed).then( msgs => msgs.delete(3000));
  return
  }
  var randomkeys = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var gift = "";
  for (var y = 0; y < 16; y++) {   ///16
    gift +=  `${randomkeys.charAt(Math.floor(Math.random() * randomkeys.length))}`;
  }
  giftKeys[gift] = role;
  let embed = new Discord.RichEmbed()
  .setColor("#42f4f4")
  .setTitle(`:ok_hand: - **تم ارسآل الكود على الخاص**`);
  msg.reply(embed);
  let embed2= new Discord.RichEmbed()
  .setAuthor(msg.author.username, msg.author.displayAvatarURL)
  .setThumbnail(msg.author.avatarURL)
  .addField("**Key Of Gift**", gift,true)
  .addField("Role",giftKeys[gift].name,true)
  .addField("This Key Made by", msg.author, true)
  .addField("The Room", msg.channel , true)
  .setTimestamp()
  .setFooter(client.user.username,client.user.displayAvatarURL)  
  msg.author.send(embed2);
};
if( cmd === `${prefix}use`){
 
  if(!args) {  
    let embed = new Discord.RichEmbed()
    .setColor("#42f4f4")
    .setTitle(`:x: - **الرجاء ادخال كود الهدية** \`${prefix}use <Key>\``)
    msg.reply(embed).then( z => z.delete(3000));
    return
}
let embed = new Discord.RichEmbed()
.setTitle(`**جاري التحقق من الكود**`)
.setColor("#42f4f4")
  msg.reply(embed).then( msgs =>{
  if(giftKeys[args]){
    let hav = msg.member.roles.find(`name`, giftKeys[args].name);
    if(hav){
    let embed = new Discord.RichEmbed()
    .setTitle(`:x: - **انت تمتلك هذه الرتبة مسبقًا**  \`${giftKeys[args].name}\``)
    .setColor("#42f4f4")
    msgs.edit(embed)
    return
    }
    let embed = new Discord.RichEmbed()
    .setTitle(`:tada: - **مبروك تم اعطائك رتبة** \`${giftKeys[args].name}\``)
    .setColor("#42f4f4")
    msgs.edit(embed)
    msg.member.addRole(giftKeys[args]);
    delete giftKeys[args]
  }else{
    let embed = new Discord.RichEmbed()
    .setTitle(`:x: - **الكود غير صيحيح أو انه مستعمل من قبل**`)
    .setColor("#42f4f4")
    msgs.edit(embed)
  }});
};
});





client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:heart:  ولكم نورت السيرفر:heart: 
:crown:اسم العضو  ${member}:crown:  
انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
})
	






client.on('message', message => {
  if(message.content === '=support') {
  const embed = new Discord.RichEmbed()
  .setTitle('Click here')
  .setURL('https://discord.gg/Nbt8yxY')
  .setColor('RANDOM')
  message.channel.send({embed: embed});
  }
});




client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('=bcall')){
 if (message.author.id !== '491884648276819968') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});





client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

// ^^say
  if (command === "say") {
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
  
 

if (command == "embed") {
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor(0x23b2d6)
    message.channel.sendEmbed(say);
    message.delete();
  }


})






client.on('message',async message => {
  if(message.author.bot || message.channel.type === 'dm') return;
  let args = message.content.split(' ');
  if(args[0] === `${prefix}bc`) {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('⛔ | You dont have **ADMINISTRATOR** Permission!');
    if(!args[1]) return message.channel.send('**➥ Useage:** =bc message');
  
    let msgCount = 0;
    let errorCount = 0;
    let successCount = 0;
    message.channel.send(`**- [ 🔖 :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ 📥 :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ 📤 :: ${errorCount} ]・عدد الرسائل الغير مستلمة**`).then(msg => {
      message.guild.members.forEach(g => {
        g.send(args.slice(1).join(' ')).then(() => {
          successCount++;
          msgCount++;
          msg.edit(`**- [ 🔖 :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ 📥 :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ 📤 :: ${errorCount} ]・عدد الرسائل الغير مستلمة**`);
        }).catch(e => {
          errorCount++;
          msgCount++;
          msg.edit(`**- [ 🔖 :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ 📥 :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ 📤 :: ${errorCount} ]・عدد الرسائل الغير مستلمة**`);
        });
      });
    });
  }
});






client.on('message', message => {
  if (true) {
if (message.content === '=invite') {
      message.author.send(' https://discordapp.com/api/oauth2/authorize?client_id=576318669689323525&permissions=0&scope=bot  |  تفضل ربط البوت     ').catch(e => console.log(e.stack));
 
    }
   }
  });



 
client.on('message', message => {
     if (message.content === "=invite") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" Done | تــــم" , " |  تــــم ارســالك في الخــاص")
     
     
     
  message.channel.sendEmbed(embed);
    }
});





client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "own") {
 
 
 message.author.sendMessage(`
 
 __~~Bot Staff~~__
@! Dream ! hamodii_yt#8500 @Amory | YT | رمہضأنہ كہريہمہ#5792 @Dreamon_Onen#7991
 __Powered By__: @! Dream ! hamodii_yt#8500 @Amory | YT | رمہضأنہ كہريہمہ#5792 @Dreamon_Onen#7991  
Server Support : https://discord.gg/4JW8RHr
`);
 
message.channel.send('**تم الارسال في الخاص**');
 
    }
});
 


client.on('message', message => {
  if(message.content === prefix + 'stats') {
    message.channel.send('**I have `' + `${client.guilds.size}` + '` Server 🔥, `' + `${client.channels.size}` + '` Channels and `' + `${client.users.size}` + '` users.**')
    message.channel.send('**- If you want me to join in your server? just do `' + `${prefix}invite` + '` **');
  }
});




client.on("message", msg =>{
if(msg.content.startsWith(`${prefix}topservers`)){ // الامر (topserver)
  let noTop = msg.content.split(" ")[1];
  const top = client.guilds.sort((a,b)=>a.memberCount-b.memberCount).array().reverse()
  if(!noTop) noTop = 10;
  if(isNaN(noTop)) noTop = 10;
  if(noTop <= 0) noTop = 10;
  if(noTop > top.length) noTop = top.length;
  let serveremmbed = new Discord.RichEmbed();
  for(let i = 0; i < noTop; i++){
  serveremmbed.addField(`**${top[i].name}** : ${top[i].memberCount}`," ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎");
  }
  serveremmbed.setTitle(`**Top ${noTop} Servers**`);
  serveremmbed.setThumbnail(msg.author.displayAvatarURL);
  serveremmbed.setTimestamp();
  serveremmbed.setFooter(client.user.username,client.user.displayAvatarURL);
  msg.channel.send(serveremmbed);
}});





client.on('message', message => {
             if (!message.channel.guild) return;
      if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = message.content.split(" ").slice(1);
  
  if (command === 'invites') {
    message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(message.author.id);
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
    return message.reply(`**${inviteCount}: عدد الاشخاص الذي دعوتهم هو**`)

});
}});
	





client.on('message', message => {
    if (message.content.startsWith("=bot")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``INFO ESDream||  ||Bot`` ')
            .addField('**بينق البوت ||  ||**' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('**رامات البوت ||  ||**', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('**سيرفرات الي دخلها البوت ||  ||**', [client.guilds.size], true)
            .addField('**الرومات ||  ||**' , `[ ${client.channels.size} ]` , true)
            .addField('**عدد المستخدمين ||  ||**' ,`[ ${client.users.size} ]` , true)
            .addField('**اسم البوت ||  ||**' , `[ ${client.user.tag} ]` , true)
            .addField('**ايدي البوت||  ||**' , `[ ${client.user.id} ]` , true)
                  .addField('**My Prefix ||  ||**' , `[ = ]` , true)
                  .addField('**My Language ||  ||**' , `[ Java Script ]` , true)
                              .addField('**عدد اوامر البوت ||  ||**' , `[  ]` , true)
                  .setFooter('||  || By | @! Dream ! hamodii_yt#8500 @Dreamon_Onen#7991 @Amory | YT | رمہضأنہ كہريہمہ#5792  ||  ||')
    })
}
});















client.login(process.env.BOT_TOKEN);
