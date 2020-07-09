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

    describe('GET /products', () => {
        it('should return a list of products', done => {

            request.get('/products').end((err, res) => {
                const [product] = res.body;
                expect(product).to.eql(defaultProduct);
                done(err);
            });

        });
    });



});