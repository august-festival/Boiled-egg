'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('check_list', {
            check_list_uuid: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV1
            },
            workIdx: {
                type: Sequelize.BIGINT.UNSIGNED
            },
            name: {
                type: Sequelize.STRING
            },
            statusType: {
                type: Sequelize.STRING(30)
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('check_list');
    }
};