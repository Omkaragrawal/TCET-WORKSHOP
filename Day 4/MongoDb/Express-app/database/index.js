const mongodb = require('mongodb')

async function connectDatabase() {
    try {
        const mongoClient = new mongodb.MongoClient(process.env.mongo_uri);
        const databaseConnection = await mongoClient.connect().db('tcet_database');
        console.log("DB connected successfully");
        return databaseConnection;
    } catch (error) {
        console.log(error.message);
        throw error;
    }
}

module.exports.default = connectDatabase();