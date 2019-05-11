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






client.on('message', async message => {
    if (!message.guild) return;
    if (!account[message.author.id]) {
        account[message.author.id] = {
            reg: false,
            name: 'nothing'
        };
    }
    if (message.content === `${prefix}register`) {
        if (account[message.author.id].reg === true) return message.channel.send('❌ | لديك حساب مٌسجل بالفعل...');
        if (message.author.bot) return;
        const args = message.content.split(' ').slice(prefix.length);
        if (!args[0]) return message.channel.send('❌ | أدخل إسم للتسجيل به.');
        if (args[0]) {
            account[message.author.id].reg = true;
            account[message.author.id].name = args;
            await saveChanges();
            message.channel.send('تم تسجيل الحساب !!');
        }
    } else if (message.content === `${prefix}ping`) {
        if (account[message.author.id].reg === false) return message.channel.send('❌ | يجب أن تكون مٌسجل لإستخدام هذا الأمر');
        message.channel.send('PONG');
    }
});

function saveChanges() {
    return fs.writeFile('./account.json', JSON.stringify(account), error => {
        if (error) console.log(error);
    });
}




client.on('message', async message => {//Toxic Codes // n3k4a is one
 
 
    if(message.channel.type !== 'text') return;
   
   
    var command = message.content.toLowerCase().split(" ")[0];//Toxic Codes // n3k4a is one
    var args = message.content.toLowerCase().split(" ");
    var userM = message.guild.member(message.mentions.users.first() || message.guild.members.find(m => m.id == args[1]));
      const embed  = new Discord.RichEmbed()
.setDescription(`
**لم يتم تسجيل أي نقطة حتى الأن **
 
** أمثلة للأوامر: **
**:small_orange_diamond:** ${prefix}points ${message.author} 1 \`لتغيير نقاط شخص معين \`
**:small_orange_diamond:** ${prefix}points ${message.author} +1 \`لزيادة نقاط شخص معين\`
**:small_orange_diamond:** ${prefix}points ${message.author} -1 \`لأزالة نقطة من شخص معين \`
**:small_orange_diamond:** ${prefix}points ${message.author} 0 \`لتصفير نقاط شخص معين \`
**:small_orange_diamond:** ${prefix}points reset \`لتصفير جميع النقاط\`
`)
.setFooter('Requested by '+message.author.username, message.author.avatarURL)
.setColor(`#e60909`)
  const error  = new Discord.RichEmbed()
.setDescription(`
**:x: | يجب كتابة الأمر بشكل صحيح. **
 
** أمثلة للأوامر: **
**:small_orange_diamond:** ${prefix}points ${message.author} 1 \`لتغيير نقاط شخص معين \`
**:small_orange_diamond:** ${prefix}points ${message.author} +1 \`لزيادة نقاط شخص معين\`
**:small_orange_diamond:** ${prefix}points ${message.author} -1 \`لأزالة نقطة من شخص معين \`
**:small_orange_diamond:** ${prefix}points ${message.author} 0 \`لتصفير نقاط شخص معين \`
**:small_orange_diamond:** ${prefix}points reset \`لتصفير جميع النقاط\``)
.setFooter('Requested by '+message.author.username, message.author.avatarURL)
.setColor(`#e60909`)
if(command == prefix + 'points') {
     
        if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return message.channel.send(':no_entry: | I dont have Embed Links permission.');
        if(!args[1]) {
            if(!points) return message.channel.send(embed);
            var members = Object.values(points);
            var memb = members.filter(m => m.points >= 1);
            if(memb.length == 0) return message.channel.send(embed);
            var x = 1;
            let pointsTop = new Discord.RichEmbed()
            .setAuthor('Points:')
            .setColor('#FBFBFB')
            .setDescription(memb.sort((second, first) => first.points > second.points).slice(0, 10).map(m => `**:small_blue_diamond:** <@${m.id}> \`${m.points}\``).join('\n'))
            .setFooter(`Requested by ${message.author.username}`, message.author.avatarURL);
            message.channel.send({
                embed: pointsTop
            });
        }else if(args[1] == 'reset') {
            let pointsReset = new Discord.RichEmbed()
            .setDescription('**:white_check_mark: | تم تصفير جميع النقاظ بنجاح**')//Toxic Codes // n3k4a is one
            .setFooter('Requested by '+message.author.username, message.author.avatarURL)//Toxic Codes // n3k4a is one
            if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send("You dont have Manage Server permission.");
            if(!points) return message.channel.send(pointsReset);//Toxic Codes // n3k4a is one
            var members = Object.values(points);
            var memb = members.filter(m => m.points >= 1);
            if(memb.length == 0) return message.channel.send(pointsReset);
            points = {};
            message.channel.send(pointsReset);
        }else if(userM) {
            if(!message.member.hasPermission('MANAGE_GUILD')) return  message.channel.send("You dont have Manage Server permission.");
            if(!points[userM.user.id]) points[userM.user.id] = {
                points: 0,
                id: userM.user.id
            };
            if(!args[2]) {
                if(points[userM.user.id].points == 0) return message.channel.send( `${userM.user.username} Not have any points.`);
                var userPoints = new Discord.RichEmbed()
                .setColor('#d3c325')
                .setAuthor(`${userM.user.username} have ${points[userM.user.id].points} points.`);
                message.channel.send({
                    embed: userPoints
                });
            }else if(args[2] == 'reset') {
                if(points[userM.user.id].points == 0) return message.channel.send(error);
                points[userM.user.id].points = 0;
                message.channel.send(`**Successfully reset ${userM.user.username} points.**`);
            }else if(args[2].startsWith('+')) {
                args[2] = args[2].slice(1);
                args[2] = parseInt(Math.floor(args[2]));
                if(points[userM.user.id].points == 1000000) return message.channel.send(error);
                if(!args[2]) return message.channel.send(error);
                if(isNaN(args[2])) return message.channel.send(error);
                if(args[2] > 1000000) return message.channel.send(error);
                if(args[2] < 1) return message.channel.send(error);
                if((points[userM.user.id].points + args[2]) > 1000000) args[2] = 1000000 - points[userM.user.id].points;
                points[userM.user.id].points += args[2];
                let add = new Discord.RichEmbed()
                .setDescription(`**:small_blue_diamond:** <@${userM.id}> \`${points[userM.user.id].points}\``)
                .setAuthor('Points:')
                .setColor('#FBFBFB')
                .setFooter('Requested by' + message.author.username, message.author.avatarURL)
                message.channel.send(add);
            }else if(args[2].startsWith('-')) {
                args[2] = args[2].slice(1);
                args[2] = parseInt(Math.floor(args[2]));
                if(points[userM.user.id].points == 0) return message.channel.send(error);
                if(!args[2]) return message.channel.send(error);
                if(isNaN(args[2])) return message.channel.send(error);
                if(args[2] > 1000000) return message.channel.send(error);
                if(args[2] < 1) return message.channel.send(error);
                if((points[userM.user.id].points - args[2]) < 0) args[2] = points[userM.user.id].points;
                points[userM.user.id].points -= args[2];
                    let rem = new Discord.RichEmbed()
                .setDescription(`**:small_blue_diamond:** <@${userM.id}> \`${points[userM.user.id].points}\``)
                .setAuthor('Points:')
                .setColor('#FBFBFB')
                .setFooter('Requested by' + message.author.username, message.author.avatarURL)
                message.channel.send(rem);
            }else if(!args[2].startsWith('+') || !args[2].startsWith('-')) {
                args[2] = parseInt(Math.floor(args[2]));
                if(isNaN(args[2])) return message.channel.send(error);
                if(args[2] > 1000000) return message.channel.send(error);
                if(args[2] < 1) return message.channel.send(error);
                if(points[userM.user.id].points == args[2]) return message.channel.send(`${userM.user.username} points is already ${args[2]}.`);
                points[userM.user.id].points = args[2];
                    let set = new Discord.RichEmbed()
                .setDescription(`**:small_blue_diamond:** <@${userM.id}> \`${points[userM.user.id].points}\``)
                .setAuthor('Points:')
                .setColor('#FBFBFB')
                .setFooter('Requested by' + message.author.username, message.author.avatarURL)
                message.channel.send(set);
            }
            }
            }
      fs.writeFile("./points.json", JSON.stringify(points) ,(err) =>{//Toxic Codes // n3k4a is one
          if (err) console.log(err.message);
      });//Toxic Codes // n3k4a is one
 
});//Toxic Codes // n3k4a is one



