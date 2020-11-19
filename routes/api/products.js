const express = require("express");
const asyncHandler = require("express-async-handler");

const { Product, Cart } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async function (req, res, next){
    const products = await Product.findAll();
    return res.json({ products })
}));
router.put('/', asyncHandler(async function (req, res, next){
	console.log(req.body.id)
	const product = await Product.findByPk(req.body.id);
	// const cart = await Cart.create({
		
	// })
    return res.json({ product })
}));

router.post(
	'/',
	asyncHandler(async (req, res, next) => {
		// let { url, description, userId } = req.body;
		const product = await Product.create(req.body);
        return res.json({ product });
	})
);

module.exports = router