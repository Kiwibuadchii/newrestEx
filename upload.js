const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // ใช้ __dirname เพื่อเข้าถึงโฟลเดอร์ภายในโปรเจค หรือใช้เส้นทางแบบสัมบูรณ์
    const destinationPath = path.join(__dirname, 'uploads'); 
    cb(null, destinationPath); // กำหนดตำแหน่งปลายทางที่ต้องการบันทึกไฟล์
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // ตั้งชื่อไฟล์ใหม่
  }
});

const uploadmulter = multer({ storage: storage });

module.exports = uploadmulter;