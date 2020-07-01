/* File to handle the schema of the model */

// Dependencies
const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, 'Please add a text describing the transaction']
    },
    amount: {
        type: Number,
        required: [true, 'Please add an amount']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// export the model
module.exports = mongoose.model('Transaction', TransactionSchema);