const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Testable api with nodejs' });
});

app.get('/products', (req, res) => {
    res.json([
        {
            name: 'Default name',
            description: 'Default description',
            price: 100
        }
    ]);
});

module.exports = app;