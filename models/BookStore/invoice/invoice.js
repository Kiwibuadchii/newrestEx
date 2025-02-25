const mongoose = require('mongoose');

const InvoiceSchema = new mongoose.Schema({
    book_id:{type:String},
    qty:{type:String},
    customer_id:{type:String},
    price:{type:Number},
    admin_id:{type:String},
    payment:{type:String},
    // order_id:{type:String},
    // product_code:{type:String},
    date:{type:Date,default:Date.now},

});

module.exports = mongoose.model('Invoice', InvoiceSchema);