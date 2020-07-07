const ProductsController = require('../../../src/controllers/products');
const sinon = require('sinon');

describe('Controllers: Products', () => {

    const defaultProduct = [{
        name: 'Default name',
        description: 'Default description',
        price: 100
    }];

    describe('index(): products', () => {
        it('should return a lits of products', () => {

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

            const productsController = new ProductsController();
            productsController.index(req, res);

            expect(res.json.called).to.be.true;
            expect(res.json.calledWith(defaultProduct)).to.be.true;

        });
    });

});