const cool = [];
client.on('message',async message => {
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
 
  const args = message.content.split(' ');
  const credits = require('./credits.json');
  const path = './credits.json';
  const mention = message.mentions.users.first() || client.users.get(args[1]) || message.author;
  const mentionn = message.mentions.users.first() || client.users.get(args[1]);
  const author = message.author.id;
  const balance = args[2];
  const daily = Math.floor(Math.random() * 350) + 10;
 
  if(!credits[author]) credits[author] = {credits: 50};
  if(!credits[mention.id]) credits[mention.id] = {credits: 50};
  fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
 
 
  if(message.content.startsWith(prefix + "credit")) {
  if(args[0] !== `${prefix}credit` && args[0] !== `${prefix}credits`) return;
 
  if(args[2]) {
    if(isNaN(args[2]) || args[2] < 0) return message.channel.send(`:interrobang: **| ${message.author.username}, type the credit you need to transfer! **`);
    if(mention.bot) return message.channel.send(`**:heavy_multiplication_x:| ${message.content.split(' ')[1]} لم يتم العثور على**`);
    if(mention.id === message.author.id) return message.channel.send('**:heavy_multiplication_x:| لا يمكنك تحويل كردت لنفسك**');
    if(credits[author].credits < balance) return message.channel.send(`** :thinking: | ${message.author.username}, Your balance is not enough for that!**`);
    var one = Math.floor(Math.random() * 9) + 1;
    var two = Math.floor(Math.random() * 9) + 1;
    var three = Math.floor(Math.random() * 9) + 1;
    var four = Math.floor(Math.random() * 9) + 1;
 
    var number = `${one}${two}${three}${four}`;
   
    message.channel.send(`**:heavy_dollar_sign:| \`${number}\`, أكتب الرقم للأستمرار**`).then(m => {
      message.channel.awaitMessages(m => m.author.id === message.author.id, {max: 1, time: 10000}).then(c => {
        if(c.first().content === number) {
          m.delete();
          message.channel.send(`**:moneybag: | ${message.author.username}, has transferred \`${balance}\` to ${mention}**`);
          credits[author].credits += (-balance);
          credits[mention.id].credits += (+balance);
          fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
        } else if(c.first().content !== number) {
          m.delete();
          message.channel.send(`** :money_with_wings: | تم الغاء الإرسال**`);
        }
      });
    });
  }
  if(!args[2]) {
    if(mention.bot) return message.channel.send(`:interrobang:**| ${message.author.username}, I can't find** ${message.content.split(' ')[1]}**!**`);
    message.channel.send(`**${mention.username}, your :credit_card: balance is** \`$${credits[mention.id].credits}\`**.** `);
  }
 
  }
        if(args[0].toLowerCase() === `${prefix}daily`) {  
     
if(credits[message.author.id].daily != moment().format('L')) {
 
       credits[message.author.id].daily = moment().format('L');
           
 
          let ammount = (300, 500, 100, 200, 120, 150, 350, 320,220,250);
          credits[author].credits += ammount;
       
       
          message.channel.send(`**:atm: | ${message.author.username}, you received your :yen: ${ammount} daily credits!**`);
        fs.writeFile("./credits.json", JSON.stringify(credits), function(e) {
            if (e) throw e;
        })
 
      }else{
      message.channel.send(`:stopwatch: : **Please cool down  ${moment().endOf('day').fromNow()}**`);
 
      }
   
        }
         
   
 
});






client.login(process.env.BOT_TOKEN);
