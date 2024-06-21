const mongoose = require('mongoose');

async function connectDatabase() {
    try {
        const client = await mongoose.connect(process.env.mongo_uri);
        console.log("DB connected successfully");
        return client;

    } catch (error) {
        console.log(error.message);
        throw error;
    }
}

module.exports.default = connectDatabase();