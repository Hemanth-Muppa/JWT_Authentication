const mongoose = require('mongoose');
require('dotenv').config();

exports.connect = ()=> {
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=> {
        console.log("Database connection established")
    })
    .catch((err) => {
        console.log("connection issues with database");
        process.exit(1);
    })
}