'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => 
	queryInterface.addColumn('purchases', 'updatedAt', Sequelize.DATE),

  down: (queryInterface /*, Sequelize*/) =>
    queryInterface.removeColumn('purchases', 'updatedAt'),
};
