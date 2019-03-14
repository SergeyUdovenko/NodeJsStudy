module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      {
        title: "lorem",
        product_id: 1
      },
      {
        title: "ipsum",
        product_id: 1
      },
      {
        title: "dolorem",
        product_id: 1
      },
      {
        title: "dolorem",
        product_id: 2
      },
      {
        title: "123ewqwe",
        product_id: 2
      },
      {
        title: " qwe qwe qw qw wq ",
        product_id: 3
      },
      {
        title: "asd asd as asd sdf",
        product_id: 3
      },
      {
        title: " zxczxc zx czxc zx zx ",
        product_id: 3
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
