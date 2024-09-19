const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
const productionDetail = require('../models/productionOrderDetail');
const productionOrder = require('../models/produtionOrder')

router.post('/', async (req, res) => {
    try {
        let data = (await productionDetail.create(req.body))
            await data.save()
            
        res.status(200).json(data)
        console.log(req.body,"Body saved");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
router.get('/', async  (req, res)=> {
    try {
    
      // ค้นหาข้อมูลทั้งหมดจาก ProductionDetail
      const details = await productionDetail.find();

      // วนลูปและดึงข้อมูลจาก ProductionOrder โดยใช้ production_order_id จากแต่ละ detail
      const detailedResults = await Promise.all(details.map(async detail => {
          // ตรวจสอบว่า detail มี production_order_id ที่มีค่าหรือไม่
          if (detail.production_order_id) {
              const order = await productionOrder.findById(detail.production_order_id);
              // เพิ่มข้อมูล order ใน object detail ที่มีอยู่
              return {...detail.toObject(), order: order ? order.toObject() : null};
          } else {
              return {...detail.toObject(), order: null};
            }
        }));
        res.status(200).json(detailedResults)
        
    } catch (error) {
        res.status(500).json({ message: error.message });

    }
})
router.get('/:id', async (req, res) => {
    try {
        // Find the product by ID
        const product = await productionDetail.findById(req.params.id);

        // If the product is not found, return a 404 status code
        // if (!product) {
        //     return res.status(404).json({ message: 'Product not found' });
        // } 

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
router.put('/:id', async (req, res) => {
    try {
        // console.log(req.params.id);
        // console.log(req.body);
        
        // const product = await Product.findByIdAndUpdate(req.params.id, req.body);
        const data = await productionDetail.updateOne(req.params,req.body)
 

        // await product.save()
        res.status(200).json(data)
        console.log(req.body,"Body saved");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
router.delete('/:id', async (req, res) => {
    try {
        const data = await productionDetail.findByIdAndDelete({_id: req.params.id});
        res.status(200).json({ message: "Delete completed" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;