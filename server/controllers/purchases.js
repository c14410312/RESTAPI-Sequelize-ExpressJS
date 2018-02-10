const purchases = require('../models').purchases;

module.exports = {
	
	//create a new purchase
	create(req, res){
		return purchases
			.create({
				name: req.query.name,
				address: req.query.address,
				state: req.query.state,
				zipcode: req.query.zipcode,
				user_id: req.query.userid,
			}).then(purchase => res.status(201).send(purchase))
			.catch(err => res.status(400).send(err));
	},
}
