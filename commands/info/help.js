const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Gives a list of commands and how to use them.'),
    async execute(interaction) {
        const embed = {
            color: 0x0099ff,
            title: 'Bot Commands',
            description: 'Here are the available commands:',
            fields: [
                { name: '/ping', value: 'Pong!' },
                { name: '/userinfo [username]', value: 'Retrieve information about a user.' },
                { name: '/server', value: 'Display information about the server.' },
                { name: '/weather [location]', value: 'Fetch the current weather conditions (The location can be a city, state or country. Just not specific names like society name or shit...)' },
                { name: '/roll [number]', value: 'Simulate rolling a dice. The number is the sides the dice has.' },
                // Add more commands and descriptions here
            ],
        };

        await interaction.reply({ embeds: [embed] });
    },
};
