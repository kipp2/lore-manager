const OpenAI = require('openai'); 
const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

exports.generateLore = async (req, res) => {
    try {
        const { playstyle } = req.body;
        const prompt = `Generate a short, engaging game lore for a player with playstyle: ${playstyle}.`;

        const completion = await client.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: [{ role: 'user', content: prompt }]
        });

        res.json({ lore: completion.choices[0].message.content });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
