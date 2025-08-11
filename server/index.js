const express = require('express'); 
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('API running successfully'));

const startServer = () => {
    app.listen(PORT, () => console.log(`Server speaking on ${PORT}`));
};

console.log("MONGO_URI from env:", process.env.MONGO_URI);
if (process.env.MONGO_URI) {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log('MongoDB connected');
            startServer();
        })
        .catch(err => {
            console.error('MongoDB connection failed:', err.message);
            startServer();
        });
} else {
    console.warn('⚠️ No MONGO_URI in .env — starting server without database.');
    startServer();
}
