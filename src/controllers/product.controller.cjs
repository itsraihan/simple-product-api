const { Product } = require('../models/index.cjs');

// GET: Fetch all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST: Add a new product
const createProduct = async (req, res) => {
  try {
    const { name, category, price, specs } = req.body;
    const newProduct = await Product.create({ name, category, price, specs });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// PUT: Update an existing product by ID
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, category, price, specs } = req.body;
    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    product.name = name;
    product.category = category;
    product.price = price;
    product.specs = specs;

    await product.save();
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getProducts, createProduct, updateProduct };
