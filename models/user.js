const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    user_id:{type:String, required:true},
    user_fname:{type:String},
    user_lname:{type:String},
    user_email:{type:String},
    user_password:{type:String,required:true},
    user_dept:{type:String},
    user_image:{type:String},
    user_created_at:{type:Date, default:Date.now},
    user_updated_at:{type:Date, default:Date.now}
})

module.exports = mongoose.model('User', userSchema);