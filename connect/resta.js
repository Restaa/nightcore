process.on('uncaughtException', console.error) //Safe Log Error 
require('./settings')
const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const zmans = require("@adiwajshing/baileys")
const { parseMention, smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, getRandom, generateProfilePicture, reSize} = require('../lib/myfunc')
const axios = require('axios')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const { fromBuffer } = require('file-type')
const fs = require('fs')
const moment = require('moment-timezone')
const util = require('util')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const path = require('path')
const os = require('os')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const qrcode = require('qrcode')
const similarity = require('similarity')
const acrcloud = require('acrcloud')
const acr = new acrcloud({ host: "identify-ap-southeast-1.acrcloud.com", access_key: "b1cc283b4fb72483ebb6ea9c53512331", access_secret: "xyqJGTZRTrUotaraHEjji00WBClx7RpWozywdANq"})
const yts = require('yt-search')
const {  tiktokdl, tiktokdlv3, tiktokdlv2, instagramdl, instagramdlv2, instagramdlv3, instagramdlv4 } = require('@bochilteam/scraper')
///database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let tekateki = db.data.game.tekateki = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakbendera = db.data.game.tebakbendera = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebakkimia = db.data.game.tebakkimia = []
let siapakahaku = db.data.game.siapakahaku = []
let tebakkabupaten = db.data.game.tebakkabupaten = []

//Waktu
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
const hour_now = moment().format('HH:mm:ss') 
//Lib
const { pinterest, hentai, wallpaper, wikimedia, quotesAnime } = require('../lib/scraper')
const noapi = require('../lib/api') 
const api2 = require('../lib/api2') 
const { Gempa } = require("../lib/gempa");
const { jadwaltv }= require('../lib/jadwaltv');
const { menuinformasi,
snk, 
sewa, 
readme, 
menugroup,
menudownload,
menurandom,
menuanime,
menusearch,
menugame,
menuislam,
menutextmaker,
menunsfw,
menuprimbon,
menuconvert,
listChannel, 
bahasalist} = require('./tutor') 
const { print } = require("../lib/pinterest")
const textpro = require('../lib/textpro')
const { TelegraPh, webp2mp4File, floNime} = require('../lib/uploader')
const { toAudio, toPTT} = require('../lib/converter')
const { dBinary, eBinary} = require('../lib/binary')
const { yta, ytv } = require('../lib/y2mate')

const  { addRegisterUser, cekUser, cekCapuser, register, capuser, captcha} = require('./register.js') 
//Module Exports
module.exports = Resta = async(Resta, m, chatUpdate, store) => {
try {
const { type, quotedMsg, mentioned, now, fromMe } = m
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await Resta.decodeJid(Resta.user.id)
const isOwner = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == Resta.user.id ? true : false
const text = args.join(" ")
const q = args.join(' ')
const fatkuns = (m.quoted || m)
const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const isMedia = /image|video|sticker|audio/.test(mime)
const from = m.key.remoteJid
const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

const isGroup = m.key.remoteJid.endsWith('@g.us')
const groupMetadata = m.isGroup ? await Resta.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
const isNumber = x => typeof x === 'number' && !isNaN(x)
            
const isRegister = cekUser(m.sender)
const isCapuser = cekCapuser(m.sender)

            const isImage = (type == 'imageMessage')
            const isVideo = (type == 'videoMessage')
            const isSticker = (type == 'stickerMessage')
            const isQuotedMsg = (type == 'extendedTextMessage')
            const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
            const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
            const isQuotedDocument = isQuotedMsg ? content.includes('documentMessage') ? true : false : false
            const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
            const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false
            
            try {
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
            if (!('antilink' in chats)) chats.antilink = false
           if (!('antivionce' in chats)) chats.antivionce = false
            if (!('nsfw' in chats)) chats.nsfw = false
            } else global.db.data.chats[m.chat] = {
            antilink: false,
            antivionce: false,
            nsfw: false,
             }
             } catch (err) {
             console.error(err) 
             }
             const pickRandom = (arr) => {
		     return arr[Math.floor(Math.random() * arr.length)]
		     }
             global.hit = {}
             if (isCmd) {
             data = await fetchJson('https://api.countapi.xyz/hit/FaxBot/visits')
             jumlahcmd = `${data.value}`
             dataa = await fetchJson(`https://api.countapi.xyz/hit/FaxBot${moment.tz('Asia/Jakarta').format('DDMMYYYY')}/visits`)
             jumlahharian = `${dataa.value}`
             }

               let picaks = [global.thumb,global.thumb1,global.thumb2,global.thumb3]
               let picak = picaks[Math.floor(Math.random() * picaks.length)]
               
       
              Resta.sendPresenceUpdate('available', m.chat)
              Resta.sendReadReceipt(m.chat, m.sender, [m.key.id])
                   
            if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
            let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
            if (room.terjawab[index]) return !0
            room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
            return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
             }).filter(v => v).join('\n')}
             ${isSurender ? '' : `Perfect Player`}`.trim()
             Resta.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
             if (isWin || isSurender) delete _family100['family100'+m.chat]
             }

              if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
              kuis = true
              jawaban = tebaklagu[m.sender.split('@')[0]]
              if (budy.toLowerCase() == jawaban) {
              await Resta.sendButtonText(m.chat, [{ buttonId: 'tebaklagu', buttonText: { displayText: 'Again Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, Resta.user.name, m)
              delete tebaklagu[m.sender.split('@')[0]]
               } 
               }

               if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
               kuis = true
               jawaban = kuismath[m.sender.split('@')[0]]
               if (budy.toLowerCase() == jawaban) {
               await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
               delete kuismath[m.sender.split('@')[0]]
                } 
                }

               if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
               kuis = true
               jawaban = tebakgambar[m.sender.split('@')[0]]
               if (budy.toLowerCase() == jawaban) {
               await Resta.sendButtonText(m.chat, [{ buttonId: 'tebakgambar', buttonText: { displayText: 'Again Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, Resta.user.name, m)
               delete tebakgambar[m.sender.split('@')[0]]
               } 
               }
              
              if (tebakbendera.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
              kuis = true
              jawaban = tebakbendera[m.sender.split('@')[0]]
              if (budy.toLowerCase() == jawaban) {
              await Resta.sendButtonText(m.chat, [{ buttonId: 'tebakbendera', buttonText: { displayText: 'Again Tebak Bendera' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, Resta.user.name, m)
              delete tebakbendera[m.sender.split('@')[0]]
              } 
              }

              if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
              kuis = true
              jawaban = tebakkata[m.sender.split('@')[0]]
              if (budy.toLowerCase() == jawaban) {
              await Resta.sendButtonText(m.chat, [{ buttonId: 'tebakkata', buttonText: { displayText: 'Again Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, Resta.user.name, m)
              delete tebakkata[m.sender.split('@')[0]]
              } 
              }
              
              if (tebakkimia.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
              kimia = true
              lambang = tebakkimia[m.sender.split('@')[0]]
              if (budy.toLowerCase() == lambang) {
              await Resta.sendButtonText(m.chat, [{ buttonId: 'tebakkimia', buttonText: { displayText: 'Again Tebak Kimia' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, Resta.user.name, m)
              delete tebakkimia[m.sender.split('@')[0]]
              } 
              }

            if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	        deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
            await Resta.sendButtonText(m.chat, [{ buttonId: 'caklontong', buttonText: { displayText: 'Cak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, Resta.user.name, m)
            delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
             } 
             }

             if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
             kuis = true
             jawaban = tebakkalimat[m.sender.split('@')[0]]
             if (budy.toLowerCase() == jawaban) {
             await Resta.sendButtonText(m.chat, [{ buttonId: 'tebakkalimat', buttonText: { displayText: 'Again Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, Resta.user.name, m)
             delete tebakkalimat[m.sender.split('@')[0]]
             } 
             }
             
             if (siapakahaku.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
             kuis = true
             jawaban = siapakahaku[m.sender.split('@')[0]]
             if (budy.toLowerCase() == jawaban) {
             await Resta.sendButtonText(m.chat, [{ buttonId: 'siapakahaku', buttonText: { displayText: 'Again Siapa Aku' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, Resta.user.name, m)
             delete siapakahaku[m.sender.split('@')[0]]
             } 
             }
             
             if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
             kuis = true
             jawaban = tebakkabupaten[m.sender.split('@')[0]]
             if (budy.toLowerCase() == jawaban) {
             await Resta.sendButtonText(m.chat, [{ buttonId: 'tebakkabupaten', buttonText: { displayText: 'Again Tebak Kabupaten' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, Resta.user.name, m)
             delete tebakkabupaten[m.sender.split('@')[0]]
             } 
             }

              if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
              kuis = true
              jawaban = tebaklirik[m.sender.split('@')[0]]
              if (budy.toLowerCase() == jawaban) {
              await Resta.sendButtonText(m.chat, [{ buttonId: 'tebaklirik', buttonText: { displayText: 'Again Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, Resta.user.name, m)
              delete tebaklirik[m.sender.split('@')[0]]
              } 
              }
	    
	          if (tekateki.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
              kuis = true
              jawaban = tekateki[m.sender.split('@')[0]]
              if (budy.toLowerCase() == jawaban) {
              await Resta.sendButtonText(m.chat, [{ buttonId: 'tekateki', buttonText: { displayText: 'Again Tebak Teki' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, Resta.user.name, m)
              delete tekateki[m.sender.split('@')[0]]
               } 
               }   
if (global.db.data.chats[m.chat].antivionce) {
if (m.mtype == 'viewOnceMessage') {
 teks = `「 *Anti ViewOnce Message* 」
