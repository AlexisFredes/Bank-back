const Account = require('../models/account');

exports.createAccount = async (req, res) => {
  try {
    const { name, initialBalance, accountNumber } = req.body;
    if (initialBalance < 0) {
      return res.status(400).json({ error: 'El balance inicial no puede ser negativo' });
    }
    const account = await Account.create({ name, balance: initialBalance, accountNumber });
    res.status(201).json(account);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAccountBalance = async (req, res) => {
  try {
    const account = await Account.findByPk(req.params.id);
    if (account) {
      res.json({ balance: account.balance });
    } else {
      res.status(404).json({ error: 'Cuenta no encontrada' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.validateAccount = async (req, res) => {
    try {
      const { name, accountNumber } = req.body;
      const account = await Account.findOne({ where: { name, accountNumber } });
      if (account) {
        res.json({ valid: true, data: account });
      } else {
        res.json({ valid: false });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
