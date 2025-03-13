const PastebinAPI = require('pastebin-js'),
    pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL');

const { makeid } = require('./id');
const express = require('express');
const fs = require('fs');
const path = require('path');
const pino = require("pino");
let router = express.Router();
const {
    default: Venocyber_Tech,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("@whiskeysockets/baileys");

function removeFile(FilePath) {
    if (!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true });
}

router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;

    async function VENOCYBER_MD_PAIR_CODE(retryCount = 0) {
        if (retryCount > 3) {
            console.log("Max retry limit reached.");
            if (!res.headersSent) res.send({ code: "Service Unavailable" });
            return;
        }

        const { state, saveCreds } = await useMultiFileAuthState('./temp/' + id);
        try {
            let Pair_Code_By_Venocyber_Tech = Venocyber_Tech({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
                },
                printQRInTerminal: false,
                logger: pino({ level: "fatal" }).child({ level: "fatal" }),
                browser: ["Ubuntu", "Chrome", "20.0.04"]
            });

            if (!Pair_Code_By_Venocyber_Tech.authState.creds.registered) {
                await delay(1500);
                num = num.replace(/[^0-9]/g, '');
                const code = await Pair_Code_By_Venocyber_Tech.requestPairingCode(num);

                if (!res.headersSent) {
                    res.send({ code });
                }
            }

            Pair_Code_By_Venocyber_Tech.ev.on('creds.update', saveCreds);
            Pair_Code_By_Venocyber_Tech.ev.on("connection.update", async (s) => {
                const { connection, lastDisconnect } = s;

                if (connection === "open") {
                    await delay(5000);
                    let sessionData;
                    try {
                        let rawData = fs.readFileSync(path.join(__dirname, 'temp', id, 'creds.json'));
                        sessionData = JSON.parse(rawData);
                    } catch (err) {
                        console.error("Error reading session file:", err);
                        return;
                    }

                    let session = {
    noiseKey: sessionData.noiseKey,  
    pairingEphemeralKeyPair: sessionData.pairingEphemeralKeyPair,  
    signedIdentityKey: sessionData.signedIdentityKey,  
    signedPreKey: sessionData.signedPreKey,  
    registrationId: sessionData.registrationId,  
    advSecretKey: sessionData.advSecretKey,  

    // **Additional Keys for Better Session Management**  
    processedHistoryMessages: sessionData.processedHistoryMessages || [],  
    timestamp: Date.now(),  
    nextPreKeyId: sessionData.nextPreKeyId || null,  
    firstUnuploadedPreKeyId: sessionData.firstUnuploadedPreKeyId || null,  
    keyId: sessionData.keyId || null,  
    deviceId: sessionData.deviceId || "unknown",  
    phoneId: sessionData.phoneId || "unknown",  
    identityId: sessionData.identityId || null,  
    registered: sessionData.registered ?? false,  
    backupToken: sessionData.backupToken || null,  
    registration: sessionData.registration || {},  
    pairingCode: sessionData.pairingCode || "",  
    me: sessionData.me || {},  

    // **Account & Security Settings**  
    accountSyncCounter: sessionData.accountSyncCounter || 0,  
    accountSettings: sessionData.accountSettings || { unarchiveChats: false },  
    isAuthenticated: sessionData.isAuthenticated ?? false,  
    connectionState: sessionData.connectionState || "pending",  

    // **Error Handling & Recovery**  
    retryCount: sessionData.retryCount || 0,  
    lastError: sessionData.lastError || null,  
    reconnectAttempts: sessionData.reconnectAttempts || 0,  

    // **Performance Monitoring & Debugging**  
    latency: sessionData.latency || null,  
    dataUsage: sessionData.dataUsage || { sent: 0, received: 0 },  
    logs: sessionData.logs || [],  

    // **Newly Added Missing Keys**  
    signalIdentities: sessionData.signalIdentities || [],  // Stores identity keys  
    account: sessionData.account || {  
        details: "",  
        accountSignatureKey: "",  
        accountSignature: "",  
        deviceSignature: ""  
    },  
    platform: sessionData.platform || "unknown",  
    lastAccountSyncTimestamp: sessionData.lastAccountSyncTimestamp || null,  
    myAppStateKeyId: sessionData.myAppStateKeyId || null  
};

// **Helper function to generate timestamps**
session.timestamp = Date.now();

// **Helper function to generate timestamps**
session.timestamp = Date.now();

                    let VENOCYBER_MD_TEXT = `
╔══════════════════╗
║ 𝙾𝚁𝙴𝙺𝙸 𝙲𝙾𝙽𝙽𝙴𝙲𝚃𝙴𝙳 𝚂𝚄𝙲𝙲𝙴𝚂𝚂𝙵𝚄𝙻𝙻𝚈! 🚀
║ 𝚈𝙾𝚄 𝙷𝙰𝚅𝙴 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 𝚃𝙷𝙴 𝙵𝙸𝚁𝚂𝚃 𝚂𝚃𝙴𝙿 𝚃𝙾𝚆𝙰𝚁𝙳𝚂 𝙳𝙴𝙿𝙻𝙾𝚈𝙼𝙴𝙽𝚃.
╚══════════════════╝

╔═👨‍💻 𝙳𝙴𝙿𝙻𝙾𝚈𝙼𝙴𝙽𝚃 𝚂𝚃𝙴𝙿𝚂 👨‍💻══╗
║ 📌 𝚂𝚃𝙴𝙿 1:
║  𝙲𝙾𝙿𝚈 𝙰𝙽𝙳 𝙿𝙰𝚂𝚃𝙴 𝚈𝙾𝚄𝚁 𝚂𝙴𝚂𝚂𝙸𝙾𝙽 𝙸𝙳
║  (𝙰𝚁𝚁𝙰𝚈 𝙾𝙵 𝙽𝚄𝙼𝙱𝙴𝚁𝚂 𝙰𝙽𝙳 𝙻𝙴𝚃𝚃𝙴𝚁𝚂 𝚂𝙴𝙽𝚃 𝙸𝙽 𝚈𝙾𝚄𝚁 𝙳𝙼)
║  𝙸𝙽𝚃𝙾 𝚃𝙷𝙴 𝚂𝙿𝙰𝙲𝙴 𝙿𝚁𝙾𝚅𝙸𝙳𝙴𝙳 𝙻𝙰𝙱𝙴𝙻𝙴𝙳 𝚂𝙴𝚂𝚂𝙸𝙾𝙽 𝙸𝙳 𝚃𝙷𝙴𝙽 𝙸𝙽𝙿𝚄𝚃 𝚈𝙾𝚄𝚁 𝚂𝙴𝚂𝚂𝙸𝙾𝙽 𝙸𝙳 𝙸𝙽𝚂𝙸𝙳𝙴 "" 𝙸𝙽 𝚃𝙷𝙴 𝚂𝙴𝚃𝚃𝙸𝙽𝙶𝚂.𝙹𝚂 𝙵𝙸𝙻𝙴
║
║ 📌 𝚂𝚃𝙴𝙿 2:
║  𝙲𝙻𝙸𝙲𝙺 𝙾𝙽 𝚂𝙰𝚅𝙴 𝚃𝙾 𝙰𝙿𝙿𝙻𝚈 𝙲𝙷𝙰𝙽𝙶𝙴𝚂.
╚═════════════════════════╝

╔═════💡 𝙽𝙴𝙴𝙳 𝙷𝙴𝙻𝙿? 💡═══╗
║ 🎥 𝚈𝙾𝚄𝚃𝚄𝙱𝙴: https://www.youtube.com/@Thugnf1cent
║ 👤 𝙾𝚆𝙽𝙴𝚁: https://wa.me/2347079059033
║ 📑 𝚁𝙴𝙿𝙾: https://github.com/OTAKU-SYNTAX/OREKI_V2_BETA
║ 👥 𝙲𝙷𝙰𝙽𝙽𝙴𝙻: https://whatsapp.com/channel/0029VaoOiuwDp2QH070eTE01
╚══════════════════════╝
`;

                    let sessionzz = `${JSON.stringify(session, null, 2)}`;
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