➯ Name : ${m.pushName}
➯ User : @${m.sender.split("@")[0]}
➯ Clock : ${moment.tz('Asia/Kolkata').format('HH:mm:ss')} 
➯ Date : ${moment.tz('Asia/Kolkata').format('DD/MM/YYYY')}
➯ MessageType : ${m.mtype}`
Resta.sendTextWithMentions(m.chat, teks, m)
await sleep(500)
m.copyNForward(m.chat, true, { readViewOnce: true }).catch(_ => m.reply(`Maybe it's been opened by a bot`))
}
}
//[Check Verify]//
if (capuser.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
jawaban = capuser[m.sender.split('@')[0]].jawaban
if (budy.toLowerCase() == jawaban) {
addRegisterUser(m.sender)
m.reply('Sukses Mendaftar')}
await sleep(30000) 
delete capuser[m.sender.split('@')[0]]
fs.writeFileSync("./src/capuser.json", JSON.stringify(capuser))
} 
// Antilink
if (global.db.data.chats[m.chat].antilink) {
if (budy.match(`chat.whatsapp.com`)) {
if (!isBotAdmins) return m.reply(mess.botAdmin)
var gclink = (`https://chat.whatsapp.com/`+await Resta.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isAdmins && isOwner) return m.reply(`Ehh Maaf Ternyata Kamu Admin 😁`)
if (isgclink) return m.reply(`Link Grup Lain Terdeteksi, Link Group Ini Ternyata 😆`)
m.reply(`Link Grup Lain Terdeteksi 🤬\nMaaf Kamu Akan Di Kick !`)
sleep(5000)
Resta.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}
if (budy.startsWith('>')) {
  if (!isOwner) return m.reply(mess.botOwner)
  try {
  let evaled = await eval(budy.slice(2))
  if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
  await m.reply(evaled)
  } catch (err) {
  m = String(err)
  await m.reply(m)
  }
  }

if (m.message) {
Resta.readMessages([m.key])
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m RW BOT \x1b[1;37m]', time, chalk.green(budy || m.mtype), 'Dari', chalk.blue(pushname), 'Di', chalk.yellow(groupName ? groupName : 'Private Chat' ), 'args :', chalk.white(args.length))
}   
             if (budy.match("@6281232358627")){
             Resta.sendMessage(m.chat, { audio: {url : `https://d.top4top.io/m_22231oj7h1.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: m})}
             
                  

switch(command) {
   
case 'verifikasi':
if (isRegister) return m.reply('Kamu Sudah Terdaftar Di Database')
datta = captcha
jsonData = JSON.parse(datta);
de = Math.floor(Math.random() * jsonData.length);
data = jsonData[de];
console.log(data)//hasil di tampilkan di cmd
jawaban = data.kode
gambar = data.captcha
capuser[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase()} 
fs.writeFileSync("./src/capuser.json", JSON.stringify(capuser))
let smg = await Resta.sendMessage(m.chat, {caption: `*Hello ${pushname}*\nSilahkan Daftar dulu\nSebutkan kode Verifikasi diatas ini`,location: {  jpegThumbnail: await reSize(gambar, 200, 200)}, mentions: [m.sender] }, { quoted : m}) 
Resta.sendMessage(m.chat, { text : 'Sebutkan kode diatas untuk verifikasi\nKode ini berlaku hingga 30 detik\nJika telat ketik #verifikasi untuk daftar ulang/Reset code'}, { quoted : smg})
break
case 'menu': case 'help': {
if (!isRegister) return m.reply(mess.regis)
  let no = 1
  let menu = `
╭─❒ 「 Bot Info 」 
├❒ ${global.namaBot}
├❒  v2.0
├❒  CREATOR : *${global.ownerName}*
├❒ Nama : ${pushname}
├❒ Nomor : ${m.sender.split('@')[0]}
├❒ WhatsApp : wa.me/${m.sender.split('@')[0]}
├❒ Waktu ⏰ : ${hour_now}
├❒ Total Hit Server : *${jumlahcmd}*
├❒ Total Hit Today : *${jumlahharian}*
╰❒ Runtime : ${runtime(process.uptime())}

 
╭─❒〘 LIST MENU 〙
├
├❒ ${prefix}menuinformasi
├❒ ${prefix}menugroup
├❒ ${prefix}menuconvert
├❒ ${prefix}menudownload
├❒ ${prefix}menusearch
├❒ ${prefix}menurandom
├❒ ${prefix}menuislam
├❒ ${prefix}menugame
├❒ ${prefix}menuprimbon
├❒ ${prefix}menutextmaker
├❒ ${prefix}menuanime
├❒ ${prefix}menunsfw
├
╰❒〘 ${namaBot} 〙
  `
let but = [
  {urlButton: {displayText: 'GRUP RW BOT ♨️',url: 'https://chat.whatsapp.com/IVmyObV0quv8j7fpNomn6j'}}, 
  {urlButton: {displayText: 'Wa Me 🔗',url: 'https://www.whatsapp.com/otp/copy/'+`https://wa.me/${m.sender.split("@s.whatsapp.net")[0]}`}}, 
  {"quickReplyButton": {"displayText": "REDME 🗂️","id": `readme`},},
  {"quickReplyButton": {"displayText": "SNK 👦","id": "Snk"},},
  {"quickReplyButton": {"displayText": "Status Bot ⌚","id": `ping`}}
  ]
  Resta.send5ButLoc(m.chat, menu, global.ownerName, picak, but, m)
  }
  break
       case 'menuinformasi':
                  if (!isRegister) return m.reply(mess.regis)
                  Resta.sendText(m.chat, menuinformasi(prefix, namaBot), m) 
                  break
       case 'menugroup':
                  if (!isRegister) return m.reply(mess.regis)
                  Resta.sendText(m.chat, menugroup(prefix, namaBot), m) 
                  break
       case 'menuconvert':
                  if (!isRegister) return m.reply(mess.regis)
                  Resta.sendText(m.chat, menuconvert(prefix, namaBot), m) 
                  break
        case 'menudownload':
                  if (!isRegister) return m.reply(mess.regis)
                  Resta.sendText(m.chat, menudownload(prefix, namaBot), m) 
                  break
       case 'menusearch':
                  if (!isRegister) return m.reply(mess.regis)
                  Resta.sendText(m.chat, menusearch(prefix, namaBot), m) 
                  break
       case 'menurandom':
                  if (!isRegister) return m.reply(mess.regis)
                  Resta.sendText(m.chat, menurandom(prefix, namaBot), m) 
                  break
      case 'menuislam':
                  if (!isRegister) return m.reply(mess.regis)
                  Resta.sendText(m.chat, menuislam(prefix, namaBot), m) 
                  break
       case 'menuprimbon':
                  if (!isRegister) return m.reply(mess.regis)
                  Resta.sendText(m.chat, menuprimbon(prefix, namaBot), m) 
                  break
       case 'menutextmaker':
                  if (!isRegister) return m.reply(mess.regis)
                  Resta.sendText(m.chat, menutextmaker(prefix, namaBot), m) 
                  break
        case 'menuanime':
                  if (!isRegister) return m.reply(mess.regis)
                  Resta.sendText(m.chat, menuanime(prefix, namaBot), m) 
                  break
      case 'menunsfw':
                  if (!isRegister) return m.reply(mess.regis)
                  Resta.sendText(m.chat, menunsfw(prefix, namaBot), m) 
                  break 
      case 'menugame':
                  if (!isRegister) return m.reply(mess.regis)
                  Resta.sendText(m.chat, menugame(prefix, namaBot), m) 
                  break

/*************OWNER**********/
      case 'getcase':
                 if (!isOwner) return m.reply(mess.botOwner)
                 const getCase = (cases) => {
                 return "case"+`'${cases}'`+fs.readFileSync("connect/resta.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
                 }
                 m.reply(`${getCase(q)}`)
                 break
       case 'creategc':
                 if (!isOwner) return m.reply(mess.botOwner)
                 if (!q) return m.reply(`*Contoh* :\n#creategc namagroup`)
                 let cret = await Resta.groupCreate(args.join(" "), [])
                 let response = await Resta.groupInviteCode(cret.id)
                 teks = `  [ *Create Group* ]\n\n_▸ Name : ${cret.subject}_\n_▸ Owner : @${cret.owner.split("@")[0]}_\n_▸ Time : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB_\nhttps://chat.whatsapp.com/${response}`
                 m.reply(teks)
                 break
      case 'bcgc': case 'bcgroup': {
                 if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
                 if (!text) throw `Text mana?\n\nExample : ${prefix + command} ${global.ownerName}`
                 let getGroups = await Resta.groupFetchAllParticipating()
                 let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                 let anu = groups.map(v => v.id)
                 m.reply(mess.wait + '\nMohon Untuk Menunggu Sejenak')
                 for (let i of anu) {
                 await sleep(1500)
                 let txt = `*Broadcast ${Resta.user.name}*\n\n${text}\n`
                 Resta.sendButtonText(i, txt)
                 }
                 m.reply('Sukses Broadcast')
                 }
                 break
          case 'clear':
           if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
           let chats
  if (/gro?up|gc/i.test(args[0])) chats = conn.chats.array.filter(v => v.jid.endsWith('g.us')).map(v => v.jid)
  else if (/chat|private|pc/i.test(args[0])) chats = conn.chats.array.filter(v => v.jid.endsWith('.net') && !v.pin).map(v => v.jid)
  else if (/all/i.test(args[0])) chats = conn.chats.array.filter(v => v.jid && !v.pin).map(v => v.jid)
  else chats = [m.chat]
  let isDelete = /^(delete)/i.test(command)
  let isClear = /^(clear)/i.test(command)
  m.reply(`${isDelete ? 'deleting' : isClear ? 'clearing' : 'mute'} ${chats.length} chat ${args[0] ? args[0] : ''}`)
  for (let id of chats) {
    if (isDelete || isClear) await Resta.modifyChat(id, (isDelete ? 'delete' : 'clear'), {
      includeStarred: false
    }).catch(console.log)
    else await Resta.modifyChat(id, 'mute', -Math.floor(new Date / 1e3) * 1e3 - 1e3).catch(console.log)
  }
  m.reply(`_*completed*_`)
             break
case 'join': {
                if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await Resta.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
                break
case 'bc': case 'broadcast': case 'bcall': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  if (!text) throw `Text mana?\n\nExample : ${prefix + command} ${global.ownerName}`
  let anu = await store.chats.all().map(v => v.id)
  m.reply(mess.wait + '\nMohon Untuk Menunggu Sejenak')
  for (let yoi of anu) {
  await sleep(1500)
  let txt = `*Broadcast ${Resta.user.name}*\n\n${text}`
  Resta.sendText(yoi, txt)
  }
  m.reply('Sukses Broadcast')
  }
  break
case 'block': {
  if (!isOwner) return m.reply(mess.botOwner)
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await Resta.updateBlockStatus(users, 'block').then((res) => m.reply(mess.done)).catch((err) => m.reply('Fitur Error ❎'))
  }
  break
case 'unblock': {
  if (!isOwner) return m.reply(mess.botOwner)
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await Resta.updateBlockStatus(users, 'unblock').then((res) => m.reply(mess.done)).catch((err) => m.reply('Fitur Error ❎'))
  }
  break
case 'setppbot': {
  if (!isOwner) return m.reply(mess.botOwner)
  if (!quoted) throw `Kirim/m.reply Image Dengan Caption ${prefix + command}`
  if (!/image/.test(mime)) throw `Kirim/m.reply Image Dengan Caption ${prefix + command}`
  if (/webp/.test(mime)) throw `Kirim/m.reply Image Dengan Caption ${prefix + command}`
  let media = await Resta.downloadAndSaveMediaMessage(quoted)
  await Resta.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
  m.reply(mess.done)
  }
  break
/*********************GAMER GAME**************/
          case 'family100': {
          	      try {
          	      if (!isRegister) return m.reply(mess.regis)
          	      if (!m.isGroup) return m.reply(mess.group)
                    if ('family100'+m.chat in _family100) {
                    m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                    }
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                    let random = anu[Math.floor(Math.random() * anu.length)]
                    let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                   _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await Resta.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                    }
                    } catch (err) {
                    await Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m })
                     }
                     }
                    break
         case 'tebaklagu': {
        	        try {
        	        if (!isRegister) return m.reply(mess.regis)
        	        if (!m.isGroup) return m.reply(mess.group)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw m.reply("Masih Ada Sesi Yang Belum Diselesaikan!") 
                    let anu = await fetchJson('https://raw.githubusercontent.com/Restaa/databasegames/master/database/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await Resta.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    Resta.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    Resta.sendButtonText(m.chat, [{ buttonId: 'tebaklagu', buttonText: { displayText: 'Again tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, Resta.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                    } catch (err) {
                    await Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m })
                    }
                    }
                    break
         case 'tebakgambar': {
         	       if (!isRegister) return m.reply(mess.regis)
        	        if (!m.isGroup) return m.reply(mess.group)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw m.reply("Masih Ada Sesi Yang Belum Diselesaikan!") 
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let petunjuk = result.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
                    Resta.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nPentujuk: ${petunjuk}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    Resta.sendButtonText(m.chat, [{ buttonId: 'tebakgambar', buttonText: { displayText: 'Again tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, Resta.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                    }
                    break
          case 'tebakbendera': {
          	      try {
          	      if (!isRegister) return m.reply(mess.regis)
        	        if (!m.isGroup) return m.reply(mess.group)
                    if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) throw m.reply("Masih Ada Sesi Yang Belum Diselesaikan!") 
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let petunjuk = result.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
                    Resta.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nBantuan : ${result.flag}\nPentujuk: ${petunjuk}\nWaktu : 60s`, m).then(() => {
                    tebakbendera[m.sender.split('@')[0]] = result.name.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.name)
                    Resta.sendButtonText(m.chat, [{ buttonId: 'tebakbendera', buttonText: { displayText: 'Again tebak Bendra' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakbendera[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, Resta.user.name, m)
                    delete tebakbendera[m.sender.split('@')[0]]
                    }
                    } catch (err) {
                    await Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m })
                    }
                    }
                    break
         case 'tebakkabupaten': {
          	      if (!isRegister) return m.reply(mess.regis)
        	        if (!m.isGroup) return m.reply(mess.group)
                    if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) throw m.reply("Masih Ada Sesi Yang Belum Diselesaikan!") 
                    let anhu = await fetchJson('https://raw.githubusercontent.com/Restaa/databasegames/master/database/tebakkabupaten.json')
                    let result = anhu[Math.floor(Math.random() * anhu.length)]
                    let petunjuk = result.title.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
                    Resta.sendImage(m.chat, result.url, `Silahkan Jawab Soal Di Atas Ini\n\nPentujuk: ${petunjuk}\nWaktu : 60s`, m).then(() => {
                    tebakkabupaten[m.sender.split('@')[0]] = result.title.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.title)
                    Resta.sendButtonText(m.chat, [{ buttonId: 'tebakkabupaten', buttonText: { displayText: 'Again tebak Kabupaten' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkabupaten[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, Resta.user.name, m)
                    delete tebakkabupaten[m.sender.split('@')[0]]
                    }
                    }
                    break
         case 'tebakkata': {
         	       if (!isRegister) return m.reply(mess.regis)
        	        if (!m.isGroup) return m.reply(mess.group)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw m.reply("Masih Ada Sesi Yang Belum Diselesaikan!") 
                    let anu = await fetchJson('https://raw.githubusercontent.com/Restaa/databasegames/master/database/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let petunjuk = result.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
                    Resta.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nPetunjuk : ${petunjuk}\nwaktu : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    Resta.sendButtonText(m.chat, [{ buttonId: 'tebakkata', buttonText: { displayText: 'Again tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, Resta.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                    }
                    break
          case 'tebakkimia': { 
          	      if (!isRegister) return m.reply(mess.regis)
        	        if (!m.isGroup) return m.reply(mess.group)
                    if (tebakkimia.hasOwnProperty(m.sender.split('@')[0])) throw m.reply("Masih Ada Sesi Yang Belum Diselesaikan!") 
                    let anu = await fetchJson('https://raw.githubusercontent.com/Restaa/databasegames/master/database/tebakkimia.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Resta.sendText(m.chat, `Silahkan Jawab Pertanyaan Unsur Kimia Tersebut\n\n*${result.unsur}*\n\nWaktu : 60s`, m).then(() => {
                    tebakkimia[m.sender.split('@')[0]] = result.lambang.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkimia.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.lambang)
                    Resta.sendButtonText(m.chat, [{ buttonId: 'tebakkimia', buttonText: { displayText: 'Again tebak Kimia' }, type: 1 }], `Waktu Habis\nJawaban:  ${lambang[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, Resta.user.name, m)
                    delete tebakkimia[m.sender.split('@')[0]]
                    }
                    }
                    break
         case 'tekateki': {
         	       try {
         	       if (!isRegister) return m.reply(mess.regis)
        	        if (!m.isGroup) return m.reply(mess.group)
                    if (tekateki.hasOwnProperty(m.sender.split('@')[0])) throw m.reply("Masih Ada Sesi Yang Belum Diselesaikan!") 
                    let anu = await fetchJson('https://raw.githubusercontent.com/Restaa/databasegames/master/database/tekateki.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let petunjuk = result.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
                    Resta.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nPetunjuk : ${petunjuk}\nWaktu : 60s`, m).then(() => {
                    tekateki[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tekateki.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    Resta.sendButtonText(m.chat, [{ buttonId: 'tekateki', buttonText: { displayText: 'Again Teka Teki' }, type: 1 }], `Waktu Habis\nJawaban:  ${tekateki[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, Resta.user.name, m)
                    delete tekateki[m.sender.split('@')[0]]
                    }
                    } catch (err) {
                    await Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m })
                    }
                    }
                    break
         case 'tebakkalimat': {
         	       try {
         	       if (!isRegister) return m.reply(mess.regis)
        	        if (!m.isGroup) return m.reply(mess.group)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw m.reply("Masih Ada Sesi Yang Belum Diselesaikan!") 
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let petunjuk = result.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
                    Resta.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nPentujuk: ${pentujuk}\nWaktu : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    Resta.sendButtonText(m.chat, [{ buttonId: 'tebakkalimat', buttonText: { displayText: 'Again tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, Resta.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                    } catch (err) {
                    await Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m })
                    }
                    }
                    break
         case 'siapakahaku': {
         	       try {
         	       if (!isRegister) return m.reply(mess.regis)
        	        if (!m.isGroup) return m.reply(mess.group)
                    if (siapakahaku.hasOwnProperty(m.sender.split('@')[0])) throw m.reply("Masih Ada Sesi Yang Belum Diselesaikan!") 
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let petunjuk = result.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
                    Resta.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nPentujuk: ${petunjuk}\nWaktu : 60s`, m).then(() => {
                    siapakahaku[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (siapakahaku.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    Resta.sendButtonText(m.chat, [{ buttonId: 'siapakahaku', buttonText: { displayText: 'Siapa Aku' }, type: 1 }], `Waktu Habis\nJawaban:  ${siapakahaku[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, Resta.user.name, m)
                    delete siapakahaku[m.sender.split('@')[0]]
                    }
                    } catch (err) {
                    await Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m })
                    }
                    }
                    break
        case 'tebaklirik': {
        	        try {
        	        if (!isRegister) return m.reply(mess.regis)
        	        if (!m.isGroup) return m.reply(mess.group)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw m.reply("Masih Ada Sesi Yang Belum Diselesaikan!") 
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let petunjuk = result.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
                    Resta.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nPentujuk: ${pentujuk}\nWaktu : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    Resta.sendButtonText(m.chat, [{ buttonId: 'tebaklirik', buttonText: { displayText: 'Again tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, Resta.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                    } catch (err) {
                    await Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m })
                    }
                    }
                    break
         case 'caklontong': {
         	       try {
         	       if (!isRegister) return m.reply(mess.regis)
        	        if (!m.isGroup) return m.reply(mess.group)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw m.reply("Masih Ada Sesi Yang Belum Diselesaikan!") 
                    let anu = await fetchJson('https://raw.githubusercontent.com/Restaa/databasegames/master/database/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Resta.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		            caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    Resta.sendButtonText(m.chat, [{ buttonId: 'caklontong', buttonText: { displayText: 'Cak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, Resta.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		            delete caklontong_desk[m.sender.split('@')[0]]
                    }
                    } catch (err) {
                    await Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m })
                    }
                    }
                     break
          case 'kuismath': case 'math': {
          	       if (!isRegister) return m.reply(mess.regis)
        	         if (!m.isGroup) return m.reply(mess.group)
                     if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw m.reply("Masih Ada Sesi Yang Belum Diselesaikan!") 
                     let { genMath, modes } = require('../src/math')
                     if (!text) throw m.reply(`Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`) 
                     let result = await genMath(text.toLowerCase())
                     Resta.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                     kuismath[m.sender.split('@')[0]] = result.jawaban
                     })
                    await sleep(result.waktu)
                     if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                    }
                    }
                    break
          
/****************GRUP MENU************/
              case 'delete': case 'del': {
              	        if (!isRegister) return m.reply(mess.regis)
                          if (!m.quoted) throw m.reply('reply pesnya') 
                          let { chat, fromMe, id, isBaileys } = m.quoted
                          if (!isBaileys) throw m.reply('pesan tersebut bukan dikirim oleh bot!') 
                          Resta.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
                           }
                           break
               case 'leave': {
               	        if (!isRegister) return m.reply(mess.regis)
                           if (!isAdmins) return m.reply(mess.admin)
                           await Resta.groupLeave(m.chat).then((res) => m.reply('Sayonara ðŸ‘‹\nSulit Di Kontrol Semoga Hari Kalian Mengontol')).catch((err) => m.reply('Fitur Error ❎'))
                           }
                           break
                 case 'antilink':
                           if (!isRegister) return m.reply(mess.regis)
                           if (!m.isGroup) return m.reply(mess.group)
                           if (!isBotAdmins) return m.reply(mess.botAdmin)
                           if (!isAdmins) return m.reply(mess.admin)
                           if (args[0] === "enable") {
                           if (global.db.data.chats[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)
                           global.db.data.chats[m.chat].antilink = true
                           m.reply(`Antilink Berhasil Di Aktifkan !`)
                           } else if (args[0] === "disable") {
                           if (!global.db.data.chats[m.chat].antilink) return m.reply(`Sudah Nonaktif Sebelumnya`)
                           global.db.data.chats[m.chat].antilink = false
                           m.reply(`Antilink Berhasil Di Nonaktifkan !`)
                           } else {
                           let buttonsantilink = [{ buttonId: `${command} enable`, buttonText: { displayText: 'Enable' }, type: 1 }, { buttonId: `${command} disable`, buttonText: { displayText: 'Disable' }, type: 1 }]
                           await Resta.sendButtonText(m.chat, buttonsantilink, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, m)
                           }
                           break
                 case 'nsfw':
                           if (!isRegister) return m.reply(mess.regis)
                           if (!m.isGroup) return m.reply(mess.group)
                           if (!isAdmins) return m.reply(mess.admin)
                           if (args[0] === "enable") {
                           if (global.db.data.chats[m.chat].nsfw) return m.reply(`Nsfw Aktif Sebelumnya`)
                           global.db.data.chats[m.chat].nsfw = true
                           m.reply(`Nsfw Di Group Berhasil Di Aktifkan !`)
                           } else if (args[0] === "disable") {
                           if (!global.db.data.chats[m.chat].nsfw) return m.reply(`Nsfw Nonaktif Sebelumnya`)
                           global.db.data.chats[m.chat].nsfw = false
                           m.reply(`Nsfw Berhasil Di Nonaktifkan !`)
                           } else {
                           let buttonsantilink = [{ buttonId: `${command} enable`, buttonText: { displayText: 'Enable' }, type: 1 }, { buttonId: `${command} disable`, buttonText: { displayText: 'Disable' }, type: 1 }]
                           await Resta.sendButtonText(m.chat, buttonsantilink, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, m)
                           }
                           break
                 case 'antivionce':
                           if (!isRegister) return m.reply(mess.regis)
                           if (!m.isGroup) return m.reply(mess.group)
                           if (!isAdmins) return m.reply(mess.admin)
                           if (args[0] === "enable") {
                           if (global.db.data.chats[m.chat].antivionce) return m.reply(`Antivionce Aktif Sebelumnya`)
                           global.db.data.chats[m.chat].antivionce = true
                           m.reply(`Antivionce Di Group Berhasil Di Aktifkan !`)
                           } else if (args[0] === "disable") {
                           if (!global.db.data.chats[m.chat].antivionce) return m.reply(`Antivionce Nonaktif Sebelumnya`)
                           global.db.data.chats[m.chat].antivionce = false
                           m.reply(`Antivionce Berhasil Di Nonaktifkan !`)
                           } else {
                           let buttonsantilin = [{ buttonId: `${command} enable`, buttonText: { displayText: 'Enable' }, type: 1 }, { buttonId: `${command} disable`, buttonText: { displayText: 'Disable' }, type: 1 }]
                           await Resta.sendButtonText(m.chat, buttonsantilin, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, m)
                           }
                           break
        case 'linkgc': {
        	       if (!isRegister) return m.reply(mess.regis)
                   if (!m.isGroup) return m.reply(mess.group)
                   if (!isBotAdmins) return m.reply(mess.botAdmin)
                   let response = await Resta.groupInviteCode(m.chat)
                   Resta.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
                   }
                   break
        case 'revoke': {
         	      if (!isRegister) return m.reply(mess.regis)
                   if (!m.isGroup) return m.reply(mess.group)
                   if (!isBotAdmins) return m.reply(mess.botAdmin)
                   if (!isAdmins) return m.reply(mess.admin)
                   await Resta.groupRevokeInvite(from)
                   m.reply(mess.done)
                    }
                   break
        case 'kick': {
        	       if (!isRegister) return m.reply(mess.regis)
		           if (!m.isGroup) return m.reply(mess.group)
                   if (!isBotAdmins) return m.reply(mess.botAdmin)
                   if (!isAdmins) return m.reply(mess.admin)
		           let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		           await Resta.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
	                }
	               break
	    case 'add': {
		           if (!isRegister) return m.reply(mess.regis)
		           if (!m.isGroup) return m.reply(mess.group)
                   if (!isBotAdmins) return m.reply(mess.botAdmin)
                   if (!isAdmins) return m.reply(mess.admin)
		           let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		           await Resta.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
	                }
	               break
	   case 'promote': {
		          if (!isRegister) return m.reply(mess.regis)
		          if (!m.isGroup) return m.reply(mess.group)
                  if (!isBotAdmins) return m.reply(mess.botAdmin)
                  if (!isAdmins) return m.reply(mess.admin)
		          let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		          await Resta.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
	              }
	              break
	    case 'demote': {
		           if (!isRegister) return m.reply(mess.regis)
		           if (!m.isGroup) return m.reply(mess.group)
                   if (!isBotAdmins) return m.reply(mess.botAdmin)
                   if (!isAdmins) return m.reply(mess.admin)
		           let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		           await Resta.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
	               }
	               break
         case 'setname': case 'setsubject':
	              if (!isRegister) return m.reply(mess.regis)
                  if (!m.isGroup) return m.reply(mess.group)
                  if (!isBotAdmins) return m.reply(mess.botAdmin)
                  if (!isAdmins) return m.reply(mess.admin)
                  if (!text) throw m.reply('textnya?')
                  await Resta.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
                  break
case 'setdesc': case 'setdesk': {
 if (!isRegister) return m.reply(mess.regis)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!text) throw m.reply('textnya?')
  await Resta.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
  }
  break
case 'setppgroup': case 'setppgrup': case 'setppgc': {
  if (!isRegister) return m.reply(mess.regis)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins) return m.reply(mess.admin)
  if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
  if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
  if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
  let media = await Resta.downloadAndSaveMediaMessage(quoted)
  await Resta.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
  m.reply(mess.done)
  }
  break
