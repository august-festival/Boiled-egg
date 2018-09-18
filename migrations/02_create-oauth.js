"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('oauth_id', {
      oauth_idx: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: false,
      },
      // user_idx: {
      //   type: Sequelize.BIGINT.UNSIGNED,
      //   allowNull: false,
      //   references: {
      //     model: 'user',
      //     key: 'user_idx'
      //   },
      // },
      user_idx: {
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: false,
      },
      accessId: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true
      },
      accessToken: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true
      },
      providerType: {
        type: Sequelize.STRING,
        allowNull: true
      },
      regDate: {
        type: Sequelize.DATE, 
        defaultValue: Sequelize.NOW
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('oauth_id');
  }
};