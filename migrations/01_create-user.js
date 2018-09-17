'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("user", {
      user_idx: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT.UNSIGNED
      },
      nickName: {
        type: Sequelize.STRING,
        allowNull: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: true
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: true
      },
      languageType: {
        type: Sequelize.STRING,
        allowNull: true
      },
      delFlag: {
        type: Sequelize.CHAR,
        allowNull: true,
        defaultValue : "N"
      },
      regDate: {
        type: Sequelize.DATE, 
        defaultValue: Sequelize.NOW
      },        
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user');
  }
};