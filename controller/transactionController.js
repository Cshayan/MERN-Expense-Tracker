/* Controller file to handle all transaction operation */

// Get the model
const Transaction = require('../model/Transaction');

/* Method - GET
 *  Endpoint - api/v1/transactions
 *  Description - Gets all the transactions
 */
exports.getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.find();

        // return a response
        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server error'
        });
    }
}

/* Method - POST
 *  Endpoint - api/v1/transactions
 *  Description - Adds a new transaction
 */
exports.addTransactions = async (req, res, next) => {
    try {
        const transaction = await Transaction.create(req.body);

        // return a response
        return res.status(201).json({
            success: true,
            data: transaction
        });
    } catch (error) {
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(e => e.message);

            return res.status(400).json({
                success: false,
                error: messages
            });
        } else {
            return res.status(500).json({
                success: false,
                error: 'Server error'
            });
        }
    }
}

/* Method - DELETE
 *  Endpoint - api/v1/transactions/:id
 *  Description - Deletes a specific transaction
 */
exports.deleteTransactions = async (req, res, next) => {
    try {
        const transaction = await Transaction.findById(req.params.id);

        if (!transaction) {
            return res.status(400).json({
                success: false,
                message: 'No transaction found'
            });
        }

        await transaction.remove();

        // return resposne
        return res.status(200).json({
            success: true,
            data: {}
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server error'
        });
    }
}