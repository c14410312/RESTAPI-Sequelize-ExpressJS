'use strict';
module.exports = (sequelize, DataTypes) => {
  const purchase_items = sequelize.define('purchase_items', {
    purchase_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    quantity: DataTypes.INTEGER,
    state: DataTypes.STRING
  }, {
	  createdAt:false,
	  updatedAt:false
  });


    purchase_items.associate = (models) => {
	purchase_items.hasMany(models.products, {
		foreignKey: 'product_id',
		as: 'product_key',
	});
    	purchase_items.hasMany(models.purchases, {
		foreignKey: 'purchase_id',
		as: 'purchase_key',	
	});

    }

  return purchase_items;
};
