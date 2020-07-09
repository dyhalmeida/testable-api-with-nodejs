const express = require('express');
const routes = require('./routes');
const database = require('./config/datasource');

const configureExpress = () => {
    const app = express();
    app.use(express.json());
    app.use('/', routes);
    app.database = database;
    return app;
}
module.exports = async () => {
    const app = configureExpress();
    await app.database.connect();
    return app;
}