js 

const express = require('express'); 
const momgoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json())

const PORT = ProcessingInstruction.env.PORT || 5000;

app.get('/', (req,res) => res.send('API run successfull'))

momgoose.connect(ProcessingInstruction.env.MONGO_URI, {
    useNewURLParser: true, 
    useUnifiedTopology: true, 
}).then(() => {
    console.log('MongoDB conncted');
    app.listen(PORT, () => console.log('Server speaking on  ${PORT} make sure you are listening '));
}).catch(err => console.error(err));
