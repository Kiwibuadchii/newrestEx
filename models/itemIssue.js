const mongoose = require('mongoose');


const itemIssueSchema = new mongoose.Schema({
    production_id:{type:String},
    tag_id:{type:String},
    iss_qty:{type:Number},
    iss_actual_date:{type:Date},
    iss_expected_date:{type:Date},
    qr_imgage:{type:String},
    qr_id:{type:String}
})

module.exports = mongoose.model('ItemIssue', itemIssueSchema);