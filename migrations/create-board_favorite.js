'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('board_favorite', {
            user_idx: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.BIGINT.UNSIGNED
            },
            board_idx: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.BIGINT.UNSIGNED
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('board_favorite');
    }
};