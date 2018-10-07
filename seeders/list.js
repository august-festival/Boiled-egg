"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("list", [
      {
        boardIdx: 1,
        name: "todo",
        displayOrder: 1
      },
      {
        boardIdx: 1,
        name: "wip",
        displayOrder: 2
      },
      {
        boardIdx: 1,
        name: "done",
        displayOrder: 3
      },
      {
        boardIdx: 2,
        name: "개인보드리스트",
        displayOrder: 1
      },
    ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("list", null, {});
  }
};