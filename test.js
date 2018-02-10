const Sequelize = require('sequelize');
const seq = new Sequelize('postgres://dbutler:password@localhost:5432/pgguide');

seq.authenticate()
.then(() => {
	console.log("successfull");
	const Product = seq.define("product", {});
	Product.findOne({
		attributes: ['title']
	}).then(prod => {
		console.log(prod.get("title"));
	});
}).catch(err => {
	console.log(err);
});

