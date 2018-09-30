"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("board_favorite", [
      {
        user_idx: 1,
        board_idx: 1
      },
    ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("board_favorite", null, {});
  }
};