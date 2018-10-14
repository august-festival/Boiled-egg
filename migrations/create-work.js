'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('work', {
            workIdx: {
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                type: Sequelize.BIGINT.UNSIGNED
            },
            cardIdx: {
                type: Sequelize.BIGINT.UNSIGNED
            },
            workType: {
                type: Sequelize.STRING(30)
            },
            name: {
                type: Sequelize.STRING
            },
            regDate: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('work');
    }
};