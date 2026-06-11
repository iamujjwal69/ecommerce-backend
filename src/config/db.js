const { Sequelize } = require('sequelize');
const path = require('path');
require('dotenv').config();

const dbUrl = process.env.DATABASE_URL || process.env.DB_URL;
let sequelize;

if (dbUrl && dbUrl.startsWith('postgres')) {
  const isLocal = dbUrl.includes('localhost') || dbUrl.includes('127.0.0.1');
  sequelize = new Sequelize(dbUrl, {
    dialect: 'postgres',
    logging: false,
    dialectOptions: isLocal ? {} : {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  });
} else {
  sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, '../../ecommerce.sqlite'),
    logging: false,
  });
}

module.exports = sequelize;
