const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
const deliverOrder = require('../models/deliverOrder');


router.post('/', async (req, res) => {
    try {
        let alldata = await deliverOrder.find({})
        let order = await deliverOrder.findOne().sort({_id:-1})
        let data = (await deliverOrder.create(req.body))
        if (alldata.length != 0) {
            let textSplit = order.work_order_id.split("R");
            let currentNumber = Number(textSplit[1]); // แปลงเป็นตัวเลข
            let newNumber = (currentNumber + 1).toString().padStart(6, '0'); // บวก 1 และเติม 0 ข้างหน้าให้ครบ 6 หลัก
            let newCode = `R${newNumber}`; // สร้าง work_order_id ใหม่ในรูปแบบ R000001
            data.work_order_id = newCode;
            await data.save();
        }
        else{
            let newCode = `R000001`
            data.work_order_id = newCode
            await data.save()
            
        }

        res.status(200).json(data)
        console.log(req.body,"Body saved");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
router.get('/', async  (req, res)=> {
    try {
    
            const data = await deliverOrder.find({}) 
            res.status(200).json(data)
        
        
    } catch (error) {
        res.status(500).json({ message: error.message });

    }
})
router.get('/findwork', async  (req, res)=> {
    try {
       
            const product = await deliverOrder.findOne(req.query)
            console.log(req.query,"Product query");
            
            res.status(200).json(product)
       
        
    } catch (error) {
        res.status(500).json({ message: error.message });

    }
})
router.get('/:id', async (req, res) => {
    try {
        // Find the product by ID
        const product = await deliverOrder.findById(req.params.id);

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
        const data = await deliverOrder.updateOne(req.params,req.body)
 

        // await product.save()
        res.status(200).json(data)
        console.log(req.body,"Body saved");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
router.delete('/:id', async (req, res) => {
    try {
        const data = await deliverOrder.findByIdAndDelete({_id: req.params.id});
        res.status(200).json({ message: "Delete completed" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;