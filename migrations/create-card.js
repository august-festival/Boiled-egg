'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('card', {
            card_idx: {
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                type: Sequelize.BIGINT.UNSIGNED
            },
            list_idx: {
                type: Sequelize.BIGINT.UNSIGNED
            },
            name: {
                type: Sequelize.STRING
            },
            descript: {
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
        return queryInterface.dropTable('card');
    }
};