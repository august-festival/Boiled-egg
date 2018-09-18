'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('card_assignee', {
            user_idx: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.BIGINT.UNSIGNED
            },
            card_idx: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.BIGINT.UNSIGNED
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('card_assignee');
    }
};