'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('team_member', {
            teamIdx: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.BIGINT.UNSIGNED
            },
            userIdx: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.BIGINT.UNSIGNED
            },
            roleType: {
                type: Sequelize.STRING(30)
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('team_member');
    }
};