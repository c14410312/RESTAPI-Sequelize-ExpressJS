'use strict';
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
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
      user_key: {
	      type: Sequelize.INTEGER,
	      onDelete: 'CASCADE',
	      references: {
		      model: 'users',
		      key: 'id',
		      as: 'user_key',
	      },
      },
    }),
  down: (queryInterface/*, Sequelize*/) =>
    queryInterface.dropTable('users'),
};
