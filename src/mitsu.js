const clientId = ''; // Place Your Bot Client ID
const DiscordRPC = require('discord-rpc');
const RPC = new DiscordRPC.Client({ transport: 'ipc' });

DiscordRPC.register(clientId);

async function setActivity() {
    if (!RPC) return;
    RPC.setActivity({
        details: `details`,
        state: `2. details`,
        startTimestamp: Date.now(),
        largeImageKey: 'image URL',
        largeImageText: `İmage Text`,
        smallImageKey: `Small İmage URL`,
        smallImageText: `Small İmage Text`,
        instance: false,
        buttons: [
            {
                label: `button label`,
                url: `https:/eyyo.com`,
            },
            {
                label: `button label`,
                url: `https://blabla.com`,
            }
        ]
    });
};

RPC.on('ready', async () => {
    setActivity(),

    setInterval(() => {
        setActivity();
    }, 15 * 1000)
});

RPC.login({ clientId }).catch(err => console.error(err));