const mongoose = require('mongoose');


const tagDetailSchema = new mongoose.Schema({
    prod_code:{type:String},
    qr_code_img:{type:String},
    qty_per_tag:{type:Number},
    work_order_id:{type:String},
    location_id:{type:String},
})

module.exports = mongoose.model('TagDetail', tagDetailSchema);