case 'tagall': {
 if (!isRegister) return m.reply(mess.regis)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
let teks = `*👥 Tag All By Admin*
 
🗞️ *Pesan : ${q ? q : 'kosong'}*\n\n`
  for (let mem of participants) {
  teks += `>> @${mem.id.split('@')[0]}\n`
  }
  Resta.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
  }
  break
case 'hidetag': {
	if (!isRegister) return m.reply(mess.regis)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  Resta.sendMessage(m.chat, { text : q ? q : 'kosong' , mentions: participants.map(a => a.id)}) 
  }
  break
     case 'ephemeral': {
	            if (!isRegister) return m.reply(mess.regis)
                if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)
                if (args[0] === '1') {
                await Resta.groupToggleEphemeral(m.chat, 1*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === '7') {
                await Resta.groupToggleEphemeral(m.chat, 7*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === '90') {
                await Resta.groupToggleEphemeral(m.chat, 90*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'off') {
                await Resta.groupToggleEphemeral(m.chat, 0).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else {
                let sections = [
                {
                title: "CHANGE EPHEMERAL GROUP",
                rows: [
                {title: "Ephemeral 1 day", rowId: `ephemeral 1`, description: `Activate the ephemeral group for 1 day`},
                {title: "Ephemeral 7 day's", rowId: `ephemeral 7`, description: `Activate the ephemeral group for 7 day's`},
                {title: "Ephemeral 90 days's", rowId: `ephemeral 90`, description: `Activate the ephemeral group for 90 day's`},
                {title: "Ephemeral Off", rowId: `ephemeral off`, description: `Deactivate this Ephemeral group`}
                ]
                },
                ]
                Resta.sendListMsg(m.chat, `Please select the following Ephemeral Options List !`, Resta.user.name, `Hello Admin ${groupMetadata.subject}`, `Click Here`, sections, m)
                }
                }
                break
case 'group': {
	if (!isRegister) return m.reply(mess.regis)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (args[0] === 'enable'){
  await Resta.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
  } else if (args[0] === 'disable'){
  await Resta.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
  } else {
  let buttonsgroup = [
  { buttonId: `${command} enable`, buttonText: { displayText: 'Open' }, type: 1 },
  { buttonId: `${command} disable`, buttonText: { displayText: 'Close' }, type: 1 }
  ]
  await Resta.sendButtonText(m.chat, buttonsgroup, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} open/close`, m)
  }
  }
  break
case 'editinfo': {
	if (!isRegister) return m.reply(mess.regis)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (args[0] === 'enable'){
  await Resta.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
  } else if (args[0] === 'disable'){
  await Resta.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
  } else {
  let buttonsinfo = [
  { buttonId: `${command} enable`, buttonText: { displayText: 'Open' }, type: 1 },
  { buttonId: `${command} disable`, buttonText: { displayText: 'Close' }, type: 1 }
  ]
  await Resta.sendButtonText(m.chat, buttonsinfo, `Mode Edit Info 🔥`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} open/close`, m)
  }
  }
  break
       case 'infochat': {
       	       if (!isRegister) return m.reply(mess.regis)
                  if (!m.quoted) m.reply('Reply Pesan')
                  let msg = await m.getQuotedObj()
                  if (!m.quoted.isBaileys) throw m.reply('pesan tersebut bukan dikirim oleh bot!') 
                  let teks = ''
                  for (let i of msg.userReceipt) {
                  let read = i.readTimestamp
                  let unread = i.receiptTimestamp
                  let waktu = read ? read : unread
                  teks += `⭔ @${i.userJid.split('@')[0]}\n`
                  teks += ` ┗━⭔ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                  }
                  Resta.sendTextWithMentions(m.chat, teks, m)
                  }
                 break
/**********CONVERT**********/
      case 'sticker': case 's': case 'stickergif': case 'sgif': {
                if (!isRegister) return m.reply(mess.regis)
                if (!quoted) return m.reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
                m.reply(mess.wait)
                if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await Resta.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await Resta.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
                } else {
                throw m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`) 
                }
                }
                break
     case 'swm': case 'stickerwm': {
     	       if (!isRegister) return m.reply(mess.regis)
      	      if (!args.join(" ")) return m.reply(`Example :\nswm Resta | Gans`)
                const swn = args.join(" ")
                const pcknm = swn.split("|")[0];
                const atnm = swn.split("|")[1];
                m.reply(mess.wait)
                if (quoted.msg === true) {
                Resta.downloadAndSaveMediaMessage(quoted, "gifee")
                Resta.sendMessage(m.chat, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
                } else if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await Resta.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
                await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await Resta.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
                await fs.unlinkSync(encmedia)
                } else {
                m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
                }
                }
                break
     case 'imagenobg':
     case 'removebg': case 'remove-bg': {
       	     if (!isRegister) return m.reply(mess.regis)
	            if (!quoted) throw m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
	            if (!/image/.test(mime)) throw m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
	            if (/webp/.test(mime)) throw m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
	            let remobg = require('remove.bg')
	            let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	            let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	            hmm = await './src/remobg-'+getRandom('')
	            localFile = await Resta.downloadAndSaveMediaMessage(qmsg, hmm)
	            outputFile = await './src/hremo-'+getRandom('.png')
	            m.reply(mess.wait)
	            remobg.removeBackgroundFromImageFile({
	            path: localFile,
	            apiKey: apinobg,
	            size: "regular",
	            type: "auto",
	            scale: "100%",
	            outputFile 
	            }).then(async result => {
	            Resta.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	            await fs.unlinkSync(localFile)
	            await fs.unlinkSync(outputFile)
	             })
	             }
	             break
case 'toimage': case 'toimg': {
 if (!isRegister) return m.reply(mess.regis)
  if (!quoted) throw 'Reply Image'
  if (!/webp/.test(mime)) return m.reply(`Balas sticker dengan caption *${prefix + command}*`)
  m.reply(mess.wait)
  let media = await Resta.downloadAndSaveMediaMessage(quoted)
  let ran = await getRandom('.png')
  exec(`ffmpeg -i ${media} ${ran}`, (err) => {
  fs.unlinkSync(media)
  if (err) throw err
  let buffer = fs.readFileSync(ran)
  Resta.sendMessage(m.chat, { image: buffer }, { quoted: m })
  fs.unlinkSync(ran)
  })
  }
  break
case 'tomp4': case 'tovideo': {
  if (!isRegister) return m.reply(mess.regis)
  if (!quoted) throw 'Reply Image'
  if (!/webp/.test(mime)) throw m.reply(`balas stiker dengan caption *${prefix + command}*`) 
  m.reply(mess.wait)
  let media = await Resta.downloadAndSaveMediaMessage(quoted)
  let webpToMp4 = await webp2mp4File(media)
  await Resta.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
  await fs.unlinkSync(media)
  }
  break
case 'toaud': case 'toaudio': {
 if (!isRegister) return m.reply(mess.regis)
  if (!/video/.test(mime) && !/audio/.test(mime)) throw m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`) 
  if (!quoted) throw m.reply (`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`) 
  m.reply(mess.wait)
  let media = await quoted.download()
  let audio = await toAudio(media, 'mp4')
  Resta.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
  }
  break
case 'tomp3': {
	if (!isRegister) return m.reply(mess.regis)
  if (/document/.test(mime)) throw m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`) 
  if (!/video/.test(mime) && !/audio/.test(mime)) throw m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`) 
  if (!quoted) throw m.reply (`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`) 
  m.reply(mess.wait)
  let media = await quoted.download()
  let audio = await toAudio(media, 'mp4')
  Resta.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${Resta.user.name}.mp3`}, { quoted : m })
  }
  break
case 'tovn': case 'toptt': {
  if (!isRegister) return m.reply(mess.regis)
  if (!/video/.test(mime) && !/audio/.test(mime)) throw m.reply(`Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`) 
  if (!quoted) throw m.reply(`Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`) 
  m.reply(mess.wait)
  let media = await quoted.download()
  let audio = await toPTT(media, 'mp4')
  Resta.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
  }
  break
case 'togif': {
 if (!isRegister) return m.reply(mess.regis)
  if (!quoted) throw m.reply(`reply Image`) 
  if (!/webp/.test(mime)) throw m.reply (`balas stiker dengan caption *${prefix + command}*`) 
  m.reply(mess.wait)
  let media = await Resta.downloadAndSaveMediaMessage(quoted)
  let webpToMp4 = await webp2mp4File(media)
  await Resta.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
  await fs.unlinkSync(media)
  }
  break
