var mongoose = require('mongoose')
var userSchema = new mongoose.Schema({
    name: String,
    phone: String

}) 
var user = mongoose.model('user', userSchema, 'users')
var database = mongoose.connection;

module.exports.user = user
module.exports.database  = database