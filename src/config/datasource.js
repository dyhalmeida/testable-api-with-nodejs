const mongoose = require('mongoose');
const mongodbUrl = process.env.MONGODB_URL || 'mongodb://localhost:27017/shop';

const connect = () => mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = {
    connect,
    connection: mongoose.connection
}