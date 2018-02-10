'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    details: DataTypes.HSTORE,
    created_at: DataTypes.DATE,
    deleted_at: DataTypes.DATE
  }, {
  	createdAt: false,
	updatedAt: false
  });

  users.associate = (models) => {
	  users.hasMany(models.purchases, {
	  	foreignKey: 'user_id',
		onDelete: 'CASCADE',
	  });
  }
  return users;
};
