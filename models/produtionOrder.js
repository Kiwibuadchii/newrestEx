const mongoose = require('mongoose');


const productionSchema = new mongoose.Schema({
    user_id:{type:String},
    iss_expected_date:{type:Date},
    issue_order_id:{type:String},
})

module.exports = mongoose.model('Production', productionSchema);
