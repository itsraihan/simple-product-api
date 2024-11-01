const express = require('express');
const productRoutes = require('./routes/product.router.cjs');
const { initDb } = require('./models/index.cjs');

const app = express();

app.use(express.json());
app.use('/api', productRoutes);

app.get('/', (req, res) => {
  res.json({
    message: 'Simple Products API'
  });
});

app.use((_req, res, _next) => {
  res.status(404).json({ message: "Resource not found" });
});

initDb();  // Sync database

module.exports = app;
