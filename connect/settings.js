process.on('uncaughtException', console.error) //Safe Log Error 
const fs = require('fs')
const chalk = require('chalk')

//Ubah Disini
global.owner = ['6xxxxxxxxxx']
global.ownerName = 'Nama Lu'
global.namaBot =  'Nama Bot lu'
global.packname = 'Nama Bot lu' 
global.author = 'Nama Bot lu'
global.prefa = ['','!','.','#','!']
global.sessionName = 'nighcore'
//Message Nya Ubah Disini
global.mess = {
admin: '*ᴏɴʟʏ ᴀᴅᴍɪɴ* • ᴄᴏᴍᴍᴀɴᴅ ɪɴɪ ʜᴀɴʏᴀ ᴜɴᴛᴜᴋ ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ',
botAdmin: 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin!',
botOwner: '*ᴏɴʟʏ ᴅᴇᴠᴇʟᴏᴘᴇʀ* • ᴄᴏᴍᴍᴀɴᴅ ɪɴɪ ʜᴀɴʏᴀ ᴜɴᴛᴜᴋ ᴅᴇᴠᴇʟᴏᴘᴇʀ ʙᴏᴛ',
group: 'Perintah ini hanya bisa di gunakan dalam group!', 
private: 'Only Private Chat',
wait: '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar',
link: '[❗] Link yang anda kirim tidak valid!', 
link1: 'Link Yang Anda Gunakan Eror',
nsfw: 'Nsfw Belum Diaktifkan Di Group ini',
regis: 'Silakan Daftar terlebih dahulu dengan ketik #verifikasi',
done: 'Done!'
}

//Sesuaikan
global.thumb = { url : 'https://telegra.ph/file/00d6462db859ff0959445.jpg'}
global.thumb1 = { url: 'https://telegra.ph/file/7a851dc177fb7959bedc1.jpg'}
global.thumb2 = { url: 'https://telegra.ph/file/cfa44511b60419ea31cb0.jpg'}
global.thumb3 = { url: 'https://telegra.ph/file/1bf2ddb39df8796edbb79.jpg'}
global.erorurl =  'https://telegra.ph/file/df5397e6ed9ebcd05c0cb.jpg'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
