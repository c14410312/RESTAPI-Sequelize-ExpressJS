'use strict';
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('purchases', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      created_at: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      purchase_key:{
	      type: Sequelize.INTEGER,
	      onDelete: 'CASCADE',
	      references: {
		      model: 'purchases',
		      key: 'id',
		      as: 'purchase_key',
	      },
      },
    }),
  down: (queryInterface /*, Sequelize*/) =>
    queryInterface.dropTable('purchases'),
};
