// utils.js

const fs = require('fs');
const path = require('path');
const Image = require('../models/upload'); // นำเข้าโมเดล Image

// ฟังก์ชันสำหรับจัดการการอัปโหลดและบันทึกไฟล์ภาพ
async function saveImage(req,res) {
  try {
     // ตรวจสอบว่ามีไฟล์หรือไม่
     if (!req.file) {
        return res.status(400).send('No file uploaded.');
      }
  
      // กำหนดเส้นทางปลายทางใหม่สำหรับเก็บไฟล์ใน public/images
      const destinationPath = path.join(__dirname, '../uploads');
      const filePath = path.join(destinationPath, req.file.filename);
  
      // ตรวจสอบว่าโฟลเดอร์ public/images มีอยู่หรือไม่ ถ้าไม่มีให้สร้างใหม่
      if (!fs.existsSync(destinationPath)) {
        fs.mkdirSync(destinationPath, { recursive: true }); // recursive: true จะสร้างโฟลเดอร์ทั้งหมดในเส้นทางถ้ายังไม่มี
      }
  
      // ย้ายไฟล์จากตำแหน่งที่ multer เก็บ (uploads) ไปยังตำแหน่งใหม่ (public/images)
      fs.renameSync(req.file.path, filePath);
  
      // สร้างเอกสาร Image ในฐานข้อมูล
      const imageFile = new Image({
        image_name: req.file.filename,
        image_path: `files/${req.file.filename}`, // บันทึกตำแหน่งไฟล์ที่ถูกต้องหลังจากย้ายแล้ว
      });
      const saveImg = await imageFile.save();
      res.status(200).json(saveImg);

  } catch (error) {
    throw new Error('Error saving image: ' + error.message);
  }
}

module.exports = { saveImage };
