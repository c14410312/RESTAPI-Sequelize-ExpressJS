const products = require('../models').products;

module.exports = {

	//create a new product
	create(req, res){
		return products
			.create({
				title: req.query.title,
				price: req.query.price,
				tags: req.query.tags,
			})
			.then(product => res.status(201).send(product))
			.catch(err => res.status(400).send(err));
	},

	//list all available products
	list(req, res) {
		return products
		.findAll({
			attributes: ['title', 'price']
		}).then(prods => res.status(201).send(prods))
		.catch(err => res.status(400).send(err));
	},

	//list by id
	listId(req, res){
		return products
		.find({
			where: {id: req.params.id},
			attibutes: ['title', 'price']
		}).then(prod => {
			if(!prod){
				return res.status(404).send({message: 'product not found'});
			}

			return res.status(200).send(prod);
		})
		.catch(err => res.status(400).send(err));
	},
};
