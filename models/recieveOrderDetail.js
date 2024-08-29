const mongoose = require('mongoose');


const recieveDetailSchema = new mongoose.Schema({
    work_order_id:{type:String, required:true},
    prod_code:{type:String},
    re_expected_date:{type:Date},
    qty_total_length:{type:Number},
    qty_per_tag:{type:Number}

})

module.exports = mongoose.model('RecieveDetail', recieveDetailSchema);