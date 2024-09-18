const mongoose = require('mongoose');


const recieveDetailSchema = new mongoose.Schema({
    recieve_order_id:{type:String, required:true},
    prod_code:{type:String},
    

})

module.exports = mongoose.model('RecieveDetail', recieveDetailSchema);