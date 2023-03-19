const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017/short-url')
const db = mongoose.connection;
db.on('error', console.error.bind(console, "Problem in connection"));

db.on('open', function(){
    console.log('connected successfully to Mongo')
})
module.exports = db;