const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('roll')
        .setDescription('Simulate rolling a dice')
        .addIntegerOption(option =>
            option.setName('number')
                .setDescription('Specify the number of sides on the dice')
                .setRequired(true)
        ),
    async execute(interaction) {
        const sides = interaction.options.getInteger('number');

        if (sides <= 0) {
            return await interaction.reply('Invalid number of sides. Please provide a positive number.');
        }

        const result = Math.floor(Math.random() * sides) + 1;

        await interaction.reply(`You rolled a ${result} on a ${sides}-sided dice!`);
    },
};
