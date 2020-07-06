describe('Routes: Products', () =>{

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