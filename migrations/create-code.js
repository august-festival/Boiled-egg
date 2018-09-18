'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('code', {
            code: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING(30)
            },
            parentCode: {
                allowNull: true,
                primaryKey: true,
                type: Sequelize.STRING(30)
            },
            name: {
                type: Sequelize.STRING
            },
            descript: {
                type: Sequelize.STRING
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('code');
    }
};