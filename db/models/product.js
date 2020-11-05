'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    img: {
      type: DataTypes.STRING,
    },
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    category: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    price: {
      type: DataTypes.FLOAT,
    },
    user_id: {
      type: DataTypes.INTEGER
    }
  }, {});
  Product.associate = function(models) {
    Product.belongsTo(models.User, { foreignKey: 'user_id' });
    // associations can be defined here
  };
  return Product;
};