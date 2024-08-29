const mongoose = require('mongoose');


const DeliverOrderSchema = new mongoose.Schema({
    prod_code:{type:String},
    work_order_id:{type:String},
    delivery_date:{type:Date,default:Date.now},
    delivery_status:{type:String,default:'Pending'}
});

module.exports = mongoose.model('DeliveryOrder', DeliverOrderSchema);