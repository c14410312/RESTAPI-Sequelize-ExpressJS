const usersController = require('../controllers').users;
const productsController = require('../controllers').products;
const purchasesController = require('../controllers').purchases;
const purchaseItemsController = require('../controllers').purchase_items;

module.exports = (app) => {

	app.get('/api', (req, res) => res.status(200).send({
		message: 'Welcome to the users API',
	}));

	//user gets/posts
	app.post('/api/users', usersController.create);
	app.get('/api/users', usersController.list);

	//products gets/posts
	app.get('/api/products', productsController.list);
	app.get('/api/products:id', productsController.listId);
	app.post('/api/products', productsController.create);

	//purchases gets/posts
	app.post('/api/purchases', purchasesController.create);

	//purchase_items gets/posts
	app.post('/api/purchase_items', purchaseItemsController.create);
	
};
