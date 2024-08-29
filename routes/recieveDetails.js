const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');

const recieveOrder = require('../models/recieveOrderDetail');


router.post('/', async (req, res) => {
    try {
        let data = (await recieveOrder.create(req.body))

        await data.save()
        res.status(200).json(data)
        console.log(req.body,"Body saved");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
router.get('/', async  (req, res)=> {
    try {
        const data = await recieveOrder.find({}) 
        res.status(200).json(data)
        
    } catch (error) {
        res.status(500).json({ message: error.message });

    }
})
router.get('/:id', async (req, res) => {
    try {
        // Find the product by ID
        const product = await recieveOrder.findById(req.params.id);

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
        const data = await recieveOrder.updateOne(req.params,req.body)
 

        // await product.save()
        res.status(200).json(data)
        console.log(req.body,"Body saved");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const data = await recieveOrder.findByIdAndDelete({_id: req.params.id});
        res.status(200).json({ message: "Delete completed" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;