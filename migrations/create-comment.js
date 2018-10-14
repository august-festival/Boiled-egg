'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('comment', {
            commentIdx: {
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                type: Sequelize.BIGINT.UNSIGNED
            },
            userIdx: {
                type: Sequelize.BIGINT.UNSIGNED
            },
            cardIdx: {
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