'use strict';
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      
      product_key: {
	type: Sequelize.INTEGER,
	onDelete: 'CASCADE',
	references: {
		model: 'products',
		key: 'id',
		as: 'product_key',
	},
      },
    }),
  down: (queryInterface /*, Sequelize*/) =>
    queryInterface.dropTable('products'),
};
