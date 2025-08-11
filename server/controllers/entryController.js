const Entry = require('../models/Entry');

exports.getEntries= async (req, res) => {
    try {
        const entries = await Entry.find(); 
        res.join(entries);
    }catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createEntry = async (req, res) => {
    try {
        const {title, content} = req.body; 
        const newEntry = new Entry({ title, content });
        await newEntry.save(); 
        res.status(201).json(newEntry);
    }catch (err) {
        res.status(400).json({ error: err.message});
    }
};