"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("work", [
      {
        card_idx: 1,
        workType: "CHECKLIST",
        name: "settings"
      },
      {
        card_idx: 2,
        workType: "CHECKLIST",
        name: "settings"
      },
    ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("work", null, {});
  }
};