const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/Notebook';

const connectDB = async () => {
    await mongoose.connect(mongoURI)
    console.log('MongoDB connected');
}

module.exports = connectDB;