const PastebinAPI = require('pastebin-js'),
    pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL');
const { makeid } = require('./id');
const express = require('express');
const fs = require('fs');
const path = require('path');
const pino = require("pino");
let router = express.Router();
const {
    default: Venocyber_Tech, useMultiFileAuthState, delay,
    makeCacheableSignalKeyStore, Browsers
} = require("@whiskeysockets/baileys");

function removeFile(FilePath) {
    if (fs.existsSync(FilePath)) fs.rmSync(FilePath, { recursive: true, force: true });
}

router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;

    async function VENOCYBER_MD_PAIR_CODE(retryCount = 0) {
        if (retryCount > 3) return res.send({ code: "Service Unavailable" });

        const { state, saveCreds } = await useMultiFileAuthState('./temp/' + id);
        try {
            let Pair_Code_By_Venocyber_Tech = Venocyber_Tech({
                auth: { creds: state.creds, keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" })) },
                printQRInTerminal: false, logger: pino({ level: "fatal" }),
                browser: ["Ubuntu", "Chrome", "20.0.04"]
            });

            if (!Pair_Code_By_Venocyber_Tech.authState.creds.registered) {
                await delay(1500);
                num = num.replace(/[^0-9]/g, '');
                const code = await Pair_Code_By_Venocyber_Tech.requestPairingCode(num);
                if (!res.headersSent) res.send({ code });
            }

            Pair_Code_By_Venocyber_Tech.ev.on('creds.update', saveCreds);
            Pair_Code_By_Venocyber_Tech.ev.on("connection.update", async (s) => {
                const { connection, lastDisconnect } = s;
                if (connection === "open") {
                    await delay(5000);
                    let sessionData;
                    try {
                        sessionData = JSON.parse(fs.readFileSync(path.join(__dirname, 'temp', id, 'creds.json')));
                    } catch (err) { console.error("Error reading session file:", err); return; }

                    let session = {
    noiseKey: sessionData.noiseKey, pairingEphemeralKeyPair: sessionData.pairingEphemeralKeyPair,
    signedIdentityKey: sessionData.signedIdentityKey, signedPreKey: sessionData.signedPreKey,
    registrationId: sessionData.registrationId, advSecretKey: sessionData.advSecretKey,
    processedHistoryMessages: sessionData.processedHistoryMessages || [], timestamp: Date.now(),
    nextPreKeyId: sessionData.nextPreKeyId || null, firstUnuploadedPreKeyId: sessionData.firstUnuploadedPreKeyId || null,
    keyId: sessionData.keyId || null, deviceId: sessionData.deviceId || "unknown",
    phoneId: sessionData.phoneId || "unknown", identityId: sessionData.identityId || null,
    registered: sessionData.registered ?? false, backupToken: sessionData.backupToken || null,
    registration: sessionData.registration || {}, pairingCode: sessionData.pairingCode || "",
    me: sessionData.me || {}, accountSyncCounter: sessionData.accountSyncCounter || 0,
    accountSettings: sessionData.accountSettings || { unarchiveChats: false }, isAuthenticated: sessionData.isAuthenticated ?? false,
    connectionState: sessionData.connectionState || "pending", retryCount: sessionData.retryCount || 0,
    lastError: sessionData.lastError || null, reconnectAttempts: sessionData.reconnectAttempts || 0,
    latency: sessionData.latency || null, dataUsage: sessionData.dataUsage || { sent: 0, received: 0 }, logs: sessionData.logs || [],
    signalIdentities: sessionData.signalIdentities || [], platform: sessionData.platform || "unknown",
    lastAccountSyncTimestamp: sessionData.lastAccountSyncTimestamp || 0, myAppStateKeyId: sessionData.myAppStateKeyId || null,
    account: sessionData.account || {}
};

                    let VENOCYBER_MD_TEXT = `
╔════════════════════════╗
║  𝗢𝗥𝗘𝗞𝗜 𝗖𝗢𝗡𝗡𝗘𝗖𝗧𝗘𝗗 𝗦𝗨𝗖𝗖𝗘𝗦𝗦𝗙𝗨𝗟𝗟𝗬! 🚀  
║  🦄 𝗙𝗜𝗥𝗦𝗧 𝗦𝗧𝗘𝗣 𝗖𝗢𝗠𝗣𝗟𝗘𝗧𝗘𝗗!  
╚════════════════════════╝

📌 𝙉𝙀𝙓𝙏 𝙎𝙏𝙀𝙋𝙎: 𝘾𝙊𝙉𝙁𝙄𝙂𝙐𝙍𝙀 𝙔𝙊𝙐𝙍 𝘽𝙊𝙏 𝙊𝙉 𝙏𝘼𝙇𝙆𝘿𝙊𝙑𝙀  

➊ *𝘾𝙤𝙥𝙮 & 𝙋𝙖𝙨𝙩𝙚 𝙔𝙤𝙪𝙧 𝙎𝙀𝙎𝙎𝙄𝙊𝙉_𝙄𝘿* 
   └ 𝗬𝗼𝘂𝗿 𝗦𝗘𝗦𝗦𝗜𝗢𝗡_𝗜𝗗 𝗶𝘀 𝗿𝗲𝗾𝘂𝗶𝗿𝗲𝗱 𝘁𝗼 𝗮𝘂𝘁𝗵𝗲𝗻𝘁𝗶𝗰𝗮𝘁𝗲 𝘆𝗼𝘂𝗿 𝗯𝗼𝘁.  
   └ 𝗢𝗽𝗲𝗻 TalkDove @ https://host.talkdrove.com/  
   └ 𝗟𝗼𝗴𝗶𝗻/𝗖𝗿𝗲𝗮𝘁𝗲 𝘁𝗼 𝘆𝗼𝘂𝗿 𝗮𝗰𝗰𝗼𝘂𝗻𝘁 𝘁𝗵𝗲𝗻 𝗰𝗹𝗶𝗰𝗸 𝗼𝗻 𝘁𝗵𝗲 𝗽𝗹𝘂𝘀 𝗶𝗰𝗼𝗻 (+) 𝗮𝗻𝗱 𝘀𝗰𝗿𝗼𝗹𝗹 𝘁𝗶𝗹𝗹 𝘆𝗼𝘂 𝘀𝗲𝗲 𝗼𝗿𝗲𝗸𝗶 𝘃2 𝗯𝗲𝘁𝗮.
   
➋ *𝙀𝙣𝙩𝙚𝙧 𝙮𝙤𝙪𝙧 𝙎𝙀𝙎𝙎𝙄𝙊𝙉_𝙄𝘿* 
   └ 𝗦𝗰𝗿𝗼𝗹𝗹 𝗱𝗼𝘄𝗻 𝘁𝗼 *“Put your SESSION_ID here.”*  
   └ 𝗣𝗮𝘀𝘁𝗲 𝗬𝗼𝘂𝗿 **𝗦𝗘𝗦𝗦𝗜𝗢𝗡_𝗜𝗗** 𝗶𝗻𝘀𝗶𝗱𝗲 𝘁𝗵𝗲 𝗶𝗻𝗽𝘂𝘁 𝗳𝗶𝗲𝗹𝗱.  

➌ *𝙎𝙚𝙩 𝙖 𝙋𝙧𝙚𝙛𝙞𝙭 𝙛𝙤𝙧 𝙔𝙤𝙪𝙧 𝘽𝙤𝙩*  
   └ 𝗜𝗻 𝘁𝗵𝗲 *“Enter your desired prefix for bot”* 𝗳𝗶𝗲𝗹𝗱, 𝘁𝘆𝗽𝗲 𝗮 𝘀𝗶𝗴𝗻 𝗹𝗶𝗸𝗲 '!', '.', '#', 𝗼𝗿 𝗮𝗻𝘆 𝗰𝗵𝗮𝗿𝗮𝗰𝘁𝗲𝗿 𝗼𝗳 𝘆𝗼𝘂𝗿 𝗰𝗵𝗼𝗶𝗰𝗲.  

➍ *𝘼𝙙𝙙 𝘼𝙙𝙢𝙞𝙣𝙨 𝙩𝙤 𝙏𝙝𝙚 𝘽𝙤𝙩*  
   └ 𝗙𝗶𝗻𝗱 *“The phone numbers of the users who you want to be admin for the bot”*  
   └ 𝗘𝗻𝘁𝗲𝗿 𝗮𝗱𝗺𝗶𝗻 𝗽𝗵𝗼𝗻𝗲 𝗻𝘂𝗺𝗯𝗲𝗿(𝘀) 𝗶𝗻 𝗜𝗻𝘁𝗲𝗿𝗻𝗮𝘁𝗶𝗼𝗻𝗮𝗹 𝗳𝗼𝗿𝗺𝗮𝘁 𝗲.𝗴. 234xxxxxxxxxx, 91xxxxxxxxxx 

➎ *𝙎𝙚𝙩 𝘽𝙤𝙩 𝙏𝙮𝙥𝙚 (𝙋𝙪𝙗𝙡𝙞𝙘 / 𝙋𝙧𝙞𝙫𝙖𝙩𝙚)*  
   └ 𝗖𝗵𝗼𝗼𝘀𝗲 *Public* (𝗮𝗻𝘆𝗼𝗻𝗲 𝗰𝗮𝗻 𝘂𝘀𝗲 𝗶𝘁) 𝗼𝗿 *Private* (𝗼𝗻𝗹𝘆 𝘁𝗵𝗲 𝗯𝗼𝘁 𝗻𝘂𝗺𝗯𝗲𝗿 𝗰𝗮𝗻 𝘂𝘀𝗲 𝗶𝘁).  

➏ *𝙎𝙚𝙩 𝙎𝙩𝙞𝙘𝙠𝙚𝙧 𝙋𝙖𝙘𝙠 𝘼𝙪𝙩𝙝𝙤𝙧* 
   └ 𝗘𝗻𝘁𝗲𝗿 𝘆𝗼𝘂𝗿 𝗱𝗲𝘀𝗶𝗿𝗲𝗱 𝗮𝘂𝘁𝗵𝗼𝗿 𝗻𝗮𝗺𝗲 𝗳𝗼𝗿 𝘀𝘁𝗶𝗰𝗸𝗲𝗿𝘀.  

➐ *𝘿𝙚𝙥𝙡𝙤𝙮 𝙔𝙤𝙪𝙧 𝘽𝙤𝙩!*  
   └ 𝗖𝗹𝗶𝗰𝗸 *"Deploy Bot"* 𝘁𝗼 𝘀𝘁𝗮𝗿𝘁 𝘆𝗼𝘂𝗿 𝗯𝗼𝘁 𝗼𝗻 𝗧𝗮𝗹𝗸𝗗𝗼𝘃𝗲! 🎉  

━━━━━━━━━━━━━━━━━━━━━━  
💡 𝙉𝙀𝙀𝘿 𝙃𝙀𝙇𝙋?  
📌 *𝗬𝗼𝘂𝗧𝘂𝗯𝗲:* https://www.youtube.com/@Thugnf1cent  
📌 *𝗢𝘄𝗻𝗲𝗿:* https://wa.me/2347079059033  
📌 *𝗚𝗶𝘁𝗛𝘂𝗯 𝗥𝗲𝗽𝗼:* https://github.com/OTAKUSYNTAX/OREKI_V2_BETA  
📌 *𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 𝗖𝗵𝗮𝗻𝗻𝗲𝗹:* https://whatsapp.com/channel/0029VaoOiuwDp2QH070eTE01  

━━━━━━━━━━━━━━━━━━━━━━  
✅ 𝗬𝗢𝗨 𝗔𝗥𝗘 𝗡𝗢𝗪 𝗥𝗘𝗔𝗗𝗬 𝗧𝗢 𝗗𝗘𝗣𝗟𝗢𝗬 𝗢𝗥𝗘𝗞𝗜!  
🔥 𝗦𝘁𝗮𝗿𝘁 𝘆𝗼𝘂𝗿 𝗯𝗼𝘁 𝗮𝗻𝗱 𝗲𝗻𝗷𝗼𝘆 𝘁𝗵𝗲 𝗲𝘅𝗽𝗲𝗿𝗶𝗲𝗻𝗰𝗲! 🔥  
`;

                    let sessionzz = `${JSON.stringify(session)}`;
                    await Pair_Code_By_Venocyber_Tech.sendMessage(Pair_Code_By_Venocyber_Tech.user.id, { text: sessionzz });
                    await Pair_Code_By_Venocyber_Tech.sendMessage(Pair_Code_By_Venocyber_Tech.user.id, { text: VENOCYBER_MD_TEXT });

                    await delay(100);
                    await Pair_Code_By_Venocyber_Tech.ws.close();
                    removeFile('./temp/' + id);
                } else if (connection === "close" && lastDisconnect?.error?.output?.statusCode !== 401) {
                    console.log("Reconnecting...");
                    await delay(10000);
                    VENOCYBER_MD_PAIR_CODE(retryCount + 1);
                }
            });
        } catch (err) {
            console.error("Service restarted due to error:", err);
            removeFile('./temp/' + id);
            if (!res.headersSent) res.send({ code: "Service Unavailable" });
        }
    }

    return VENOCYBER_MD_PAIR_CODE();
});

module.exports = router;