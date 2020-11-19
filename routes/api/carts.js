const express = require("express");
const asyncHandler = require("express-async-handler");

const { Product } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async function (req, res, next){
    const cart = await Cart.findAll();
    return res.json({ cart })
}));

router.post(
	'/',
	asyncHandler(async (req, res, next) => {
		// let { url, description, userId } = req.body;
		const cart = await Cart.create(req.body);
        return res.json({ cart });
	})
);

module.exports = router