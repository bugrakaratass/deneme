const Discord = require('discord.js');

exports.run = (clietn, message, args) => {
  if (message.sahip.id != "273509754134069248") return message.reply('Bunu sadece yapımcım kullanabilir !')

  if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('** Uyarı! **','Bu komutu özel mesajlarda kullanamazsın.');
    return message.author.sendEmbed(ozelmesajuyari); }
    let guild = message.guild;
    let reason = args.slice(1).join(' ');
    let user = message.mentions.users.first();
    if (reason.length < 1) return message.reply('Göndereceğim mesajı yaz');
    if (message.mentions.users.size < 1 ) return message.reply ('Kime mesaj göndereceğim yaz veya etiketle. ').catch(console.error);
    message.delete();
    message.reply('Mesajını gönderdim')
    const embed = new Discord.RichEmbed()
  .setcolor('RANDOM')
  .setTitle('**Bir mesajın var !')
  .setTimestamp()
  .setDescription(reason);
  return user.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pm', 'öm'],
  permlevel : 4
};

exports.help = {
  name: 'kisiozelmesaj',
  description: 'Bir kullanıcıya özel mesaj yollar.',
  usage: 'kisiozelmesaj'

};
