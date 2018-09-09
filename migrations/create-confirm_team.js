'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('confirm_team', {
            team_idx: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.BIGINT
            },
            user_idx: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.BIGINT
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('confirm_team');
    }
};