case 'tourl': {
if (!isRegister) return m.reply(mess.regis)
  m.reply(mess.wait)
  let { UploadFileUgu, webp2mp4File, TelegraPh } = require('../lib/uploader')
  let media = await Resta.downloadAndSaveMediaMessage(quoted)
  if (/image/.test(mime)) {
  let anu = await TelegraPh(media)
  m.reply(util.format(anu))
  } else if (!/image/.test(mime)) {
  let anu = await UploadFileUgu(media)
  m.reply(util.format(anu))
  }
  await fs.unlinkSync(media)
  }
  break
   
           case 'tinyurl':
                      if (args.length < 1) return m.reply(`Penggunaan :\n*${prefix}tinyurl link*`)
                      if (!isUrl(args[0])) return m.reply(`Masukkan link yang benar`)
                      axios.get(`https://tinyurl.com/api-create.php?url=${args[0]}`)
                     .then((a) => m.reply(`Nih ${a.data}`))
                     .catch(() => m.reply(`Error, harap masukkan link dengan benar`))
                      break
         case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                    try {
                    if (!isRegister) return m.reply(mess.regis)
                    let set
                    if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                    if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                    if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                    if (/earrape/.test(command)) set = '-af volume=12'
                    if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                    if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                    if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                    if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                    if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                    if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                    if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                    if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                    if (/audio/.test(mime)) {
                    m.reply(mess.wait)
                    let media = await Resta.downloadAndSaveMediaMessage(quoted)
                    let ran = getRandom('.mp3')
                    exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                    fs.unlinkSync(media)
                    if (err) return m.reply(err)
                    let buff = fs.readFileSync(ran)
                    Resta.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                    fs.unlinkSync(ran)
                    })
                    } else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                    } catch (e) {
                    m.reply(e)
                     }
                    break
           case 'style': case 'styletext': {
           	       if (!isRegister) return m.reply(mess.regis)
           	       if (!text) throw m.reply(`Example : ${prefix + command} text`) 
		              let { styletext } = require('../lib/scraper')
		              if (!text) throw 'Masukkan Query text!'
                      let anu = await styletext(text)
                      let teks = `Srtle Text From ${text}\n\n`
                      for (let i of anu) {
                       teks += `⭔ *${i.name}* : ${i.result}\n\n`
                       }
                      m.reply(teks)
	                   }
	                   break
           case 'ebinary': {
           	       if (!isRegister) return m.reply(mess.regis)
                      if (!text) throw m.reply(`Example : ${prefix + command} text`) 
                      let eb = await eBinary(text)
                      m.reply(eb)
                      }
                       break
            case 'dbinary': {
            	       if (!isRegister) return m.reply(mess.regis)
                       if (!text) throw m.reply(`Example : ${prefix + command} text`) 
                       let db = await dBinary(text)
                       m.reply(db)
                        }
                        break
            case 'emojimix': {
            	       if (!isRegister) return m.reply(mess.regis)
		               let [emoji1, emoji2] = text.split`+`
		               if (!emoji1) throw m.reply (`Example : ${prefix + command} 😅+🤔`) 
		               if (!emoji2) throw m.reply (`Example : ${prefix + command} 😅+🤔`) 
		               let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		               for (let res of anu.results) {
		               let encmedia = await Resta.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		               await fs.unlinkSync(encmedia)
		                }
	                    }
	                   break
	    case 'emojimix2': {
		              if (!isRegister) return m.reply(mess.regis)
	                  if (!text) throw m.reply(`Example : ${prefix + command} 😅`) 
	                  let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		              for (let res of anu.results) {
		              let encmedia = await Resta.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		              await fs.unlinkSync(encmedia)
		              }
	                  }
	                   break
	       case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
		               if (!isRegister) return m.reply(mess.regis)
	                   let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
	                   if (!/image/.test(mime)) throw m.reply (respond) 
                       if (!text) throw m.reply (respond) 
                       atas = text.split('|')[0] ? text.split('|')[0] : '-'
                       bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	                   let dwnld = await quoted.download()
	                   let fatGans = await floNime(dwnld)
	                   let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
	                   let FaTiH = await Resta.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
	                   await fs.unlinkSync(FaTiH)
                        }
	                   break
