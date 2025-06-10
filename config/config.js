const fs = require('fs');
require('dotenv').config();

module.exports = {
  development: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
    dialectOptions: {
      ssl: process.env.DB_SSL === 'true'
    }
  },
  test: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
    dialectOptions: {
      ssl: process.env.DB_SSL === 'true'
    }
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
    dialectOptions: {
      ssl: process.env.DB_SSL === 'true'
    }
  }
};
