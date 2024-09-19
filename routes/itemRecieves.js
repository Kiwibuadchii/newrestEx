const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
const itemRecieve = require('../models/itemRecieve');
const deliverOrder = require('../models/deliverOrder');

router.post('/', async (req, res) => {
    try {
        // let order = await deliverOrder.findOne().sort({_id:-1})
        let data = (await itemRecieve.create(req.body))
        // if(order?.work_order_id != null){
        //     let textSplit = order.work_order_id.split("-")
        //     let newCode = `W-${Number(textSplit[1])+1}`
        //     data.work_order_id = newCode
        //     await data.save()
            
        // }
        // else{
        //     let newCode = `W-1`
        //     data.work_order_id = newCode
            await data.save()
            
        // }

        res.status(200).json(data)
        console.log(req.body,"Body saved");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/', async  (req, res)=> {
    try {
    
            // const data = await itemRecieve.find({}) 
            const details = await itemRecieve.find();

        // วนลูปและดึงข้อมูลจาก ProductionOrder โดยใช้ production_order_id จากแต่ละ detail
        const detailedResults = await Promise.all(details.map(async detail => {
            // ตรวจสอบว่า detail มี production_order_id ที่มีค่าหรือไม่
            if (detail.re_order_id) {
                const order = await deliverOrder.findById(detail.re_order_id);
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
        const product = await itemRecieve.findById(req.params.id);

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
        const data = await itemRecieve.updateOne(req.params,req.body)
 

        // await product.save()
        res.status(200).json(data)
        console.log(req.body,"Body saved");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
router.delete('/:id', async (req, res) => {
    try {
        const data = await itemRecieve.findByIdAndDelete({_id: req.params.id});
        res.status(200).json({ message: "Delete completed" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