/**************SEARCH MENU**********/ 
           case 'igstalk':
                       if (!args || !args[0]) throw m.reply(`Gunakan format ${prefix}${command} [username] Contoh: ${prefix}${command} jokowi`)
                       m.reply(mess.wait)
                       try {
                       let res = await noapi.igstalk(args[0])
                       let json = JSON.parse(JSON.stringify(res))
                       let iggs = `▢ *Username:* ${json.username}\n▢ *Nickname:* ${json.fullName}\n▢ *Followers:* ${json.followers}\n▢ *Following:* ${json.following}\n▢ *Posting:* ${json.postsCount}\n▢ *Link:* https://instagram.com/${json.username}\n▢ *Bio:* ${json.bio}`
                       Resta.sendImage(m.chat, json.profilePicHD, iggs, m)
                       } catch (err) {
                       console.log(err)
                       await Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m })
                       }
                       break
            case 'githubstalk':
                       if (!text) return m.reply( 'Harap Masukan Username')
                       await m.reply(mess.wait)
                       try {
                       let ano = await fetch(`https://api.github.com/users/${text}`).then(a => a.json())
                       let thumb = await getBuffer(ano.avatar_url)
                       let hasilnya = `*── 「 GITHUB STALK 」 ──*\n\n➸ *Bio*: ${ano.bio}\n➸ *Perusahaan*: ${ano.company}\n➸ *Repo Publik:* ${ano.public_repos}\n➸ *Gists Publik:* ${ano.public_gists}\n➸ *Follower:* ${ano.followers}\n➸ *Following:* ${ano.following}\n➸ *Lokasi:* ${ano.location}\n➸ *Link:* ${ano.html_url}`
                       await Resta.sendMessage(m.chat, { image: thumb, caption: hasilnya, quoted: m })
                       } catch (err) {
                       console.log(err)
                       await Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m })
                       }
                       break
            case 'sfilesearch':
                       if (!isRegister) return m.reply(mess.regis)
                       if (!q) return m.reply(`Mau Cari Apa Di ${command}?\nExample : *${prefix + command} WhatsApp mod*`)
                       m.reply(mess.wait)
                       api2.sfilesearch(`${q}`)
                      .then(result => {
                       let res = '「 *sfilesearch* 」\n\n'
                       for (let i of result) {
                       res += `*Nama*: ${i.nama}\n*Ukuran*: ${i.size}\n*Link*: ${i.link}\n\n`
                       }
                       m.reply(res)
                       });
                       break 
            case 'pinterest': {
            	       if (!isRegister) return m.reply(mess.regis)
                       if (!text) return m.reply(`Mau Cari Apa Di ${command}?\nExample : *${prefix + command} hinata*`)
                       m.reply(mess.wait)
                       let anu = await pinterest(text)
                       result = anu[Math.floor(Math.random() * anu.length)]
                       let buttonspinterest = [{buttonId: `pinterest ${text}`, buttonText: {displayText: 'Next Result'}, type: 1}]
                       Resta.sendMessage(m.chat, { image: { url: result }, caption: 'Source Url : '+result, buttons: buttonspinterest }, { quoted: m })
                       }
                       break
            case 'wallpaper': {
            	       if (!isRegister) return m.reply(mess.regis)
           	        if (!isRegister) return m.reply(mess.regis)
                       if (!text) return m.reply(`Mau Cari Apa Di ${command}?\nExample : *${prefix + command} hinata*`)
                       m.reply(mess.wait)
                       let anu = await wallpaper(text)
                       result = anu[Math.floor(Math.random() * anu.length)]
                       let buttonswallpaper = [{buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Result'}, type: 1}]
                       Resta.sendMessage(m.chat, { image: { url: result.image[0] }, caption: `Source Url : ${result.image[2] || result.image[1] || result.image[0]}`, buttons: buttonswallpaper }, { quoted: m })
                       }
                       break
            case 'jadwaltv':
                       if (!isRegister) return m.reply(mess.regis)
                       if (!isRegister) return m.reply(mess.regis)
                       if (!q) return m.reply('Kirim perintah *#jadwaltv [channel]*')
                       m.reply(await jadwaltv(q))
                       break
            case 'infogempa':
                       if (!isRegister) return m.reply(mess.regis)
                       const tres = await Gempa()
                       var { Waktu, Lintang, Bujur, Magnitude, Kedalaman, Wilayah, Map } = tres.result
                       console.log(Map)
                       const captt = `Waktu : ${Waktu}\nLintang : ${Lintang}\nBujur : ${Bujur}\nWilayah : ${Wilayah}`
                       Resta.sendMessage(m.chat, { image : { url : Map }, caption : captt}, { quoted: m })
                       break
             case 'wallpaperhd':
                       if (!isRegister) return m.reply(mess.regis)
                       if (!text) throw m.reply(`Example : ${prefix + command} loli`) 
                       m.reply(mess.wait)
                       let okm = await api2.konachan(text);
                       let mmks = okm[Math.floor(Math.random() * okm.length)];
                       const anu = mmks
                       await Resta.sendMessage(m.chat, { image : { url: anu}, caption: `${command} ${text}`}, { quoted: m })
                      .catch(() => Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Video tidak ditemukan'}, { quoted: m }))
                       break;
            case 'wallpapercraft':
                       if (!isRegister) return m.reply(mess.regis)
                       if (!text) throw m.reply(`Example : ${prefix + command} loli`) 
                       m.reply(mess.wait)
                       let amm = await api2.wallpapercraft(text);
                       let ack = amm[Math.floor(Math.random() * amm.length)];
                       const okp = ack
                       await Resta.sendMessage(m.chat, { image : { url: okp}, caption: `${command} ${text}`}, { quoted: m })
                      .catch(() => Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Video tidak ditemukan'}, { quoted: m }))
                       break;
            case "wallpapercave":
                       if (!isRegister) return m.reply(mess.regis)
                       if (!text) throw m.reply(`Example : ${prefix + command} Naruto`) 
                       m.reply(mess.wait)
                       let am = await api2.wallpapercave(text);
                       let him = am[Math.floor(Math.random() * am.length)];
                       const okj = him
                       await Resta.sendMessage(m.chat, { image : { url: okj}, caption: `${command} ${text}`}, { quoted: m })
                      .catch(() => Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Video tidak ditemukan'}, { quoted: m }))
                       break;
            case 'google': {
            	       if (!isRegister) return m.reply(mess.regis)
                       if (!args[0]) return m.reply(`Example: ${prefix + command} <query>\nUses : ${prefix + command} apa arti cinta`)
                       let google = require('google-it')
                       m.reply(mess.wait)
                       google({'query': args.join(" ")}).then(res => {
                       let teks = `Google Search From : ${text}\n\n`
                       for (let g of res) {
                       teks += `*Title* : ${g.title}\n`
                       teks += `*Description* : ${g.snippet}\n`
                       teks += `*Link* : ${g.link}\n\n────────────────────────\n\n`
                       } 
                       m.reply(teks)
                       }) 
                       }
                       break
            case 'wikimedia': {
           	        if (!isRegister) return m.reply(mess.regis)
                       if (!text) throw m.reply('Masukkan Query Title') 
                       let wiki = await wikimedia(text)
                       result = wiki[Math.floor(Math.random() * wiki.length)]
                       let buttons = [{buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Result'}, type: 1}]
                       let buttonMessage = {
                       image: { url: result.image },
                       caption: `📄 Title : ${result.title}
                       📬 Source : ${result.source}
                       🔗 Media Url : ${result.image}`,
                        footer: global.ownerName,
                        buttons: buttons,
                        headerType: 4
                        }
                        Resta.sendMessage(m.chat, buttonMessage, { quoted: m })
                        }
                        break
             case 'lirik': 
                        if (!isRegister) return m.reply(mess.regis)
                        if(!q) throw m.reply(`Example : ${prefix + command} doraemon`) 
                        let song = await noapi.lirik(q)
                        Resta.sendImage(m.chat ,song.thumb,song.lirik, m)
                        break
             case 'ringtone': {
          	          if (!isRegister) return m.reply(mess.regis)
		                if (!args.join(" ")) return m.reply(`Contoh:\n${prefix + command} black over`)
                        let { ringtone } = require('../lib/scraper')
		                let anu = await ringtone(text)
		                let result = anu[Math.floor(Math.random() * anu.length)]
		                Resta.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	                    }
	                    break
             case 'kkbi':
                        if (!isRegister) return m.reply(mess.regis)
                        if (!q) throw m.reply('Masukkan Query Title') 
				        ienn = await fetchJson(`https://mnazria.herokuapp.com/api/kbbi?search=${q}`, {method: 'get'})
				        m.reply('Menurut Kbbi:\n\n'+ienn.result)
				        break
             case 'searchgrup':
                        if (!isRegister) return m.reply(mess.regis)
				        if (args.length < 1) return m.reply(`Kirim perintah ${command} nama grup`)
				        m.reply(mess.wait)
			            noapi.linkwa(q).then(async(data) => {
				        if (data.length == 0) return m.reply(`Grup ${q} tidak ditemukan`)
				        var teks = `*Hasil Pencarian Dari ${q}*\n\n`
				        for (let x of data) {
				        teks += `*Nama :* ${x.nama}\n*Link :* ${x.link}\n\n`
				        }
				        m.reply(teks)
				        }).catch(() => Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Video tidak ditemukan'}, { quoted: m }))
			            break
             case 'play':
         	           if (!isRegister) return m.reply(mess.regis)
                        if (!text) throw m.reply(`Example : ${prefix + command} story wa anime`) 
                        let search = await yts(text)
                        m.reply(mess.wait)
                        anu1 = search.videos[Math.floor(Math.random() * search.videos.length)]
                        let caphtion = `*------------ PLAY SEARCH ------------*\n\n▢ *Title* : ${anu1.title}\n▢ *Ext* : Search\n▢ *ID* : ${anu1.videoId}\n▢ *Duration* : ${anu1.timestamp}\n▢ *Viewers* : ${anu1.views}\n▢ *Upload At* : ${anu1.ago}\n▢ *Author* : ${anu1.author.name}`
                        let buttoos = [
                        {urlButton: {displayText: 'Url 🔰',url: `${anu1.url}`}}, 
                       {"quickReplyButton": {"displayText": "🎵 Music","id": `ytvvmp3 ${anu1.url}`},},
                       {"quickReplyButton": {"displayText": "🎥 Video","id": `ytmp4 ${anu1.url}`}}]
                       Resta.send5ButLoc(m.chat, caphtion, global.ownerName, anu1.thumbnail, buttoos, m)
                        break
             case 'yts': case 'ytsearch': 
                        if (!isRegister) return m.reply(mess.regis)
                        if (!text) throw m.reply (`Example : ${prefix + command} story wa anime`) 
                        m.reply(mess.wait)
                        yts(text).then(data => {
				        let yt = data.videos
				        var jumlah = 15
				        if (yt.length < jumlah) jumlah = yt.length
				        var no = 0
			            let txt = `*YOUTUBE SEARCH*\n\n*Data berhasil didapatkan*\n*Hasil pencarian dari ${q}*\n\n*${prefix}getmusic <no urutan>*\n*${prefix}getvideo <no urutan>*\nUntuk mengambil Audio/Video dari hasil pencarian`
                        for (let i = 0; i < jumlah; i++) {
				        no += 1
				        txt += `\n─────────────────\n\n*No Urutan : ${no.toString()}*\n*▢ Judul :* ${yt[i].title}\n*▢ ID :* ${yt[i].videoId}\n*▢ Channel :* ${yt[i].author.name}\n*▢ Upload :* ${yt[i].ago}\n*▢ Ditonton :* ${yt[i].views}\n*▢ Duration :* ${yt[i].timestamp}\n*▢ URL :* ${yt[i].url}\n`
				        }
				        Resta.sendMessage(from, { image: { url: yt[0].image }, caption: txt }, { quoted: m })
				        }).catch(() => Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Video tidak ditemukan'}, { quoted: m }))
                        break
             case 'whatmusic':
                        if (!isRegister) return m.reply(mess.regis)
	                    if (/video|audio/.test(mime)) {
		                let media = await quoted.download()
		                await m.reply(mess.wait)
		                let { status, metadata } = await acr.identify(media)
		                if (status.code !== 0) throw status.msg 
		                let { title, artists, album, genres, release_date } = metadata.music[0]
		                let txt = `*• Title:* ${title}${artists ? `\n*• Artists:* ${artists.map(v => v.name).join(', ')}` : ''}`
		                txt += `${album ? `\n*• Album:* ${album.name}` : ''}${genres ? `\n*• Genres:* ${genres.map(v => v.name).join(', ')}` : ''}\n`
		                txt += `*• Release Date:* ${release_date}`
                        Resta.sendMessage(m.chat, { text: txt.trim(), buttons: [{ buttonText: { displayText: 'Play Music' }, buttonId: `${prefix}playwhatmusic ${title}` }] }, { quoted: m })
	                    } else throw m.reply(`Reply audio/video with command ${prefix + command}`)
	                   .catch((err) => Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Video tidak ditemukan'}, { quoted: m }))
	                    break
              case 'cuaca':
                        if (!args[0]) throw m.reply(" please provide place or location name")
                        try{
                        const response = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${args[0]}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`)
                        const res = await response 
                        const name = res.data.name
                        const Country = res.data.sys.country
                        const Weather= res.data.weather[0].description
                        const Temperature = res.data.main.temp + '°C'
                        const Minimum_Temperature= res.data.main.temp_min + '°C'
                        const Maximum_Temperature= res.data.main.temp_max + '°C'
                        const Humidity= res.data.main.humidity + '%'
                        const Wind= res.data.wind.speed + 'km/h'
                        m.reply(`🌸 Place: ${name}\n💮 Country: ${Country}\n🌈 Weather: ${Weather}\n🎋 Temperature: ${Temperature}\n💠 Minimum Temperature: ${Minimum_Temperature}\n📛 Maximum Temperature: ${Maximum_Temperature}\n💦 Humidity: ${Humidity}\n🎐 Wind: ${Wind} `)
                        }catch(e){ 
                        m.reply( 'location not found' )
                        console.log(e)
                        }
                        break 
             case 'playwhatmusic':
         	           if (!isRegister) return m.reply(mess.regis)
                        if (!text) throw m.reply(`Example : ${prefix + command} story wa anime`) 
                        let searsch = await yts(text)
                        m.reply(mess.wait)
                        let anu21 = searsch.videos[Math.floor(Math.random() * searsch.videos.length)]
                        let buttons = [{buttonId: `ytvvmp3 ${anu21.url}`, buttonText: {displayText: '♫ Audio'}, type: 1}]
                        let buttonMessage = {
                        image: { url: anu21.thumbnail },
                        caption: `*------------ PLAY WHAT MUSIC ------------*\n\n⭔ *Title* : ${anu21.title}\n⭔ *Ext* : Search\n⭔ *ID* : ${anu21.videoId}\n⭔ *Duration* : ${anu21.timestamp}\n⭔ *Viewers* : ${anu21.views}\n⭔ *Upload At* : ${anu21.ago}\n⭔ *Author* : ${anu21.author.name}`,
                        footer: `⭔ *Url* : ${anu21.url}\n⭔ *Channel* : ${anu21.author.url}\n⭔ *Description* : ${anu1.description}`,
                        buttons: buttons,
                        headerType: 4 }
                        Resta.sendMessage(m.chat, buttonMessage, { quoted: m })
                       .catch(() => Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m }))
                        break
/*********DOWNLOADER*************/       
          case 'joox':
                     if (!text) throw m.reply(`*Perintah ini untuk mencari lagu joox berdasarkan pencarian*\n\ncontoh:\n${prefix + command} akad`)
                     if (isUrl(text)) throw m.reply(`*Perintah ini untuk mencari lagu joox berdasarkan pencarian bukan link*\n\ncontoh:\n${prefix + command} akad`)
                     noapi.joox(text).then(res => {
                     let joox = JSON.stringify(res)
                     let jjson = JSON.parse(joox)
                     m.reply(mess.wait)
                     let random = Math.floor(Math.random() * jjson.data.length)
                     let hasil = jjson.data[random]
                     let json = hasil
                     let pesan = `*Penyanyi:* ${json.penyanyi}\n*Judul:* ${json.lagu}\n*Album:* ${json.album}\n*Diterbitkan:* ${json.publish}\nBy ${ownerName}\n\nPlease Be Patient We Are Sending The Data You Request`
                     Resta.sendImage(m.chat, json.img, pesan, m)
                     Resta.sendMessage(m.chat, { audio: { url: json.mp3 }, mimetype: 'audio/mpeg', fileName: `${json.penyanyi}.mp3` }, { quoted: m })
                     })
                     break
           case'igmp4':
           case 'igvideo':
                     if (!isRegister) return m.reply(mess.regis)
                     if (!q) return m.reply(`Use example ${command} https://www.instagram.com/p/CMeFrnTp8as`)
                     if (!isUrl(q)) throw m.reply(mess.link) 
			         if (!q.includes('instagram.com')) return m.reply(mess.link1)
			         m.reply(mess.wait)
                     const results = await instagramdlv2(q)
                     for (const { url } of results) await Resta.sendMessage(m.chat, { video: { url: url }, caption: `By Mode ${namaBot}`}, { quoted: m })
                     break
          case 'igfoto':
          case 'igimage':
                     if (!isRegister) return m.reply(mess.regis)
                     if (!q) return m.reply(`Use example ${command} https://www.instagram.com/p/CMeFrnTp8as`)
                     if (!isUrl(q)) throw m.reply(mess.link) 
			         if (!q.includes('instagram.com')) return m.reply(mess.link1)
			         m.reply(mess.wait)
                     const resultss = await instagramdl(q)
                     for (const { url } of resultss) await Resta.sendMessage(m.chat, { image: { url: url }, caption: `By Mode ${namaBot}` }, { quoted: m })
                     break
          case 'gitclone':
                     if (!isRegister) return m.reply(mess.regis)
                     if (!args[0]) return m.reply('Linknya?')
                     let regx = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
                     if (!regx.test(args[0])) return m.reply('Linknya salah')
                     m.reply(mess.wait)
                     let [, user, repo] = args[0].match(regx) || []
                     repos = repo.replace(/.git$/, '')
                     let hasdl = `https://api.github.com/repos/${user}/${repos}/zipball`
                     let namafile = (await fetch(hasdl, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
                     Resta.sendMessage(m.chat, { document: { url: hasdl }, fileName: `${namafile}`, mimetype: 'zip' }, { quoted: m })
                     break
          case 'mediafire':
                     if (!isRegister) return m.reply(mess.regis)
                     if (!q) return m.reply(`Gunakan Format : ${command} linknya`)
                     if (!isUrl(q)) throw m.reply(mess.link) 
			         if (!q.includes('mediafire')) return m.reply(mess.link1)
			         m.reply(mess.wait)
			         res = await api2.mediafire(q)
                     result = `Media Fire Downloader\n\n🎟️ *Nama :* ${res.judul}\n🎟️ *Ukuran :* ${res.size}\n🎟️ *Link :* ${res.link}\n\n_*Tunggu Proses Mengirim Media......*_`
                     m.reply(result)          
                     Resta.sendMessage(m.chat, { document: { url: res.link }, fileName: `${res.judul}`, mimetype: 'zip' }, { quoted: m })
                     break
          case 'fb':
          case 'facebook':
                     if (!isRegister) return m.reply(mess.regis)
                     if (!q) return m.reply(`Gunakan Format : ${command} https://fb.watch/e7AFjgqFX8/`)
                     if (!isUrl(q)) throw m.reply(mess.link)
                     if (!q.includes('fb.watch') / ('facebook'))return m.reply('Link Invalid ❎')
                     await m.reply(mess.wait)
                     noapi.aiovideodl(q) .then(result => {
                     const ituvb = data.medias
                     Resta.sendMessage(m.chat,  { image: { url: ituvb }, caption: `By Mode ${namaBot}` }, { quoted: m })
                     })
                     break
           case 'soundcloud':
                     if (!isRegister) return m.reply(mess.regis)
                     if (!q) return m.reply(`Gunakan Format : ${command} linknya`)
                     if (!isUrl(q)) throw m.reply(mess.link) 
                     if (!q.includes('soundcloudmp')/('soundcloud.com')) return m.reply('Link Invalid ❎')
                     await m.reply(mess.wait)
                     api2.soundcloud(`${q}`) 
                    .then(result => {
                     let text =`*🔰SOUNDCLOUD🔰*\n`
                     text +=`*Title*: ${result.title}\n`
                     text +=`*Durasi*: ${result.duration}\n`
                     text +=`*Qulity*: ${result.quality}\n`
                     text +=`*Author*: ${result.author}\n\n Wait Is Sending The Data You Request`
                     Resta.sendImage(m.chat, result.thumbnail, text, m)
                     Resta.sendMessage(m.chat, {document: {url:  result.download}, mimetype: 'audio/mpeg', fileName: `${result.title}.mp3`}, { quoted: m })
                     }).catch(() => Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Video tidak ditemukan'}, { quoted: m }))
                     break
           case 'zippydl':
                      if (!isRegister) return m.reply(mess.regis)
                      if (!q) return m.reply(`Gunakan Format : ${command} linknya`)
                      if (!isUrl(q)) throw m.reply(mess.link) 
                      if (!q.includes('zippyshare')/('zippyshare.com')) return m.reply('Link Invalid ❎')
                      await m.reply(mess.wait)
                      api2.zippydl(`${q}`) 
                     .then(result => {
                      let text =`*🔰Zippydl🔰*\n`
                      text +=`*Judul*: ${result.data.Judul}\n`
                      text +=`*Ukuran*: ${result.data.size}\n`
                      text +=`*Upload*: ${result.data.uploaded}\n\n Wait Is Sending The Data You Request`
                      m.reply(text)
                      Resta.sendMessage(m.chat, { document: { url: result.data.link }, fileName: `${result.data.Judul}`, mimetype: 'zip' }, { quoted: m })
                      }).catch(() => Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m }))
                      break
           case 'cocofun':
                      if (!isRegister) return m.reply(mess.regis)
                      if (!q) return m.reply(`Gunakan Format : ${command} https://www.icocofun.com/share/post/490013276810?lang=id&pkg=id&share_to=copy_link&m=253e3d90d057da0de4f9544ed67e4c54&d=0d18db9c398405eed9a59120805e336ff6dd6d841c556ada2b191c37a722a522&nt=1`)
                      if (!isUrl(q)) throw m.reply(mess.link) 
                      if (!q.includes('icocofun.com')/('cocofun.com')) return m.reply('Link Invalid ❎')
                      await m.reply(mess.wait)
                      api2.cocofun(`${q}`) 
                     .then(result => {
                      let text =`*🔰COCOFUN🔰*\n`
                      text +=`*Topic*: ${result.topic}\n`
                      text +=`*Caption*: ${result.caption}\n`
                      text +=`*View*: ${result.play}\n`
                      text +=`*Share*: ${result.share}\n`
                      text +=`*Like*: ${result.like}\n`
                      text +=`*Durasi*: ${result.duration}\n\n Wait Is Sending The Data You Request`
                      Resta.sendImage(m.chat, result.thumbnail, text, m)
                      Resta.sendMessage(from, {video:{url: result.no_watermark}, mimetype:"video/mp4", caption: `${result.caption}`}, {quoted:m})
                      }).catch(() => Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m }))
                      break 
           case 'likedown':
                      if (!isRegister) return m.reply(mess.regis)
                      if (!q) return m.reply(`Gunakan Format : ${command} https://l.likee.video/v/JvI12V`)
                      if (!isUrl(q)) throw m.reply(mess.link) 
                      if (!q.includes('like.com')/('l.likee')) return m.reply('Link Invalid ❎')
                      await m.reply(mess.wait)
                      api2.like(`${q}`) 
                     .then(result => {
                      let text =`*🔰Like Downloader🔰*\n`
                      text +=`*Title*: ${result.title}\n\n Wait Is Sending The Data You Request`
                      Resta.sendImage(m.chat, result.thumbnail, text, m)
                      Resta.sendMessage(from, {video:{url: result.no_watermark}, mimetype:"video/mp4", caption: `${result.title}`}, {quoted:m})
                      }).catch(() => Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m }))
                      break          
            case 'ytmp4': case 'ytvideo': case 'ytv':
                      if (!isRegister) return m.reply(mess.regis)         
                      if (args.length < 1) return m.reply(`Gunakan Format : ${command} linknya`)
                      if (!isUrl(args[0]) && !args[0].includes('youtu.be') && !args[0].includes('youtube.com')) return m.reply(mess.link1)
                      m.reply(mess.wait)
                      try {
                      let quality = args[1] ? args[1] : '480p'
                      let media = await ytv(text, quality)
                      if (media.filesize >= 100000) return m.reply('File Melebihi Batas Silahkan Download Sendiri : '+media.dl_link)
                      var caption = `---- Youtube Downloader -----\n\n📄 Judul : ${media.title}\n🎚️ Size : ${media.filesizeF}\n🔗 Url : ${isUrl(text)}\n📥 Format : MP4\n📮 Resolusi : ${args[1] || '480p'}`
                      Resta.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: caption }, { quoted: m })
                      } catch (err) {
                      console.log(err)
                      await Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m })
                      }
			          break
            case 'ytmp3': case 'ytaudio': case 'yta': 
            	       if (!isRegister) return m.reply(mess.regis)
                       if (args.length < 1) return m.reply(`Gunakan Format : ${command} linknya`)
                       if (!isUrl(args[0]) && !args[0].includes('youtu.be') && !args[0].includes('youtube.com')) return m.reply(mess.link1)
                       await m.reply(mess.wait) 
                       try {
                       let quality = args[1] ? args[1] : '128kbps'
                       let media = await yta(text, quality)
                       if (media.filesize >= 100000) return m.reply('File Melebihi Batas Silahkan Download Sendiri : '+media.dl_link)
                       var caption = `*------ Youtube Downloader -----*\n\n📄 Title : ${media.title}\n🎚️ Size : ${media.filesizeF}\n🔗 Url : ${isUrl(text)}\n📥 Format : MP3\n📮 Resolusi : ${args[1] || '128kbps'}\n\n_Wait We Are Processing Your File_`
                       let msg = await Resta.sendImage(m.chat, media.thumb, caption, m)
                       Resta.sendMessage(m.chat, {document: {url:  media.dl_link}, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3`}, { quoted: msg }) .then(() => {
                       })
                       } catch (err) {
                       console.log(err)
                       await Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m })
                       }
                       break
             case 'ytvvmp3':
            	       if (!isRegister) return m.reply(mess.regis)
                       if (args.length < 1) return m.reply(`Gunakan Format : ${command} linknya`)
                       if (!isUrl(args[0]) && !args[0].includes('youtu.be') && !args[0].includes('youtube.com')) return m.reply(mess.link1)
                       await m.reply(mess.wait) 
                       try {
                       let quality = args[1] ? args[1] : '128kbps'
                       let media = await yta(text, quality)
                       if (media.filesize >= 100000) return m.reply('File Melebihi Batas Silahkan Download Sendiri : '+media.dl_link)
                       var caption = `*------ Youtube Downloader -----*\n\n📄 Title : ${media.title}\n🎚️ Size : ${media.filesizeF}\n🔗 Url : ${isUrl(text)}\n📥 Format : MP3\n📮 Resolusi : ${args[1] || '128kbps'}\n\n_Wait We Are Processing Your File_`
                       Resta.sendMessage(m.chat, {document: {url:  media.dl_link}, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3`}, { quoted: m }) 
                       } catch (err) {
                       console.log(err)
                       await Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m })
                       }
                       break
             case 'getmusic': {
                       if (!text) throw m.reply(`Example : ${prefix + command} 1`) 
                       if (!m.quoted) return m.reply('Reply Pesan Hasil Dari Ytsearch')
                       if (!m.quoted.isBaileys) throw m.reply (`Hanya Bisa Membalas Pesan Dari Bot`) 
		               let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                       if (!urls) throw m.reply(`Mungkin pesan yang anda reply tidak mengandung result ytsearch`) 
                       m.reply(mess.wait)
                       let quality = args[1] ? args[1] : '128kbps'
                       let media = await yta(urls[text - 1], quality)
                       if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                       Resta.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
                       Resta.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
                       }
                      break
           case 'getvideo': {
                      if (!text) throw m.reply(`Example : ${prefix + command} 1`) 
                      if (!m.quoted) return m.reply('Reply Pesan Hasil Dari ytsearch')
                      if (!m.quoted.isBaileys) throw m.reply (`Hanya Bisa Membalas Pesan Dari Bot`) 
                      let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                      if (!urls) throw m.reply(`Mungkin pesan yang anda reply tidak mengandung result ytsearch`)
                      m.reply(mess.wait)
                      let quality = args[1] ? args[1] : '360p'
                      let media = await ytv(urls[text - 1], quality)
                      if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                      Resta.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
                      }
                      break
           case 'tiktok': {
           	       if (!isRegister) return m.reply(mess.regis)
                      if (!q) return m.reply(`Gunakan Format : ${command} linknya`)
                      if (!isUrl(q)) throw m.reply(mess.link1)  
                      if (!text.includes('tiktok.com')) throw m.reply(mess.link) 
                      noapi.musically(`${q}`) 
                     .then(result => {
                      const { video, video_original } = result
                      m.reply(mess.wait)
                      let buttons = [{buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '🏷 ► Audio'}, type: 1}]
                      let buttonMessage = {
                      video: { url: video },
                      caption: `Download From ${text}`,
                      footer: 'Press The Button Below',
                      buttons: buttons,
                      headerType: 5
                      }
                      Resta.sendMessage(m.chat, buttonMessage, { quoted: m })
                      }) 
                      }
                      break
          case'tiktoknowm':
                     if (!isRegister) return m.reply(mess.regis)
                     if (args.length < 1) return m.reply(`Kirim perintah ${command} link`)
			         if (!isUrl(args[0])) return m.reply(mess.link)
		             if (!args[0].includes('tiktok')) return m.reply(mess.link)
		             m.reply(mess.wait)
                     const { author: { nickname }, video, description } = await tiktokdl(args[0]).catch(async _ => await tiktokdlv2(args[0]))
                     const url = video.no_watermark_raw || video.no_watermark || video.no_watermark_hd || video.with_watermark 
                     if (!url) throw m.reply( 'Can\'t download video!')
	                 taex = `🧏 *Nickname:* ${nickname}${description ? `\n🔰 *Description:* ${description}` : ''}\nJika Ingin Mengubah Ke Audio Ketik *${prefix}tiktikmusic*`
                     Resta.sendMessage(m.chat, { video: { url: url },caption: taex }, { quoted: m })
                     break  
          case 'tiktokmp3':
          case 'tiktokmusic':
                      if (!isRegister) return m.reply(mess.regis)
                      if (args.length < 1) return m.reply(`Kirim perintah ${command} link`)
			          if (!isUrl(args[0])) return m.reply(mess.link)
			          if (!args[0].includes('tiktok')) return m.reply(mess.link)
			          m.reply(mess.wait)
			          try {
			          noapi.musically(args[0]).then(result => {
				      const { audio } = result
			          Resta.sendMessage(from, { audio: { url: audio }, mimetype: 'audio/mp4' }, { quoted: m })
			          })
	                  } catch (err) {
                      await Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m })
                      }
		              break 
          case 'twitdl': case 'twitter': {
           	      if (!isRegister) return m.reply(mess.regis)
                     if (!q) throw m.reply(`Example : ${prefix + command} https://twitter.com/britneyspears/status/1535429257614217219?s=20`) 
                     if (!isUrl(q)) throw m.reply(mess.erro)  
                     if (!text.includes('twitter.com')) throw m.reply(mess.link) 
                     m.reply(mess.wait)
                     try {
                     noapi.twitter(`${text}`) 
                    .then(result => {
                     const { SD, HD, audio, desc} = result
                     let buttons = [{buttonId: `twittermp3 ${text}`, buttonText: {displayText: '► Audio'}, type: 1}]
                     let buttonMessage = {
                     video: { url: HD},
                     caption: desc, 
                     footer: 'Press The Button Below',
                     buttons: buttons,
                     headerType: 5
                     }
                     Resta.sendMessage(m.chat, buttonMessage, { quoted: m })
                     }) 
                     } catch (err) {
                     await Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m })
                     }
                     }
                     break
          case 'twittermp3':
                      if (!isRegister) return m.reply(mess.regis)
                      if (args.length < 1) return m.reply(`Kirim perintah ${command} link`)
			          if (!isUrl(args[0])) return m.reply(mess.link)
			          if (!args[0].includes('twitter.com')) return m.reply(mess.link)
			          m.reply(mess.wait)
			          try {
			          noapi.twitter(args[0]).then( data => {
			          Resta.sendMessage(from, { audio: { url: data.HD }, mimetype: 'audio/mp4' }, { quoted: m })
			          })
	                  } catch (err) {
                      await Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m })
                      }
		              break   
