const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
const BookViewApi = require("../../models/BookStore/Book/bookViews")

router.get('/', async  (req, res)=> {
    try {
        const data = await BookViewApi.find({}) 
        res.status(200).json(data)
        
    } catch (error) {
        res.status(500).json({ message: error.message });

    }
})
router.get('/:id', async (req, res) => {
    try {
        // Find the product by ID
        const product = await BookViewApi.findById(req.params.id);

        // If the product is not found, return a 404 status code
        // if (!product) {
        //     return res.status(404).json({ message: 'Product not found' });
        // } 

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
router.post('/', async (req, res) => {
    try {
        // let product = await BookApi.findOne().sort({_id:-1})
        let data = (await BookViewApi.create(req.body))
        // if(product?.product_code != null){
        //     let textSplit = product.product_code.split("-")
        //     let newCode = `P-${Number(textSplit[1])+1}`
        //     data.product_code = newCode
        //     await data.save()

        // }
        // else{
        //     let newCode = `P-1`
        //     data.product_code = newCode
        //     await data.save()

        // }

        res.status(200).json(data)
        console.log(req.body,"Body saved");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
router.put('/:id', async (req, res) => {
    try {
        // console.log(req.params.id);
        // console.log(req.body);
        
        // const product = await Product.findByIdAndUpdate(req.params.id, req.body);
        const data = await BookViewApi.updateOne(req.params,req.body)
 

        // await product.save()
        res.status(200).json(data)
        console.log(req.body,"Body saved");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
router.delete('/:id', async (req, res) => {
    try {
        const data = await BookViewApi.findByIdAndDelete({_id: req.params.id});
        res.status(200).json({ message: "Delete completed" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
module.exports = router;