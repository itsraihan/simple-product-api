const express = require('express');
const { getProducts, createProduct, updateProduct } = require('../controllers/product.controller.cjs');

const router = express.Router();

router.get('/products', getProducts);
router.post('/products', createProduct);
router.put('/products/:id', updateProduct);

module.exports = router;
