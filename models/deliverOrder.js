const mongoose = require('mongoose');


const DeliverOrderSchema = new mongoose.Schema({
    user_id:{type:String},
    re_actual_date:{type:Date,default:Date.now},
    work_order_id:{type:String}
    // delivery_status:{type:String,default:'Pending'}
});

module.exports = mongoose.model('DeliveryOrder', DeliverOrderSchema);