const express = require('express')
const app = express()

require('./server/routes')(app);

app.get('*', (req, res) => res.status(200).send({
	message: 'Welcome to the beginning',
}));

module.exports = app;
