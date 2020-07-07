const { Router } = require('express');
const ProductsController = require('../controllers/products');

const router = Router();

const productsController = new ProductsController();
router.get('/', productsController.index);

module.exports = router;