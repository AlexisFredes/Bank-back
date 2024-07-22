const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const Transaction = sequelize.define('Transaction', {
  accountId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
});

module.exports = Transaction;
