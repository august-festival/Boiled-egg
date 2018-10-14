"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("board", [
      {
        teamIdx: 1,
        name: '첫번째 보드',
        boardType: 'TEAM',
        visibilityType: 'PRIVATE'
      },
      {
        userIdx: 1,
        name: '개인용 보드',
        boardType: 'USER',
        visibilityType: 'PRIVATE'
      },
    ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("board", null, {});
  }
};