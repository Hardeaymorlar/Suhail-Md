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

global.timezone= process.env.TZ || process.env.TIME_ZONE || "African/Nigeria";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_13_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDMwLFxuICAgICAgICA1MixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDk4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxODAsXG4gICAgICAgIDM5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTE4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjE2LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDc3LFxuICAgICAgICAzMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTU0LFxuICAgICAgICAxOCxcbiAgICAgICAgMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzksXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDQyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTMwLFxuICAgICAgICA4MixcbiAgICAgICAgMjM5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTg1LFxuICAgICAgICA1MSxcbiAgICAgICAgMzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTgzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAzNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDc5LFxuICAgICAgICA4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDQyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk3LFxuICAgICAgICAxMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgODEsXG4gICAgICAgIDkyLFxuICAgICAgICAxODUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDcxLFxuICAgICAgICAzNCxcbiAgICAgICAgMzksXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzksXG4gICAgICAgIDksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjksXG4gICAgICAgIDY5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODQsXG4gICAgICAgIDY1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQsXG4gICAgICAgIDUsXG4gICAgICAgIDk4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDMxLFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDk4LFxuICAgICAgICAxODEsXG4gICAgICAgIDg3LFxuICAgICAgICA5MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzksXG4gICAgICAgIDgwLFxuICAgICAgICA0MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEwMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDksXG4gICAgICAgIDEzMCxcbiAgICAgICAgOCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDQsXG4gICAgICAgIDgxLFxuICAgICAgICA3MixcbiAgICAgICAgNzAsXG4gICAgICAgIDQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0LFxuICAgICAgICA0MixcbiAgICAgICAgMzgsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDMxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTM1LFxuICAgICAgICA2MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDcxLFxuICBcImFkdlNlY3JldEtleVwiOiBcImtuRk1JcU52M0NuQ3pRNFNTblU5THZ5QzVEeW9pejErYkc2TEhOaE9VNkE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzAxNzcxNjM0OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0EwMDlENkYyNjMyQkE4Nzk2QzhcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMjU0Mzk5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzAxNzcxNjM0OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0FCNzcwNjYzREI5MEJGQjEwNDdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMjU0NDAxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIllOZ3JzU2JVVHh5MTJlTnlwZHBXN3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjQyMWU1ZjctMjE3ZC00MjRmLTgwMGItZTIzZmRmYTIyYTQ5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMSxcbiAgICAgIDE5NixcbiAgICAgIDIxMyxcbiAgICAgIDExLFxuICAgICAgODIsXG4gICAgICAxODcsXG4gICAgICAxNjYsXG4gICAgICAyMTQsXG4gICAgICAyMCxcbiAgICAgIDk0LFxuICAgICAgNjAsXG4gICAgICAxMTYsXG4gICAgICAyMTcsXG4gICAgICAyMDgsXG4gICAgICAyMTgsXG4gICAgICAxMCxcbiAgICAgIDc3LFxuICAgICAgMjMzLFxuICAgICAgMTM3LFxuICAgICAgMTQwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNyxcbiAgICAgIDI1MSxcbiAgICAgIDE3NSxcbiAgICAgIDM4LFxuICAgICAgMjMsXG4gICAgICA3OCxcbiAgICAgIDE5MSxcbiAgICAgIDEzMSxcbiAgICAgIDY3LFxuICAgICAgMjE3LFxuICAgICAgMTU3LFxuICAgICAgMTc4LFxuICAgICAgMTgxLFxuICAgICAgMTQsXG4gICAgICAyMDUsXG4gICAgICAxLFxuICAgICAgODEsXG4gICAgICAyNixcbiAgICAgIDc0LFxuICAgICAgNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJXNkRaOEVNUlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzAxNzcxNjM0ODozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTGVnaXRcIixcbiAgICBcImxpZFwiOiBcIjExMjQ4OTU1NjE3Mzk4OjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS3VVa3ZRTUVQaUQ0YlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ6MHJSNVhCTGN3NUR3SFBPZ2NEQ1BmeHFFSS9DbDl2clcwUDZUZnZTbEdBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImlGTGdlKzhzKzduRXVmU1E5NzVmcGVFWlBTWlhhWnZQTGN6N0VjWUtPejIweEZEbGJEUDB4YmlJOFE2bVJSdjB3dS82SDNQVW9YQ2plK1M2NlR3emlnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkNxWmlkbVdGcFluQS9wSTdCK3lsUTRaU3JhNUFETjdnNXdnOTdJN1p0Z1ZyZ2lRWEFVbmk5YUx5SE1MaVRoRzhvZjI1WW9QanhORmIvd1VRaWFBK0NBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwMTc3MTYzNDg6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMjU0Mzk2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQkVlXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCRWUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJKNnJYYkJuempkVUVPVTZvM2RXRUYrcDg3WXZHNDR3UmpSN3RPSkpQSjVnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM0NjQ3OTI2MTksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTI1NDM5NTcyNlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Ade❤️",
  packname: process.env.PACK_NAME || "Ademola❤️",
  botname : process.env.BOT_NAME  || "Hardeaymorlar-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Legit❤️",


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
