const fs = require('fs');
const path = require('path');
const  uploadMulter  = require('../upload'); // นำเข้า multer ที่ตั้งค่าไว้ใน uploads
const Image = require('../models/upload'); // นำเข้าโมเดล Image
const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
const {saveImage}  = require('../function/upload_pic')

// Route สำหรับการอัปโหลดไฟล์
router.post('/qr', uploadMulter.single('image'),saveImage);

module.exports = router
