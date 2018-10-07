"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("comment", [
      {
        userIdx: 1,
        cardIdx: 1,
        comment: "팀 ADMIN 첫번째 댓글",
      },
      {
        userIdx: 1,
        cardIdx: 2,
        comment: "개인보드 첫번째 댓글",
      },
    ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("comment", null, {});
  }
};