'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('confirm_team', {
            teamIdx: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.BIGINT.UNSIGNED
            },
            userIdx: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.BIGINT.UNSIGNED
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('confirm_team');
    }
};