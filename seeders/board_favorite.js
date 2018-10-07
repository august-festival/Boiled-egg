"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("board_favorite", [
      {
        userIdx: 1,
        boardIdx: 1
      },
    ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("board_favorite", null, {});
  }
};