/***************INFORMASI**********/
   case 'listblock':
              if (!isRegister) return m.reply(mess.regis)
              await Resta.fetchBlocklist().then(async data => {
		      let txt = `*「  Daftar Nomor Yang Diblokir  」*\n\n*Total:* ${data.length}\n\n┌─\n`
		      for (let i of data) {
			  txt += `├ @${i.split("@")[0]}\n`
		       }
		       txt += "└────"
		       return m.reply(txt)
	           }).catch(err => {
		       console.log(err);
		       m.reply('tidak ada yang diblokir!')
	           })
               break
     case 'listpc': {
     	        if (!isRegister) return m.reply(mess.regis)
                 let abu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${abu.length} Chat\n\n`
                 for (let i of abu) {
                 let nama = store.messages[i].array[0].pushName
                 teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 Resta.sendTextWithMentions(m.chat, teks, m)
                 }
                 break
      case 'listgc': {
      	       if (!isRegister) return m.reply(mess.regis)
                 let jadin = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${jadin.length} Group\n\n`
                 for (let i of jadin) {
                 let metadata = await Resta.groupMetadata(i)
                 teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 Resta.sendTextWithMentions(m.chat, teks, m)
                 }
                 break
      case 'listonline': case 'liston': {
      	       if (!isRegister) return m.reply(mess.regis)
                 let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                 let online = [...Object.keys(store.presences[id]), botNumber]
                 Resta.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
                  }
                  break
       case 'readme':
                  if (!isRegister) return m.reply(mess.regis)
                  Resta.sendText(m.chat, readme(prefix), m) 
                  break
       case 'snk':
                  if (!isRegister) return m.reply(mess.regis)
                  Resta.sendText(m.chat, snk(prefix), m) 
                  break
       case 'listchannel':
                  if (!isRegister) return m.reply(mess.regis)
                  Resta.sendText(m.chat, listChannel(prefix), m) 
                  break
       case 'owner': 
                   if (!isRegister) return m.reply(mess.regis)
                   Resta.sendContact(m.chat, global.owner, m)
                   break
        case 'sewabot':
        case 'sewa':
                   if (!isRegister) return m.reply(mess.regis)
                   Resta.sendText(m.chat, sewa(prefix), m) 
                   break
        case 'sc': case 'sourcecode': case 'script': 
                   if (!isRegister) return m.reply(mess.regis)
                   m.reply('*Script Berasal Dari :* https://github.com/Restaa/bot-md\n\nJangan Lupa Bintang nya!')
                   break
       
case 'ping': case 'botstatus': case 'statusbot': case 'speed': case 'tes': {
  const used = process.memoryUsage()
  const cpus = os.cpus().map(cpu => {
  cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
  return cpu
  })
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
  last.total += cpu.total
  last.speed += cpu.speed / length
  last.times.user += cpu.times.user
  last.times.nice += cpu.times.nice
  last.times.sys += cpu.times.sys
  last.times.idle += cpu.times.idle
  last.times.irq += cpu.times.irq
  return last
  }, {
  speed: 0,
  total: 0,
  times: {
  user: 0,
  nice: 0,
  sys: 0,
  idle: 0,
  irq: 0
  }
  })
  let timestamp = speed()
  let latensi = speed() - timestamp
  neww = performance.now()
  oldd = performance.now()
  respon = `
🏎️ Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
  `.trim()
  m.reply(respon)
  }
  break

               
/***************OTHER**************/
   case 'nowa':
               let regex = /x/g
	           if (!text) throw 'Input Number'
	           if (!text.match(regex)) throw m.reply( `Ex: ${prefix + command} ${m.sender.split('@')[0]}x`)
	           let random = text.match(regex).length, total = Math.pow(10, random), array = []
	           await m.reply(mess.wait)
	           for (let i = 0; i < total; i++) {
		       let list = [...i.toString().padStart(random, '0')]
		       let result = text.replace(regex, () => list.shift()) + '@s.whatsapp.net'
		       if (await Resta.onWhatsApp(result).then(v => (v[0] || {}).exists)) {
			   let info = await Resta.fetchStatus(result).catch(_ => {})
			   array.push({ exists: true, jid: result, ...info })
		       } else {
			   array.push({ exists: false, jid: result })
		       }
	           }
	           let txt = '• Registered\n\n' + array.filter(v => v.exists)
		      .map(v => `No: wa.me/${v.jid.split('@')[0]}\nBio: ${v.status || ''}\nDate: ${formatDate(v.setAt)}`).join('\n\n')
	           + '\n\n• Unregister\n\n' + array.filter(v => !v.exists).map(v => v.jid.split('@')[0]).join('\n')
	           m.reply(txt) 
	           break
    case 'jadwalbola':
               if (!isRegister) return m.reply(mess.regis)
               await m.reply(mess.wait)
               api2.jadwalbola(`${q}`) 
              .then(data => {
               let text =`*🔰 SEARCH JADWALBOLA🔰*\n`
               text +=`*Jadwal*: ${result.jadwal}\n`
               text +=`*Tanggal*: ${result.tanggal}\n`
               text +=`*Link*: ${result.url}\n`
               Resta.sendImage(m.chat, result.thumb, text, m)
               }).catch(() => Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m }))
               break
    case 'tts':
               if (!isRegister) return m.reply(mess.regis)
	           if (args.length < 1) return m.reply('Kirim perintah *#tts [ Bahasa ] [ Teks ]*, contoh *#tts id halo semua*')
	           try {
               const gtts = require('../lib/gtts')(args[0]) 
               if (args.length < 2) return m.reply('Textnya mana gan?') 
               var ngab = body.slice(8)
               ranm = getRandom('.mp3')
               rano = getRandom('.ogg')
               ngab.length > 600 ? reply('Textnya kebanyakan gan') : gtts.save(ranm, ngab, function() {
               exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
               fs.unlinkSync(ranm)
               buff = fs.readFileSync(rano) 
               if (err) return reply('Gagal gan:(')
               Resta.sendMessage(m.chat, {audio: buff, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
               fs.unlinkSync(rano)
               })
               }) 
               } catch (err) {
               console.log(err)
               Resta.sendText(m.chat, bahasalist(prefix), m) 
               }
               break
