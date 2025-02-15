const connectDB = require('./db');
const express = require('express');
const app = express()
const PORT = 9000;
const cors = require('cors');

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/auth', require('./routes/auth') );
app.use('/api/notes', require('./routes/notes') );

app.listen(PORT, () =>{
    console.log(`Note-Book Server is running on port http://localhost:${PORT}`)
})