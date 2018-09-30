"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("comment", [
      {
        user_idx: 1,
        card_idx: 1,
        comment: "팀 ADMIN 첫번째 댓글",
      },
    ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("comment", null, {});
  }
};