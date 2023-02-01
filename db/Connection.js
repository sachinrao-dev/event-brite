const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const mongooseDB = (uri)=>{
    return mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

module.exports = mongooseDB;
