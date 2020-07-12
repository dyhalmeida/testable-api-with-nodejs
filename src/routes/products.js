const { Router } = require('express');
const ProductsController = require('../controllers/products');
const Product = require('../models/products');

const router = Router();
const productsController = new ProductsController(Product);
router.get('/', (req, res) => productsController.index(req, res));

module.exports = router;