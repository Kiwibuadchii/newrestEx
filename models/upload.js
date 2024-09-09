const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
    image_name: { type: String, required: true },
    image_path: { type: String, required: true },
  
})

module.exports = mongoose.model('Image', ImageSchema);