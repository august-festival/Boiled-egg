'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('activity', {
            board_idx: {
                type: Sequelize.BIGINT.UNSIGNED
            },
            user_idx: {
                type: Sequelize.BIGINT.UNSIGNED
            },
            descript: {
                type: Sequelize.STRING
            },
            activityType: {
                type: Sequelize.STRING(30)
            },
            url: {
                type: Sequelize.STRING
            },
            regDate: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('activity');
    }
};