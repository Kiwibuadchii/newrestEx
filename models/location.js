const mongoose = require('mongoose');


const locationSchema = new mongoose.Schema({
    location_code:{type:String},
    location_detail:{type:String}
})

module.exports = mongoose.model('Location', locationSchema);
