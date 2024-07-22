const Account = require('../models/account');
const Transaction = require('../models/transaction');

exports.createTransaction = async (req, res) => {
  const { accountId, type, amount } = req.body;
  try {
    console.log(Account.get)
    const account = await Account.findByPk(accountId);
    if (!account) {
      return res.status(404).json({ error: 'Cuenta no encontrada' });
    }

    let newBalance;
    if (type.toUpperCase() === 'DEPOSIT') {
      newBalance = account.balance + amount;
    } else if (type.toUpperCase() === 'WITHDRAW') {
      newBalance = account.balance - amount;
    } else {
      return res.status(400).json({ error: 'Tipo de transaccion invalida' });
    }

    await account.update({ balance: newBalance });
    const transaction = await Transaction.create(req.body);
    res.status(201).json(transaction);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getTransactionsByAccountId = async (req, res) => {
  const { accountId } = req.params;
  try {
    const transactions = await Transaction.findAll({ where: { accountId } });
    res.json(transactions);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
