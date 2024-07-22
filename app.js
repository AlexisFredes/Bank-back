const express = require('express');
const cors = require('cors');
const sequelize = require('./config');
const accountRoutes = require('./routes/accountRoutes');
const transactionRoutes = require('./routes/transactionRoutes');

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Llave']
}));

app.use(express.json());

app.use('/accounts', accountRoutes);
app.use('/transactions', transactionRoutes);

const PORT = process.env.PORT || 8000;

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
