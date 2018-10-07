'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('activity', {
            boardIdx: {
                type: Sequelize.BIGINT.UNSIGNED
            },
            userIdx: {
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