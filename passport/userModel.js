const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/passport-Data-jwt");

const userSchema = mongoose.Schema({
    userName: String,
    password: String
})

const User = mongoose.model('User', userSchema)

module.exports = User