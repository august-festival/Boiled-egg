"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("team", [
      {
        name: "첫번째 팀",
        visibilityType: "PRIVATE"
      },
    ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("team", null, {});
  }
};