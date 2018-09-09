'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('team', {
            team_idx: {
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                type: Sequelize.BIGINT
            },
            visibilityType: {
                type: Sequelize.STRING(30)
            },
            delFlag: {
                type: Sequelize.CHAR(1),
                defaultValue: 'N'
            },
            regDate: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('now()')
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('team');
    }
};