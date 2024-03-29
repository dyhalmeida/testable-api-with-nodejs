const Product = require("../../../src/models/products");

describe('Routes: Products', () =>{

    let request;
    let app;

    before(async () => {
        app = await setupApp();
        request = supertest(app);
    });

    after(async () => {
        await app.database.connection.close();
    });

    const defaultProduct = {
        name: 'Default name',
        description: 'Default description',
        price: 100
    };

    const expectedProduct = {
        __v: 0,
        _id: '56cb91bdc3464f14678934ca',
        name: 'Default name',
        description: 'Default description',
        price: 100
    }

    beforeEach(async () => {
        await Product.deleteMany();
        const product = await Product(defaultProduct);
        product._id = '56cb91bdc3464f14678934ca';
        return await product.save();
    });

    afterEach(async () => {
        await Product.deleteMany();
    })

    describe('GET /products', () => {
        it('should return a list of products', done => {

            request.get('/products').end((err, res) => {
                console.log(res.body)
                expect(res.body).to.eql([expectedProduct]);
                done(err);
            });

        });
    });



});