const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
const issue = require('../models/itemIssue');
const tagDetail = require('../models/tagDetail')
const product = require('../models/Product')
router.post('/', async (req, res) => {
    try {
        // let order = await deliverOrder.findOne().sort({_id:-1})
        let data = (await issue.create(req.body))
        const dataTag = await tagDetail.findById(data.tag_id)
        const dataProduct = await product.findOne({product_code:dataTag.prod_code})
        if(dataTag.qty_per_tag > data.iss_qty){
            
            dataTag.qty_per_tag -= Number(data.iss_qty)
            dataProduct.qty_total_length -= Number(data.iss_qty)
            dataTag.save() 
            dataProduct.save()
            await data.save()
        }
        else{
            res.send('Product not enough')
        }
        
        
        res.status(200).json(data)
        console.log(req.body,"Body saved");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
router.get('/', async  (req, res)=> {
    try {
    
            const data = await issue.find({}) 
            res.status(200).json(data)
        
        
    } catch (error) {
        res.status(500).json({ message: error.message });

    }
})
router.get('/:id', async (req, res) => {
    try {
        // Find the product by ID
        const product = await issue.findById(req.params.id);

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
        const data = await issue.updateOne(req.params,req.body)
 

        // await product.save()
        res.status(200).json(data)
        console.log(req.body,"Body saved");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
router.delete('/:id', async (req, res) => {
    try {
        const data = await issue.findByIdAndDelete({_id: req.params.id});
        res.status(200).json({ message: "Delete completed" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;