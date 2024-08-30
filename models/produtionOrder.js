const mongoose = require('mongoose');


const productionSchema = new mongoose.Schema({
    prod_code:{type:String},
    prod_daate:{type:Date}
})

module.exports = mongoose.model('Production', productionSchema);
