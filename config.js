const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "2347039570336" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347039570336";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_27_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjQsXG4gICAgICAgIDM0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTc3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDY4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjU0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTEwLFxuICAgICAgICA5NixcbiAgICAgICAgMTgyLFxuICAgICAgICAzOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAzMixcbiAgICAgICAgNCxcbiAgICAgICAgMjA2LFxuICAgICAgICA1NSxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU4LFxuICAgICAgICA0MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDUsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDM4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTcwLFxuICAgICAgICA3MixcbiAgICAgICAgMTU0LFxuICAgICAgICA0MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU4LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTgxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTU1LFxuICAgICAgICA3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA1NSxcbiAgICAgICAgOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTI2LFxuICAgICAgICA2MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA0NixcbiAgICAgICAgNjAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjMxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTA2LFxuICAgICAgICA1NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODYsXG4gICAgICAgIDM5LFxuICAgICAgICA5MCxcbiAgICAgICAgMjIzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzksXG4gICAgICAgIDk5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDkxLFxuICAgICAgICA3MixcbiAgICAgICAgMjUyLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjEsXG4gICAgICAgIDg0LFxuICAgICAgICAxODcsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjExLFxuICAgICAgICAxOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMyxcbiAgICAgICAgMTA3LFxuICAgICAgICA3MixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQ4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjIxLFxuICAgICAgICA1MCxcbiAgICAgICAgNjksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA4MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTksXG4gICAgICAgIDgzLFxuICAgICAgICAyOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDgsXG4gICAgICAgIDU2LFxuICAgICAgICAxODMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDQ5LFxuICAgICAgICA3NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDgxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTM4LFxuICAgICAgICA2OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTQwLFxuICAgICAgICA5OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAzMyxcbiAgICAgICAgMjM1LFxuICAgICAgICA1NixcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibEpxZW1KbERka2tKM0duUDlpdW81RDhQblVDRXJyQ0U4c1NlWndnazRLbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVkNPZzVFZlhRYUd2YlQxTWs2Y1hhd1wiLFxuICBcInBob25lSWRcIjogXCJlMzljNDNkNS1hYzY0LTRlODctYjg5Yy02MjU3OTQ3MDk3YTJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA1LFxuICAgICAgMjE1LFxuICAgICAgMTc4LFxuICAgICAgMTE4LFxuICAgICAgMjE1LFxuICAgICAgNTYsXG4gICAgICAyMTcsXG4gICAgICAxNDgsXG4gICAgICA2OCxcbiAgICAgIDI0MCxcbiAgICAgIDE3NSxcbiAgICAgIDQwLFxuICAgICAgMjksXG4gICAgICAyMzgsXG4gICAgICAyMzYsXG4gICAgICA2LFxuICAgICAgMjQ0LFxuICAgICAgOTMsXG4gICAgICA1MyxcbiAgICAgIDI2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzQsXG4gICAgICAyMTIsXG4gICAgICAxNyxcbiAgICAgIDEwOSxcbiAgICAgIDE1NCxcbiAgICAgIDEyNyxcbiAgICAgIDIzNixcbiAgICAgIDQwLFxuICAgICAgMjI5LFxuICAgICAgMjcsXG4gICAgICAyMzQsXG4gICAgICAyOCxcbiAgICAgIDE4NixcbiAgICAgIDE4LFxuICAgICAgMTA1LFxuICAgICAgODcsXG4gICAgICA1MyxcbiAgICAgIDEsXG4gICAgICAyMjcsXG4gICAgICA1MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09QVXlaQUNFT1Q0bnJRR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWFpqNFF4OGNZVkJqSTRBYlkxN2oyY0ZZUFN0bEJyV1RzMnFZYmdCSk9XVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJVVFVVaWUwN05ZdzQ0eUlXRlQ1ZEFwbVhtMDhLeCs1aDdzYmc2TXpZTWRxaERqZXg1ejh3Vit0SUpZeTAveW1jMk9OendCSHo3OW9MYW1qckYyMDZpZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJXSmpWYlc3Zks4bTI4U0xVVTYzL3hodmFxWHYwUlFTVWZvWFlsK3prQitHdE0zSGdTTTZHOU80SlcwaHhWdzN2M0thbzFvdi9Va2NVQVAyM2dudTZqdz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNDI4NzY1Njg6MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjc5MjMzNzA3NzEyNTU1OjIxQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA0Mjg3NjU2ODoyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDE3MTYyMixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpwd1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSnB3Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiWG1TNmRBL0x0WTJRd1JGSTZmNmVGcXJReGtkcWJmSVNnOFllYzVuTWpkST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1NzE2MzIyMjcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDE3MDg2NDcyOFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "2347039570336",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
