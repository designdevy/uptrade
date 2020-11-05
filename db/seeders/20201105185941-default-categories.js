'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      {category: "Deals", sub_cat: ['On Sale', 'Lower than anywhere else', 'Featured']},
      {category: "Apparel", sub_cat: ['Mens', 'Womens', 'Child', 'Tops', 'Bottoms', 'Shoes']},
      {category: "Electronics", sub_cat: ['Games', 'Video/Photography', 'Movies', 'Cell Phones & Smart Watches', 'TV & Video']},
      {category: "Appliances", sub_cat: ['Refridgeration', 'Washer/Dryer', 'Cooking']},
      {category: "Automotive", sub_cat: ['Used', 'New', 'Parts', 'Sports/Exotic']},
      {category: "Rarities", sub_cat: ['Rare Find', 'Antiques/Vintage', 'Unusual', 'Misc']},
    ]);
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories');
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
