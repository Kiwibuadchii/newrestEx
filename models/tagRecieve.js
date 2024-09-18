const mongoose = require('mongoose');


const tagRecieveSchema = new mongoose.Schema({
    recieve_id:{type:String, required:true},
    qty_per_tag:{type:String},
    

})

module.exports = mongoose.model('TagRecieve', tagRecieveSchema);
