'use strict';
const models = require("../models/index.js")
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(models.token.tableName, 
              models.token.attributes);
    
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('token');
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
