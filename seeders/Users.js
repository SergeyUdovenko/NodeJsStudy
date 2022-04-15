module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {"name": "Serhii", "type": "admin"},
      {"name": "Andrii", "type": "editor"},
      {"name": "Vasyl", "type": "editor"},
      {"name": "Anna", "type": "user"},
      {"name": "Katia", "type": "user"}

    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
