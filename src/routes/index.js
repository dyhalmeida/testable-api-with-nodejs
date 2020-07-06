const { Router } = require('express');
const productsRoute = require('./products');

const router = Router();

router.use('/products', productsRoute)

router.get('/', (req, res) => {
    res.json({ message: 'Testable api with nodejs' });
});

module.exports = router;