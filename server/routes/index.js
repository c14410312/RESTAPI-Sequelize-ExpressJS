const usersController = require('../controllers').users;
const productsController = require('../controllers').products;

module.exports = (app) => {

	app.get('/api', (req, res) => res.status(200).send({
		message: 'Welcome to the users API',
	}));

	//user gets/posts
	app.post('/api/users', usersController.create);
	app.get('/api/users', usersController.list);

	//products gets/posts
	app.get('/api/products', productsController.list);
};
