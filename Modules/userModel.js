const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Email: {
        type: String,
        required:true,
        unique:true
    },

    Name: {
        type: String,
        required:true,
        unique:true
    },

    Password: {
        type: String,
        required:true,
        unique:true
    },

    Phonenumber: {
        type: Number,
        required:true,
        unique:true
    }
})

const user = mongoose.model('Users' , userSchema);
module.exports = user;