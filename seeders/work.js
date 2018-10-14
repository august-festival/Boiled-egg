"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("work", [
      {
        cardIdx: 1,
        workType: "CHECKLIST",
        name: "settings"
      },
      {
        cardIdx: 2,
        workType: "CHECKLIST",
        name: "settings"
      },
    ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("work", null, {});
  }
};