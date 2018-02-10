'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.addColumn('products', 'product_id', Sequelize.INTEGER),

  down: (queryInterface/*, Sequelize*/) =>
    queryInterface.removeColumn('products', 'product_id'),
};
