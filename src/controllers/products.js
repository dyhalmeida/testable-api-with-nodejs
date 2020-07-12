class ProductsController {
    
    constructor(Product) {
        this.Product = Product;
    }

    async index(req, res) {
        const products = await this.Product.find({});
        res.json(products);
    }

}

module.exports = ProductsController;