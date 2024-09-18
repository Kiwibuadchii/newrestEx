const mongoose = require('mongoose');


const itemRecieveSchema = new mongoose.Schema({
    prod_code:{type:String},
    re_order_id:{type:String},
    qty_per_tag:{type:Number},
})

module.exports = mongoose.model('ItemRecieve', itemRecieveSchema);