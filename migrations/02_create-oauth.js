"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('oauth_id', {
      oauthIdx: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: false,
      },
      userIdx: {
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: false,
        references: {
          model: 'user',
          key: 'userIdx'
        },
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