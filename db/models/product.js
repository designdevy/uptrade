'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    img: {
      type: DataTypes.STRING(5000),
    },
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING(5000),
    },
    category: {
      allowNull: false,
      type: DataTypes.STRING
    },
    subCategory: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    price: {
      type: DataTypes.FLOAT,
    },
    user_id: {
      type: DataTypes.INTEGER
    },
    cart_id: {
      type: DataTypes.INTEGER
    },
  }, {});
  Product.associate = function(models) {
    Product.belongsTo(models.User, { foreignKey: 'user_id' });
    Product.belongsTo(models.Cart, { foreignKey: 'cart_id' });
    // associations can be defined here
  };
  return Product;
};