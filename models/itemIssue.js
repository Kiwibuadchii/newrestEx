const mongoose = require('mongoose');


const itemIssueSchema = new mongoose.Schema({
    tag_id:{type:String},
    iss_qty:{type:Number},
    issue_order_id:{type:String, required:true},

    
})

module.exports = mongoose.model('ItemIssue', itemIssueSchema);