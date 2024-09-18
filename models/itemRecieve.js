const mongoose = require('mongoose');


const itemRecieveSchema = new mongoose.Schema({
    prod_code:{type:String},
    re_order_id:{type:String},
})

module.exports = mongoose.model('ItemRecieve', itemRecieveSchema);