const mongoose = require('mongoose');

const BooktSchema = new mongoose.Schema({
    title:{type:String},
    authid:{type:String},
    category:{type:String},
    qty:{type:Number},
    // suppllier_name:{type:String},
    // order_id:{type:String},
    // product_code:{type:String},
    // update_at:{type:Date,default:Date.now}
});

module.exports = mongoose.model('Book', BooktSchema);