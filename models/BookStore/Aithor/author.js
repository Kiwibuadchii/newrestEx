const mongoose = require('mongoose');

const AuthSchema = new mongoose.Schema({
    name:{type:String},
    country:{type:String},
    writing_day:{type:Number},
    // qty:{type:Number},
    // suppllier_name:{type:String},
    // order_id:{type:String},
    // product_code:{type:String},
    // update_at:{type:Date,default:Date.now}
});

module.exports = mongoose.model('Author', AuthSchema);