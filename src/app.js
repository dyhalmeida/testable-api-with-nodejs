const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Testable api with nodejs' });
});

module.exports = app;