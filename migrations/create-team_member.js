'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('team_member', {
            team_idx: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.BIGINT
            },
            user_idx: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.BIGINT
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