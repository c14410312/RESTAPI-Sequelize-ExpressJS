'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => 
		queryInterface.addColumn('users','details',Sequelize.HSTORE),
  down: (queryInterface/*, Sequelize*/) =>
    		queryInterface.removeColumn('users', 'password'),
};
