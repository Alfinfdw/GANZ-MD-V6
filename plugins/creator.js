let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

//------------ BIO OWNER 1
let ppown1 = await conn.profilePictureUrl(adminn + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let admid = '6285608468994'
let teksbio1 = `━━━━━━━━▢ *BIODATA* ▢━━━━━━━━
*💌 Nama* : Livy Renataヅ
*🔥 Status : Developer BOT*
*♂️ Gender* : Perempuan 
*⛪ Agama* : -

*- - sᴋɪʟʟs: - -* 
> JavaScript [70.7%]
> Python [40.4%]
> CSS [0.1%]
> Html [67.9%]
> Recode [90.8%]
> Create Webs [3.9%]

───────[ SOSIAL MEDIA ]───────

🥏 *WA* wa.me/6285608468994
`
      conn.sendHydrated(m.chat, teksbio1, wm, ppown1, "https://wa.me/" + admid, "Chat Smileyヅ", null,null, [["Owner Kyami", '.owner3'], ['Menu', '.menu'],[null,null]], m)
}

handler.command = /^(ownerdave)/i

export default handler
