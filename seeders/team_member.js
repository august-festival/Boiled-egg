"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("team_member", [
      {
        teamIdx: 1,
        userIdx : 1,
        roleType: "ADMIN",
      },
      {
        teamIdx: 1,
        userIdx : 2,
        roleType: "NORMAL",
      },
    ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("team_member", null, {});
  }
};