// Dependencies
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const cors = require('cors');

// Get env file
dotenv.config({
    path: './config/config.env'
});

// Import database file and coonect with DB
const connectDB = require('./config/db');
connectDB();

// Import all routes here
const transactionsRoute = require('./routes/transactions');

// init express
const app = express();

// body parser middleware
app.use(express.json());

// CORS
app.use(cors());

// Morgan 
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// ROUTE Settings
app.use('/api/v1/transactions', transactionsRoute)

// listen to port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} on PORT ${PORT}`.yellow.bold);
})