const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
const tagDetail = require('../models/tagDetail');
const QRCode = require('qrcode');
const Product = require('../models/Product');

router.post('/', async (req, res) => {
    try {
        let dataProduct = await Product.findOne({product_code:req.body.prod_code})
        dataProduct.qty_total_length += Number(req.body.qty_per_tag)
        let data = (await tagDetail.create(req.body))
        const url_id = data.id 
        data.qr_code_img = await QRCode.toDataURL(url_id)
            await data.save()
            await dataProduct.save()
            
        res.status(200).json(data)
        console.log(dataProduct,"Body saved");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
router.get('/', async  (req, res)=> {
    try {
    
            const data = await tagDetail.find({}) 
            res.status(200).json(data)
        
        
    } catch (error) {
        res.status(500).json({ message: error.message });

    }
})
router.get('/generateQR', async (req, res) => {
    try {

        const data = await Product.findOne({product_code:"P-1"})
        res.status(200).json(data)
    } catch (err) {
      console.error('Error generating QR code:', err);
      res.status(500).send('Internal Server Error');
    }
  });

router.get('/:id', async (req, res) => {
    try {
        // Find the product by ID
        const product = await tagDetail.findById(req.params.id);

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
        const data = await tagDetail.updateOne(req.params,req.body)
 

        // await product.save()
        res.status(200).json(data)
        console.log(req.body,"Body saved");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
router.delete('/:id', async (req, res) => {
    try {
        const data = await tagDetail.findByIdAndDelete({_id: req.params.id});
        res.status(200).json({ message: "Delete completed" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;





