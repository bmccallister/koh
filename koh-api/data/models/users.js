// Users
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UsersSchema   = new Schema({
    user: String,
    firstname: String,
    lastname: String
});

module.exports = mongoose.model('Users', UsersSchema);