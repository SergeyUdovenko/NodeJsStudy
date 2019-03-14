module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [
      {
        "id": 1,
        "name": "Product 1",
        "price": 1
      },
      {
        "id": 2,
        "name": "Product 2",
        "price": 22
      },
      {
        "id": 3,
        "name": "Product 3",
        "price": 33
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
