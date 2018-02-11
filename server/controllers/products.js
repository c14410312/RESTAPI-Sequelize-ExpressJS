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

	//update item by id
	update(req, res){
		return products
		.findById(req.params.id)
		.then(products => {
			if(!products){
				return res.status(404).send({message: 'product not found'});
			}

			return products
				.update({
					title: req.query.title || products.title,
				})
				.then(() => res.status(200).send(products))
				.catch((err) => res.status(400).send(error));
		})
		.catch((err) => res.status(400).send(err));
	},

	//delete a product from the product table
	destroy(req, res) {
		  return products
		    .findById(req.params.id)
		    .then(prod => {
			          if (!prod) {
					          return res.status(400).send({
							            message: 'product Not Found',
							          });
					        }
			          return prod
			            .destroy()
			            .then(() => res.status(204).send())
			            .catch(error => res.status(400).send(error));
			        })
		    .catch(error => res.status(400).send(error));
	},
};
