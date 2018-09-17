'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('comment', {
            comment_idx: {
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                type: Sequelize.BIGINT.UNSIGNED
            },
            user_idx: {
                type: Sequelize.BIGINT.UNSIGNED
            },
            card_idx: {
                type: Sequelize.BIGINT.UNSIGNED
            },
            comment: {
                type: Sequelize.STRING
            },
            regDate: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('comment');
    }
};