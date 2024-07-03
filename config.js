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


global.devs = "923184474176" // Developer Contact
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_36_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjIwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODgsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTg2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0OCxcbiAgICAgICAgMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDM3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTIsXG4gICAgICAgIDk2LFxuICAgICAgICA2MixcbiAgICAgICAgNTYsXG4gICAgICAgIDExMixcbiAgICAgICAgOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDksXG4gICAgICAgIDc0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDM1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDgyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM2LFxuICAgICAgICAxMTksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0LFxuICAgICAgICA4MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTUzLFxuICAgICAgICAxODIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDExLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTA3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODksXG4gICAgICAgIDc4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTAzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTk5LFxuICAgICAgICA4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDMyLFxuICAgICAgICA1MixcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAzNixcbiAgICAgICAgMTUwLFxuICAgICAgICA3OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTI2LFxuICAgICAgICA3MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDczLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjAwLFxuICAgICAgICA2OCxcbiAgICAgICAgMjM1LFxuICAgICAgICA5NixcbiAgICAgICAgMjIyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDExMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTksXG4gICAgICAgIDExNCxcbiAgICAgICAgMjI3LFxuICAgICAgICA4MSxcbiAgICAgICAgMSxcbiAgICAgICAgNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDksXG4gICAgICAgIDYzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTMwLFxuICAgICAgICA1MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTksXG4gICAgICAgIDcxLFxuICAgICAgICA1NCxcbiAgICAgICAgODIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTg1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAzNixcbiAgICAgICAgMTY5LFxuICAgICAgICAwLFxuICAgICAgICA0OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOGdsSWNpTVhFL01FZWNINWtkbmFjYTFsOW9yN3FPTmxKT0pTOTJOUStMbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZmp5TldBZ1FTZU9LUGtOZUVJM28td1wiLFxuICBcInBob25lSWRcIjogXCJhNGFhMzI3YS0xYTEyLTQxNDktOTdkMy02NWVmNGQ0OTJjMDNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE0LFxuICAgICAgMTc2LFxuICAgICAgMjIzLFxuICAgICAgMTQ0LFxuICAgICAgNDksXG4gICAgICAwLFxuICAgICAgNjksXG4gICAgICA1NixcbiAgICAgIDE5NSxcbiAgICAgIDI0NSxcbiAgICAgIDE2NyxcbiAgICAgIDIwLFxuICAgICAgMTk0LFxuICAgICAgMTU0LFxuICAgICAgOTAsXG4gICAgICAxNixcbiAgICAgIDExNSxcbiAgICAgIDExLFxuICAgICAgMTEyLFxuICAgICAgMTg2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg2LFxuICAgICAgMTc3LFxuICAgICAgMjA0LFxuICAgICAgMjIzLFxuICAgICAgMTA4LFxuICAgICAgMTg2LFxuICAgICAgMTkwLFxuICAgICAgMTkyLFxuICAgICAgMjQsXG4gICAgICAxOTIsXG4gICAgICAwLFxuICAgICAgNDIsXG4gICAgICAyMDcsXG4gICAgICA2OCxcbiAgICAgIDEwMixcbiAgICAgIDExNixcbiAgICAgIDI0NSxcbiAgICAgIDExMixcbiAgICAgIDIwNSxcbiAgICAgIDIzMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUNEE1TFJXWFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAxMzYxMjg0MDo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNDg4NTkxNzk2Mzg5MzY6NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMVHRtUE1PRU9IaWs3UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlBKcE1QU0xMayt2QnNtN0tXd2NoRFZUTGRhSGo1RTl6ajNPK0NML29rR1k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTXJNcllJS3N6VGtVaCtsQk9iaURvRk9oQ1k1Mk1wb0E4b09GZjZiYkh4V0lPZTJSNnp1Wld1WUsweFM4Z2UvTVhNMEUxNmdlcUdoTFkyc2tQRXVOaUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwia3pjVldFVExzZURWN0ZiQUQ1ck5BQnh3aVl6QWExc3Zlc0FGNzVUYXpscXNmV1dyQUgxZGlwUXo2WnZEWWY0ZUwwYVdaSmJhejdla3VsUlF3WjRmZ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAxMzYxMjg0MDo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTk4ODU4MFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
