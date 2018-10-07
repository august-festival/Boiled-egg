"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("team_member", [
      {
        team_idx: 1,
        user_idx : 1,
        roleType: "ADMIN",
      },
      {
        team_idx: 1,
        user_idx : 2,
        roleType: "NORMAL",
      },
    ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("team_member", null, {});
  }
};