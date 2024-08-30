const mongoose = require('mongoose');


const productionDetailSchema = new mongoose.Schema({
    prod_code:{type:String},
    expected_daate:{type:Date},
    production_order_id:{type:String},
    iss_qty:{type:Number},
})

module.exports = mongoose.model('ProductionDetail', productionDetailSchema);