/*********PRIMBON************/
     case 'nomerhoki': case 'nomorhoki': {
     	       if (!isRegister) return m.reply(mess.regis)
                if (!Number(text)) throw m.reply(`Example : ${prefix + command} 6288292024190`)
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                Resta.sendText(m.chat, `⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
                }
                break
     case 'artimimpi': case 'tafsirmimpi': {
     	       if (!isRegister) return m.reply(mess.regis)
                if (!text) throw m.reply (`Example : ${prefix + command} belanja`)
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                Resta.sendText(m.chat, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
                }
                break
     case 'ramalanjodoh': case 'ramaljodoh': {
   	         if (!isRegister) return m.reply(mess.regis)
                if (!text) throw m.reply (`Example : ${prefix + command} Resta, 28, 8, 2003, Nama, 16, 11, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                Resta.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
                }
                break
     case 'ramalanjodohbali': case 'ramaljodohbali': {
     	       if (!isRegister) return m.reply(mess.regis)
                if (!text) throw m.reply (`Example : ${prefix + command} Resta, 28, 8, 2003, Nama, 16, 11, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                Resta.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
                }
                break
     case 'suamiistri': {
    	        if (!isRegister) return m.reply(mess.regis)
                if (!text) throw m.reply (`Example : ${prefix + command} Resta, 28, 8, 2003, Nama, 16, 11, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                Resta.sendText(m.chat, `⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
                }
                break
     case 'ramalancinta': case 'ramalcinta': {
     	       if (!isRegister) return m.reply(mess.regis)
                if (!text) throw m.reply (`Example : ${prefix + command} Resta, 28, 8, 2003, Nama, 16, 11, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                Resta.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
                }
                break
     case 'artinama': {
     	       if (!isRegister) return m.reply(mess.regis)
                if (!text) throw m.reply (`Example : ${prefix + command} Resta`)
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                Resta.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
                }
                break
     case 'kecocokannama': case 'cocoknama': {
     	       if (!isRegister) return m.reply(mess.regis)
                if (!text) throw m.reply (`Example : ${prefix + command} Resta, 28, 8, 2003`)
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Resta.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
                }
                break
     case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
     	       if (!isRegister) return m.reply(mess.regis)
                if (!text) throw m.reply (`Example : ${prefix + command} Resta | Nama`)
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                Resta.sendImage(m.chat,  anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
                }
                break
     case 'jadianpernikahan': case 'jadiannikah': {
     	       if (!isRegister) return m.reply(mess.regis)
                if (!text) throw m.reply (`Example : ${prefix + command} 16, 11, 2004`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Resta.sendText(m.chat, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
                }
                break
    case 'sifatusaha': {
    	        if (!isRegister) return m.reply(mess.regis)
                if (!text) throw m.reply (`Example : ${prefix + command} 16, 11, 2004`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Resta.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
                }
                break
     case 'rejeki': case 'rezeki': {
     	       if (!isRegister) return m.reply(mess.regis)
                if (!text) throw m.reply (`Example : ${prefix + command} 28, 8, 2003`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Resta.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
                }
                 break
     case 'pekerjaan': case 'kerja': {
     	       if (!isRegister) return m.reply(mess.regis)
                if (!text) throw m.reply (`Example : ${prefix + command} 16, 11, 2004`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Resta.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
                }
                break
     case 'ramalannasib': case 'ramalnasib': case 'nasib': {
     	       if (!isRegister) return m.reply(mess.regis)
                if (!text) throw m.reply (`Example : ${prefix + command} 16, 11, 2004`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Resta.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
                }
                break
     case 'potensipenyakit': case 'penyakit': {
   	         if (!isRegister) return m.reply(mess.regis)
                if (!text) throw m.reply (`Example : ${prefix + command} 28, 8, 2003`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Resta.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
                }
                break
     case 'artitarot': case 'tarot': {
    	        if (!isRegister) return m.reply(mess.regis)
                if (!text) throw m.reply (`Example : ${prefix + command} 28, 8, 2003`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Resta.sendImage(m.chat, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
                }
                break
     case 'fengshui': {
    	        if (!isRegister) return m.reply(mess.regis)
                if (!text) throw m.reply (`Example : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`)
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                Resta.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
                }
                break
     case 'haribaik': {
    	        if (!isRegister) return m.reply(mess.regis)
                if (!text) throw m.reply (`Example : ${prefix + command} 28, 8, 2003`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Resta.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
                }
                break
     case 'harisangar': case 'taliwangke': {
     	       if (!isRegister) return m.reply(mess.regis)
                if (!text) throw m.reply (`Example : ${prefix + command} 28, 8, 2003`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Resta.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
                }
                break
     case 'harinaas': case 'harisial': {
     	       if (!isRegister) return m.reply(mess.regis)
                if (!text) throw m.reply (`Example : ${prefix + command} 28, 8, 2003`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Resta.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
                }
                break
    case 'nagahari': case 'harinaga': {
    	        if (!isRegister) return m.reply(mess.regis)
                if (!text) throw m.reply (`Example : ${prefix + command} 28, 8, 2003`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Resta.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
                }
                break
     case 'arahrejeki': case 'arahrezeki': {
     	      if (!isRegister) return m.reply(mess.regis)
                if (!text) throw m.reply (`Example : ${prefix + command} 28, 8, 2003`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Resta.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
                }
                break
     case 'peruntungan': {
     	       if (!isRegister) return m.reply(mess.regis)
                if (!text) throw m.reply (`Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`)
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                Resta.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
                 }
                 break
     case 'weton': case 'wetonjawa': {
     	       if (!isRegister) return m.reply(mess.regis)
                if (!text) throw m.reply (`Example : ${prefix + command} 28, 8, 2003`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Resta.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
                }
                break
    case 'sifat': case 'karakter': {
    	        if (!isRegister) return m.reply(mess.regis)
                if (!text) throw m.reply (`Example : ${prefix + command} Nama, 28, 8, 2003`)
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Resta.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
                }
                break
    case 'keberuntungan': {
    	        if (!isRegister) return m.reply(mess.regis)
                if (!text) throw m.reply (`Example : ${prefix + command} Nama, 28, 8, 2003`)
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Resta.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
                }
                break
     case 'memancing': {
     	       if (!isRegister) return m.reply(mess.regis)
                if (!text) throw m.reply (`Example : ${prefix + command} 28, 8, 2003`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Resta.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
                }
                break
     case 'masasubur': {
     	       if (!isRegister) return m.reply(mess.regis)
                if (!text) throw m.reply ( `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`)
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                Resta.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
                }
                break
    case 'zodiak': case 'zodiac': {
    	        if (!isRegister) return m.reply(mess.regis)
                if (!text) throw m.reply (`Example : ${prefix + command} 28, 8, 2003`)
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                    ].reverse()
                function getZodiac(month, day) {
                let d = new Date(1970, month - 1, day)
                return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
                let zodiac = await getZodiac(birth[1], birth[2])
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
                Resta.sendText(m.chat, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
                }
                break
     case 'shio': {
     	       if (!isRegister) return m.reply(mess.regis)
                if (!text) throw m.reply (`Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`)
                let anu = await primbon.shio(text)
                if (anu.status == false) return m.reply(anu.message)
                Resta.sendText(m.chat, `⭔ *Hasil :* ${anu.message}`, m)
                }
                break 
               
/**********RANDOM MENU**********/
         case 'asupan':
                   if (!isRegister) return m.reply(mess.regis)
		           if (!q) return m.reply (`Example : ${prefix + command} ukhty\n\nList Asupan Yang Tersedia\n• ukhty\n• santuy\n• random\n\nContoh : ${prefix + command} random` ) 
		           if (!q.includes('random','ukhty','santuy')) throw m.reply(`Maaf ${command} ${q} Tidak Tersedia`)
                   m.reply(mess.wait)
                   buffer = `https://api.zacros.my.id/asupan/${q}`
                   try {
                   Resta.sendMessage(from, {video:{url:buffer}, mimetype:"video/mp4", caption:"Ini Kak Jangan Lupa Donasi Ya:)"}, {quoted:m})
                   } catch (err) {
                   m.reply(`List Asupan Yang Tersedia\n• ukhty\n• santuy\n• random\n\nContoh : ${prefix + command} random` ) 
                   }
                   break
         case 'jodohku': {
         	       if (!isRegister) return m.reply(mess.regis)
                    if (!m.isGroup) throw m.reply(mess.group)
                    let member = participants.map(u => u.id)
                    let me = m.sender
                    let jodoh = member[Math.floor(Math.random() * member.length)]
                    let jawab = `👫Jodoh mu adalah\n\n@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
                    let ments = [me, jodoh]
                    let buttons = [
                    { buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await Resta.sendButtonText(m.chat, buttons, jawab, Resta.user.name, m, {mentions: ments})
                     }
                     break
          case 'jadian': {
          	       if (!isRegister) return m.reply(mess.regis)
                     if (!m.isGroup) throw m.reply(mess.group)
                     let member = participants.map(u => u.id)
                     let orang = member[Math.floor(Math.random() * member.length)]
                     let jodoh = member[Math.floor(Math.random() * member.length)]
                     let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤\n\n@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
                     let menst = [orang, jodoh]
                     let buttons = [
                     { buttonId: 'jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
                     ]
                    await Resta.sendButtonText(m.chat, buttons, jawab, Resta.user.name, m, {mentions: menst})
                     }
                     break
          case 'cekme':
                     if (!isRegister) return m.reply(mess.regis)
                     const ganteng = ['Cakep ✔️','Jelek Anjrit ❌','Lumayan jelek','Lumayan Cakep','Bencong','Sorry gk kenal','Siapa Lu']
                     const sifat = ['Pembohong','Galak','Suka Bantu Orang','Baik','Jahat:(','Bobrok','Suka BadMood','Setia','Tulus','Beriman','Penyayang Binatang','Baperan','Nangisan','Bocil']
                     const suka = ['Makan','Tidur','Main Game','Sesama Jenis','Binatang',`Seseorang Yang ${pushname} Sukai`,'Belajar','Ibadah','Diri Sendiri']
                     const nomernyah = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','31','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','82','84','84','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
                     const keberanian = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','31','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','82','84','84','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
                     const kepinteran = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','31','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','82','84','84','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					 const ganz = ganteng[Math.floor(Math.random() * ganteng.length)]
					 const sipat = sifat[Math.floor(Math.random() * sifat.length)]
					 const numb = nomernyah[Math.floor(Math.random() * nomernyah.length)]
					 const gai = suka[Math.floor(Math.random() * suka.length)]
					 const berani = keberanian[Math.floor(Math.random() * keberanian.length)]
					 const pinter = kepinteran[Math.floor(Math.random() * kepinteran.length)]
                     var cek = `*[ CEK PRIBADI KAMU ]*\n\nNama : ${pushname}\nSifat : ${sipat}\nKeberanian : ${berani}%\nKetakutan : ${numb}%\nCakep : ${ganz}\nCek Pintar : ${pinter}%\nMenyukai : ${gai}`
					 Resta.profilePictureUrl(m.chat, 'image').then( res => Resta.sendMessage(m.chat, {caption: cek, image: { url: res }}, {quoted: m})).catch(() => Resta.sendMessage(m.chat, {caption: cek, image: {url: `https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg`}}, {quoted: m}))
					 break
	       case 'apakah':
	                 if (!isRegister) return m.reply(mess.regis)
				     if (!q) throw m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Saya Meninggal `)
					 const apa = ['Benar Sekali', 'Iya', 'Tidak', 'Bisa Jadi', 'Betul']
					 const kah = apa[Math.floor(Math.random() * apa.length)]
                     Resta.sendMessage(m.chat, { text: `Pertanyaan : Apakah ${q}\nJawaban : ${kah}` }, { quoted: m })
					 break
         case 'bisakah': 
                     if (!isRegister) return m.reply(mess.regis)
				     if (!q) throw m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Saya Meninggal `)
					 const bisa = ['Jangan Halu', 'Bisa','Gak Bisa','Gak Bisa Ajg Aaokawpk','TENTU PASTI KAMU BISA!!!!']
					 const ga = bisa[Math.floor(Math.random() * bisa.length)]
                     Resta.sendMessage(m.chat, { text: `Pertanyaan : ${q}\nJawaban : ${ga}` }, { quoted: m })
					 break
          case 'bagaimanakah':
                     if (!isRegister) return m.reply(mess.regis)
                     if (!q) throw m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Saya Meninggal `)
					 const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel','astaghfirallah Beneran???','Pusing ah','Owhh Begitu:(','Yang Sabar Ya Bos:(','Gimana yeee']
					 const ya = gimana[Math.floor(Math.random() * gimana.length)]
                     Resta.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ya}` }, { quoted: m })
					 break
           case 'rate':
                     if (!isRegister) return m.reply(mess.regis)
                     if (!q) throw m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ${pushname}`)
				     const ra = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
				     const te = ra[Math.floor(Math.random() * ra.length)]
                     Resta.sendMessage(m.chat, { text: `Rate : ${q}\nJawaban : *${te}%*` }, { quoted: m })
					 break
          case 'gantengcek':
                     if (!isRegister) return m.reply(mess.regis)
				     if (!q) throw m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ${pushname}`)
					 const gan = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					 const teng = gan[Math.floor(Math.random() * gan.length)]
                     Resta.sendMessage(m.chat, { text: `Nama : ${q}\nJawaban : *${teng}%*` }, { quoted: m })
					 break
         case 'cantikcek':
                    if (!isRegister) return m.reply(mess.regis)
                    if (!q) throw m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ${pushname}`)
					const can = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const tik = can[Math.floor(Math.random() * can.length)]
                    Resta.sendMessage(m.chat, { text: `Nama : ${q}\nJawaban : *${tik}%*` }, { quoted: m })
					break
          case 'sangecek':
                    if (!isRegister) return m.reply(mess.regis)
				    if (!q) throw m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ${pushname}`)
					const sangeh = ['5', '10', '15','20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
                    Resta.sendMessage(m.chat, { text: `Nama : ${q}\nJawaban : *${sange}%*` }, { quoted: m })
					break
         case 'kapankah':
                    if (!isRegister) return m.reply(mess.regis)
				    if (!q) throw m.reply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
					const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi','20 Hari Lagi', '25 Hari Lagi','30 Hari Lagi','35 Hari Lagi','40 Hari Lagi','45 Hari Lagi','50 Hari Lagi','55 Hari Lagi','60 Hari Lagi','65 Hari Lagi','70 Hari Lagi','75 Hari Lagi','80 Hari Lagi','85 Hari Lagi','90 Hari Lagi','100 Hari Lagi','5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi','20 Bulan Lagi', '25 Bulan Lagi','30 Bulan Lagi','35 Bulan Lagi','40 Bulan Lagi','45 Bulan Lagi','50 Bulan Lagi','55 Bulan Lagi','60 Bulan Lagi','65 Bulan Lagi','70 Bulan Lagi','75 Bulan Lagi','80 Bulan Lagi','85 Bulan Lagi','90 Bulan Lagi','100 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','Besok','Lusa',`Abis Command Ini Juga Lu ${q}`]
					const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
                    Resta.sendMessage(m.chat, { text: `Pertanyaan : ${q}\nJawaban : *${kapankah}*` }, { quoted: m })
					break
		  case 'simi':
					if (!isRegister) return m.reply(mess.regis)
					if (!text) throw m.reply(`Penggunaan ${command} text`)
					var cimcimi = await fetchJson(`https://api.simsimi.net/v2/?text=${text}&lc=id`)
                    Resta.sendMessage(m.chat, { text: cimcimi.success}, {quoted: m})
                    break
          case 'quotesanime': {
          	      if (!isRegister) return m.reply(mess.regis)
                    m.reply(mess.wait)
                    let anu = await quotesAnime()
                    result = anu[Math.floor(Math.random() * anu.length)]
                    tekss = `*Karakter* : ${result.karakter}\n
*Anime* : ${result.anime}\n
*Episode* : ${result.episode}\n
*Quotes* : ${result.quotes}\n`;
                    await Resta.sendMessage(m.chat, { image : { url: result.gambar}, caption: `${tekss}`}, { quoted: m })
                     }
                   break
         case 'couple': {
         	      if (!isRegister) return m.reply(mess.regis)
                   m.reply(mess.wait)
                   let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                   let random = anu[Math.floor(Math.random() * anu.length)]
                   Resta.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                   Resta.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
                   }
	               break
	    case 'cogan': case 'cowok':
	               if (!isRegister) return m.reply(mess.regis)
			       m.reply(mess.wait)
				   var query = ["cogan hd","cogan indo","cowo ganteng","handsome boy","hot boy","oppa","cowo aesthetic","cogan aesthetic"]
				   var data = await print(pickRandom(query))
				   var but = [{buttonId: `${command}`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				   Resta.sendMessage(m.chat, { caption: "Random Cowo Ganteng", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
				   break
      case 'cecan': case 'cewek':
                   if (!isRegister) return m.reply(mess.regis)
				   m.reply(mess.wait)
			       var query = ["cecan hd","cecan indo","cewe cantik", "cewe aesthetic", "cecan aesthetic"]
                   var data = await print(pickRandom(query))
				   var but = [{buttonId: `${command}`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				   Resta.sendMessage(m.chat, { caption: "Random Cewe Cantik", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
			       break
        case 'pantun':
                   if (!isRegister) return m.reply(mess.regis)
                   var gombal = JSON.parse(fs.readFileSync('./lib/pantun.json'))
                   var hasil = pickRandom(gombal)
                   var gom = [{ quickReplyButton: { displayText: `Next Gombalan ➡️`, id: `${command}` } },]
		           Resta.sendMessage(m.chat, {text: hasil, templateButtons: gom, footer: `Cie Di Pantunin Bot`, quoted: m})
		           break
/**********RANDOM ANIME**********/
                  case 'akira': case 'boruto': case 'akira':
                  case 'chitoge': case 'deidara': case 'doraemon': case 'elaina':
                  case 'emilia': case 'erza': case 'gremory': case 'hestia':
                  case 'hinata': case 'inori': case 'isuzu': case 'itachi':
                  case 'itori': case 'kaga': case 'doraemon': case 'kagura':
                  case 'kakasih': case 'kaori': case 'kotori': case 'keneki':
                  case 'madara': case 'megumin': case 'nekonime': case 'sagiri':
                  case 'ana': case 'asuna': case 'ayuzawa':
                  case 'akiyama': case 'toukachan': case 'loli': {
                  if (!isRegister) return m.reply(mess.regis)
                  m.reply(mess.wait)
                  let anu = await fetchJson(`https://raw.githubusercontent.com/Restaa/databasegames/master/anime/${command}.json`)
                  let result = pickRandom(anu)
                  Resta.sendMessage(m.chat, { image: { url: result }, caption: `Random Anime ${command}` }, { quoted: m })
                  }
	              break
        case 'wallanime': case 'neko': case 'waifu': case 'avatar': case 'woof':
        case 'lizard':
                  if (!isRegister) return m.reply(mess.regis)
                  m.reply(mess.wait)
			      axios.get(`https://nekos.life/api/v2/img/${command}`)
			     .then(({data}) => {       
			      Resta.sendMessage(m.chat, { caption: "Random Foto Anime", image: { url: data.url }}, { quoted: m })
		          }) 
                  break
        case 'animehd':
                   if (!isRegister) return m.reply(mess.regis)
                   m.reply(mess.wait)
                   let abu = JSON.parse(fs.readFileSync('./lib/animehd.json'))
                   result = abu[Math.floor(Math.random() * abu.length)]
                   let buttonspinterest = [{buttonId: `animehd ${text}`, buttonText: {displayText: 'Next Result'}, type: 1}]
                   Resta.sendMessage(m.chat, { image: { url: result }, caption: 'animehd', buttons: buttonspinterest }, { quoted: m })
                   break
        case 'komiku':
                   if (!isRegister) return m.reply(mess.regis)
                   if (!q) return m.reply(`judulnya?\n${prefix}komiku mao gakuin`);
                   m.reply(mess.wait)
                   try {
                   let komik = await noapi.komiku(q);
                   result = `*Title* : ${komik.title}\n*Title Indo* : ${komik.indo}\n*Update* : ${komik.update}\n*Desc* : ${komik.desc}\n*Chapter Awal* : ${komik.chapter_awal}*Chapter Akhir* : ${komik.chapter_akhir}`;
                   await Resta.sendMessage(m.chat, { image : { url: komik.image}, caption: `${result}`}, { quoted: m })
                   } catch (err) {
                   await Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m })
                   }         
                   break
         case 'cry':case 'kill':case 'hug':case 'pat':case 'lick':case 'kiss':case 'bite':case 'yeet': case 'bully':case 'bonk':case 'wink':case 'poke':case 'nom': case 'slap':case 'smile':case 'wave':case 'awoo':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'highfive':case 'shinobu':case 'megumin':case 'handhold':
                    if (!isRegister) return m.reply(mess.regis)
				    m.reply(mess.wait)
					axios.get(`https://api.waifu.pics/sfw/${command}`)
				   .then(({data}) => {
			        Resta.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
				    })
					break
         case 'kiryu':
                    if (!isRegister) return m.reply(mess.regis)
                    if (!q) return m.reply(`Gunakan Format : ${command} Nama Animenya`)
                    await m.reply(mess.wait)
                    api2.kiryu(`${q}`) 
                   .then(data => {
                    let text =`*🔰 SEARCH KIRYU🔰*\n`
                    text +=`*Judul*: ${result.judul}\n`
                    text +=`*Status*: ${result.manga_status}\n`
                    text +=`*Chapter*: ${result.last_chapter}\n`
                    text +=`*Rating*: ${result.ranting}\n`
                    text +=`*Link*: ${result.link}\n`
                    Resta.sendImage(m.chat, result.thumbnail, text, m)
                    }).catch(() => Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m }))
                    break
          case 'character':
                    if (!isRegister) return m.reply(mess.regis)
                    if (!q) return m.reply(`Gunakan Format : ${command} Nama Animenya`)
                    await m.reply(mess.wait)
                    api2.character(`${q}`) 
                   .then(data => {
                    let text =`*🔰 CHARACTER🔰*\n`
                    text +=`*Character*: ${result.character}\n`
                    text +=`*Link*: ${result.link}\n`
                    Resta.sendImage(m.chat, result.thumbnail, text, m)
                    }).catch(() => Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m }))
                    break
         case 'otakudesuongoing':
                    if (!isRegister) return m.reply(mess.regis)
                    await m.reply(mess.wait)
                    api2.otakudesuongoing()
                   .then(data => {
                    let text =`*🔰 Otakudesuongoing 🔰*\n`
                    text +=`*Judul*: ${result.judul}\n`
                    text +=`*Episode*: ${result.episode}\n`
                    text +=`*Tanggal*: ${result.tanggal}\n`
                    text +=`*Hari*: ${result.hari}\n`
                    text +=`*Link*: ${result.link}\n`
                    Resta.sendImage(m.chat, result.thumbnail, text, m)
                    }).catch(() => Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m }))
                    break
          case 'otakudesu':
                    if (!isRegister) return m.reply(mess.regis)
                    if (!q) return m.reply(`Gunakan Format : ${command} Nama Animenya`)
                    await m.reply(mess.wait)
                    api2.otakudesu(`${q}`) 
                   .then(data => {
                    let text =`*🔰 Otakudesu🔰*\n`
                    text +=`*Judul*: ${result.judul}\n`
                    text +=`*Link*: ${result.link}\n`
                    Resta.sendImage(m.chat, result.thumbnail, text, m)
                    }).catch(() => Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m }))
                    break 
          case 'wattpad':
                    if (!isRegister) return m.reply(mess.regis)
                    if (!q) return m.reply(`Gunakan Format : ${command} Nama Animenya`)
                    await m.reply(mess.wait)
                    api2.wattpad(`${q}`) 
                   .then(data => {
                    let text =`*🔰 Wattpad🔰*\n`
                    text +=`*Judul*: ${result.judul}\n`
                    text +=`*Dibaca*: ${result.dibaca}\n` 
                    text +=`*Divote*: ${result.divote}\n` 
                    text +=`*Bab*: ${result.bab}\n` 
                    text +=`*Waktu*: ${result.waktu}\n` 
                    text +=`*Link*: ${result.url}\n`
                    text +=`*Description*: ${result.description}\n`
                    Resta.sendImage(m.chat, result.thumb, text, m)
                    }).catch(() => Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m }))
                    break         
          case 'otakudesuinfo':
                    if (!isRegister) return m.reply(mess.regis)
                    if (!q) throw m.reply(`Example : ${prefix + command} https://otakudesu.watch/anime/borto-sub-indo/`)
                    if (!isUrl(q)) throw m.reply(mess.erro)  
                    if (!q.includes('otakudesu.watch')) throw m.reply(mess.link) 
                    await m.reply(mess.wait)
                    api2.otakudesuinfo(`${q}`) 
                   .then(data => {
                    let text =`*🔰 OTAKUDESU INFO🔰*\n`
                    text +=`*Judul*: ${result.judul}\n`
                    text +=`*Japanese*: ${result.japanese}\n`
                    text +=`*Rating*: ${result.rating}\n`
                    text +=`*Produser*: ${result.produser}\n`
                    text +=`*Tipe*: ${result.tipe}\n`
                    text +=`*Anime_status*: ${result.anime_status}\n`
                    text +=`*Total_episode*: ${result.total_episode}\n`
                    text +=`*Durasi*: ${result.durasi}\n`
                    text +=`*Rilis*: ${result.rilis}\n`
                    text +=`*Studio*: ${result.studio}\n`
                    text +=`*Genre*: ${result.genre}\n`
                    text +=`*Download*: ${result.download_lengkap}\n`
                    text +=`*Sinopsis*: ${result.sinopsis}\n`
                    Resta.sendImage(m.chat, result.thumbnail, text, m)
                    }).catch(() => Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m }))
                    break
          case 'manga':
                    if (!isRegister) return m.reply(mess.regis)
                    if (!q) return m.reply(`Gunakan Format : ${command} Nama Animenya`)
                    await m.reply(mess.wait)
                    api2.manga(`${q}`) 
                   .then(data => {
                    let text =`*🔰 Manga🔰*\n`
                    text +=`*Judul*: ${result.judul}\n`
                    text +=`*Link*: ${result.link}\n`
                    Resta.sendImage(m.chat, result.thumbnail, text, m)
                    }).catch(() => Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m }))
                    break
          case 'chara':
                    if (!isRegister) return m.reply(mess.regis)
                    if (!text) throw m.reply(`Example : ${prefix + command} Nama Animenya`) 
                    m.reply(mess.wait)
                    let im = await noapi.chara(text);
                    let oyoi = im[Math.floor(Math.random() * im.length)];
                    anu = oyoi
                    await Resta.sendMessage(m.chat, { image : { url: anu}, caption: `${command} ${text}`}, { quoted: m })
                   .catch(() => Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m })) 
                    break;
          case 'konachan':
                     if (!isRegister) return m.reply(mess.regis)
                     if (!text) throw m.reply(`Example : ${prefix + command} loli`) 
                     m.reply(mess.wait)
                     let onnhg = await api2.konachan(text);
                     let acak = onnhg[Math.floor(Math.random() * onnhg.length)];
                     anu = acak
                     await Resta.sendMessage(m.chat, { image : { url: anu}, caption: `${command} ${text}`}, { quoted: m })
                    .catch(() => Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '??️ Maaf, Data tidak ditemukan'}, { quoted: m }))
                     break;
/*************BATAS MENU ISLAM***********/ l
         case 'jadwalsholat':
                    if (!isRegister) return m.reply(mess.regis)
                    if (!q) return m.reply(`Gunakan Format : ${command} Nama Kota`)
                    await m.reply(mess.wait)
                    api2.jadwalsholat(`${q}`) 
                   .then(data => {
                    let text =`*🔰 JADWALSHOLAT🔰*\n`
                    text +=`*Tanggal*: ${result.tanggal}\n`
                    text +=`*Imsyak*: ${result.imsyak}\n`
                    text +=`*Subuh*: ${result.subuh}\n`
                    text +=`*Dzuhur*: ${result.dzuhur}\n`
                    text +=`*Ashar*: ${result.ashar}\n`
                    text +=`*Maghrib*: ${result.maghrib}\n` 
                    text +=`*Isya*: ${result.isya}\n`
                    m.reply(text)
                    }).catch(() => Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m }))
                    break
         case 'iqra': {
         	       if (!isRegister) return m.reply(mess.regis)
		            oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		            if (!text) throw m.reply(oh) 
		            yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		            m.reply(mess.wait)
		            Resta.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))
		            }
		            break
     case 'juzamma': {
     	         if (!isRegister) return m.reply(mess.regis)
		          if (args[0] === 'pdf') {
		          m.reply(mess.wait)
		         Resta.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		         } else if (args[0] === 'docx') {
		         m.reply(mess.wait)
		         Resta.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		         } else if (args[0] === 'pptx') {
		         m.reply(mess.wait)
		         Resta.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		         } else if (args[0] === 'xlsx') {
		         m.reply(mess.wait)
		         Resta.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		         } else {
		         m.reply(`Mau format apa ? Example : ${prefix + command} pdf
                 Format yang tersedia : pdf, docx, pptx, xlsx`)
		          }
		          }
		         break
	case 'hadis': case 'hadist': {
		       if (!isRegister) return m.reply(mess.regis)
		       if (!args[0]) throw m.reply(`Contoh:  ${prefix + command} bukhari 1\n${prefix + command} abu-daud 1
Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibnu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`) 
		      if (!args[1]) throw m.reply(`Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`) 
		      try {
		      let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		      m.reply(mess.wait)
		      let { number, arab, id } = res.find(v => v.number == args[1])
		      m.reply(`No. ${number}
              ${arab}
              ${id}`)
		       } catch (e) {
		       await Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m })
               }
		       }
		       break
    case 'alquran': {
    	       if (!isRegister) return m.reply(mess.regis)
		       if (!args[0]) throw m.reply(`Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`) 
		       if (!args[1]) throw m.reply(`Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`) 
		       let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		       m.reply(mess.wait)
		       let txt = `*Arab* : ${res.result.data.text.arab}\n*English* : ${res.result.data.translation.en}\n*Indonesia* : ${res.result.data.translation.id}\n\n( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		       m.reply(txt)
		       Resta.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		        }
		        break
   case 'tafsirsurah': {
   	       if (!isRegister) return m.reply(mess.regis)
		      if (!args[0]) throw m.reply (`Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`) 
		      if (!args[1]) throw m.reply (`Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`) 
		      let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		      m.reply(mess.wait)
		      let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		      m.reply(txt)
		       }
		      break
/**********TEXT MAKER PRO********/
case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas':
case 'deepsea': case 'scifi': case 'rainbow2': case 'waterpipe': case 'spooky': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': 
case 'transformer': case 'berry': case 'thunder': case '.': case '3dstone2': 
case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rock': case 'bloodglas': case 'halloween': case 'darkgold': case 'joker': case 'wicker':
case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves': case 'demon': {
	         if (!isRegister) return m.reply(mess.regis)
             if (!q) return m.reply(`Example : ${prefix + command} ${global.ownerName}`)                 
             m.reply(mess.wait)
             let link
             if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             if (/3dstone2/.test(command)) link = 'https://textpro.me/create-a-3d-stone-text-effect-online-for-free-1073.html'
             if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             if (/halloween/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
             if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'           
             let anu = await textpro(link, q)
             Resta.sendMessage(m.chat, { image: { url: anu }, caption: `Made by ${global.namaBot}` }, { quoted: m })
             }
             break
/*******Nsfw********/
      case 'blowjob':{
      	       if (!isRegister) return m.reply(mess.regis)
      	       if (!isGroup) return m.reply(mess.group)
      	       if (!db.data.chats[m.chat].nsfw) return m.reply(mess.nsfw)
                 m.reply(mess.wait)
                 var blowjob = JSON.parse(fs.readFileSync('./lib/blowjob.json'))
                 var hasil = pickRandom(blowjob)
                  await Resta.sendVideoAsSticker(m.chat, hasil, m, { packname: global.packname, author: global.packname2 })
                 }
                 break
       case 'nsfwass':{
      	       if (!isRegister) return m.reply(mess.regis)
      	       if (!isGroup) return m.reply(mess.group)
      	       if (!db.data.chats[m.chat].nsfw) return m.reply(mess.nsfw)
                 m.reply(mess.wait)
                 var blowjob = JSON.parse(fs.readFileSync('./lib/ass.json'))
                 var hasil = pickRandom(blowjob)
                 await Resta.sendMessage(m.chat, { image: { url: hasil }, caption: `Made by ${global.namaBot}` }, { quoted: m })
                 }
                 break
      case 'hentai':{
      	       if (!isRegister) return m.reply(mess.regis)
      	       if (!isGroup) return m.reply(mess.group)
      	       if (!db.data.chats[m.chat].nsfw) return m.reply(mess.nsfw)
                 m.reply(mess.wait)
                 var blowjob = JSON.parse(fs.readFileSync('./lib/hentai.json'))
                 var hasil = pickRandom(blowjob)
                 await Resta.sendMessage(m.chat, { image: { url: hasil }, caption: `Made by ${global.namaBot}` }, { quoted: m })
                 }
                 break
      case 'nsfwbdsm':{
      	       if (!isRegister) return m.reply(mess.regis)
      	       if (!isGroup) return m.reply(mess.group)
      	       if (!db.data.chats[m.chat].nsfw) return m.reply(mess.nsfw)
                 m.reply(mess.wait)
                 var blowjob = JSON.parse(fs.readFileSync('./lib/bdsm.json'))
                 var hasil = pickRandom(blowjob)
                 await Resta.sendMessage(m.chat, { image: { url: hasil }, caption: `Made by ${global.namaBot}` }, { quoted: m })
                 }
                 break
        case 'ahegao':{
      	       if (!isRegister) return m.reply(mess.regis)
      	       if (!isGroup) return m.reply(mess.group)
      	       if (!db.data.chats[m.chat].nsfw) return m.reply(mess.nsfw)
                 m.reply(mess.wait)
                 var blowjob = JSON.parse(fs.readFileSync('./lib/ahegao.json'))
                 var hasil = pickRandom(blowjob)
                 await Resta.sendMessage(m.chat, { image: { url: hasil }, caption: `Made by ${global.namaBot}` }, { quoted: m })
                 }
                 break
       case 'masturbation':{
       	      if (!isRegister) return m.reply(mess.regis)
      	       if (!isGroup) return m.reply(mess.group)
      	       if (!db.data.chats[m.chat].nsfw) return m.reply(mess.nsfw)
                 m.reply(mess.wait)
                 var blowjob = JSON.parse(fs.readFileSync('./lib/masturbation.json'))
                 var hasil = pickRandom(blowjob)
                 await Resta.sendMessage(m.chat, { image: { url: hasil }, caption: `Made by ${global.namaBot}` }, { quoted: m })
                 }
                 break
      case 'hentai_neko':
                 if (!isRegister) return m.reply(mess.regis)
                 if (!isGroup) return m.reply(mess.group)
       	      if (!db.data.chats[m.chat].nsfw) return m.reply(mess.nsfw)
                 m.reply(mess.wait)
			     axios.get(`https://waifu.pics/api/nsfw/neko`)
			    .then(({data}) => {       
			     Resta.sendMessage(m.chat, { caption: "Random Foto Anime", image: { url: data.url }}, { quoted: m })
		         }) 
                 break
      case 'hentai_waifu':
                 if (!isRegister) return m.reply(mess.regis)
                 if (!isGroup) return m.reply(mess.group)
       	      if (!db.data.chats[m.chat].nsfw) return m.reply(mess.nsfw)
                 m.reply(mess.wait)
			     axios.get(`https://waifu.pics/api/nsfw/waifu`)
			    .then(({data}) => {       
			     Resta.sendMessage(m.chat, { caption: "Random Foto Anime", image: { url: data.url }}, { quoted: m })
		         }) 
                 break
        case 'hentai_trap':
                 if (!isRegister) return m.reply(mess.regis)
                 if (!isGroup) return m.reply(mess.group)
       	      if (!db.data.chats[m.chat].nsfw) return m.reply(mess.nsfw)
                 m.reply(mess.wait)
			     axios.get(`https://waifu.pics/api/nsfw/trap`)
			    .then(({data}) => {       
			     Resta.sendMessage(m.chat, { caption: "Random Foto Anime", image: { url: data.url }}, { quoted: m })
		         }) 
                 break
         
//Eval
default:
if (budy.startsWith('=>')) {
  if (!isOwner) return m.reply(mess.botOwner)
  function Return(sul) {
  sat = JSON.stringify(sul, null, 2)
  bang = util.format(sat)
  if (sat == undefined) {
  bang = util.format(sul)
  }
  return m.reply(bang)
  }
  try {
  m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
  } catch (e) {
  m.reply(String(e))
  }
  }  

if (budy.startsWith('$')) {
  if (!isOwner) return m.reply(mess.botOwner)
  exec(budy.slice(2), (err, stdout) => {
  if(err) return m.reply(err)
  if (stdout) return m.reply(stdout)
  })
  }
  }
 if (isCmd && budy.toLowerCase() != undefined) {
 if (m.chat.endsWith('broadcast')) return
 if (m.isBaileys) return
 let msgs = global.db.data.chats
 if (!(budy.toLowerCase() in msgs)) return
Resta.opyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
  } catch (err) { 
    console.log("error di bagian ichi.js "+util.format(err))
  }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.cyanBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
