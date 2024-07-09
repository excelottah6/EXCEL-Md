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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_24_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTY1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTMzLFxuICAgICAgICA5NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5LFxuICAgICAgICA2NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNixcbiAgICAgICAgOTAsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjExLFxuICAgICAgICAyMTEsXG4gICAgICAgIDExLFxuICAgICAgICA5NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDMyLFxuICAgICAgICAxODIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxNzksXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjM0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTQxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTE4LFxuICAgICAgICA0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDY5LFxuICAgICAgICA1MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDYzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTksXG4gICAgICAgIDk5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQxLFxuICAgICAgICAzOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTc5LFxuICAgICAgICAxODMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTUxLFxuICAgICAgICA2NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4LFxuICAgICAgICA2NixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAzMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDk0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNixcbiAgICAgICAgODMsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDYxLFxuICAgICAgICAxODQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDQ2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNixcbiAgICAgICAgOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAzNixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjksXG4gICAgICAgIDc2LFxuICAgICAgICAwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDUwLFxuICAgICAgICAyMixcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjIxLFxuICAgICAgICA3NSxcbiAgICAgICAgMjQzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDk2LFxuICAgICAgICA3MixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTA1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDksXG4gICAgICAgIDU1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDkwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTgsXG4gICAgICAgIDM3LFxuICAgICAgICA3NixcbiAgICAgICAgMzYsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJPb0xKVnBDa0ZhbndJcWszQU5qT3g0eUVqelgrSG1RdUNOcmFrbDd1SGI0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxMzU3MjQ5NzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBRUM3RTNDMDk5M0Y4NzRGQzBEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDI2MTQ1NVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJrSncwUjQtWVFiR2JaU1NnY1NGYlBBXCIsXG4gIFwicGhvbmVJZFwiOiBcImY4MjAwZmEyLTU4ZWItNDE5Ny05MzFmLTZjM2ViMTNjNThmMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzIsXG4gICAgICA0MyxcbiAgICAgIDE0NCxcbiAgICAgIDE5OCxcbiAgICAgIDc2LFxuICAgICAgMjM4LFxuICAgICAgMTMyLFxuICAgICAgMjUxLFxuICAgICAgMTc5LFxuICAgICAgMjM0LFxuICAgICAgMTQ5LFxuICAgICAgNixcbiAgICAgIDIwMyxcbiAgICAgIDEyNSxcbiAgICAgIDIzLFxuICAgICAgMTU1LFxuICAgICAgMTk1LFxuICAgICAgODQsXG4gICAgICAxOTEsXG4gICAgICA5MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTYsXG4gICAgICAxMzgsXG4gICAgICA1MCxcbiAgICAgIDE3MSxcbiAgICAgIDE5NixcbiAgICAgIDUzLFxuICAgICAgOSxcbiAgICAgIDQ5LFxuICAgICAgNDEsXG4gICAgICAxMixcbiAgICAgIDE1MCxcbiAgICAgIDE1NyxcbiAgICAgIDIxNSxcbiAgICAgIDgzLFxuICAgICAgMjEzLFxuICAgICAgMTY5LFxuICAgICAgMjQsXG4gICAgICAxMixcbiAgICAgIDI5LFxuICAgICAgMjIzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTWY1Z2RFSEVNVzJwTFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJybFVHVHh5enV0RlRTNWgvSEJJcTRHNWNveVNPZWZneGlKS0hlWkZhV2hBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjk5UUx5QUtlWmRoNWRyUnBrdVpKYmF4cTRkcHdWOWxyUWx1bkVLeXV1Nm9VeFdFWjQ3dUFxYTlXNm9IazVZdm1LSEp4dXRncENDR2I1ZmxzbHdMWGhBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjRPQXFwMFVvVm82QXlkMmRIM0JoSUFRUWtUSEZJODFQMnZzdU50VGdGenJXV1plamt5MmxLNTRlMXdGYlR1dnpudkIxOVdNRlRPU2l0OWFZV2hkQUNnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEzNTcyNDk3NzoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTUyNjg3NTk3NjEwNDE6MTVAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiQUJJREVYXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTM1NzI0OTc3OjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDI2MTQ0OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUhRWVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSFFZLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRUxEUTEyWXUzZ1NocTFITWw1eEZLZnJSZmFZblhVU0RaaEpieWVVZElPST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDQ4OTQ5NDQ3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAyNjE0NTAxOTlcIn0iCn0="  // PUT your SESSION_ID 


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
