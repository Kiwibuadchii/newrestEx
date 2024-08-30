const mongoose = require('mongoose');


const itemRecieveSchema = new mongoose.Schema({
    work_order_id:{type:String},
    recieve_qty:{type:Number},
    re_actual_date:{type:Date},
    qr_imgage:{type:String},
    qr_id:{type:String}
})

module.exports = mongoose.model('ItemRecieve', itemRecieveSchema);