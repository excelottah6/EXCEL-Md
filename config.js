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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_29_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDUwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTM3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDMwLFxuICAgICAgICAzMyxcbiAgICAgICAgMzksXG4gICAgICAgIDIzNixcbiAgICAgICAgMjIyLFxuICAgICAgICA1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDQxLFxuICAgICAgICA4MixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQsXG4gICAgICAgIDc0LFxuICAgICAgICA5MixcbiAgICAgICAgNDQsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxLFxuICAgICAgICA2MixcbiAgICAgICAgMjksXG4gICAgICAgIDExMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDg4LFxuICAgICAgICA0OSxcbiAgICAgICAgNDksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTM1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTA1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjM5LFxuICAgICAgICA3NSxcbiAgICAgICAgNyxcbiAgICAgICAgMjEwLFxuICAgICAgICA3NixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ2LFxuICAgICAgICAzMixcbiAgICAgICAgMTQzLFxuICAgICAgICA4NyxcbiAgICAgICAgMzksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAzMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1LFxuICAgICAgICA3MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwLFxuICAgICAgICA0NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI2LFxuICAgICAgICA1NCxcbiAgICAgICAgMjE2LFxuICAgICAgICA2MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDYxLFxuICAgICAgICAyMixcbiAgICAgICAgMTQxLFxuICAgICAgICAxODUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDczLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwLFxuICAgICAgICAzNixcbiAgICAgICAgNDYsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDcxLFxuICAgICAgICAxMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMixcbiAgICAgICAgMjQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNixcbiAgICAgICAgOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODIsXG4gICAgICAgIDQsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjMzLFxuICAgICAgICA2NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjMyLFxuICAgICAgICA1OCxcbiAgICAgICAgOCxcbiAgICAgICAgMTg2LFxuICAgICAgICA1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTU4LFxuICAgICAgICA5MixcbiAgICAgICAgMTEsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDY3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTg3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5LFxuICAgICAgICA1LFxuICAgICAgICAxODksXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJiM2ZKeTRCNDQ3eHZMd3M3ODZaa1h5OVNDMGdUNk1HbytYZkhoNnNTRW4wPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJMM1R2WmR0QVFSYXF5Wi1TeUJqQjVBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjBiZjA2ZjVlLTc2Y2EtNDIwZi05ZDZmLTZlZDYzNzNmYjZhYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5OCxcbiAgICAgIDIxNixcbiAgICAgIDc4LFxuICAgICAgMjAzLFxuICAgICAgMTA4LFxuICAgICAgNzIsXG4gICAgICAwLFxuICAgICAgMjcsXG4gICAgICAxNzMsXG4gICAgICAxODAsXG4gICAgICAxNjEsXG4gICAgICAxOTcsXG4gICAgICAxNCxcbiAgICAgIDExMCxcbiAgICAgIDgwLFxuICAgICAgMjA5LFxuICAgICAgMTcyLFxuICAgICAgMTUzLFxuICAgICAgMzYsXG4gICAgICAxNzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQwLFxuICAgICAgMzYsXG4gICAgICAxMzAsXG4gICAgICAxOTAsXG4gICAgICAyMjYsXG4gICAgICA0MixcbiAgICAgIDE5MCxcbiAgICAgIDM5LFxuICAgICAgMTksXG4gICAgICA0MSxcbiAgICAgIDY0LFxuICAgICAgMSxcbiAgICAgIDEzMyxcbiAgICAgIDEzNixcbiAgICAgIDM0LFxuICAgICAgMTc2LFxuICAgICAgMjM0LFxuICAgICAgMTUyLFxuICAgICAgMTAwLFxuICAgICAgNzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRko0VE1LOUZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMTM2MTI4NDA6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjQ4ODU5MTc5NjM4OTM2OjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT0xxby9vQ0VJeU1uTFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJQSnBNUFNMTGsrdkJzbTdLV3djaERWVExkYUhqNUU5emozTytDTC9va0dZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkY4L1R1eTd6cWZrUHhBTUx4czA4LzJKeUduRXZHR2Q1Ni9janpYaVA0RGJBOXZ3UDRwcHozaVBpY1JxVFRaTzlLREU2RjVoZC81Y3crZEZSVG1xMml3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlZCVXdDVWc0d1I1V2JyNlBRQjMwSzlCMlpXYkxybVpxY0I4T3JDWDlqbTlXbmxXTkJPcCtVKzUzYkZNMkZqdVZkUkNOUlhSeWduN2cyeklCMFZZMURRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMTM2MTI4NDA6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAxMjQ5NDQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPQ3hcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9DeC5qc29uIjogIntcImtleURhdGFcIjpcIjlVOEdIOENwT0xiMUYzUlpFOThnVUZLamU1ckNmMGFZRUVJQlQwUTJKeDA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzkzMzEwNTYyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAxMjQ5NDg5NzFcIn0iCn0="  // PUT your SESSION_ID 


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
