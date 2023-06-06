const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('weather')
        .setDescription('Fetch the current weather conditions')
        .addStringOption(option =>
            option.setName('location')
                .setDescription('Enter the location')
                .setRequired(true)
        ),
    async execute(interaction) {
        const location = interaction.options.getString('location');

        try {
            const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=724ae0c9ed674a5693f90025230606&q=${encodeURIComponent(location)}`);
            const { temp_c, feelslike_c, humidity, condition } = response.data.current;

            const embed = {
                title: `Current Weather in ${location}`,
                description: condition.text,
                fields: [
                    { name: 'Temperature', value: `${temp_c}°C` },
                    { name: 'Feels Like', value: `${feelslike_c}°C` },
                    { name: 'Humidity', value: `${humidity}%` },
                ],
                color: 0x0099ff,
            };

            await interaction.reply({ embeds: [embed] });
        } catch (error) {
            console.error(error);
            await interaction.reply('An error occurred while fetching the weather information.');
        }
    },
};
