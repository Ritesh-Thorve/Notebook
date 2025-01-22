const connectDB = require('./db');
const express = require('express');
const app = express()
const PORT = 5000;

app.use(express.json());

connectDB();

// app.get('/', function (req, res) { 
//   res.send('Hello World');
// })

app.use('/api/auth', require('./routes/auth') );
app.use('/api/notes', require('./routes/notes') );

app.listen(PORT, () =>{
    console.log(`Server is running on port http://localhost:${PORT}`)
})