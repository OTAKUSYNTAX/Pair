const PastebinAPI = require('pastebin-js'),
    pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL');

const { makeid } = require('./id');
const express = require('express');
const fs = require('fs');
const path = require('path');
let router = express.Router();
const pino = require("pino");
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
                    };

                    let VENOCYBER_MD_TEXT = `
╔══════════════════╗
║ ✅ SESSION CREATED SUCCESSFULLY!
╚══════════════════╝

🔑 *Your Session ID:*
\`\`\`${JSON.stringify(session, null, 2)}\`\`\`

📌 *DEPLOYMENT STEPS:*
1️⃣ Copy your Session ID (above).
2️⃣ Paste it into your bot's configuration file (settings.js).
3️⃣ Save and restart your bot.

⚠️ *Keep your session ID safe! Do not share it with others.*
`;

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