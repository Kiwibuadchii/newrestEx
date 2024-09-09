const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
const Image = require('../models/upload')
const uploadmulter = require('../upload');
const fs = require('fs');
const path = require('path');

router.post('/qr',uploadmulter.single("image") ,async (req, res) => {
    try {
        if(!req.file){
             res.status(400).json({ message: 'No file uploaded' });
        }

        // Save the file to the desired location
        const destinationPath = path.join(__dirname, 'uploads');
        const filePath = `${destinationPath}/${req.file.filename}`;

        // Check if the destination directory exists
        if (!fs.existsSync(destinationPath)) {
            fs.mkdirSync(destinationPath);
        }

        // Rename the file and save it to the destination directory
        fs.renameSync(req.file.path, filePath);

        const imageFile = Image({
            image_name: req.file.filename,
            image_path: filePath,
        })

        const saveImg = await imageFile.save()

        res.status(200).json(saveImg)
    } catch (error) {
        // Handle the error and send a response
        console.error(error);
        res.status(500).json({ message: error.message });
    }
});

module.exports = router