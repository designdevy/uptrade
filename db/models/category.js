'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    category: {
      allowNull: false,
      type: DataTypes.STRING
    },
    sub_cat: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    } 
  }, 
  {
    defaultScope: {
      attributes: {},
    },
  });
  Category.associate = function(models) {
    // associations can be defined here
  };

  Category.getCategoryByName = async function(category) {
    //category must be obj like this {category: "value"}
    return await Category.scope("defaultScope").findAll({ 
      where: category
    });
  };

  return Category;
};