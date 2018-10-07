"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("list", [
      {
        board_idx: 1,
        name: "todo",
        displayOrder: 1
      },
      {
        board_idx: 1,
        name: "wip",
        displayOrder: 2
      },
      {
        board_idx: 1,
        name: "done",
        displayOrder: 3
      },
      {
        board_idx: 2,
        name: "개인보드리스트",
        displayOrder: 1
      },
    ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("list", null, {});
  }
};