const mongoose = require('mongoose');

const PromoSchema = new mongoose.Schema({
    title:{type:String},
    desc:{type:String},
    discount_type:{type:String},
    discount_value:{type:Number},
    admin_id:{type:String},
    // suppllier_name:{type:String},
    // order_id:{type:String},
    // product_code:{type:String},
    start_date:{type:Date,default:Date.now},
    end_date:{type:Date,default:Date.now},
    create_at:{type:Date,default:Date.now},
    update_at:{type:Date,default:Date.now}
});

module.exports = mongoose.model('Promotion', PromoSchema);