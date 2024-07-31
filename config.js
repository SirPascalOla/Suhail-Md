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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348068165455";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_41_07_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDU0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgODUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjA3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTYzLFxuICAgICAgICA0NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDYsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDcwLFxuICAgICAgICAxODIsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDQsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEsXG4gICAgICAgIDUyLFxuICAgICAgICAxODIsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDk2LFxuICAgICAgICAxODAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTA5LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjksXG4gICAgICAgIDYyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDUxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDU0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjI1LFxuICAgICAgICA3NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDY5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDcsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDM2LFxuICAgICAgICA5MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3NixcbiAgICAgICAgNTEsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTEzLFxuICAgICAgICA5MixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTksXG4gICAgICAgIDI1LFxuICAgICAgICAxOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDM4LFxuICAgICAgICAyMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTkxLFxuICAgICAgICA3MSxcbiAgICAgICAgODMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDg0LFxuICAgICAgICAyMzksXG4gICAgICAgIDcwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTksXG4gICAgICAgIDEzNixcbiAgICAgICAgMjExLFxuICAgICAgICAxODQsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgODksXG4gICAgICAgIDU0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMixcbiAgICAgICAgODcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjIzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjksXG4gICAgICAgIDQwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDg1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODMsXG4gICAgICAgIDMxLFxuICAgICAgICAwLFxuICAgICAgICAzNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDgsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA5MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA0NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODksXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjU0LFxuICAgICAgICA5NyxcbiAgICAgICAgMjA2LFxuICAgICAgICA3OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDczLFxuICAgICAgICAyNixcbiAgICAgICAgOTcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDc4LFxuICAgICAgICA3MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjE3LFxuICAgICAgICA3MSxcbiAgICAgICAgOCxcbiAgICAgICAgMTk3LFxuICAgICAgICA0MixcbiAgICAgICAgNzAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDgxLFxuICAgICAgICA4NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjI5LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTkJzelVvd1RTc1J6dWc3aW9QK2tLMTJocTlDdHhRNjVOZTlLTll5ZkIwcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieHFNeUVQR0JTR09ZQlBkMEJCRlpHZ1wiLFxuICBcInBob25lSWRcIjogXCIyZTY5MWMyNy0wMTBlLTRiZTktOGY4NS0xY2JlODIxMGJhNDhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM5LFxuICAgICAgMTcwLFxuICAgICAgMTc0LFxuICAgICAgMjE1LFxuICAgICAgMjA0LFxuICAgICAgODMsXG4gICAgICA3NCxcbiAgICAgIDIzNCxcbiAgICAgIDI2LFxuICAgICAgMTQxLFxuICAgICAgMTg1LFxuICAgICAgMjE2LFxuICAgICAgMzksXG4gICAgICAxNTIsXG4gICAgICAxODksXG4gICAgICAxNCxcbiAgICAgIDIwNSxcbiAgICAgIDgwLFxuICAgICAgNDIsXG4gICAgICAwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYzLFxuICAgICAgMTY0LFxuICAgICAgMTczLFxuICAgICAgMjA0LFxuICAgICAgMjQ3LFxuICAgICAgMjUxLFxuICAgICAgMzgsXG4gICAgICA3LFxuICAgICAgMTI5LFxuICAgICAgMTk1LFxuICAgICAgMTQsXG4gICAgICA2NCxcbiAgICAgIDIyLFxuICAgICAgMTcyLFxuICAgICAgNzMsXG4gICAgICAxNDgsXG4gICAgICAyMDUsXG4gICAgICAxMTYsXG4gICAgICAxMzEsXG4gICAgICAxODVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMVFaWkNTTTRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwNjgxNjU0NTU6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlBhc2NhbCBCdXNpbmVzcyBDb25zdWx0XCIsXG4gICAgXCJsaWRcIjogXCIxMTI2NTI3NjQzMjM4NjA6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKdUN0TWdCRU1mdXFiVUdHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkNaOXhRSnlrdnFIc3l6Z1pPUFBTWWRMMHlUYk5jdUZWTEN6Qk42N0YwUk09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwielphSTdzcnNRQmhFRHdJRUp1akQrT3hValpjcVVOWFhNZzhkOFd3MWtPeWFmY2NiTVMzUDBYZEdNVW15anVsaG8yVlBEd2tIUGkrbklBanFZUTNGQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYUtHTkVaeFhhY1VJNDdnbkNKeURaY3o2cy9WM3FuNjJtNStXVytKQXBtT0pnY1c1bFNZM1FpUlFGRmlnb2pKVHZ5cjFKTkZiRkx1cUpkZFRMUDF5Q3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA2ODE2NTQ1NToyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI0NDc2OTEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHUzhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdTOC5qc29uIjogIntcImtleURhdGFcIjpcIlBxNXliUGJCZ0g1bXRnLzl2amVwTk1qQ2VDbmVybUJ1d3hZWWV4L0ZtU1k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDIwMjgyNjUxLFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwyLDNdfSxcInRpbWVzdGFtcFwiOlwiMTcxODg1MzUwNzQzNlwifSIKfQ=="  // PUT your SESSION_ID 


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


  errorChat : process.env.ERROR_CHAT || "",
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
