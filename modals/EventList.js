const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    event:{
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    start_date: {
        type: Date,
        default: Date.now()
    },
    end_date: {
        type: Date,
        default: Date.now()
    },
    capacity:{
        type:Number,
        required: true
    }
})

const Event = mongoose.model("event", eventSchema);
module.exports = Event;