class ProductsController {
    
    constructor(Product) {
        this.Product = Product;
    }

    async index(req, res) {
        try {
            const products = await this.Product.find({});
            res.json(products);
        } catch (error) {
            res.status(400).json(error.message);
        }
    }

}

module.exports = ProductsController;