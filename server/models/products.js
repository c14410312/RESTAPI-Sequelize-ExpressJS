'use strict';
module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    title: DataTypes.STRING,
    price: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    deleted_at: DataTypes.DATE,
    tags: DataTypes.STRING
  }, {
	  createdAt:false,
	  updatedAt:false
  });
  
  products.associate = (models) => {
	  products.belongsTo(models.purchase_items, {
		foreignKey: 'product_id',
		onDelete: 'CASCADE',
	});
      };
  return products;
};
