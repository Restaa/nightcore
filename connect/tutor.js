const fs = require("fs")
const chalk = require('chalk')
require('./settings')

const snk = (namaBot) => {
    return ` ➠ Batas usia pengguna (user) minimal 15 - 35 tahun, lebih atau kurang dari itu akan langsung ter-banned saat melakukan verifikasi.

➠ Data pengguna (user), grup, dan chat akan terhapus otomatis apabila tidak terdeteksi aktifitas selama 7 hari (alasan: pembersihan database).

➠ Dilarang melakukan spam, beri jeda untuk setiap penggunaan command selama 3 detik.

➠ Dilarang melakukan panggilan suara maupun video (Telepon & Video Call), jika itu dilakukan maka akan ter-blokir.

➠ Dilarang toxic terhadap bot karena akan medapatkan sanksi berupa banned dan blokir.

➠ Dilarang mencari & membuat konten dewasa (+18), misalnya membuat stiker dari foto telanjang atau mencari ASMR desah.

➠ Jika ingin membuka blokir dan banned masing² dikenai biaya sebesar 5K.

➠ Pelaku spam akan di banned permanen berlaku untuk user gratis dan premium (+ no refund).

➠ Semua Syarat & Ketentuan dapat berubah sewaktu waktu tanpa pemberitahuan terlebih dahulu.`
}
exports.snk = snk
const readme = (prefix, namaBot) => {
	return `
  *「 STALK 」*

*[@username]* Diisi dengan Username yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}tiktokstalk @tobz2k19*

*[@username]* Diisi dengan Username yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}igstalk @tobz2k19*

*[@username]* Diisi dengan Username yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}smulestalk @tobz2k19*

            *「 YT SEARCH 」*

*[video]* Diisi dengan Judul Video yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}video Erpan1140*
Jika ingin mendownload video harap ketik #getvideo [IdDownload] atau #getvideo [urutan]

*[lagu]* Diisi dengan Judul Lagu yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}music Alan Walker Alone*
Jika ingin mendownload lagu harap ketik #getmusic [IdDownload] atau #getmusic [urutan]

*[IdDownload] atau [urutan]* Diisi dengan IdDownload yang valid tanpa tanda “[” dan “]”
Contoh : *Jika tidak reply pesan : ${prefix}getmusic Iv32bS1*
Contoh : *Jika reply pesan : ${prefix}getmusic 1*
Contoh : *Jika tidak reply pesan : ${prefix}getvideo Iv32bS1*
Contoh : *Jika reply pesan : ${prefix}getvideo 1*

            *「 DOWNLOADER 」*

*[linkStarmaker]* Diisi dengan link Starmaker yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}starmaker https://m.starmakerstudios.com/d/playrecording?app=sm&from_user_id=3096224747920316&is_convert=true&recordingId=10696049124506354&share_type=copyLink*

*[linkTwitter]* Diisi dengan link YouTube yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}twitter https://twitter.com/PassengersMovie/status/821025484150423557*

*[linkYt]* Diisi dengan link YouTube yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}ytmp3 https://youtu.be/Bskehapzke8*

*[linkYt]* Diisi dengan link YouTube yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}ytmp4 https://youtu.be/Bskehapzke8*

*[linkTiktok]* Diisi dengan link Tiktok yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}tiktok https://vt.tiktok.com/yqyjPX/*

*[linkSmule]* Diisi dengan link Smule yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}smule https://www.smule.com/p/767512225_3062360163*

*[linkIg]* Diisi dengan link Instagram yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}ig https://www.instagram.com/p/CFqRZTlluAi/?igshid=1gtxkbdqhnbbe*

*[linkFb]* Diisi dengan link Facebook yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}fb https://www.facebook.com/EpochTimesTrending/videos/310155606660409*

*[linkTiktok]* Diisi dengan link facebookt Tiktok yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}tiktok https://vt.tiktok.com/yqyjPX/*

            *「 OTHER 」*

*[daerah]* Diisi dengan daerah yang valid, tanpa tanda “[” dan “]”
Contoh : *${prefix}jadwalShalat Tangerang*

*[channel]* Diisi dengan channel televisi yang valid, tanpa tanda “[” dan “]”
Contoh : *${prefix}jadwalTv Indosiar*

*[query]* Diisi dengan query/pencarian yang valid, tanpa tanda “[” dan “]“
Contoh : *${prefix}googlesearch siapa itu elaina*

*[tempat]* Diisi dengan tempat/lokasi yang valid, tanpa tanda “[” dan “]“
Contoh : *${prefix}cuaca tangerang*

*[|teks|author|theme]* Diisi dengan teks, author, dan theme, tanpa tanda “[” dan “]”
Contoh : *${prefix}quotemaker |Odading|Mang Oleh|Shark*

*[optional]* Diisi dengan teks|title lirik lagu, tanpa tanda “[” dan “]”.
Contoh : *${prefix}lirik aku bukan boneka*`
}
exports.readme = readme
const sewa = () => {
return `
*Berikut List Harga Sewa Bot*

_Sewa Bot Untuk dimasukin kedalam group dan digunakan di dalam group_

• *Paket 1 : Rp. 15.000*
   • Bot Join 1 Group ✅
   • Durasi 1 Bulan ✅
   • Bisa Set Text Welcome/Left ✅
   • Fast Response  & 24 Jam Online✅

• *Paket 2 : Rp. 30.000*
    • Bot Join 1 Group ✅
    • Durasi 2 Bulan + 15 Hari ✅
    • Bisa Set Text Welcome/Left ✅
    • Fast Response  & 24 Jam Online✅


• *Paket 3 : Rp. 65.000*
    • Bot Join 2 Group ✅
    • Durasi 2 Bulan + 15 Hari ✅
    • Bisa Set Text Welcome/Left ✅
    • Fast Response  & 24 Jam Online✅


- *Jika Ingin Menambah Sewa Group Hanya : Rp. 10.000*
- *Jika Ingin Menambah Durasi Hanya : Rp. 10.000*


*Kegunaan Sewa Bot :*
• *Bot Bisa Di Masukin Kedalam Group*
• *Bisa Menyambut Member Baru / Keluar*
• *Fast Response & Ada Error Langsung di perbaiki*


Minat? Chat Owner Bot / Klik Link Dibawah.`
}
exports.sewa = sewa
const listChannel = () => {
    return `Daftar channel: 
1. ANTV
2. GTV
3. Indosiar
4. iNewsTV
5. KompasTV
6. MNCTV
7. METROTV
8. NETTV
9. RCTI
10. SCTV
11. RTV
12. Trans7
13. TransTV`
}
exports.listChannel = listChannel
const bahasalist = () => {
    return `*List kode Bahasa*\n
  *Code       Bahasa*
    sq        Albanian
    ar        Arabic
    hy        Armenian
    ca        Catalan
    zh        Chinese
    zh-cn     Chinese (China)
    zh-tw     Chinese (Taiwan)
    zh-yue    Chinese (Cantonese)
    hr        Croatian
    cs        Czech
    da        Danish
    nl        Dutch
    en        English
    en-au     English (Australia)
    en-uk     English (United Kingdom)
    en-us     English (United States)
    eo        Esperanto
    fi        Finnish
    fr        French
    de        German
    el        Greek
    ht        Haitian Creole
    hi        Hindi
    hu        Hungarian
    is        Icelandic
    id        Indonesian
    it        Italian
    ja        Japanese
    ko        Korean
    la        Latin
    lv        Latvian
    mk        Macedonian
    no        Norwegian
    pl        Polish
    pt        Portuguese
    pt-br     Portuguese (Brazil)
    ro        Romanian
    ru        Russian
    sr        Serbian
    sk        Slovak
    es        Spanish
    es-es     Spanish (Spain)
    es-us     Spanish (United States)
    sw        Swahili
    sv        Swedish
    ta        Tamil
    th        Thai
    tr        Turkish
    vi        Vietnamese
    cy        Welsh
      `
}
exports.bahasalist = bahasalist
const menuinformasi = (prefix, namaBot) => {
return`
╭╼╾✪〘 MENU OTHER 〙✪╼╾╼╾
│
┞➯ ${prefix}donasi
┞➯ ${prefix}sewabot
┞➯ ${prefix}sourcecode
┞➯ ${prefix}botstatus
┞➯ ${prefix}owner
┞➯ ${prefix}listpc
┞➯ ${prefix}listgc
┞➯ ${prefix}listonline
┞➯ ${prefix}readme
┞➯ ${prefix}listchannel
┞➯ ${prefix}listblock
┞➯ ${prefix}jadwalbola
┞➯ ${prefix}afk [ _alasan_ ]
┞➯ ${prefix}join [ link ]
┞➯ ${prefix}nowa [ 62xxxxx ]
┞➯ ${prefix}tembakpasangan [ @tag ]
┞➯ ${prefix}terimapasangan [ @tag ]
┞➯ ${prefix}cekpasangan [ @tag|62xxx ]
┞➯ ${prefix}putuspasangan [ @tag|62xxx ]
┞➯ ${prefix}tolakpasangan [ @tag|62xxx ]
┞➯ ${prefix}ikhlasinpasangan
│
╰╼╾⟤〘 ${namaBot} 〙`
}
exports.menuinformasi = menuinformasi
const menugroup = (prefix, namaBot) => {
return`
╭╼╾✪〘 MENU GROUP 〙✪╼╾╼╾
│
┞➯ ${prefix}snk
┞➯ ${prefix}linkgc
┞➯ ${prefix}add 62858xxxxx
┞➯ ${prefix}kick @tagmember
┞➯ ${prefix}promote @tagmember
┞➯ ${prefix}demote @tagadmin
┞➯ ${prefix}tagall 
┞➯ ${prefix}kickall 
┞➯ ${prefix}setname [ text ]
┞➯ ${prefix}setdesk [ text ]
┞➯ ${prefix}setppgroup [ image ]
┞➯ ${prefix}hidetag
┞➯ ${prefix}ephemeral
┞➯ ${prefix}editinfo [ text ] 
┞➯ ${prefix}revoke [reset linkgc]
┞➯ ${prefix}leave [bot out]
┞➯ ${prefix}delete [replyChatBot]
┞➯ ${prefix}group [open | close]
┞➯ ${prefix}antilink [enable | disable]
┞➯ ${prefix}nsfw [enable | disable]
│
╰╼╾⟤〘 ${namaBot} 〙`
}
exports.menugroup = menugroup
const menuconvert = (prefix, namaBot) => {
return`
╭╼╾✪〘 MENU CONVERTER 〙✪╼╾╼╾
│
┞➯ ${prefix}sticker [ image ]
┞➯ ${prefix}stickerwm [ text | text ]
┞➯ ${prefix}removebg [image/sticker]
┞➯ ${prefix}stickermeme [sticker/image]
┞➯ ${prefix}togif [sticker]
┞➯ ${prefix}toimg [sticker]
┞➯ ${prefix}tomp4 [sticker]
┞➯ ${prefix}toaudio [video]
┞➯ ${prefix}tomp3 [video]
┞➯ ${prefix}tovn [video/audio]
┞➯ ${prefix}tourl [video/image/audio]
┞➯ ${prefix}tinyurl [link]
┞➯ ${prefix}styletext [text]
┞➯ ${prefix}emojimix [emoji+emoji]
┞➯ ${prefix}emojimix2 [emoji]
┞➯ ${prefix}ebinary [text]
┞➯ ${prefix}dbinary [text]
┞➯ ${prefix}bass [audio]
┞➯ ${prefix}blown [audio]
┞➯ ${prefix}deep [audio]
┞➯ ${prefix}earrape [audio]
┞➯ ${prefix}fast [audio]
┞➯ ${prefix}fat [audio]
┞➯ ${prefix}nightcore [audio]
┞➯ ${prefix}reverse [audio]
┞➯ ${prefix}robot [audio]
┞➯ ${prefix}slow [audio]
┞➯ ${prefix}smooth [audio]
┞➯ ${prefix}tupai [audio]
│
╰╼╾⟤〘 ${namaBot} 〙`
}
exports.menuconvert = menuconvert
const menudownload = (prefix, namaBot) => {
return`
╭╼╾✪〘 MENU DOWNLOADER 〙✪╼╾╼╾
│
┞➯ ${prefix}joox [ query ] 
┞➯ ${prefix}ytmp3 [ link yt ]
┞➯ ${prefix}ytmp4 [ link yt ] 
┞➯ ${prefix}tiktok [ link ]
┞➯ ${prefix}igvideo [ link ]
┞➯ ${prefix}igfoto [ link ]
┞➯ ${prefix}likdown [ link ]
┞➯ ${prefix}tiktoknowm [ link ]
┞➯ ${prefix}tiktokmusic [ link ] 
┞➯ ${prefix}twitter [ link ] 
┞➯ ${prefix}twittermp3 [ link ] 
┞➯ ${prefix}umma [ link ] 
┞➯ ${prefix}facebook [ link ]
┞➯ ${prefix}soundcloud [ link ]
┞➯ ${prefix}cocofun [ link ]
┞➯ ${prefix}mediafire [ link ]
┞➯ ${prefix}gitclone [ link ]
┞➯ ${prefix}zippydl [ link ]
┞➯ ${prefix}getmusic [ no ]
┞➯ ${prefix}getvideo [ no ]
│
╰╼╾⟤〘 ${namaBot} 〙`
}
exports.menudownload = menudownload
const menusearch = (prefix, namaBot) => {
return`
╭╼╾✪〘 MENU SEARCH 〙✪╼╾╼╾
│
┞➯ ${prefix}play [ query ]
┞➯ ${prefix}whatmusic [ query ]
┞➯ ${prefix}ytsearch [ query ]
┞➯ ${prefix}githubstalk [ query ] 
┞➯ ${prefix}igstalk [ query ] 
┞➯ ${prefix}pinterest [ query ]
┞➯ ${prefix}wikimedia [ query ] 
┞➯ ${prefix}wallpaperhd [ query ] 
┞➯ ${prefix}wallpapercraft [ query ] 
┞➯ ${prefix}wallpapercave [ query 
┞➯ ${prefix}sfilesearch [ query ]
┞➯ ${prefix}wallpaper [ query ]
┞➯ ${prefix}google [ query ]
┞➯ ${prefix}searchgrup [ query ]
┞➯ ${prefix}jadwaltv [ channel ]
┞➯ ${prefix}kkbi [ query ]
┞➯ ${prefix}lirik [ query ]
┞➯ ${prefix}ringtone [ query ]
┞➯ ${prefix}cuaca [ query ]
┞➯ ${prefix}tts [ bahasa ] [ text ]
┞➯ ${prefix}infogempa
│
╰╼╾⟤〘 ${namaBot} 〙`
}
exports.menusearch = menusearch
const menurandom = (prefix, namaBot) => {
return`
╭╼╾✪〘 MENU RANDOM 〙✪╼╾╼╾
│
┞➯ ${prefix}asupan [ query ]
┞➯ ${prefix}cecan
┞➯ ${prefix}cogan
┞➯ ${prefix}couple
┞➯ ${prefix}quotesanime
┞➯ ${prefix}pantun 
┞➯ ${prefix}jodohku 
┞➯ ${prefix}jadian 
┞➯ ${prefix}cekme 
┞➯ ${prefix}apakah [ query ] 
┞➯ ${prefix}bisakah [ query ] 
┞➯ ${prefix}bagaimanakah [ query ] 
┞➯ ${prefix}rate [ query ] 
┞➯ ${prefix}gantengcek [ query ] 
┞➯ ${prefix}cantikcek [ query ] 
┞➯ ${prefix}sangecek [ query ] 
┞➯ ${prefix}kapankah [ query ] 
┞➯ ${prefix}simi [ query ] 
│
╰╼╾⟤〘 ${namaBot} 〙`
}
exports.menurandom = menurandom
const menuislam = (prefix, namaBot) => {
return`
╭╼╾✪〘 MENU ISLAMIC 〙✪╼╾╼╾
│
┞➯ ${prefix}jadwalsholat [ query ]
┞➯ ${prefix}tafsirsurah
┞➯ ${prefix}alquran
┞➯ ${prefix}hadist
┞➯ ${prefix}juzamma
┞➯ ${prefix}iqra
│
╰╼╾⟤〘 ${namaBot} 〙`
}
exports.menuislam = menuislam
const menuprimbon = (prefix, namaBot) => {
return`
╭╼╾✪〘 MENU PRIMBON 〙✪╼╾╼╾
│
┞➯ ${prefix}nomerhoki
┞➯ ${prefix}artimimpi
┞➯ ${prefix}ramalanjodoh
┞➯ ${prefix}artinama
┞➯ ${prefix}suamiistri
┞➯ ${prefix}ramalancinta
┞➯ ${prefix}ramalanjodohbali
┞➯ ${prefix}kecocokannama
┞➯ ${prefix}pasangan
┞➯ ${prefix}jadiannikah
┞➯ ${prefix}sifatusaha
┞➯ ${prefix}rejeki
┞➯ ${prefix}pekerjaan
┞➯ ${prefix}ramalannasib
┞➯ ${prefix}potensipenyakit
┞➯ ${prefix}artitarot
┞➯ ${prefix}fengshui
┞➯ ${prefix}haribaik
┞➯ ${prefix}harisangar
┞➯ ${prefix}harisial
┞➯ ${prefix}nagahari
┞➯ ${prefix}arahrezeki
┞➯ ${prefix}peruntungan
┞➯ ${prefix}wetonjawa
┞➯ ${prefix}sifat
┞➯ ${prefix}keberuntungan
┞➯ ${prefix}memancing
┞➯ ${prefix}masasubur
┞➯ ${prefix}shio
┞➯ ${prefix}zodiak
│
╰╼╾⟤〘 ${namaBot} 〙`
}
exports.menuprimbon = menuprimbon
const menutextmaker = (prefix, namaBot) => {
return`
╭╼╾✪〘 TEXT MAKER 〙✪╼╾╼╾
│
┞➯ ${prefix}candy [ text ] 
┞➯ ${prefix}christmas [ text ] 
┞➯ ${prefix}3dchristmas [ text ] 
┞➯ ${prefix}sparklechristmas [ text ]
┞➯ ${prefix}deepsea [ text ] 
┞➯ ${prefix}scifi [ text ] 
┞➯ ${prefix}rainbow2 [ text ] 
┞➯ ${prefix}waterpipe [ text ] 
┞➯ ${prefix}spooky [ text ] 
┞➯ ${prefix}pencil [ text ] 
┞➯ ${prefix}circuit [ text ] 
┞➯ ${prefix}discovery [ text ] 
┞➯ ${prefix}metalic [ text ] 
┞➯ ${prefix}fiction [ text ] 
┞➯ ${prefix}demon [ text ] 
┞➯ ${prefix}transformer [ text ] 
┞➯ ${prefix}berry [ text ] 
┞➯ ${prefix}thunder [ text ]
┞➯ ${prefix}3dstone2 [ text ] 
┞➯ ${prefix}neonlight [ text ] 
┞➯ ${prefix}glitch [ text ] 
┞➯ ${prefix}harrypotter [ text ] 
┞➯ ${prefix}brokenglass [ text ] 
┞➯ ${prefix}papercut [ text ] 
┞➯ ${prefix}watercolor [ text ] 
┞➯ ${prefix}multicolor [ text ] 
┞➯ ${prefix}neondevil [ text ] 
┞➯ ${prefix}underwater [ text ] 
┞➯ ${prefix}graffitibike [ text ]
┞➯ ${prefix}snow [ text ] 
┞➯ ${prefix}cloud [ text ] 
┞➯ ${prefix}honey [ text ] 
┞➯ ${prefix}ice [ text ] 
┞➯ ${prefix}fruitjuice [ text ] 
┞➯ ${prefix}biscuit [ text ] 
┞➯ ${prefix}wood [ text ] 
┞➯ ${prefix}chocolate [ text ] 
┞➯ ${prefix}strawberry [ text ] 
┞➯ ${prefix}matrix [ text ] 
┞➯ ${prefix}blood [ text ] 
┞➯ ${prefix}dropwater [ text ] 
┞➯ ${prefix}toxic [ text ] 
┞➯ ${prefix}lava [ text ] 
┞➯ ${prefix}rock [ text ] 
┞➯ ${prefix}bloodglas [ text ] 
┞➯ ${prefix}halloween [ text ] 
┞➯ ${prefix}darkgold [ text ] 
┞➯ ${prefix}joker [ text ] 
┞➯ ${prefix}wicker [ text ]
┞➯ ${prefix}firework [ text ] 
┞➯ ${prefix}skeleton [ text ] 
┞➯ ${prefix}blackpink [ text ] 
┞➯ ${prefix}sand [ text ] 
┞➯ ${prefix}glue [ text ] 
┞➯ ${prefix}1917 [ text ] 
┞➯ ${prefix}leaves [ text ]
┞➯ ${prefix}demon [ text ] 
│
╰╼╾⟤〘 ${namaBot} 〙`
}
exports.menutextmaker = menutextmaker
const menuanime = (prefix, namaBot) => {
return`
╭╼╾✪〘 MENU ANIME 〙✪╼╾╼╾
│
┞➯ ${prefix}konachan [ query ]  
┞➯ ${prefix}chara [ query ]  
┞➯ ${prefix}kiryu [ query ] 
┞➯ ${prefix}manga [ query ] 
┞➯ ${prefix}komiku [ query ]
┞➯ ${prefix}character [ query ]  
┞➯ ${prefix}otakudesu [ query ]  
┞➯ ${prefix}otakudesuinfo [ link ]
┞➯ ${prefix}otakudesuongoing
┞➯ ${prefix}wallanime 
┞➯ ${prefix}neko 
┞➯ ${prefix}waifu 
┞➯ ${prefix}avatar 
┞➯ ${prefix}woof
┞➯ ${prefix}lizard
┞➯ ${prefix}animehd 
┞➯ ${prefix}cry
┞➯ ${prefix}kill
┞➯ ${prefix}hug
┞➯ ${prefix}pat
┞➯ ${prefix}lick
┞➯ ${prefix}kiss
┞➯ ${prefix}bite
┞➯ ${prefix}yeet 
┞➯ ${prefix}bully
┞➯ ${prefix}bonk
┞➯ ${prefix}wink
┞➯ ${prefix}poke
┞➯ ${prefix}nom 
┞➯ ${prefix}slap
┞➯ ${prefix}smile
┞➯ ${prefix}wave
┞➯ ${prefix}awoo
┞➯ ${prefix}blush
┞➯ ${prefix}smug
┞➯ ${prefix}glomp
┞➯ ${prefix}happy
┞➯ ${prefix}dance
┞➯ ${prefix}cringe
┞➯ ${prefix}highfive
┞➯ ${prefix}shinobu
┞➯ ${prefix}megumin
┞➯ ${prefix}handhold
┞➯ ${prefix}akira 
┞➯ ${prefix}boruto 
┞➯ ${prefix}akira
┞➯ ${prefix}chitoge 
┞➯ ${prefix}deidara 
┞➯ ${prefix}doraemon 
┞➯ ${prefix}elaina
┞➯ ${prefix}emilia 
┞➯ ${prefix}erza 
┞➯ ${prefix}gremory 
┞➯ ${prefix}hestia
┞➯ ${prefix}hinata 
┞➯ ${prefix}inori 
┞➯ ${prefix}isuzu 
┞➯ ${prefix}itachi
┞➯ ${prefix}itori 
┞➯ ${prefix}kaga 
┞➯ ${prefix}doraemon 
┞➯ ${prefix}kagura
┞➯ ${prefix}kakasih 
┞➯ ${prefix}kaori 
┞➯ ${prefix}kotori 
┞➯ ${prefix}keneki
┞➯ ${prefix}madara 
┞➯ ${prefix}megumin 
┞➯ ${prefix}nekonime 
┞➯ ${prefix}sagiri
┞➯ ${prefix}ana 
┞➯ ${prefix}asuna 
┞➯ ${prefix}ayuzawa
┞➯ ${prefix}akiyama 
┞➯ ${prefix}loli 
┞➯ ${prefix}toukachan 
│
╰╼╾⟤〘 ${namaBot} 〙`
}
exports.menuanime = menuanime
const menunsfw = (prefix, namaBot) => {
return`
╭╼╾✪〘 MENU NSFW 〙✪╼╾╼╾
│
┞➯ ${prefix}nsfwass 
┞➯ ${prefix}blowjob 
┞➯ ${prefix}hentai 
┞➯ ${prefix}nsfwbdsm 
┞➯ ${prefix}ahegao
┞➯ ${prefix}masturbation
┞➯ ${prefix}hentai_neko
┞➯ ${prefix}hentai_waifu
┞➯ ${prefix}hentai_trap
│
╰╼╾⟤〘 ${namaBot} 〙`
}
exports.menunsfw = menunsfw
const menugame = (prefix, namaBot) => {
return`
╭╼╾✪〘 MENU GAME 〙✪╼╾╼╾
│
┞➯ ${prefix}tekateki
┞➯ ${prefix}tebaklirik
┞➯ ${prefix}family100 
┞➯ ${prefix}tebaklagu 
┞➯ ${prefix}tebakkata
┞➯ ${prefix}tebakkimia
┞➯ ${prefix}tebakgambar 
┞➯ ${prefix}tebakbendera 
┞➯ ${prefix}tebakkabupaten
┞➯ ${prefix}tebakkalimat
┞➯ ${prefix}siapakahaku
┞➯ ${prefix}caklontong
┞➯ ${prefix}kuismath
│
╰╼╾⟤〘 ${namaBot} 〙`
}
exports.menugame = menugame
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.cyanBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})