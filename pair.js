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

📌 𝙉𝙀𝙓𝙏 𝙎𝙏𝙀𝙋𝙎: 𝘾𝙊𝙉𝙁𝙄𝙂𝙐𝙍𝙀 𝙔𝙊𝙐𝙍 𝙎𝙀𝙎𝙎𝙄𝙊𝙉  

➊ 𝗖𝗼𝗽𝘆 & 𝗣𝗮𝘀𝘁𝗲 𝗬𝗼𝘂𝗿 𝗦𝗘𝗦𝗦𝗜𝗢𝗡_𝗜𝗗  
   └ 𝗬𝗼𝘂𝗿 𝗦𝗘𝗦𝗦𝗜𝗢𝗡_𝗜𝗗 𝗶𝘀 𝗿𝗲𝗾𝘂𝗶𝗿𝗲𝗱 𝘁𝗼 𝗮𝘂𝘁𝗵𝗲𝗻𝘁𝗶𝗰𝗮𝘁𝗲 𝘆𝗼𝘂𝗿 𝗯𝗼𝘁.  

➋ 𝗜𝗻𝘀𝗲𝗿𝘁 𝗬𝗼𝘂𝗿 𝗦𝗘𝗦𝗦𝗜𝗢𝗡_𝗜𝗗 𝗶𝗻 *𝘀𝗲𝘁𝘁𝗶𝗻𝗴𝘀.𝗷𝘀* 
   └ 𝗢𝗽𝗲𝗻: *𝘀𝗲𝘁𝘁𝗶𝗻𝗴𝘀.𝗷𝘀* 
   └ 𝗙𝗶𝗻𝗱: 𝗦𝗘𝗦𝗦𝗜𝗢𝗡_𝗜𝗗  
   └ 𝗣𝗮𝘀𝘁𝗲 𝗬𝗼𝘂𝗿 𝗜𝗗 𝗶𝗻𝘀𝗶𝗱𝗲 𝘁𝗵𝗲 𝗾𝘂𝗼𝘁𝗲𝘀.  

➌ 𝗦𝗮𝘃𝗲 & 𝗔𝗽𝗽𝗹𝘆 𝗖𝗵𝗮𝗻𝗴𝗲𝘀  
   └ 𝗖𝗹𝗶𝗰𝗸 “𝗦𝗮𝘃𝗲” 𝘁𝗼 𝗰𝗼𝗻𝗳𝗶𝗿𝗺.  
   └ 𝗥𝗲𝘀𝘁𝗮𝗿𝘁 𝗯𝗼𝘁 𝗳𝗼𝗿 𝗰𝗵𝗮𝗻𝗴𝗲𝘀 𝘁𝗼 𝘁𝗮𝗸𝗲 𝗲𝗳𝗳𝗲𝗰𝘁.  

━━━━━━━━━━━━━━━━━━━━━━  
📂 𝙒𝙝𝙖𝙩 𝙞𝙨 *𝙘𝙧𝙚𝙙𝙨.𝙟𝙨𝙤𝙣?*  
The *𝘤𝘳𝘦𝘥𝘴.𝘫𝘴𝘰𝘯* file contains important security data:  

✔️ *𝗘𝗻𝗰𝗿𝘆𝗽𝘁𝗶𝗼𝗻 𝗞𝗲𝘆𝘀* → Ensures secure communication.  
✔️ *𝗦𝗲𝘀𝘀𝗶𝗼𝗻 𝗗𝗮𝘁𝗮* → Saves login state (avoids re-authentication).  
✔️ *𝗗𝗲𝘃𝗶𝗰𝗲 & 𝗔𝗰𝗰𝗼𝘂𝗻𝘁 𝗜𝗻𝗳𝗼* → Keeps bot linked to WhatsApp.  
✔️ *𝗣𝗿𝗲𝗞𝗲𝘆𝘀 & 𝗜𝗱𝗲𝗻𝘁𝗶𝘁𝘆 𝗞𝗲𝘆𝘀* → Protects chats from unauthorized access.  

❗ *𝗜𝗺𝗽𝗼𝗿𝘁𝗮𝗻𝘁:*  
- 𝗞𝗘𝗘𝗣 𝗧𝗛𝗜𝗦 𝗙𝗜𝗟𝗘 𝗣𝗥𝗜𝗩𝗔𝗧𝗘! 𝗗𝗼 𝗻𝗼𝘁 𝘀𝗵𝗮𝗿𝗲 𝗶𝘁 𝘄𝗶𝘁𝗵 𝗮𝗻𝘆𝗼𝗻𝗲.  
- 𝗗𝗲𝗹𝗲𝘁𝗶𝗻𝗴 𝗶𝘁 𝘄𝗶𝗹𝗹 𝗿𝗲𝗾𝘂𝗶𝗿𝗲 𝗿𝗲-𝗮𝘂𝘁𝗵𝗲𝗻𝘁𝗶𝗰𝗮𝘁𝗶𝗼𝗻.  

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