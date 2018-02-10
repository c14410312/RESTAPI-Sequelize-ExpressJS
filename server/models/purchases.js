'use strict';
module.exports = (sequelize, DataTypes) => {
  var purchases = sequelize.define('purchases', {
	created_at: DataTypes.DATE,
	name: DataTypes.STRING,
	address: DataTypes.STRING,
	state: DataTypes.STRING,
	zipcode: DataTypes.INTEGER,
	user_id: DataTypes.INTEGER
  }, {
	createdAt:false,
	updateAt:false
  });

  purchases.associate = (models) => {
	purchase.belongsTo(models.purchase_items, {
		foreignKey: 'purchase_id',
		onDelete: 'CASCADE'
	});

	purchase.hasMany(models.users, {
		foreignKey: 'user_id',
		as: 'user_key',
	});
  }
  return purchases;
};
