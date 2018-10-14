'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('list', {
            listIdx: {
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                type: Sequelize.BIGINT.UNSIGNED
            },
            boardIdx: {
                type: Sequelize.BIGINT.UNSIGNED
            },
            name: {
                type: Sequelize.STRING
            },
            displayOrder: {
                type: Sequelize.INTEGER
            },
            regDate: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('list');
    }
};