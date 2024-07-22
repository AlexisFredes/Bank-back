const express = require('express');
const { createTransaction, getTransactionsByAccountId } = require('../controllers/transactionController');
const router = express.Router();

router.post('/', createTransaction);
router.get('/:accountId', getTransactionsByAccountId);

module.exports = router;
