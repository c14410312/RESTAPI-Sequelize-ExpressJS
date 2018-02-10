const users = require('../models').users;

module.exports = {

	//creates a new user
	create(req, res) {
	return users
		.create({
			email: req.query.email,
			password: req.query.password,
			})
			.then(user => res.status(201).send(user))
			.catch(error => res.status(400).send(error));
	},

	//lists all of the current users in the users table
	list(req, res){
		return users
		.findAll({
			attributes: ['email']
		})
		.then(users => res.status(201).send(users))
		.catch(err => res.status(400).send(err));
	},
};
