const mongoose = require('mongoose');


const qrCodeSchema = new mongoose.Schema({
    prod_code:{type:String},
    prod_name:{type:String},
    qty_per_tag:{type:Number},
    work_order_id:{type:String},
    location_id:{type:String},
})

module.exports = mongoose.model('qrCode', qrCodeSchema);