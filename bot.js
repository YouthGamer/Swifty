const Discord = require("discord.js");

const client = new Discord.Client();

const config = require("./config.json");

// Functions

  function userInfo(user) {
    var finalString = '';

    finalString += '**' + user.username + '**, with the **ID** of **' + user.id + '**';

    return finalString;
  }

// End of Funtions

// Vars

const prefix = '$';

// End of Vars
client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  console.log('Bot is now online!')
  client.channels.get('383432445187325952').send('Swifty bot is now online!')
  client.user.setGame(`at skywarsswiftmc.anvil.pw`);
  client.user.setStatus('online')
});

client.on("guildCreate", guild => {
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setGame(`at skywarsswiftmc.anvil.pw`);
});

client.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setGame(`at skywarsswiftmc.anvil.pw`);
});

client.on("message", async message => {
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  
  if(message.content.toUpperCase().startsWith(prefix + 'USERINFO')) {
    if(message.content.toUpperCase() === prefix + 'USERINFO') {
      message.delete().catch(O_o=>{});
      message.channel.send(userInfo(message.author));
    }
  }

    if(command === "help") {
            message.delete().catch(O_o=>{}); 
    message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Here Is The Help List:",
    url: "https://swiftmcforum.enjin.com/",
    description: "Swifty, An awesome Minecraft server's official Discord bot. \n Forums: https://swiftmcforum.enjin.com/ \n IP: skywarsswiftmc.anvil.pw",
    fields: [{
        name: "Help:",
        value: "Gives you this list. \n Usage: $help"
      },
      {
        name: "Userinfo:",
        value: "Gives your ID. \n Usage: $userinfo"
      },
      {
        name: "GiveMeAdmin",
        value: "Gives you admin rank! \n Usage: $givemeadmin"
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© SwiftMC"
    }
  }
});
     }
if(command === "givemeadmin") {
  message.delete().catch(O_o=>{});
  message.reply('Nope, sorry mate that ain\'t gonna happen today! Maybe other time if ya lucky.');
  client.channels.get('396000431630712842').send(message.author.username + ' just got trolled!');
}

  if(command === "say") {
           if(!message.member.roles.some(r=>["Founder", "founder", "founders", "Founders", "Owner", "Whitelisted+", "owner", "owners", "Owners", "whitelisted+", "📝 Whitelisted+"].includes(r.name)) )
      return message.reply("Access Denied: Sorry, you don't have permissions to use this or you are not whitelisted.")
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
  }

  if(command === "annouce") {
        if(!message.member.roles.some(r=>["Founder", "founder",  "founders", "Founders", "Owner", "Whitelisted+", "owner", "owners", "Owners", "whitelisted+", "Founder", "founder", "founders", "📝 Whitelisted+"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this or you are not whitelisted.")
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
  }

  if(command === "kick") {
    message.reply('under maintenance');
  }

      if(command === "nsfw") {
        message.delete().catch(O_o=>{});
        message.reply('EWWWWW, WHY DO YOU WANT TO SEE THAT!')
        client.channels.get('396000499070926848').send(message.author.username + ' TRIED TO SEE PORN! PLEASE WARN HIM!');
  }
   if(command === "porn") {
        message.delete().catch(O_o=>{});
        message.reply('EWWWWW, WHY DO YOU WANT TO SEE THAT!')
        client.channels.get('396000499070926848').send(message.author.username + ' TRIED TO SEE PORN! PLEASE WARN HIM!');
  }
  
  if(command === "ban") {
    if(!message.member.roles.some(r=>["Founder", "founder", "founders", "Founders", "Administrators", "administrators", "administrator", "Administrator", "Moderator", "Owner", "Admin", "Admins", "admin", "admins","owner", "Owners", "owners","Whitelisted+", "Whitelisted", "whitelisted", "Whitelisted+", "📝 Whitelisted+"].includes(r.name)) )
      return message.reply("Access Denied: Sorry, you don't have permissions to use this or you are not whitelisted.");
      message.delete().catch(O_o=>{}); 
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.bannable) 
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

    let reason = args.slice(1).join(' ');
    if(!reason)
      return message.reply("Please indicate a reason for the ban!");
    
    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
  }
  if(command === "$help") {
     if(!message.member.roles.some(r=>["Whitelisted", "Whitelisted+", "whitelisted", "whitelisted+", "📝 Whitelisted+"].includes(r.name)) )
      return message.reply("Permission Denied: You are not whitelisted.");
      message.delete().catch(O_o=>{}); 
    message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "SwiftMC",
    url: "https://swiftmcforum.enjin.com/",
    description: "Swifty, An awesome Minecraft server's official Discord bot. \n Forums: https://swiftmcforum.enjin.com/ \n IP: skywarsswiftmc.anvil.pw",
    fields: [{
        name: "Owner Commands:",
        value: "Say: Makes the bot say what you want. \n Usage: $say [text] \n \n Annouce: Annouces a message. \n Usage: $annouce [message]"
      },
      {
        name: "Admin Commands:",
        value: "Ban: Bans a player \n Usage: $ban [@playername] [reason] \n \n Purge: Deletes a amount of messages. \n Usage: $purge [amount]" 
      },
      {
        name: "Mod Commands:",
        value: "Kick: kicks a player. \n Usage: $kick [@playername] [reason]"
      },
      {
        name: "User Commands:",
        value: "Userinfo: Gives the player ID \n Usage: $userinfo \n \n givemeadmin: Gives you admin \n Usage: $givemeadmin"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© SwiftMC"
    }
  }
});
  if(command === "purge") {
    if(!message.member.roles.some(r=>["Founder", "founder", "founders", "Administrators", "administrators", "administrator", "Administrator", "Moderator", "Owner", "Mod", "Admin", "Admins", "admin", "admins", "Mods", "mod", "mods", "owner", "Owners", "owners","Whitelisted+", "Whitelisted", "whitelisted", "whitelisted+", "📝 Whitelisted+"].includes(r.name)) )
      return message.reply("Access Denied: Sorry, you don't have permissions to use this or you are not whitelisted.");
        message.delete().catch(O_o=>{}); 
    const deleteCount = parseInt(args[0], 10);
    
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    const fetched = await message.channel.fetchMessages({count: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }
}
});

client.login(process.ENV.TOKEN
