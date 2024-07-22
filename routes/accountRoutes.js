const express = require('express');
const { createAccount, getAccountBalance, validateAccount } = require('../controllers/accountController');
const router = express.Router();

router.post('/', createAccount);
router.get('/:id/balance', getAccountBalance);
router.post('/validate', validateAccount);

module.exports = router;
