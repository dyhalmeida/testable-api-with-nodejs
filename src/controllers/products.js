class ProductsController {
    
    constructor() {}

    async index(req, res) {
        return res.json([{
            name: 'Default name',
            description: 'Default description',
            price: 100
        }])
    }

}

module.exports = ProductsController;