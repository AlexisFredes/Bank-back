const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const Account = sequelize.define('Account', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  accountNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  balance: {
    type: DataTypes.FLOAT,
    defaultValue: 0.0
  }
});

module.exports = Account;
