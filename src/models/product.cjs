const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.cjs');

const Product = sequelize.define('products', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  specs: {
    type: DataTypes.JSON,  // Storing specs as a JSON object
    allowNull: false,
  },
});

module.exports = Product;
