const mongoose = require('mongoose');
const { MONGO_DB } = process.env;

let cacheDb = null;

module.exports = connecToDB = async() => {
    if(cacheDb == null) {
        console.log("No cacheada");
        return cacheDb = await mongoose.createConnection(MONGO_DB,{
            bufferCommands: false,
            bufferMaxEntries: 0 
        });
    } else {
        console.log("Ya Cacheada");
        return cacheDb;
    }
}