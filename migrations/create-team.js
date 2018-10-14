'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('team', {
            teamIdx: {
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                type: Sequelize.BIGINT.UNSIGNED
            },
            name: {
                type: Sequelize.STRING
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
                defaultValue: Sequelize.NOW
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('team');
    }
};