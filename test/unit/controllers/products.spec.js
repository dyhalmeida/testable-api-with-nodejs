const ProductsController = require('../../../src/controllers/products');
const sinon = require('sinon');
const Product = require('../../../src/models/products');

describe('Controllers: Products', () => {

    const defaultProduct = [{
        name: 'Default name',
        description: 'Default description',
        price: 100
    }];

    describe('index(): products', () => {
        it('should return a lits of products', async () => {

            /**
             * req: É um objeto fake da requisição enviada pela rota do express.
             * res: É um objeto fake da requisição enviada pela rota do express.
             * 
             * Note que a propriedade json do objeto res recebe um spy do Sinon, 
             * como vimos anteriormente, no capítulo de test doubles, os spies permitem gravar 
             * informações como quantas vezes uma função foi chamada, quais parâmetros ela recebeu e etc. 
             * O que será perfeito em nosso caso de uso pois precisamos validar que a função 
             * json do objeto res está sendo chamada com os devidos parâmetros.
             */
            const req = {};
            const res = {
                json: sinon.spy()
            }

            Product.find = sinon.stub();

            Product.find.withArgs({}).resolves(defaultProduct);

            const productsController = new ProductsController(Product);
            await productsController.index(req, res);
            sinon.assert.calledWith(res.json, defaultProduct);

        });

        it('should return 400 when an error occurs', async () => {
            const req = {};
            const res = {
                json: sinon.spy(),
                status: sinon.stub()
            }
            res.status.withArgs(400).returns(res);
            Product.find = sinon.stub();
            Product.find.withArgs({}).rejects({ message: 'Error' });

            const productsController = new ProductsController(Product);
            await productsController.index(req, res);
            sinon.assert.calledWith(res.json, 'Error');
        })
    });

});