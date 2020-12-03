'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    user_id: DataTypes.INTEGER,
    product_id: DataTypes.ARRAY(DataTypes.STRING),
  }, {});
  Cart.associate = function(models) {
    Cart.belongsTo(models.User, { foreignKey: 'user_id' });
    // Cart.hasMany(models.Product, { foreignKey: 'cart_id' });
  };
  return Cart;
};