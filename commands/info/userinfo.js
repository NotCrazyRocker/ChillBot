const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('userinfo')
        .setDescription('Retrieve information about a user')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('Select the user')
                .setRequired(true)
        ),
    async execute(interaction) {
        const user = interaction.options.getUser('user');

        const embed = {
            color: 0x0099ff,
            title: 'User Information',
            fields: [
                { name: 'Username', value: user.username },
                { name: 'User ID', value: user.id },
                { name: 'Account Creation Date', value: user.createdAt.toString() },
            ],
            thumbnail: {
                url: user.displayAvatarURL({ dynamic: true, format: 'png', size: 1024 }),
            },
        };

        await interaction.reply({ embeds: [embed] });
    },
};
