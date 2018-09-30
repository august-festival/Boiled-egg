'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('board', {
            board_idx: {
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                type: Sequelize.BIGINT.UNSIGNED
            },
            user_idx: {
                type: Sequelize.BIGINT.UNSIGNED
            },
            team_idx: {
                type: Sequelize.BIGINT.UNSIGNED
            },
            name: {
                type: Sequelize.STRING
            },            
            boardType: {
                type: Sequelize.STRING(30)
            },
            visibilityType: {
                type: Sequelize.STRING(30)
            },
            delFlag: {
                type: Sequelize.CHAR(1),
                defaultValue: "N"
            },
            regDate: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('board');
    }
};