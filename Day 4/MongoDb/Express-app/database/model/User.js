const mongoose = require('mongoose');
const UserSchema = require('../schema/User');

const userModel = mongoose.model('users', UserSchema);

module.exports = userModel;