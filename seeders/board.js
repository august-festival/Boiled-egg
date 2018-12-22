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
      {
        userIdx: 4,
        name: '프라이빗 테스트 보드',
        boardType: 'USER',
        visibilityType: 'PRIVATE'
      },
      {
        userIdx: 4,
        name: '퍼블릭 테스트 보드',
        boardType: 'USER',
        visibilityType: 'PUBLIC'
      }
    ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("board", null, {});
  }
};