const mongoose = require('mongoose');


const itemRecieveSchema = new mongoose.Schema({
    user_id:{type:String},
    re_actual_date:{type:Date},
})

module.exports = mongoose.model('ItemRecieve', itemRecieveSchema);