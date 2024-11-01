const sequelize = require('../config/database.cjs');
const Product = require('./product.cjs');

const initDb = async () => {
  await sequelize.sync();
  console.log('Database synchronized');
};

module.exports = { initDb, Product };
