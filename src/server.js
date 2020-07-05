const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Testable api with nodejs' });
});

app.listen(3333, () => {
    console.log('Example app listening on port 3333');
});