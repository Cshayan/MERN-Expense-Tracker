/* ROUTE file for transactions */

// Dependencies
const express = require('express');
const router = express.Router();

// Bring in the controller methods
const {
    getTransactions,
    addTransactions,
    deleteTransactions
} = require('../controller/transactionController');

// Route paths
router
    .route('/')
    .get(getTransactions)
    .post(addTransactions);

router
    .route('/:id')
    .delete(deleteTransactions);

// export route
module.exports = router;