const mongoose = require('mongoose');


const itemIssueSchema = new mongoose.Schema({
    tag_id:{type:String},
    iss_qty:{type:Number},
    iss_actual_date:{type:Date},
    iss_expected_date:{type:Date},
    issue_order_id:{type:String, required:true},

    
})

module.exports = mongoose.model('ItemIssue', itemIssueSchema);