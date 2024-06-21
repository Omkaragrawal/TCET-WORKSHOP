const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: String,
    email: String,
    password: {
        type: String,
        required: true,
        set: (value) => String(value).toLowerCase(),
    }

});

module.exports = userSchema;