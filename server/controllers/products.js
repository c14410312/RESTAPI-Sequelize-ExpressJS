const products = require('../models').products;

module.exports = {

	//create a new product
	
	//list all available products
	list(req, res) {
		return products
		.findAll({
			attributes: ['title', 'price']
		}).then(prods => res.status(201).send(prods))
		.catch(err => res.status(400).send(err));
	},
};
