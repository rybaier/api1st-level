const mongoose = require("../Connection.js");

const LocationSchema = new mongoose.Schema({
    lat: Number,
    lng: Number,
    
});

const Location = mongoose.model("Location", LocationSchema)

module.exports=Location;
