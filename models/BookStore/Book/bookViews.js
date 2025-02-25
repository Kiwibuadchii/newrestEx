const mongoose = require('mongoose');

const BookViewSchema = new mongoose.Schema({
    book_id:{type:String},
    customer_id:{type:String},
    // category:{type:String},
    views_count:{type:Number},
    // suppllier_name:{type:String},
    // order_id:{type:String},
    // product_code:{type:String},
    // update_at:{type:Date,default:Date.now}
});

module.exports = mongoose.model('BookView', BookViewSchema);