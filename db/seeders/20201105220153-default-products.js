'use strict';
let img1 = "https://external-preview.redd.it/fN_i7hB1aHKRqo_wWwDRN8bbAETLkk8LRKdrwzmeerQ.jpg?auto=webp&s=dfd14a6d798d048c421fd81d3ec9a39e96b5f7f6"
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [
      {img: img1, title: "Leprechaun Flute", description: "This here is a leprechaun flute, passed down from generation to generation, from my great great grandfather who's Irish.", category: ['On Sale', 'Lower than anywhere else', 'Rare Find', 'Antiques/Vintage'], price: 300000.00, user_id: 1 },
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
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
