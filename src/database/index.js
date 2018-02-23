const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/api_v1');
mongoose.Promise = global.Promise;

module.exports = mongoose;