const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    prod_name:{type:String},
    qty_total_length:{type:Number,default:0},
    location_id:{type:String},
    lot_no:{type:String},
    suppllier_name:{type:String},
    order_id:{type:String},
    product_code:{type:String},
    update_at:{type:Date,default:Date.now}
});

module.exports = mongoose.model('Product', ProductSchema);