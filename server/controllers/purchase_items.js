const purchase_items = require('../models').purchase_items;

module.exports = {
	//create a purchase_item
	create(req, res){
		return purchase_items
			.create({
				product_id: req.query.productid,
				price: req.query.price,
				quantity: req.query.quantity,
				state: req.query.state,
			})
			.then(purchase_item => res.status(201).send(purchase_item))
			.catch(err => res.status(400).send(err));
	},
};
