const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    phone:{type:String},
    in_recieve:{type:String},
    age:{type:Number},
    // suppllier_name:{type:String},
    // order_id:{type:String},
    // product_code:{type:String},
    // update_at:{type:Date,default:Date.now}
});

module.exports = mongoose.model('Customer', CustomerSchema);